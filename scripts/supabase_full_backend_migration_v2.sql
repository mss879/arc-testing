-- ============================================================================
-- ARC AI — Complete Backend Migration (v2 — FIXED)
-- Run this in your Supabase SQL Editor
-- ============================================================================

-- Enable UUID extension (if not already enabled)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================================================
-- 0. DROP EXISTING TABLES (clean slate — safe to re-run)
--    Order matters due to foreign key constraints
-- ============================================================================
DROP TABLE IF EXISTS leads CASCADE;
DROP TABLE IF EXISTS stages CASCADE;
DROP TABLE IF EXISTS pipelines CASCADE;
DROP TABLE IF EXISTS contacts_archive CASCADE;
DROP TABLE IF EXISTS chat_messages CASCADE;
DROP TABLE IF EXISTS email_subscriptions CASCADE;
DROP TABLE IF EXISTS page_visits CASCADE;
DROP TABLE IF EXISTS admin_notes CASCADE;

-- ============================================================================
-- 1. TABLES
-- ============================================================================

-- 1.1 chat_messages — AI Chat Logs (per-message, session-based)
CREATE TABLE chat_messages (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    session_id TEXT NOT NULL,
    role TEXT NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 1.2 contacts_archive — Permanent Contact History
CREATE TABLE contacts_archive (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    original_lead_id UUID UNIQUE,
    email TEXT NOT NULL,
    full_name TEXT,
    phone TEXT,
    company TEXT,
    subject TEXT,
    message TEXT,
    notes TEXT,
    source TEXT DEFAULT 'website',
    metadata JSONB DEFAULT '{}'::jsonb,
    is_deleted_from_crm BOOLEAN DEFAULT false,
    deleted_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);
CREATE INDEX idx_contacts_email ON contacts_archive(email);

-- 1.3 pipelines — CRM Pipelines
CREATE TABLE pipelines (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- 1.4 stages — Pipeline Stages (Kanban Columns)
CREATE TABLE stages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    pipeline_id UUID NOT NULL REFERENCES pipelines(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- 1.5 leads — Active CRM Leads
CREATE TABLE leads (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    full_name TEXT,
    email TEXT NOT NULL,
    phone TEXT,
    company TEXT,
    subject TEXT,
    message TEXT,
    notes TEXT,
    source TEXT DEFAULT 'website',
    metadata JSONB DEFAULT '{}'::jsonb,
    pipeline_id UUID NOT NULL REFERENCES pipelines(id) ON DELETE RESTRICT,
    stage_id UUID NOT NULL REFERENCES stages(id) ON DELETE RESTRICT,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- 1.6 email_subscriptions — Newsletter Signups
CREATE TABLE email_subscriptions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT NOT NULL,
    topic_interest TEXT NOT NULL,
    source TEXT DEFAULT 'popup',
    source_page TEXT,
    subscribed_at TIMESTAMPTZ DEFAULT now()
);
CREATE UNIQUE INDEX idx_email_subscriptions_email_topic 
    ON email_subscriptions(email, topic_interest);

-- 1.7 page_visits — Website Analytics
CREATE TABLE page_visits (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    visitor_id TEXT NOT NULL,
    page_path TEXT NOT NULL,
    referrer TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);
CREATE INDEX idx_page_visits_visitor ON page_visits(visitor_id);
CREATE INDEX idx_page_visits_path ON page_visits(page_path);
CREATE INDEX idx_page_visits_created ON page_visits(created_at);

-- 1.8 admin_notes — Quick Notes for Admin Dashboard
CREATE TABLE admin_notes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    content TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- ============================================================================
-- 2. TRIGGER FUNCTIONS
-- ============================================================================

-- 2.1 Auto-update updated_at column
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply to relevant tables
CREATE TRIGGER update_pipelines_updated_at
    BEFORE UPDATE ON pipelines
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_stages_updated_at
    BEFORE UPDATE ON stages
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_leads_updated_at
    BEFORE UPDATE ON leads
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_contacts_archive_updated_at
    BEFORE UPDATE ON contacts_archive
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_admin_notes_updated_at
    BEFORE UPDATE ON admin_notes
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- 2.2 Sync leads to contacts_archive (INSERT/UPDATE)
CREATE OR REPLACE FUNCTION sync_lead_to_archive()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO contacts_archive (
        original_lead_id, email, full_name, phone, company,
        subject, message, notes, source, metadata,
        is_deleted_from_crm, created_at, updated_at
    ) VALUES (
        NEW.id, NEW.email, NEW.full_name, NEW.phone, NEW.company,
        NEW.subject, NEW.message, NEW.notes, NEW.source, NEW.metadata,
        false, NEW.created_at, NEW.updated_at
    )
    ON CONFLICT (original_lead_id) DO UPDATE SET
        email = EXCLUDED.email,
        full_name = EXCLUDED.full_name,
        phone = EXCLUDED.phone,
        company = EXCLUDED.company,
        subject = EXCLUDED.subject,
        message = EXCLUDED.message,
        notes = EXCLUDED.notes,
        source = EXCLUDED.source,
        metadata = EXCLUDED.metadata,
        is_deleted_from_crm = false,
        updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER sync_lead_to_archive_trigger
    AFTER INSERT OR UPDATE ON leads
    FOR EACH ROW EXECUTE FUNCTION sync_lead_to_archive();

-- 2.3 Soft-delete in archive when lead is deleted
CREATE OR REPLACE FUNCTION mark_lead_deleted_in_archive()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE contacts_archive
    SET is_deleted_from_crm = true,
        deleted_at = now()
    WHERE original_lead_id = OLD.id;
    RETURN OLD;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER mark_lead_deleted_trigger
    AFTER DELETE ON leads
    FOR EACH ROW EXECUTE FUNCTION mark_lead_deleted_in_archive();

-- ============================================================================
-- 3. RPC FUNCTIONS (SECURITY DEFINER — bypass RLS for anonymous calls)
-- ============================================================================

-- 3.1 submit_contact_form()
CREATE OR REPLACE FUNCTION submit_contact_form(
    p_full_name TEXT DEFAULT NULL,
    p_email TEXT DEFAULT 'no-email-provided@pending.com',
    p_phone TEXT DEFAULT NULL,
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
    INSERT INTO leads (full_name, email, phone, company, subject, message, notes, source, metadata, pipeline_id, stage_id)
    VALUES (p_full_name, p_email, p_phone, p_company, p_subject, p_message, p_notes, p_source, p_metadata, v_pipeline_id, v_stage_id)
    RETURNING id INTO v_lead_id;

    RETURN v_lead_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 3.2 subscribe_email_list()
CREATE OR REPLACE FUNCTION subscribe_email_list(
    p_email TEXT,
    p_topic_interest TEXT DEFAULT 'general',
    p_source TEXT DEFAULT 'popup',
    p_source_page TEXT DEFAULT NULL
) RETURNS VOID AS $$
BEGIN
    INSERT INTO email_subscriptions (email, topic_interest, source, source_page)
    VALUES (p_email, p_topic_interest, p_source, p_source_page)
    ON CONFLICT (email, topic_interest) DO NOTHING;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 3.3 move_lead()
CREATE OR REPLACE FUNCTION move_lead(
    p_lead_id UUID,
    p_new_stage_id UUID,
    p_new_sort_order INTEGER DEFAULT 0
) RETURNS VOID AS $$
BEGIN
    UPDATE leads
    SET stage_id = p_new_stage_id,
        sort_order = p_new_sort_order
    WHERE id = p_lead_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 3.4 log_page_visit()
CREATE OR REPLACE FUNCTION log_page_visit(
    p_visitor_id TEXT,
    p_page_path TEXT,
    p_referrer TEXT DEFAULT NULL
) RETURNS VOID AS $$
BEGIN
    INSERT INTO page_visits (visitor_id, page_path, referrer)
    VALUES (p_visitor_id, p_page_path, p_referrer);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================================================
-- 4. ROW-LEVEL SECURITY (RLS)
-- ============================================================================

-- chat_messages
ALTER TABLE chat_messages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow anonymous inserts" ON chat_messages FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow authenticated users to read messages" ON chat_messages FOR SELECT USING (auth.role() = 'authenticated');

-- pipelines
ALTER TABLE pipelines ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Full admin access on pipelines" ON pipelines FOR ALL USING (auth.role() = 'authenticated');

-- stages
ALTER TABLE stages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Full admin access on stages" ON stages FOR ALL USING (auth.role() = 'authenticated');

-- leads
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Full admin access on leads" ON leads FOR ALL USING (auth.role() = 'authenticated');

-- contacts_archive
ALTER TABLE contacts_archive ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Full admin access on contacts_archive" ON contacts_archive FOR ALL USING (auth.role() = 'authenticated');

-- email_subscriptions
ALTER TABLE email_subscriptions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Full admin access on email_subscriptions" ON email_subscriptions FOR ALL USING (auth.role() = 'authenticated');

-- page_visits
ALTER TABLE page_visits ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Full admin access on page_visits" ON page_visits FOR ALL USING (auth.role() = 'authenticated');

-- admin_notes
ALTER TABLE admin_notes ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Full admin access on admin_notes" ON admin_notes FOR ALL USING (auth.role() = 'authenticated');

-- ============================================================================
-- 5. SEED DATA
-- ============================================================================

DO $$
DECLARE
    v_sales_pipeline_id UUID;
    v_support_pipeline_id UUID;
    v_new_leads_stage_id UUID;
BEGIN
    -- Sales Pipeline
    INSERT INTO pipelines (name, sort_order) VALUES ('Sales Pipeline', 0)
    RETURNING id INTO v_sales_pipeline_id;

    INSERT INTO stages (pipeline_id, name, sort_order) VALUES
        (v_sales_pipeline_id, 'New Leads', 0),
        (v_sales_pipeline_id, 'Contacted', 1),
        (v_sales_pipeline_id, 'In Negotiation', 2),
        (v_sales_pipeline_id, 'Closed Won', 3),
        (v_sales_pipeline_id, 'Closed Lost', 4);

    -- Support Tickets Pipeline
    INSERT INTO pipelines (name, sort_order) VALUES ('Support Tickets', 1)
    RETURNING id INTO v_support_pipeline_id;

    INSERT INTO stages (pipeline_id, name, sort_order) VALUES
        (v_support_pipeline_id, 'Open', 0),
        (v_support_pipeline_id, 'In Progress', 1),
        (v_support_pipeline_id, 'Resolved', 2);

    -- Sample Lead in "New Leads" stage
    SELECT id INTO v_new_leads_stage_id FROM stages 
    WHERE pipeline_id = v_sales_pipeline_id AND name = 'New Leads';

    INSERT INTO leads (full_name, email, phone, company, subject, source, pipeline_id, stage_id)
    VALUES (
        'John Doe (Sample)',
        'john.doe@example.com',
        '+1-555-0123',
        'Acme Corp',
        'Interested in AI Automation',
        'manual',
        v_sales_pipeline_id,
        v_new_leads_stage_id
    );
END $$;

-- ============================================================================
-- Done! Your backend schema is ready.
-- ============================================================================
