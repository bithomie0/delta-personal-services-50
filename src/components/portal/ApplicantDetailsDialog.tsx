import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import {
  Loader2,
  Mail,
  Phone,
  Globe,
  Calendar,
  Download,
  CheckCircle2,
  XCircle,
  Languages,
  Award,
  GraduationCap,
  HeartPulse,
  FileText,
  Clock,
} from 'lucide-react';

interface ApplicantDetailsDialogProps {
  applicantId: string | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface ApplicantData {
  id: string;
  full_name: string;
  email: string;
  phone_number: string;
  nationality: string;
  date_of_birth: string;
  applicant_type: 'ausbildung' | 'nurse_professional';
  profile_completed: boolean;
  created_at: string;
}

interface ProgressData {
  total_documents: number;
  uploaded_documents: number;
  progress_percentage: number;
}

interface DocumentStatus {
  id: string;
  name: string;
  slug: string;
  is_required: boolean;
  accepted_formats: string[];
  uploaded: boolean;
  file?: {
    id: string;
    file_name: string;
    file_path: string;
    file_size: number;
    uploaded_at: string;
    is_translated: boolean;
    has_anerkennung: boolean;
    translation_notes?: string;
    anerkennung_notes?: string;
  };
}

export function ApplicantDetailsDialog({
  applicantId,
  open,
  onOpenChange,
}: ApplicantDetailsDialogProps) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [applicant, setApplicant] = useState<ApplicantData | null>(null);
  const [progress, setProgress] = useState<ProgressData | null>(null);
  const [documents, setDocuments] = useState<DocumentStatus[]>([]);

  useEffect(() => {
    if (open && applicantId) {
      loadApplicantDetails();
    }
  }, [open, applicantId]);

