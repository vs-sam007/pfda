import PageHeader from "@/components/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Path Finder Defence Academy",
    description: "Privacy Policy for Path Finder Defence Academy. Learn how we collect, use, and protect your personal information.",
    alternates: { canonical: "https://pathfinderdefenceacademy.com/privacy-policy" },
};

export default function PrivacyPolicyPage() {
    return (
        <main className="bg-primary min-h-screen pb-20">
            <PageHeader
                title="Privacy Policy"
                subtitle="Path Finder Defence Academy"
                image="/images/bg.jpg"
            />

            <section className="container mx-auto px-4 py-20 max-w-4xl">
                <div className="bg-[#24332B] rounded-2xl p-8 md:p-12 border border-white/5 shadow-xl prose prose-invert max-w-none prose-headings:text-gold prose-p:text-gray-300 prose-li:text-gray-300">
                    <h2>1. Introduction</h2>
                    <p>
                        Path Finder Defence Academy ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (pathfinderdefenceacademy.com) or use our services.
                    </p>

                    <h2>2. Information We Collect</h2>
                    <p>
                        We may collect personal information that you voluntarily provide to us when you:
                    </p>
                    <ul>
                        <li>Register for a course or demo class</li>
                        <li>Fill out a contact form or inquiry form</li>
                        <li>Subscribe to our newsletter</li>
                        <li>Interact with us via phone, email, or social media</li>
                    </ul>
                    <p>
                        The personal information we collect may include your name, email address, phone number, educational background, address, and other relevant details required for admission and counselling purposes.
                    </p>

                    <h2>3. How We Use Your Information</h2>
                    <p>
                        We use the information we collect to:
                    </p>
                    <ul>
                        <li>Provide, operate, and maintain our services</li>
                        <li>Process admissions and course registrations</li>
                        <li>Communicate with you regarding updates, offers, and educational materials</li>
                        <li>Respond to your inquiries and offer customer support</li>
                        <li>Improve our website and services</li>
                    </ul>

                    <h2>4. Information Sharing and Disclosure</h2>
                    <p>
                        We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted third-party service providers who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
                    </p>
                    <p>
                        We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety.
                    </p>

                    <h2>5. Data Security</h2>
                    <p>
                        We implement a variety of security measures to maintain the safety of your personal information. However, please note that no method of transmission over the internet or method of electronic storage is 100% secure.
                    </p>

                    <h2>6. Cookies</h2>
                    <p>
                        Our website may use "cookies" to enhance user experience. You can choose to set your web browser to refuse cookies or to alert you when cookies are being sent. If you do so, note that some parts of the site may not function properly.
                    </p>

                    <h2>7. Changes to This Privacy Policy</h2>
                    <p>
                        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
                    </p>

                    <h2>8. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at:<br/>
                        <strong>Email:</strong> info@pathfinderdefenceacademy.co.in<br/>
                        <strong>Phone:</strong> +91 75051 88009<br/>
                        <strong>Address:</strong> Uma Krishna Complex, Murari Nagar, Lucknow, UP 226016
                    </p>
                </div>
            </section>
        </main>
    );
}
