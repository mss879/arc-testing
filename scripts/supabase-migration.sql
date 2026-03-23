-- ==========================================
-- ARC AI RAG System — Supabase Migration
-- ==========================================
-- Run this in your Supabase SQL Editor (Dashboard → SQL Editor → New query)
-- PREREQUISITE: Enable the "vector" extension first:
--   Dashboard → Database → Extensions → Search "vector" → Enable

-- 1. Enable pgvector extension
create extension if not exists vector;

-- 2. Create the knowledge_chunks table
create table if not exists knowledge_chunks (
  id bigserial primary key,
  category text not null,           -- e.g. 'pricing_web', 'pricing_ai', 'portfolio', 'service', 'blog', 'company', 'process', 'faq', 'maintenance'
  title text not null,              -- human-readable label e.g. "Launch Package"
  content text not null,            -- the actual chunk text the AI will read
  embedding vector(1536),           -- OpenAI text-embedding-3-small output dimension
  metadata jsonb default '{}',      -- extra structured data (urls, package names, etc.)
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- 3. Create an index for fast vector similarity search (IVFFlat)
-- Note: IVFFlat requires at least some rows to exist before it can be used effectively.
-- For small datasets (<1000 rows), you can also use HNSW instead:
--   create index on knowledge_chunks using hnsw (embedding vector_cosine_ops);
create index if not exists knowledge_chunks_embedding_idx
  on knowledge_chunks
  using ivfflat (embedding vector_cosine_ops)
  with (lists = 100);

-- 4. Create a standard index on category for filtered searches
create index if not exists knowledge_chunks_category_idx
  on knowledge_chunks (category);

-- 5. RPC function: semantic search by cosine similarity
create or replace function match_knowledge_chunks(
  query_embedding vector(1536),
  match_threshold float default 0.70,
  match_count int default 5,
  filter_category text default null
)
returns table (
  id bigint,
  category text,
  title text,
  content text,
  metadata jsonb,
  similarity float
)
language sql stable
as $$
  select
    kc.id,
    kc.category,
    kc.title,
    kc.content,
    kc.metadata,
    1 - (kc.embedding <=> query_embedding) as similarity
  from knowledge_chunks kc
  where 1 - (kc.embedding <=> query_embedding) > match_threshold
    and (filter_category is null or kc.category = filter_category)
  order by kc.embedding <=> query_embedding
  limit match_count;
$$;

-- 6. Optional: RPC to delete all chunks for a category (useful for re-ingestion)
create or replace function delete_knowledge_category(target_category text)
returns void
language sql
as $$
  delete from knowledge_chunks where category = target_category;
$$;
