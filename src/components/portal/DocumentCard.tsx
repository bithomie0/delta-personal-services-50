import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Upload, CheckCircle2, AlertCircle, Download, Trash2 } from 'lucide-react';

interface DocumentCardProps {
  documentType: {
    id: string;
    name: string;
    slug: string;
    is_required: boolean;
    accepted_formats: string[];
    description: string | null;
  };
  uploadedDocument?: {
    id: string;
    file_name: string;
    file_size: number;
    uploaded_at: string;
  };
  onUpload: () => void;
  onDownload?: () => void;
  onDelete?: () => void;
}

export function DocumentCard({
  documentType,
  uploadedDocument,
  onUpload,
  onDownload,
  onDelete,
}: DocumentCardProps) {
  const isUploaded = !!uploadedDocument;

  return (
    <Card className={isUploaded ? 'border-green-500/50' : ''}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-semibold">{documentType.name}</h3>
              {documentType.is_required ? (
                <Badge variant="destructive">Required</Badge>
              ) : (
                <Badge variant="secondary">Optional</Badge>
              )}
            </div>
            {documentType.description && (
              <p className="text-sm text-muted-foreground mb-2">
                {documentType.description}
              </p>
            )}
            <p className="text-xs text-muted-foreground">
              Accepted formats: {documentType.accepted_formats.join(', ')}
            </p>
          </div>
          
          <div className="ml-4">
            {isUploaded ? (
              <CheckCircle2 className="h-6 w-6 text-green-500" />
            ) : (
              <AlertCircle className="h-6 w-6 text-muted-foreground" />
            )}
          </div>
        </div>

        {isUploaded ? (
          <div className="space-y-3">
            <div className="p-3 bg-muted rounded-md">
              <p className="text-sm font-medium truncate">{uploadedDocument.file_name}</p>
              <p className="text-xs text-muted-foreground mt-1">
                {(uploadedDocument.file_size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
            <div className="flex gap-2">
              {onDownload && (
                <Button variant="outline" size="sm" onClick={onDownload} className="flex-1">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              )}
              {onDelete && (
                <Button variant="destructive" size="sm" onClick={onDelete}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        ) : (
          <Button onClick={onUpload} className="w-full">
            <Upload className="h-4 w-4 mr-2" />
            Upload Document
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
