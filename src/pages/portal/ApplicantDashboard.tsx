import { useState, useEffect } from 'react';
import { ProtectedRoute } from '@/components/portal/ProtectedRoute';
import { PortalLayout } from '@/components/portal/PortalLayout';
import { DocumentCard } from '@/components/portal/DocumentCard';
import { DocumentUploader } from '@/components/portal/DocumentUploader';
import { useDeltaAuth } from '@/contexts/DeltaAuthContext';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircle2, Loader2 } from 'lucide-react';
import JSZip from 'jszip';

export default function ApplicantDashboard() {
  return (
    <ProtectedRoute requiredRole="applicant">
      <DashboardContent />
    </ProtectedRoute>
  );
}

function DashboardContent() {
  const { user } = useDeltaAuth();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<any>(null);
  const [documentTypes, setDocumentTypes] = useState<any[]>([]);
  const [uploadedDocuments, setUploadedDocuments] = useState<any[]>([]);
  const [progress, setProgress] = useState({ uploaded: 0, total: 0, percentage: 0 });
  const [selectedDocType, setSelectedDocType] = useState<any>(null);
  const [uploaderOpen, setUploaderOpen] = useState(false);

  useEffect(() => {
    if (user) {
      loadData();
    }
  }, [user]);

  const loadData = async () => {
    try {
      // Load profile
      const { data: profileData } = await supabase
        .from('delta_applicant_profiles')
        .select('*')
        .eq('user_id', user?.id)
        .single();

      setProfile(profileData);

      // Load document types
      const { data: docTypes } = await supabase
        .from('delta_document_types')
        .select('*')
        .order('display_order');

      setDocumentTypes(docTypes || []);

      // Load uploaded documents
      if (profileData) {
        const { data: docs } = await supabase
          .from('delta_applicant_documents')
          .select('*')
          .eq('applicant_id', profileData.id)
          .eq('upload_status', 'completed');

        setUploadedDocuments(docs || []);

        // Calculate progress
        const { data: progressData } = await supabase
          .rpc('delta_get_applicant_progress', { _applicant_id: profileData.id })
          .single();

        if (progressData) {
          setProgress({
            uploaded: progressData.uploaded_documents,
            total: progressData.total_documents,
            percentage: progressData.progress_percentage,
          });
        }
      }
    } catch (error: any) {
      console.error('Error loading data:', error);
      toast({
        title: 'Error loading data',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async (document: any) => {
    try {
      toast({
        title: 'Preparing download...',
        description: 'Creating ZIP file',
      });

      // Create signed URL
      const { data: urlData, error: urlError } = await supabase.storage
        .from('delta_applicant_documents')
        .createSignedUrl(document.file_path, 900);

      if (urlError) throw urlError;

      // Fetch the file
      const response = await fetch(urlData.signedUrl);
      if (!response.ok) throw new Error('Failed to fetch document');
      const blob = await response.blob();

      // Create ZIP file
      const zip = new JSZip();
      zip.file(document.file_name, blob);

      // Generate and download
      const zipBlob = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(zipBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${document.file_name.split('.')[0]}.zip`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      toast({
        title: 'Download complete',
        description: 'Your document has been downloaded as a ZIP file',
      });
    } catch (error: any) {
      toast({
        title: 'Download failed',
        description: error.message,
        variant: 'destructive',
      });
    }
  };

  const handleDelete = async (document: any) => {
    if (!confirm('Are you sure you want to delete this document?')) return;

    try {
      // Delete from storage
      await supabase.storage
        .from('delta_applicant_documents')
        .remove([document.file_path]);

      // Delete from database
      await supabase
        .from('delta_applicant_documents')
        .delete()
        .eq('id', document.id);

      toast({
        title: 'Document deleted',
      });

      loadData();
    } catch (error: any) {
      toast({
        title: 'Delete failed',
        description: error.message,
        variant: 'destructive',
      });
    }
  };

  if (loading) {
    return (
      <PortalLayout>
        <div className="flex justify-center items-center min-h-[400px]">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      </PortalLayout>
    );
  }

  return (
    <PortalLayout>
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Welcome Header */}
        <div>
          <h1 className="text-3xl font-bold">Welcome, {profile?.full_name}!</h1>
          <p className="text-muted-foreground mt-2">
            Upload your documents to complete your application
          </p>
        </div>

        {/* Progress Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Application Progress</CardTitle>
            <CardDescription>
              {progress.uploaded} of {progress.total} required documents uploaded
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Progress value={progress.percentage} className="h-3" />
              <p className="text-sm text-muted-foreground text-right">
                {progress.percentage}% Complete
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Completion Alert */}
        {profile?.profile_completed && (
          <Alert className="bg-green-50 border-green-200">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800">
              Your application is complete! We will review your documents and contact you soon.
            </AlertDescription>
          </Alert>
        )}

        {/* Documents Grid */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Required Documents</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {documentTypes.map((docType) => {
              const uploaded = uploadedDocuments.find(
                (doc) => doc.document_type_id === docType.id
              );
              return (
                <DocumentCard
                  key={docType.id}
                  documentType={docType}
                  uploadedDocument={uploaded}
                  onUpload={() => {
                    setSelectedDocType(docType);
                    setUploaderOpen(true);
                  }}
                  onDownload={uploaded ? () => handleDownload(uploaded) : undefined}
                  onDelete={uploaded ? () => handleDelete(uploaded) : undefined}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Upload Dialog */}
      {selectedDocType && profile && (
        <DocumentUploader
          documentType={selectedDocType}
          applicantId={profile.id}
          isOpen={uploaderOpen}
          onClose={() => {
            setUploaderOpen(false);
            setSelectedDocType(null);
          }}
          onSuccess={loadData}
        />
      )}
    </PortalLayout>
  );
}
