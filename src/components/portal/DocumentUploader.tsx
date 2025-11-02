import { useState, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useDeltaAuth } from '@/contexts/DeltaAuthContext';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import { Upload, X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface DocumentUploaderProps {
  documentType: {
    id: string;
    name: string;
    slug: string;
    accepted_formats: string[];
  };
  applicantId: string;
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export function DocumentUploader({
  documentType,
  applicantId,
  isOpen,
  onClose,
  onSuccess,
}: DocumentUploaderProps) {
  const { user } = useDeltaAuth();
  const { toast } = useToast();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateFile = (file: File): string | null => {
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (file.size > maxSize) {
      return 'File size must be less than 10MB';
    }

    const extension = file.name.split('.').pop()?.toUpperCase();
    if (!extension || !documentType.accepted_formats.includes(extension)) {
      return `Only ${documentType.accepted_formats.join(', ')} files are allowed`;
    }

    return null;
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const error = validateFile(file);
      if (error) {
        toast({
          title: 'Invalid file',
          description: error,
          variant: 'destructive',
        });
        return;
      }
      setSelectedFile(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile || !user) return;

    setUploading(true);
    setProgress(0);

    try {
      // Generate unique file path
      const timestamp = Date.now();
      const filePath = `${user.id}/${documentType.slug}/${timestamp}_${selectedFile.name}`;

      // Upload to storage
      const { error: uploadError } = await supabase.storage
        .from('delta_applicant_documents')
        .upload(filePath, selectedFile);

      setProgress(100);

      if (uploadError) throw uploadError;

      // Save metadata to database
      const { error: dbError } = await supabase
        .from('delta_applicant_documents')
        .upsert({
          applicant_id: applicantId,
          document_type_id: documentType.id,
          file_name: selectedFile.name,
          file_path: filePath,
          file_size: selectedFile.size,
          file_type: selectedFile.type,
          upload_status: 'completed',
        }, {
          onConflict: 'applicant_id,document_type_id'
        });

      if (dbError) throw dbError;

      toast({
        title: 'Upload successful',
        description: `${documentType.name} has been uploaded`,
      });

      onSuccess();
      onClose();
      setSelectedFile(null);
      setProgress(0);
    } catch (error: any) {
      console.error('Upload error:', error);
      toast({
        title: 'Upload failed',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setUploading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload {documentType.name}</DialogTitle>
          <DialogDescription>
            Accepted formats: {documentType.accepted_formats.join(', ')} (Max 10MB)
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <div
            className="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer hover:bg-muted/50 transition-colors"
            onClick={() => fileInputRef.current?.click()}
          >
            {selectedFile ? (
              <div className="space-y-2">
                <p className="font-medium">{selectedFile.name}</p>
                <p className="text-sm text-muted-foreground">
                  {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedFile(null);
                  }}
                >
                  <X className="h-4 w-4 mr-2" />
                  Remove
                </Button>
              </div>
            ) : (
              <div className="space-y-2">
                <Upload className="h-8 w-8 mx-auto text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  Click to select a file or drag and drop
                </p>
              </div>
            )}
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept={documentType.accepted_formats.map(f => `.${f.toLowerCase()}`).join(',')}
            onChange={handleFileSelect}
            className="hidden"
          />

          {uploading && (
            <div className="space-y-2">
              <Progress value={progress} />
              <p className="text-sm text-center text-muted-foreground">
                Uploading... {Math.round(progress)}%
              </p>
            </div>
          )}

          <div className="flex gap-2">
            <Button variant="outline" onClick={onClose} className="flex-1" disabled={uploading}>
              Cancel
            </Button>
            <Button
              onClick={handleUpload}
              disabled={!selectedFile || uploading}
              className="flex-1"
            >
              {uploading ? 'Uploading...' : 'Upload'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
