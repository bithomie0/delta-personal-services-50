-- Make passport optional
UPDATE delta_document_types
SET is_required = false
WHERE slug = 'passport';

-- Add translation and Anerkennung metadata columns
ALTER TABLE delta_applicant_documents
ADD COLUMN is_translated boolean DEFAULT false,
ADD COLUMN translation_notes text,
ADD COLUMN has_anerkennung boolean DEFAULT false,
ADD COLUMN anerkennung_notes text;