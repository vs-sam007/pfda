import PageHeader from "@/components/PageHeader";
import HallOfFame from "@/components/HallOfFame";
import { Award, Star } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "1000+ Defence Exam Selections & Hall of Fame | NDA, CDS, SSB Results | PFDA",
    description: "Witness the Hall of Fame at Path Finder Defence Academy. Over 1000+ selections in NDA written exams, SSB interviews, CDS, AFCAT & Air Force. Lucknow's top selection institute.",
    keywords: ["NDA selections Lucknow", "best defence academy results", "SSB recommended students Lucknow", "PFDA selections", "NDA coaching top results"],
    alternates: { canonical: "https://pathfinderdefenceacademy.com/results/" },
};

export default function ResultsPage() {
    return (
        <main className="bg-primary min-h-screen">
            <PageHeader
                title="Our Results"
                subtitle="Hall of Fame"
                image="/images/team-m-1.jpg"
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

            <HallOfFame showMoreSelections={true} />
        </main>
    );
}
