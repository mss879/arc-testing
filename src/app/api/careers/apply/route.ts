import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export async function POST(req: NextRequest) {
    try {
        const supabase = createClient(supabaseUrl, supabaseAnonKey);
        
        const formData = await req.formData();
        
        const vacancyId = formData.get('vacancy_id') as string;
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const phone = formData.get('phone') as string;
        const personalStatement = formData.get('personal_statement') as string;
        const earliestStartDate = formData.get('earliest_start_date') as string;
        const currentlyEmployed = formData.get('currently_employed') === 'true';
        const cvFile = formData.get('cv') as File | null;

        // Validate required fields
        if (!vacancyId || !name || !email || !phone) {
            return NextResponse.json(
                { error: 'Missing required fields: vacancy_id, name, email, and phone are required' },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            );
        }

        // Input length validation
        if (name.length > 200 || email.length > 200 || phone.length > 50 || personalStatement.length > 5000) {
            return NextResponse.json(
                { error: 'Input exceeds maximum allowed length' },
                { status: 400 }
            );
        }

        let cvUrl = '';

        // Upload CV if provided
        if (cvFile && cvFile.size > 0) {
            // Validate file size (max 10MB)
            if (cvFile.size > 10 * 1024 * 1024) {
                return NextResponse.json(
                    { error: 'CV file must be under 10MB' },
                    { status: 400 }
                );
            }

            // Validate file type
            const allowedTypes = [
                'application/pdf',
                'application/msword',
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
            ];
            if (!allowedTypes.includes(cvFile.type)) {
                return NextResponse.json(
                    { error: 'CV must be a PDF, DOC, or DOCX file' },
                    { status: 400 }
                );
            }

            const fileExt = cvFile.name.split('.').pop();
            const fileName = `${Date.now()}_${Math.random().toString(36).substring(2)}.${fileExt}`;

            const arrayBuffer = await cvFile.arrayBuffer();
            const buffer = new Uint8Array(arrayBuffer);

            const { error: uploadError } = await supabase.storage
                .from('career-cvs')
                .upload(fileName, buffer, {
                    contentType: cvFile.type,
                    upsert: false,
                });

            if (uploadError) {
                console.error('CV upload error:', uploadError);
                return NextResponse.json(
                    { error: 'Failed to upload CV. Please try again.' },
                    { status: 500 }
                );
            }

            const { data: { publicUrl } } = supabase.storage
                .from('career-cvs')
                .getPublicUrl(fileName);

            cvUrl = publicUrl;
        }

        // Insert application
        const { error: insertError } = await supabase
            .from('career_applications')
            .insert([{
                vacancy_id: vacancyId,
                name,
                email,
                phone,
                personal_statement: personalStatement || '',
                earliest_start_date: earliestStartDate || null,
                currently_employed: currentlyEmployed,
                cv_url: cvUrl,
                status: 'pending',
            }]);

        if (insertError) {
            console.error('Application insert error:', insertError);
            return NextResponse.json(
                { error: 'Failed to submit application. Please try again.' },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true, message: 'Application submitted successfully' });
    } catch (error) {
        console.error('Apply API Error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
