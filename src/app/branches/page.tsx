import PageHeader from "@/components/PageHeader";
import BranchesPreview from "@/components/home/BranchesPreview";

export default function BranchesPage() {
    return (
        <main className="bg-primary min-h-screen pb-20">
            <PageHeader
                title="Our Branches"
                subtitle="State-of-the-Art Infrastructure"
                image="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
            />

            {/* Reusing Home Components for Consistency */}
            <BranchesPreview />

            <section className="container mx-auto px-4 pb-20">
                <div className="bg-[#10172a] p-8 rounded-xl border border-white/5 text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">Visit Us For A Campus Tour</h3>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        We invite parents and students to visit our campuses in Lucknow to see our facilities, meet the mentors, and understand our training methodology.
                    </p>
                </div>
            </section>
        </main>
    );
}
