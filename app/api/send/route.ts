import { EmailTemplate } from '@/components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { firstName, lastName, email, phone, message } = body;

        // Validation: Ensure required fields exist
        if (!firstName || !email || !message) {
            return Response.json(
                { error: { message: "Please fill in all required fields." } }, 
                { status: 400 }
            );
        }

        const { data, error } = await resend.emails.send({
            from: 'Ali Bakes Cakes <onboarding@resend.dev>', // Update this once domain is verified
            // This is where her email will be
            to: ['shawnrimai004@gmail.com'],
            subject: `🍰 New Inquiry from ${firstName} ${lastName}`,
            react: EmailTemplate({ 
                firstName, 
                lastName, 
                email, 
                phone, 
                message 
            }),
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json({ success: true, data });
    } catch (err: any) {
        return Response.json({ error: { message: err.message } }, { status: 500 });
    }
}