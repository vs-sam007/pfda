import PageHeader from "@/components/PageHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "NDA Coaching in Alambagh Lucknow | Head Office | Path Finder Defence Academy",
    description: "Visit Path Finder Defence Academy (PFDA) Head Office in Alambagh, Lucknow. Best coaching for NDA, CDS, AFCAT & SSB near Singar Nagar Metro Station. Hostel & ground facility.",
    keywords: ["NDA coaching in Alambagh", "defence academy Alambagh Lucknow", "NDA coaching near Singar Nagar Metro", "best NDA institute Alambagh", "PFDA Alambagh head office"],
    alternates: { canonical: "https://pathfinderdefenceacademy.com/branches/alambagh/" },
};

export default function AlambaghBranchPage() {
    return (
        <main className="bg-primary min-h-screen pb-20">
            <PageHeader
                title="Alambagh Branch"
                subtitle="Head Office"
                image="/images/classroom-1.jpg"
            />
            <section className="container mx-auto px-4 py-20 text-center">
                <div className="bg-[#24332B] p-12 rounded-xl border border-white/5 max-w-2xl mx-auto shadow-2xl">
                    <h2 className="text-3xl font-bold text-white mb-4">Branch Details Coming Soon</h2>
                    <p className="text-gray-400 text-lg mb-6">
                        We are currently updating the detailed information, faculty profiles, and facility photos for our Alambagh branch.
                    </p>
                    <p className="text-gold font-bold">
                        Metro Station, 3rd Floor, KSM Plaza, 826-Sneh Nagar Mod, Opposite to Hero Showroom, Singar nagar, Alambagh - 226005
                    </p>
                </div>
            </section>
        </main>
    );
}
