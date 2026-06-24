import PageHeader from "@/components/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Refund Policy | Path Finder Defence Academy",
    description: "Refund and Cancellation Policy for Path Finder Defence Academy.",
    alternates: { canonical: "https://pathfinderdefenceacademy.com/refund-policy" },
};

export default function RefundPolicyPage() {
    return (
        <main className="bg-primary min-h-screen pb-20">
            <PageHeader
                title="Refund Policy"
                subtitle="Path Finder Defence Academy"
                image="/images/bg.jpg"
            />

            <section className="container mx-auto px-4 py-20 max-w-4xl">
                <div className="bg-[#24332B] rounded-2xl p-8 md:p-12 border border-white/5 shadow-xl prose prose-invert max-w-none prose-headings:text-gold prose-p:text-gray-300 prose-li:text-gray-300">
                    <h2>1. General Refund Policy</h2>
                    <p>
                        Path Finder Defence Academy follows a strict NO REFUND policy under normal circumstances. Once a student is admitted and the fee is paid, it is generally non-refundable and non-transferable to any other student.
                    </p>

                    <h2>2. Registration Fees</h2>
                    <p>
                        The initial registration or admission fee paid to secure a seat in any of our batches is strictly non-refundable under all circumstances.
                    </p>

                    <h2>3. Exceptional Circumstances</h2>
                    <p>
                        In highly exceptional cases, such as a severe medical emergency that prevents the student from attending classes entirely, a partial refund may be considered.
                    </p>
                    <ul>
                        <li>The decision to grant a refund in such cases rests solely with the management of Path Finder Defence Academy.</li>
                        <li>A written application along with valid supporting documents (like medical certificates) must be submitted to the management.</li>
                        <li>If approved, the refund will be calculated on a pro-rata basis after deducting the registration fee, study material cost, and administrative charges.</li>
                    </ul>

                    <h2>4. Expulsion or Disciplinary Action</h2>
                    <p>
                        If a student is expelled or dismissed from the academy or hostel due to indiscipline, misconduct, low attendance, or violation of any academy rules, NO REFUND of any fees will be provided.
                    </p>

                    <h2>5. Batch Cancellation</h2>
                    <p>
                        In the rare event that Path Finder Defence Academy cancels a specific batch or course before it commences, a full refund of the fee paid for that specific course will be provided to the enrolled students.
                    </p>

                    <h2>6. Process for Approved Refunds</h2>
                    <p>
                        If a refund is approved by the management, it will be processed via the original method of payment or a bank transfer within 15-30 working days. Cash refunds are not provided.
                    </p>

                    <h2>7. Contact for Refund Queries</h2>
                    <p>
                        For any questions regarding our refund policy, please contact our administration office at:<br/>
                        <strong>Email:</strong> info@pathfinderdefenceacademy.co.in<br/>
                        <strong>Phone:</strong> +91 75051 88009
                    </p>
                </div>
            </section>
        </main>
    );
}
