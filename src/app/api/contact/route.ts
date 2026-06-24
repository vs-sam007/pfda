import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, phone, course, message, formType } = body;

        // Determine which email to use based on the form type
        // CTA (Demo) forms go to the director. Contact page forms go to info.
        const isDemoForm = formType === 'demo';
        const targetEmail = isDemoForm 
            ? 'director@pathfinderdefenceacademy.co.in'
            : 'info@pathfinderdefenceacademy.co.in';

        const smtpUser = process.env.SMTP_USER; // e.g. info@pathfinderdefenceacademy.co.in or director@...
        const smtpPass = process.env.SMTP_PASS;
        const smtpHost = process.env.SMTP_HOST || 'mail.pathfinderdefenceacademy.co.in';

        if (!smtpUser || !smtpPass) {
            return NextResponse.json(
                { error: 'SMTP credentials are not configured on the server.' },
                { status: 500 }
            );
        }

        const transporter = nodemailer.createTransport({
            host: smtpHost,
            port: 465, // cPanel secure SMTP port
            secure: true, // true for 465, false for other ports
            auth: {
                user: smtpUser,
                pass: smtpPass,
            },
            tls: {
                // Do not fail on invalid certs if cPanel SSL is self-signed, though usually it's fine.
                rejectUnauthorized: false
            }
        });

        // Email content
        const mailOptions = {
            from: `"${name}" <${smtpUser}>`, // Must send FROM the authenticated user to avoid spam filters
            replyTo: email || undefined, // Allow replying directly to the user who filled the form
            to: targetEmail,
            subject: `New ${isDemoForm ? 'Demo Request' : 'Contact Form Submission'} from ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
                    <h2 style="color: #24332B; border-bottom: 2px solid #FFD700; padding-bottom: 10px;">
                        New ${isDemoForm ? 'Demo Request' : 'Contact Inquiry'}
                    </h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    ${email ? `<p><strong>Email:</strong> ${email}</p>` : ''}
                    ${course ? `<p><strong>Course Interested In:</strong> ${course}</p>` : ''}
                    ${message ? `
                        <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #FFD700;">
                            <p style="margin: 0;"><strong>Message:</strong></p>
                            <p style="margin-top: 10px; white-space: pre-wrap;">${message}</p>
                        </div>
                    ` : ''}
                    <p style="margin-top: 30px; font-size: 12px; color: #888;">
                        This email was sent from the Pathfinder Defence Academy website form.
                    </p>
                </div>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });

    } catch (error: any) {
        console.error('Email sending error:', error);
        return NextResponse.json(
            { error: 'Failed to send email. Please try again later.' },
            { status: 500 }
        );
    }
}
