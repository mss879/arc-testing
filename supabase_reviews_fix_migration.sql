-- ============================================
-- FIX: Client Reviews RLS Update Policy
-- Run this in the Supabase SQL Editor
-- ============================================

-- Drop the broken update policy
DROP POLICY IF EXISTS "Public can update review with token" ON client_reviews;

-- Recreate with WITH CHECK so the updated row (token_used=true) passes validation
CREATE POLICY "Public can update review with token"
    ON client_reviews FOR UPDATE
    USING (token_used = false)
    WITH CHECK (true);