  const loadApplicantDetails = async () => {
    if (!applicantId) return;

    setLoading(true);
    try {
      // Fetch applicant profile
      const { data: profile, error: profileError } = await supabase
        .from('delta_applicant_profiles')
        .select('*')
        .eq('id', applicantId)
        .single();

      if (profileError) throw profileError;

      // Fetch progress
      const { data: progressData, error: progressError } = await supabase
        .rpc('delta_get_applicant_progress', { _applicant_id: applicantId })
        .single();

      if (progressError) throw progressError;

      // Fetch all document types
      const { data: docTypes, error: docTypesError } = await supabase
        .from('delta_document_types')
        .select('*')
        .order('display_order', { ascending: true });

      if (docTypesError) throw docTypesError;

      // Fetch uploaded documents
      const { data: uploadedDocs, error: uploadedDocsError } = await supabase
        .from('delta_applicant_documents')
        .select('*')
        .eq('applicant_id', applicantId)
        .eq('upload_status', 'completed');

      if (uploadedDocsError) throw uploadedDocsError;

      // Merge data
      const uploadedDocsMap = new Map(
        uploadedDocs?.map((doc) => [doc.document_type_id, doc]) || []
      );

      const documentsStatus: DocumentStatus[] = docTypes.map((docType) => {
        const uploadedDoc = uploadedDocsMap.get(docType.id);
        return {
          id: docType.id,
          name: docType.name,
          slug: docType.slug,
          is_required: docType.is_required,
          accepted_formats: docType.accepted_formats,
          uploaded: !!uploadedDoc,
          file: uploadedDoc
            ? {
                id: uploadedDoc.id,
                file_name: uploadedDoc.file_name,
                file_path: uploadedDoc.file_path,
                file_size: uploadedDoc.file_size,
                uploaded_at: uploadedDoc.uploaded_at,
                is_translated: uploadedDoc.is_translated || false,
                has_anerkennung: uploadedDoc.has_anerkennung || false,
                translation_notes: uploadedDoc.translation_notes,
                anerkennung_notes: uploadedDoc.anerkennung_notes,
              }
            : undefined,
        };
      });

      setApplicant(profile);
      setProgress(progressData);
      setDocuments(documentsStatus);
    } catch (error: any) {
      console.error('Error loading applicant details:', error);
      toast({
        title: 'Error loading details',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadDocument = async (filePath: string, fileName: string) => {
    try {
      const { data, error } = await supabase.storage
        .from('delta_applicant_documents')
        .createSignedUrl(filePath, 900);

      if (error) throw error;

      // Download file
      const link = document.createElement('a');
      link.href = data.signedUrl;
      link.download = fileName;
      link.click();

      toast({
        title: 'Download started',
        description: `Downloading ${fileName}`,
      });
    } catch (error: any) {
      console.error('Error downloading document:', error);
      toast({
        title: 'Download failed',
        description: error.message,
        variant: 'destructive',
      });
    }
  };

  const calculateAge = (dateOfBirth: string) => {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: 'Copied',
      description: `${label} copied to clipboard`,
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Applicant Details</DialogTitle>
          <DialogDescription>
            Complete information and documents for this applicant
          </DialogDescription>
        </DialogHeader>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="h-8 w-8 animate-spin" />
          </div>
        ) : applicant ? (
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
              <TabsTrigger value="timeline">Timeline</TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="space-y-6">
              {/* Header with name and type */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold">{applicant.full_name}</h3>
                  <p className="text-muted-foreground mt-1">{applicant.email}</p>
                </div>
                <Badge
                  variant={
                    applicant.applicant_type === 'nurse_professional'
                      ? 'default'
                      : 'secondary'
                  }
                  className="text-sm px-3 py-1"
                >
                  {applicant.applicant_type === 'nurse_professional' ? (
                    <>
                      <HeartPulse className="h-4 w-4 mr-1" />
                      Nurse Professional
                    </>
                  ) : (
                    <>
                      <GraduationCap className="h-4 w-4 mr-1" />
                      Ausbildung
                    </>
                  )}
                </Badge>
              </div>

              <Separator />

              {/* Contact Information */}
              <div className="space-y-4">
                <h4 className="font-semibold text-lg">Contact Information</h4>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">{applicant.email}</p>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => copyToClipboard(applicant.email, 'Email')}
                    >
                      Copy
                    </Button>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <a
                        href={`tel:${applicant.phone_number}`}
                        className="font-medium hover:text-primary"
                      >
                        {applicant.phone_number}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-muted-foreground" />
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">Nationality</p>
                      <p className="font-medium">{applicant.nationality}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">Date of Birth</p>
                      <p className="font-medium">
                        {new Date(applicant.date_of_birth).toLocaleDateString()} (
                        {calculateAge(applicant.date_of_birth)} years old)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Application Status */}
              <div className="space-y-4">
                <h4 className="font-semibold text-lg">Application Status</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Profile Status</span>
                    <Badge variant={applicant.profile_completed ? 'default' : 'secondary'}>
                      {applicant.profile_completed ? 'Complete' : 'Pending'}
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Document Progress
                    </span>
                    <span className="text-sm font-medium">
                      {progress?.uploaded_documents}/{progress?.total_documents} uploaded
                    </span>
                  </div>

                  <Progress value={progress?.progress_percentage || 0} className="h-2" />

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Registered</span>
                    <span className="text-sm font-medium">
                      {new Date(applicant.created_at).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="documents" className="space-y-4">
              <div className="space-y-3">
                {documents.map((doc) => (
                  <div
                    key={doc.id}
                    className="border rounded-lg p-4 space-y-3 hover:bg-accent/50 transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div className="space-y-1 flex-1">
                        <div className="flex items-center gap-2">
                          <h5 className="font-semibold">{doc.name}</h5>
                          {doc.is_required && (
                            <Badge variant="outline" className="text-xs">
                              Required
                            </Badge>
                          )}
                          {doc.uploaded ? (
                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                          ) : (
                            <XCircle
                              className={`h-4 w-4 ${
                                doc.is_required ? 'text-red-500' : 'text-muted-foreground'
                              }`}
                            />
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Accepted formats: {doc.accepted_formats.join(', ')}
                        </p>
                      </div>
                    </div>

                    {doc.uploaded && doc.file ? (
                      <div className="space-y-2 pl-4 border-l-2 border-muted">
                        <div className="flex items-center gap-2 text-sm">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">{doc.file.file_name}</span>
                          <span className="text-muted-foreground">
                            ({formatFileSize(doc.file.file_size)})
                          </span>
                        </div>

                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          Uploaded: {new Date(doc.file.uploaded_at).toLocaleString()}
                        </div>

                        <div className="flex items-center gap-3 flex-wrap">
                          {doc.file.is_translated && (
                            <div className="flex items-center gap-1 text-xs">
                              <Languages className="h-3 w-3 text-blue-500" />
                              <span className="text-blue-500">Translated</span>
                            </div>
                          )}
                          {doc.file.has_anerkennung && (
                            <div className="flex items-center gap-1 text-xs">
                              <Award className="h-3 w-3 text-purple-500" />
                              <span className="text-purple-500">Anerkennung</span>
                            </div>
                          )}
                        </div>

                        {(doc.file.translation_notes || doc.file.anerkennung_notes) && (
                          <div className="space-y-1 text-xs">
                            {doc.file.translation_notes && (
                              <p className="text-muted-foreground">
                                <span className="font-medium">Translation notes:</span>{' '}
                                {doc.file.translation_notes}
                              </p>
                            )}
                            {doc.file.anerkennung_notes && (
                              <p className="text-muted-foreground">
                                <span className="font-medium">Anerkennung notes:</span>{' '}
                                {doc.file.anerkennung_notes}
                              </p>
                            )}
                          </div>
                        )}

                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() =>
                            handleDownloadDocument(doc.file!.file_path, doc.file!.file_name)
                          }
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    ) : (
                      <p className="text-sm text-muted-foreground pl-4 border-l-2 border-muted">
                        Not yet uploaded
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="timeline" className="space-y-4">
              <div className="space-y-4">
                {applicant.profile_completed && (
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="rounded-full bg-green-500 p-2">
                        <CheckCircle2 className="h-4 w-4 text-white" />
                      </div>
                      <div className="h-full w-px bg-border mt-2" />
                    </div>
                    <div className="pb-8">
                      <p className="font-semibold">Profile Completed</p>
                      <p className="text-sm text-muted-foreground">
                        All required documents submitted
                      </p>
                    </div>
                  </div>
                )}

                {documents
                  .filter((doc) => doc.uploaded)
                  .sort(
                    (a, b) =>
                      new Date(b.file!.uploaded_at).getTime() -
                      new Date(a.file!.uploaded_at).getTime()
                  )
                  .map((doc) => (
                    <div key={doc.id} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="rounded-full bg-primary p-2">
                          <FileText className="h-4 w-4 text-primary-foreground" />
                        </div>
                        <div className="h-full w-px bg-border mt-2" />
                      </div>
                      <div className="pb-8">
                        <p className="font-semibold">Uploaded {doc.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {new Date(doc.file!.uploaded_at).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  ))}

                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="rounded-full bg-primary p-2">
                      <Calendar className="h-4 w-4 text-primary-foreground" />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold">Registered</p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(applicant.created_at).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        ) : (
          <p className="text-center text-muted-foreground py-8">No data available</p>
        )}
      </DialogContent>
    </Dialog>
  );
}
