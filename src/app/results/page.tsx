import PageHeader from "@/components/PageHeader";
import ResultsWall from "@/components/home/ResultsWall";
import HallOfFame from "@/components/HallOfFame";
import { Award, Star } from "lucide-react";

export default function ResultsPage() {
    return (
        <main className="bg-primary min-h-screen">
            <PageHeader
                title="Our Results"
                subtitle="Hall of Fame"
                image="https://images.unsplash.com/photo-1541961417166-3d6046e72ee8?q=80&w=2049&auto=format&fit=crop"
            />

            <div className="container mx-auto px-4 py-12">
                <div className="bg-military rounded-2xl p-8 md:p-12 text-center text-white mb-12 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                    <h2 className="text-3xl font-bold mb-4 relative z-10">Consistently Delivering Excellence</h2>
                    <p className="max-w-2xl mx-auto text-white/90 relative z-10">
                        With over a decade of experience, we have maintained the highest selection rate in North India. Our result speaks for our dedication.
                    </p>
                </div>
            </div>

            <HallOfFame />
            <ResultsWall />
        </main>
    );
}
