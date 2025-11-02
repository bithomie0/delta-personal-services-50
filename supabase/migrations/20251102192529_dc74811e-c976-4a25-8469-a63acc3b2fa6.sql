-- Create applicant type enum
CREATE TYPE public.delta_applicant_type AS ENUM ('ausbildung', 'nurse_professional');

-- Add applicant_type column to delta_applicant_profiles
ALTER TABLE public.delta_applicant_profiles
ADD COLUMN applicant_type public.delta_applicant_type NOT NULL DEFAULT 'ausbildung';

COMMENT ON COLUMN public.delta_applicant_profiles.applicant_type IS 'Type of applicant: ausbildung (apprenticeship) or nurse_professional';

-- Update the trigger function to handle applicant_type from metadata
CREATE OR REPLACE FUNCTION public.delta_handle_new_applicant()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $$
BEGIN
  -- Create applicant profile
  INSERT INTO public.delta_applicant_profiles (
    user_id, 
    full_name, 
    email, 
    phone_number, 
    date_of_birth, 
    nationality,
    applicant_type
  )
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', 'New Applicant'),
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'phone_number', ''),
    COALESCE((NEW.raw_user_meta_data->>'date_of_birth')::DATE, CURRENT_DATE),
    COALESCE(NEW.raw_user_meta_data->>'nationality', ''),
    COALESCE((NEW.raw_user_meta_data->>'applicant_type')::delta_applicant_type, 'ausbildung'::delta_applicant_type)
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