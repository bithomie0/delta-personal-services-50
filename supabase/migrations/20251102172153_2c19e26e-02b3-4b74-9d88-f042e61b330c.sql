-- Create enum for application roles
CREATE TYPE public.delta_app_role AS ENUM ('admin', 'applicant');

-- Create applicant profiles table
CREATE TABLE public.delta_applicant_profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone_number TEXT NOT NULL,
  date_of_birth DATE NOT NULL,
  nationality TEXT NOT NULL,
  profile_completed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create document types table
CREATE TABLE public.delta_document_types (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  is_required BOOLEAN NOT NULL DEFAULT TRUE,
  accepted_formats TEXT[] NOT NULL DEFAULT ARRAY['PDF', 'JPG', 'PNG'],
  description TEXT,
  display_order INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create applicant documents table
CREATE TABLE public.delta_applicant_documents (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  applicant_id UUID NOT NULL REFERENCES public.delta_applicant_profiles(id) ON DELETE CASCADE,
  document_type_id UUID NOT NULL REFERENCES public.delta_document_types(id) ON DELETE CASCADE,
  file_name TEXT NOT NULL,
  file_path TEXT NOT NULL,
  file_size BIGINT NOT NULL,
  file_type TEXT NOT NULL,
  upload_status TEXT NOT NULL DEFAULT 'completed' CHECK (upload_status IN ('pending', 'completed', 'failed')),
  uploaded_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(applicant_id, document_type_id)
);

-- Create user roles table
CREATE TABLE public.delta_user_roles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.delta_app_role NOT NULL DEFAULT 'applicant',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create admin notifications table
CREATE TABLE public.delta_admin_notifications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  applicant_id UUID NOT NULL REFERENCES public.delta_applicant_profiles(id) ON DELETE CASCADE,
  notification_type TEXT NOT NULL CHECK (notification_type IN ('profile_complete', 'documents_complete', 'new_registration')),
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create storage bucket for applicant documents
INSERT INTO storage.buckets (id, name, public) 
VALUES ('delta_applicant_documents', 'delta_applicant_documents', false);

-- Enable RLS on all tables
ALTER TABLE public.delta_applicant_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.delta_document_types ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.delta_applicant_documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.delta_user_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.delta_admin_notifications ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check roles
CREATE OR REPLACE FUNCTION public.delta_has_app_role(_user_id UUID, _role public.delta_app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.delta_user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.delta_update_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- Create function to handle new applicant registration
CREATE OR REPLACE FUNCTION public.delta_handle_new_applicant()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Create applicant profile
  INSERT INTO public.delta_applicant_profiles (user_id, full_name, email, phone_number, date_of_birth, nationality)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', 'New Applicant'),
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'phone_number', ''),
    COALESCE((NEW.raw_user_meta_data->>'date_of_birth')::DATE, CURRENT_DATE),
    COALESCE(NEW.raw_user_meta_data->>'nationality', '')
  );
  
  -- Assign applicant role
  INSERT INTO public.delta_user_roles (user_id, role)
  VALUES (NEW.id, 'applicant');
  
  -- Create notification for new registration
  INSERT INTO public.delta_admin_notifications (applicant_id, notification_type)
  SELECT id, 'new_registration' 
  FROM public.delta_applicant_profiles 
  WHERE user_id = NEW.id;
  
  RETURN NEW;
END;
$$;

-- Create function to check document completion
CREATE OR REPLACE FUNCTION public.delta_check_document_completion()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  required_count INTEGER;
  uploaded_count INTEGER;
BEGIN
  -- Count required documents
  SELECT COUNT(*) INTO required_count
  FROM public.delta_document_types
  WHERE is_required = TRUE;
  
  -- Count uploaded required documents for this applicant
  SELECT COUNT(DISTINCT ad.document_type_id) INTO uploaded_count
  FROM public.delta_applicant_documents ad
  JOIN public.delta_document_types dt ON ad.document_type_id = dt.id
  WHERE ad.applicant_id = NEW.applicant_id
    AND dt.is_required = TRUE
    AND ad.upload_status = 'completed';
  
  -- If all required documents are uploaded, create notification
  IF uploaded_count >= required_count THEN
    INSERT INTO public.delta_admin_notifications (applicant_id, notification_type)
    VALUES (NEW.applicant_id, 'documents_complete')
    ON CONFLICT DO NOTHING;
    
    -- Update profile completion status
    UPDATE public.delta_applicant_profiles
    SET profile_completed = TRUE
    WHERE id = NEW.applicant_id;
  END IF;
  
  RETURN NEW;
END;
$$;

-- Create function to calculate applicant progress
CREATE OR REPLACE FUNCTION public.delta_get_applicant_progress(_applicant_id UUID)
RETURNS TABLE (
  total_documents INTEGER,
  uploaded_documents INTEGER,
  progress_percentage INTEGER
)
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT 
    COUNT(dt.id)::INTEGER AS total_documents,
    COUNT(ad.id)::INTEGER AS uploaded_documents,
    CASE 
      WHEN COUNT(dt.id) = 0 THEN 0
      ELSE ROUND((COUNT(ad.id)::NUMERIC / COUNT(dt.id)::NUMERIC) * 100)::INTEGER
    END AS progress_percentage
  FROM public.delta_document_types dt
  LEFT JOIN public.delta_applicant_documents ad 
    ON dt.id = ad.document_type_id 
    AND ad.applicant_id = _applicant_id
    AND ad.upload_status = 'completed'
  WHERE dt.is_required = TRUE;
$$;

-- Create triggers
CREATE TRIGGER delta_on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.delta_handle_new_applicant();

CREATE TRIGGER delta_update_applicant_profiles_updated_at
  BEFORE UPDATE ON public.delta_applicant_profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.delta_update_updated_at();

