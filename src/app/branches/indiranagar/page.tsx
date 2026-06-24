import PageHeader from "@/components/PageHeader";

export default function IndiranagarBranchPage() {
    return (
        <main className="bg-primary min-h-screen pb-20">
            <PageHeader
                title="Indira Nagar Branch"
                subtitle="City Center"
                image="/images/classroom-2.jpg"
            />
            <section className="container mx-auto px-4 py-20 text-center">
                <div className="bg-[#24332B] p-12 rounded-xl border border-white/5 max-w-2xl mx-auto shadow-2xl">
                    <h2 className="text-3xl font-bold text-white mb-4">Branch Details Coming Soon</h2>
                    <p className="text-gray-400 text-lg mb-6">
                        We are currently updating the detailed information, faculty profiles, and facility photos for our Indira Nagar branch.
                    </p>
                    <p className="text-gold font-bold">
                        Uma Krishna Complex, Murari Nagar, Lucknow, UP 226016
                    </p>
                </div>
            </section>
        </main>
    );
}
