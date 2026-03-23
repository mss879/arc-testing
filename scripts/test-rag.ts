/**
 * Quick diagnostic script to test RAG retrieval
 * Run: npx tsx scripts/test-rag.ts
 */
import { createClient } from '@supabase/supabase-js';
import OpenAI from 'openai';
import * as dotenv from 'dotenv';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '..', '.env.local') });

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || '',
);

async function diagnose() {
  console.log('🔍 RAG Diagnostic Test\n');

  // 1. Check if chunks exist
  console.log('1️⃣ Checking knowledge_chunks table...');
  const { data: chunks, error: chunkErr } = await supabase
    .from('knowledge_chunks')
    .select('id, category, title')
    .limit(5);

  if (chunkErr) {
    console.error('   ❌ Table query failed:', chunkErr.message);
    return;
  }

  console.log(`   ✅ Found rows. First 5:`, chunks?.map(c => `${c.category}: ${c.title}`));

  // 2. Check total count
  const { count } = await supabase
    .from('knowledge_chunks')
    .select('id', { count: 'exact', head: true });
  console.log(`   📊 Total rows: ${count}`);

  // 3. Check if embeddings exist
  console.log('\n2️⃣ Checking if embeddings are stored...');
  const { data: sample, error: sampleErr } = await supabase
    .from('knowledge_chunks')
    .select('id, title, embedding')
    .limit(1);

  if (sampleErr) {
    console.error('   ❌ Sample query failed:', sampleErr.message);
  } else if (sample && sample.length > 0) {
    const emb = sample[0].embedding;
    console.log(`   ✅ Embedding exists for "${sample[0].title}"`);
    console.log(`   📏 Embedding type: ${typeof emb}, length: ${Array.isArray(emb) ? emb.length : 'N/A'}`);
  }

  // 4. Test embedding generation
  console.log('\n3️⃣ Generating test embedding...');
  const testQuery = 'What are your website pricing packages?';
  const embResponse = await openai.embeddings.create({
    model: 'text-embedding-3-small',
    input: testQuery,
  });
  const queryEmbedding = embResponse.data[0].embedding;
  console.log(`   ✅ Embedding generated (${queryEmbedding.length} dimensions)`);

  // 5. Test the RPC function
  console.log('\n4️⃣ Testing match_knowledge_chunks RPC...');
  const { data: matches, error: rpcErr } = await supabase.rpc('match_knowledge_chunks', {
    query_embedding: queryEmbedding,
    match_threshold: 0.5,  // Very low threshold for testing
    match_count: 10,
  });

  if (rpcErr) {
    console.error('   ❌ RPC FAILED:', rpcErr.message);
    console.error('   Full error:', JSON.stringify(rpcErr));
    
    // Try raw SQL approach as fallback test
    console.log('\n5️⃣ Testing with raw query...');
    const { data: rawData, error: rawErr } = await supabase
      .from('knowledge_chunks')
      .select('id, category, title, content')
      .limit(3);
    
    if (rawErr) {
      console.error('   ❌ Raw query also failed:', rawErr.message);
    } else {
      console.log('   ✅ Raw query works, data exists:', rawData?.map(r => r.title));
      console.log('   ⚠️  The RPC function is the problem!');
    }
  } else {
    console.log(`   ✅ RPC returned ${matches?.length} results:`);
    matches?.forEach((m: { title: string; category: string; similarity: number }) => {
      console.log(`      • [${(m.similarity * 100).toFixed(0)}%] ${m.category}: ${m.title}`);
    });
  }
}

diagnose().catch(console.error);