CREATE TRIGGER delta_update_applicant_documents_updated_at
  BEFORE UPDATE ON public.delta_applicant_documents
  FOR EACH ROW
  EXECUTE FUNCTION public.delta_update_updated_at();

CREATE TRIGGER delta_check_document_completion_trigger
  AFTER INSERT OR UPDATE ON public.delta_applicant_documents
  FOR EACH ROW
  EXECUTE FUNCTION public.delta_check_document_completion();

-- RLS Policies for delta_applicant_profiles
CREATE POLICY "Applicants can view their own profile"
  ON public.delta_applicant_profiles FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Applicants can update their own profile"
  ON public.delta_applicant_profiles FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all profiles"
  ON public.delta_applicant_profiles FOR SELECT
  USING (public.delta_has_app_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update all profiles"
  ON public.delta_applicant_profiles FOR UPDATE
  USING (public.delta_has_app_role(auth.uid(), 'admin'));

-- RLS Policies for delta_document_types
CREATE POLICY "Anyone can view document types"
  ON public.delta_document_types FOR SELECT
  USING (true);

CREATE POLICY "Admins can manage document types"
  ON public.delta_document_types FOR ALL
  USING (public.delta_has_app_role(auth.uid(), 'admin'));

-- RLS Policies for delta_applicant_documents
CREATE POLICY "Applicants can view their own documents"
  ON public.delta_applicant_documents FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.delta_applicant_profiles
      WHERE id = delta_applicant_documents.applicant_id
        AND user_id = auth.uid()
    )
  );

CREATE POLICY "Applicants can insert their own documents"
  ON public.delta_applicant_documents FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.delta_applicant_profiles
      WHERE id = delta_applicant_documents.applicant_id
        AND user_id = auth.uid()
    )
  );

CREATE POLICY "Applicants can update their own documents"
  ON public.delta_applicant_documents FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM public.delta_applicant_profiles
      WHERE id = delta_applicant_documents.applicant_id
        AND user_id = auth.uid()
    )
  );

CREATE POLICY "Applicants can delete their own documents"
  ON public.delta_applicant_documents FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM public.delta_applicant_profiles
      WHERE id = delta_applicant_documents.applicant_id
        AND user_id = auth.uid()
    )
  );

CREATE POLICY "Admins can view all documents"
  ON public.delta_applicant_documents FOR SELECT
  USING (public.delta_has_app_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete all documents"
  ON public.delta_applicant_documents FOR DELETE
  USING (public.delta_has_app_role(auth.uid(), 'admin'));

-- RLS Policies for delta_user_roles
CREATE POLICY "Users can view their own role"
  ON public.delta_user_roles FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all roles"
  ON public.delta_user_roles FOR SELECT
  USING (public.delta_has_app_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage all roles"
  ON public.delta_user_roles FOR ALL
  USING (public.delta_has_app_role(auth.uid(), 'admin'));

-- RLS Policies for delta_admin_notifications
CREATE POLICY "Admins can view all notifications"
  ON public.delta_admin_notifications FOR SELECT
  USING (public.delta_has_app_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update notifications"
  ON public.delta_admin_notifications FOR UPDATE
  USING (public.delta_has_app_role(auth.uid(), 'admin'));

CREATE POLICY "System can insert notifications"
  ON public.delta_admin_notifications FOR INSERT
  WITH CHECK (true);

-- Storage RLS Policies for delta_applicant_documents bucket
CREATE POLICY "Applicants can upload their own documents"
  ON storage.objects FOR INSERT
  WITH CHECK (
    bucket_id = 'delta_applicant_documents' AND
    auth.uid()::text = (storage.foldername(name))[1]
  );

CREATE POLICY "Applicants can view their own documents"
  ON storage.objects FOR SELECT
  USING (
    bucket_id = 'delta_applicant_documents' AND
    auth.uid()::text = (storage.foldername(name))[1]
  );

CREATE POLICY "Applicants can delete their own documents"
  ON storage.objects FOR DELETE
  USING (
    bucket_id = 'delta_applicant_documents' AND
    auth.uid()::text = (storage.foldername(name))[1]
  );

CREATE POLICY "Admins can view all documents"
  ON storage.objects FOR SELECT
  USING (
    bucket_id = 'delta_applicant_documents' AND
    public.delta_has_app_role(auth.uid(), 'admin')
  );

-- Seed document types
INSERT INTO public.delta_document_types (name, slug, is_required, accepted_formats, description, display_order) VALUES
  ('German Language Certificate', 'german_language_cert', TRUE, ARRAY['PDF', 'JPG', 'PNG'], 'Certificate proving German language proficiency (e.g., Goethe-Zertifikat, TestDaF)', 1),
  ('Passport Copy', 'passport', TRUE, ARRAY['PDF', 'JPG', 'PNG'], 'Clear copy of your valid passport', 2),
  ('CV/Resume', 'cv', TRUE, ARRAY['PDF', 'DOC', 'DOCX'], 'Your current curriculum vitae or resume', 3),
  ('Motivational Letter', 'motivational_letter', TRUE, ARRAY['PDF', 'DOC', 'DOCX'], 'Letter explaining your motivation and interest in the position', 4),
  ('Educational Certificates', 'educational_certificates', TRUE, ARRAY['PDF', 'JPG', 'PNG'], 'Copies of your degrees, diplomas, and academic certificates', 5),
  ('Work Experience Certificates', 'work_certificates', FALSE, ARRAY['PDF', 'JPG', 'PNG'], 'Previous employment certificates and references', 6),
  ('Other Documents', 'other_documents', FALSE, ARRAY['PDF', 'JPG', 'PNG', 'DOC', 'DOCX'], 'Any additional supporting documents', 7);