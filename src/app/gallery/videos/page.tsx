import PageHeader from "@/components/PageHeader";

export default function VideosPage() {
    return (
        <main className="bg-primary min-h-screen pb-20">
            <PageHeader
                title="Video Gallery"
                subtitle="Coming Soon"
                image="/images/team-m-1.jpg"
            />
            <section className="container mx-auto px-4 py-20 text-center">
                <div className="bg-[#24332B] p-12 rounded-xl border border-white/5 max-w-2xl mx-auto shadow-2xl">
                    <h2 className="text-3xl font-bold text-white mb-4">Content is being updated</h2>
                    <p className="text-gray-400 text-lg">
                        We are currently curating the best video moments of our academy. Please check back later!
                    </p>
                </div>
            </section>
        </main>
    );
}
