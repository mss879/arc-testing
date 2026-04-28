/**
 * RAG Retrieval Library for ARC AI Sales Concierge
 *
 * Uses a two-step approach:
 * 1. Extract clean search query from the user's (possibly messy) message using a fast LLM
 * 2. Generate embedding for the cleaned query and search Supabase for matching chunks
 */

import { createClient } from '@supabase/supabase-js';
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || '',
);

interface KnowledgeMatch {
  id: number;
  category: string;
  title: string;
  content: string;
  metadata: Record<string, unknown>;
  similarity: number;
}

/**
 * Extract the core search intent from a messy user message.
 * Handles typos, contact details mixed in, multiple requests, etc.
 */
async function extractSearchQuery(userMessage: string): Promise<string> {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      temperature: 0,
      max_tokens: 100,
      messages: [
        {
          role: 'system',
          content: `You extract search queries from user messages for a business website AI assistant.
The business offers: website packages (Starter, Launch, Growth, Scale), AI packages (Flow, Engage, Qualify, Command), portfolio, services, company info, FAQs.

Rules:
- Extract ONLY the core topics the user is asking about
- Ignore typos, spelling mistakes, contact details (names, phones, emails), and filler words
- If the user mentions pricing/packages/cost, include "pricing" or "packages" in your query
- If multiple topics, list them separated by commas
- Return a clean, short search query (max 15 words)
- Do NOT add any explanation, just the query

Examples:
"i want to know about ur web pricign also heres my nubmer 0771234567" → "website pricing packages"
"can u show me wat websites u have built before" → "portfolio websites built examples"
"how much for an ai chatbot for my business shahid@email.com" → "AI chatbot pricing packages"
"tell me about ur company and what u do" → "company information services offered"
"whats the difference between growth and scale" → "Growth vs Scale package comparison"`,
        },
        {
          role: 'user',
          content: userMessage,
        },
      ],
    });

    const extracted = response.choices[0]?.message?.content?.trim();
    if (extracted && extracted.length > 0) {
      console.log(`[RAG] Query extracted: "${userMessage.substring(0, 50)}..." → "${extracted}"`);
      return extracted;
    }
    return userMessage;
  } catch (err) {
    console.warn('[RAG] Query extraction failed, using raw message:', err);
    return userMessage;
  }
}

/**
 * Retrieve the most relevant knowledge chunks for a user message.
 *
 * @param userMessage  - The latest message from the user (or pre-cleaned query)
 * @param isRawMessage - If true, uses an LLM to clean the query. If false, skips cleaning.
 * @param matchCount   - How many chunks to retrieve (default: 10)
 * @param threshold    - Minimum similarity score (default: 0.40)
 * @returns Formatted context string to append to the system prompt
 */
export async function retrieveContext(
  userMessage: string,
  isRawMessage: boolean = true,
  matchCount: number = 10,
  threshold: number = 0.20,
): Promise<string> {
  try {
    // 1. Extract clean search query from the messy user message (if needed)
    const searchQuery = isRawMessage ? await extractSearchQuery(userMessage) : userMessage;

    // 2. Generate embedding for the query
    const embeddingResponse = await openai.embeddings.create({
      model: 'text-embedding-3-small',
      input: searchQuery,
    });

    const queryEmbedding = embeddingResponse.data[0].embedding;

    // 3. Search Supabase for matching chunks
    const { data, error } = await supabaseAdmin.rpc('match_knowledge_chunks', {
      query_embedding: queryEmbedding,
      match_threshold: threshold,
      match_count: matchCount,
    });

    if (error) {
      console.error('[RAG] Retrieval error:', error.message);
      return '';
    }

    const matches = data as KnowledgeMatch[];

    if (!matches || matches.length === 0) {
      console.warn('[RAG] No matching chunks found for:', searchQuery);
      return '';
    }

    console.log(`[RAG] Retrieved ${matches.length} chunks for: "${searchQuery}" (top: ${(matches[0].similarity * 100).toFixed(0)}%)`);

    // 4. Format the chunks into a context block
    const contextParts = matches.map(
      (chunk, i) =>
        `[${i + 1}] ${chunk.title} (${chunk.category}, relevance: ${(chunk.similarity * 100).toFixed(0)}%)\n${chunk.content}`,
    );

    return `\nRELEVANT CONTEXT (retrieved from knowledge base — use this to answer accurately):\n${'─'.repeat(60)}\n${contextParts.join('\n\n' + '─'.repeat(60) + '\n')}\n${'─'.repeat(60)}`;
  } catch (err) {
    console.error('[RAG] Retrieval failed:', err);
    return '';
  }
}
