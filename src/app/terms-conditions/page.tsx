import PageHeader from "@/components/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms and Conditions | Path Finder Defence Academy",
    description: "Terms and Conditions for Path Finder Defence Academy.",
    alternates: { canonical: "https://pathfinderdefenceacademy.com/terms-conditions" },
};

export default function TermsConditionsPage() {
    return (
        <main className="bg-primary min-h-screen pb-20">
            <PageHeader
                title="Terms and Conditions"
                subtitle="Path Finder Defence Academy"
                image="/images/bg.jpg"
            />

            <section className="container mx-auto px-4 py-20 max-w-4xl">
                <div className="bg-[#24332B] rounded-2xl p-8 md:p-12 border border-white/5 shadow-xl prose prose-invert max-w-none prose-headings:text-gold prose-p:text-gray-300 prose-li:text-gray-300">
                    <h2>1. Acceptance of Terms</h2>
                    <p>
                        By accessing and using the Path Finder Defence Academy website (pathfinderdefenceacademy.com) or enrolling in our courses, you accept and agree to be bound by the terms and provision of this agreement.
                    </p>

                    <h2>2. Educational Services</h2>
                    <p>
                        Path Finder Defence Academy provides coaching and training services for various defence examinations (NDA, CDS, AFCAT, etc.). While we strive to provide the best possible education and training, we do not guarantee selection or success in any examination. Success depends entirely on the student's individual effort, capability, and performance.
                    </p>

                    <h2>3. Admission and Fee Payment</h2>
                    <ul>
                        <li>Admission is subject to fulfilling the eligibility criteria for the respective courses.</li>
                        <li>Fees must be paid as per the schedule communicated at the time of admission.</li>
                        <li>Path Finder Defence Academy reserves the right to deny admission or cancel enrollment if any provided information is found to be false.</li>
                    </ul>

                    <h2>4. Code of Conduct</h2>
                    <p>
                        Students are expected to maintain strict discipline, punctuality, and decorum both within the academy premises and in the hostel. Any act of indiscipline, misbehaviour, or violation of academy rules may result in immediate expulsion without any refund of fees.
                    </p>

                    <h2>5. Intellectual Property</h2>
                    <p>
                        All study materials, test series, notes, and content provided by Path Finder Defence Academy are the intellectual property of the academy. Students are not permitted to reproduce, distribute, or share these materials for commercial purposes.
                    </p>

                    <h2>6. Website Usage</h2>
                    <p>
                        You agree to use this website only for lawful purposes. You are prohibited from violating or attempting to violate the security of the website.
                    </p>

                    <h2>7. Modifications to Terms</h2>
                    <p>
                        Path Finder Defence Academy reserves the right to modify these terms and conditions at any time. Any changes will be effective immediately upon posting on the website. Your continued use of the services constitutes your acceptance of the revised terms.
                    </p>

                    <h2>8. Governing Law</h2>
                    <p>
                        These terms and conditions are governed by and construed in accordance with the laws of India. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts in Lucknow, Uttar Pradesh.
                    </p>
                </div>
            </section>
        </main>
    );
}
