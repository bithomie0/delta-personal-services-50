import { useState, useEffect } from 'react';
import { ProtectedRoute } from '@/components/portal/ProtectedRoute';
import { PortalLayout } from '@/components/portal/PortalLayout';
import { useDeltaAuth } from '@/contexts/DeltaAuthContext';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';
import { Loader2, Search, Download, Users, FileCheck, Clock, CheckCircle2, XCircle } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <ProtectedRoute requiredRole="admin">
      <AdminContent />
    </ProtectedRoute>
  );
}

function AdminContent() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [applicants, setApplicants] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [documentTypes, setDocumentTypes] = useState<any[]>([]);
  const [documentMatrix, setDocumentMatrix] = useState<any[]>([]);
  const [stats, setStats] = useState({
    total: 0,
    complete: 0,
    pending: 0,
  });

  useEffect(() => {
    loadApplicants();
    loadDocumentMatrix();
  }, []);

  const loadApplicants = async () => {
    try {
      const { data: profiles } = await supabase
        .from('delta_applicant_profiles')
        .select('*')
        .order('created_at', { ascending: false });

      if (profiles) {
        // Load document counts for each applicant
        const applicantsWithProgress = await Promise.all(
          profiles.map(async (profile) => {
            const { data: progressData } = await supabase
              .rpc('delta_get_applicant_progress', { _applicant_id: profile.id })
              .single();

            return {
              ...profile,
              progress: progressData || { uploaded_documents: 0, total_documents: 0, progress_percentage: 0 },
            };
          })
        );

        setApplicants(applicantsWithProgress);

        // Calculate stats
        const complete = applicantsWithProgress.filter((a) => a.profile_completed).length;
        setStats({
          total: applicantsWithProgress.length,
          complete,
          pending: applicantsWithProgress.length - complete,
        });
      }
    } catch (error: any) {
      console.error('Error loading applicants:', error);
      toast({
        title: 'Error loading applicants',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const loadDocumentMatrix = async () => {
    try {
      // Load document types
      const { data: docTypes } = await supabase
        .from('delta_document_types')
        .select('*')
        .order('display_order', { ascending: true });

      if (docTypes) {
        setDocumentTypes(docTypes);
      }

      // Load all applicants with their documents
      const { data: profiles } = await supabase
        .from('delta_applicant_profiles')
        .select('id, full_name, email')
        .order('created_at', { ascending: false });

      if (profiles && docTypes) {
        // For each applicant, fetch their submitted documents
        const matrixData = await Promise.all(
          profiles.map(async (profile) => {
            const { data: documents } = await supabase
              .from('delta_applicant_documents')
              .select('document_type_id')
              .eq('applicant_id', profile.id)
              .eq('upload_status', 'completed');

            const submittedDocTypes = new Set(documents?.map(d => d.document_type_id) || []);

            return {
              ...profile,
              documents: docTypes.map(dt => ({
                type: dt.slug,
                name: dt.name,
                submitted: submittedDocTypes.has(dt.id),
                required: dt.is_required,
              })),
            };
          })
        );

        setDocumentMatrix(matrixData);
      }
    } catch (error: any) {
      console.error('Error loading document matrix:', error);
      toast({
        title: 'Error loading document matrix',
        description: error.message,
        variant: 'destructive',
      });
    }
  };

  const handleDownloadAll = async (applicantId: string) => {
    try {
      const { data: documents } = await supabase
        .from('delta_applicant_documents')
        .select('file_path, file_name')
        .eq('applicant_id', applicantId)
        .eq('upload_status', 'completed');

      if (!documents || documents.length === 0) {
        toast({
          title: 'No documents',
          description: 'This applicant has not uploaded any documents yet',
        });
        return;
      }

      toast({
        title: 'Preparing downloads',
        description: `Preparing ${documents.length} documents...`,
      });

      // Create signed URLs for all documents
      const downloadPromises = documents.map(async (doc, index) => {
        const { data, error } = await supabase.storage
          .from('delta_applicant_documents')
          .createSignedUrl(doc.file_path, 900);

        if (error) throw error;

        // Use a small delay between downloads to avoid browser blocking
        return new Promise<void>((resolve) => {
          setTimeout(() => {
            const link = document.createElement('a');
            link.href = data.signedUrl;
            link.download = doc.file_name;
            link.target = '_blank';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            resolve();
          }, index * 300);
        });
      });

      await Promise.all(downloadPromises);

      toast({
        title: 'Download started',
        description: `Downloading ${documents.length} documents`,
      });
    } catch (error: any) {
      toast({
        title: 'Download failed',
        description: error.message,
        variant: 'destructive',
      });
    }
  };

  const filteredApplicants = applicants.filter(
    (applicant) =>
      applicant.full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      applicant.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      applicant.nationality.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
      <div className="max-w-7xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Manage job applicants and review submitted documents
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Applicants</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.total}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Complete Applications</CardTitle>
              <FileCheck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.complete}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Applications</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.pending}</div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs for different views */}
        <Tabs defaultValue="applicants" className="w-full">
          <TabsList>
            <TabsTrigger value="applicants">All Applicants</TabsTrigger>
            <TabsTrigger value="matrix">Document Matrix</TabsTrigger>
          </TabsList>

          <TabsContent value="applicants" className="mt-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>All Applicants</CardTitle>
                    <CardDescription>View and manage job applications</CardDescription>
                  </div>
                  <div className="relative w-64">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search applicants..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-9"
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Nationality</TableHead>
                      <TableHead>Progress</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Registration Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredApplicants.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                          No applicants found
                        </TableCell>
                      </TableRow>
                    ) : (
                      filteredApplicants.map((applicant) => (
                        <TableRow key={applicant.id}>
                          <TableCell className="font-medium">{applicant.full_name}</TableCell>
                          <TableCell>{applicant.email}</TableCell>
                          <TableCell>{applicant.nationality}</TableCell>
                          <TableCell>
                            <div className="space-y-1 min-w-[120px]">
                              <Progress value={applicant.progress.progress_percentage} className="h-2" />
                              <p className="text-xs text-muted-foreground">
                                {applicant.progress.uploaded_documents}/{applicant.progress.total_documents} docs
                              </p>
                            </div>
                          </TableCell>
                          <TableCell>
                            {applicant.profile_completed ? (
                              <Badge className="bg-green-500">Complete</Badge>
                            ) : (
                              <Badge variant="secondary">Pending</Badge>
                            )}
                          </TableCell>
                          <TableCell>
                            {new Date(applicant.created_at).toLocaleDateString()}
                          </TableCell>
                          <TableCell>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleDownloadAll(applicant.id)}
                            >
                              <Download className="h-4 w-4 mr-2" />
                              Download All
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="matrix" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Document Completion Matrix</CardTitle>
                <CardDescription>
                  Overview of submitted documents by applicant
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="min-w-[200px] sticky left-0 bg-background">
                          Applicant
                        </TableHead>
                        {documentTypes.map((docType) => (
                          <TableHead key={docType.id} className="text-center min-w-[120px]">
                            <div className="flex flex-col items-center gap-1">
                              <span className="text-xs font-medium">{docType.name}</span>
                              {docType.is_required && (
                                <Badge variant="secondary" className="text-[10px] px-1 py-0">
                                  Required
                                </Badge>
                              )}
                            </div>
                          </TableHead>
                        ))}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {documentMatrix.length === 0 ? (
                        <TableRow>
                          <TableCell
                            colSpan={documentTypes.length + 1}
                            className="text-center py-8 text-muted-foreground"
                          >
                            No applicants found
                          </TableCell>
                        </TableRow>
                      ) : (
                        documentMatrix.map((applicant) => (
                          <TableRow key={applicant.id}>
                            <TableCell className="font-medium sticky left-0 bg-background">
                              <div>
                                <div className="font-medium">{applicant.full_name}</div>
                                <div className="text-xs text-muted-foreground">{applicant.email}</div>
                              </div>
                            </TableCell>
                            {applicant.documents.map((doc: any, idx: number) => (
                              <TableCell key={idx} className="text-center">
                                {doc.submitted ? (
                                  <CheckCircle2 className="h-5 w-5 mx-auto text-green-500" />
                                ) : doc.required ? (
                                  <XCircle className="h-5 w-5 mx-auto text-red-500" />
                                ) : (
                                  <XCircle className="h-5 w-5 mx-auto text-muted-foreground/30" />
                                )}
                              </TableCell>
                            ))}
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </div>
                <div className="mt-4 flex gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <span>Submitted</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <XCircle className="h-4 w-4 text-red-500" />
                    <span>Missing (Required)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <XCircle className="h-4 w-4 text-muted-foreground/30" />
                    <span>Not Submitted (Optional)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PortalLayout>
  );
}
