-- ============================================================================
-- ARC AI — Migration v3 (Phone Number Contact Form Update)
-- Run this in your Supabase SQL Editor after v1 and v2
-- ============================================================================

-- 1. Alter `leads` Table Constraints
-- Backfill existing nulls first to avoid constraint errors
UPDATE leads SET phone = 'Not Provided' WHERE phone IS NULL;

-- Drop the NOT NULL constraint on email, add NOT NULL constraint to phone
ALTER TABLE leads ALTER COLUMN email DROP NOT NULL;
ALTER TABLE leads ALTER COLUMN phone SET NOT NULL;

-- 2. Alter `contacts_archive` Table Constraints
-- Backfill existing nulls first to avoid constraint errors
UPDATE contacts_archive SET phone = 'Not Provided' WHERE phone IS NULL;

-- Drop the NOT NULL constraint on email, add NOT NULL constraint to phone
ALTER TABLE contacts_archive ALTER COLUMN email DROP NOT NULL;
ALTER TABLE contacts_archive ALTER COLUMN phone SET NOT NULL;

-- 3. Update the `submit_contact_form` RPC Function
-- Recreate the function to expect a required phone number and an optional email
DROP FUNCTION IF EXISTS submit_contact_form(text, text, text, text, text, text, text, text, jsonb);

CREATE OR REPLACE FUNCTION submit_contact_form(
    p_full_name TEXT DEFAULT NULL,
    p_phone TEXT DEFAULT 'no-phone-provided@pending.com',
    p_email TEXT DEFAULT NULL,
    p_company TEXT DEFAULT NULL,
    p_subject TEXT DEFAULT NULL,
    p_message TEXT DEFAULT NULL,
    p_notes TEXT DEFAULT NULL,
    p_source TEXT DEFAULT 'website',
    p_metadata JSONB DEFAULT '{}'::jsonb
) RETURNS UUID AS $$
DECLARE
    v_pipeline_id UUID;
    v_stage_id UUID;
    v_lead_id UUID;
BEGIN
    -- Get or create default pipeline
    SELECT id INTO v_pipeline_id FROM pipelines ORDER BY sort_order LIMIT 1;
    IF v_pipeline_id IS NULL THEN
        INSERT INTO pipelines (name, sort_order) VALUES ('Default Pipeline', 0)
        RETURNING id INTO v_pipeline_id;
    END IF;

    -- Get or create first stage in that pipeline
    SELECT id INTO v_stage_id FROM stages WHERE pipeline_id = v_pipeline_id ORDER BY sort_order LIMIT 1;
    IF v_stage_id IS NULL THEN
        INSERT INTO stages (pipeline_id, name, sort_order) VALUES (v_pipeline_id, 'New Leads', 0)
        RETURNING id INTO v_stage_id;
    END IF;

    -- Insert the lead
    INSERT INTO leads (full_name, phone, email, company, subject, message, notes, source, metadata, pipeline_id, stage_id)
    VALUES (p_full_name, p_phone, p_email, p_company, p_subject, p_message, p_notes, p_source, p_metadata, v_pipeline_id, v_stage_id)
    RETURNING id INTO v_lead_id;

    RETURN v_lead_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
