-- ============================================================
-- Migration: job_requests table
-- Run this in your Supabase SQL Editor
-- ============================================================

CREATE TABLE job_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT now(),

  -- Contact info
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,

  -- Services (checkboxes)
  service_frontend_only BOOLEAN DEFAULT false,
  service_frontend_backend BOOLEAN DEFAULT false,
  service_frontend_backend_ai BOOLEAN DEFAULT false,
  service_branding BOOLEAN DEFAULT false,
  service_ai_automation BOOLEAN DEFAULT false,

  -- Project details
  requirements TEXT,
  planned_start TEXT,

  -- Admin tracking
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'in_progress', 'completed', 'archived'))
);

-- Enable Row Level Security
ALTER TABLE job_requests ENABLE ROW LEVEL SECURITY;

-- Allow anyone (anon) to insert (public form)
CREATE POLICY "Allow public inserts" ON job_requests
  FOR INSERT WITH CHECK (true);

-- Only authenticated users can read
CREATE POLICY "Allow authenticated reads" ON job_requests
  FOR SELECT USING (auth.role() = 'authenticated');

-- Only authenticated users can update
CREATE POLICY "Allow authenticated updates" ON job_requests
  FOR UPDATE USING (auth.role() = 'authenticated');

-- Only authenticated users can delete
CREATE POLICY "Allow authenticated deletes" ON job_requests
  FOR DELETE USING (auth.role() = 'authenticated');
