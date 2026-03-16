import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export async function GET() {
    try {
        const supabase = createClient(supabaseUrl, supabaseAnonKey);
        
        const { data, error } = await supabase
            .from('career_vacancies')
            .select('*')
            .eq('is_active', true)
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Error fetching vacancies:', error);
            return NextResponse.json({ error: 'Failed to fetch vacancies' }, { status: 500 });
        }

        return NextResponse.json(data || []);
    } catch (error) {
        console.error('Careers API Error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
