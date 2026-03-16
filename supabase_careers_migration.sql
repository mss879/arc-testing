-- ============================================
-- CAREERS SYSTEM: Supabase Migration
-- Run this in the Supabase SQL Editor
-- ============================================

-- 1. Career Vacancies Table
CREATE TABLE IF NOT EXISTS career_vacancies (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    department TEXT NOT NULL DEFAULT '',
    location TEXT NOT NULL DEFAULT '',
    type TEXT NOT NULL DEFAULT 'Full-time',
    description TEXT NOT NULL DEFAULT '',
    requirements TEXT NOT NULL DEFAULT '',
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE career_vacancies ENABLE ROW LEVEL SECURITY;

-- Public can read active vacancies
CREATE POLICY "Public can view active vacancies"
    ON career_vacancies FOR SELECT
    USING (is_active = true);

-- Authenticated users (admin) can do everything
CREATE POLICY "Admin full access to vacancies"
    ON career_vacancies FOR ALL
    USING (auth.role() = 'authenticated');

-- 2. Career Applications Table
CREATE TABLE IF NOT EXISTS career_applications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    vacancy_id UUID NOT NULL REFERENCES career_vacancies(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    personal_statement TEXT NOT NULL DEFAULT '',
    earliest_start_date DATE,
    currently_employed BOOLEAN NOT NULL DEFAULT false,
    cv_url TEXT NOT NULL DEFAULT '',
    status TEXT NOT NULL DEFAULT 'pending',
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE career_applications ENABLE ROW LEVEL SECURITY;

-- Anyone can insert an application (public form)
CREATE POLICY "Public can submit applications"
    ON career_applications FOR INSERT
    WITH CHECK (true);

-- Authenticated users (admin) can read/update/delete
CREATE POLICY "Admin full access to applications"
    ON career_applications FOR ALL
    USING (auth.role() = 'authenticated');

-- 3. Create Storage Bucket for CVs
-- NOTE: Run this separately in Supabase Dashboard > Storage > Create Bucket
-- Bucket name: career-cvs
-- Public bucket: Yes (so admin can download CVs)

-- Or via SQL:
INSERT INTO storage.buckets (id, name, public)
VALUES ('career-cvs', 'career-cvs', true)
ON CONFLICT (id) DO NOTHING;

-- Allow public uploads to career-cvs bucket
CREATE POLICY "Public can upload CVs"
    ON storage.objects FOR INSERT
    WITH CHECK (bucket_id = 'career-cvs');

-- Allow public reads from career-cvs bucket
CREATE POLICY "Public can read CVs"
    ON storage.objects FOR SELECT
    USING (bucket_id = 'career-cvs');

-- Allow authenticated users to delete CVs
CREATE POLICY "Admin can delete CVs"
    ON storage.objects FOR DELETE
    USING (bucket_id = 'career-cvs' AND auth.role() = 'authenticated');
