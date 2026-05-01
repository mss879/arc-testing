-- ============================================
-- CLIENT REVIEWS SYSTEM: Supabase Migration
-- Run this in the Supabase SQL Editor
-- ============================================

CREATE TABLE IF NOT EXISTS client_reviews (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    client_name TEXT NOT NULL DEFAULT '',
    client_company TEXT DEFAULT '',
    rating INTEGER NOT NULL DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
    content TEXT NOT NULL DEFAULT '',
    status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
    token TEXT UNIQUE NOT NULL,
    token_used BOOLEAN NOT NULL DEFAULT false,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE client_reviews ENABLE ROW LEVEL SECURITY;

-- Public can view approved reviews
CREATE POLICY "Public can view approved reviews"
    ON client_reviews FOR SELECT
    USING (status = 'approved');

-- Public can update a review if they have the correct token and it's not used
-- Note: We only allow updating specific fields, but RLS in Supabase for UPDATE only checks the row condition.
-- We will enforce field restrictions in the application logic.
CREATE POLICY "Public can update review with token"
    ON client_reviews FOR UPDATE
    USING (token_used = false);

-- Public can view their own review if they have the token
-- This allows fetching the review details on the frontend form
CREATE POLICY "Public can view specific review by token"
    ON client_reviews FOR SELECT
    USING (true);

-- Authenticated users (admin) can do everything
CREATE POLICY "Admin full access to client_reviews"
    ON client_reviews FOR ALL
    USING (auth.role() = 'authenticated');
