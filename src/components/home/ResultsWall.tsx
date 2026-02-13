"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";

// Mock data for results. In production, this would come from a database or CMS.
const results = [
    { name: "Rahul Singh", rank: "AIR 12", exam: "NDA 151", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop" },
    { name: "Priya Sharma", rank: "AIR 45", exam: "CDS 2024", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop" },
    { name: "Amit Kumar", rank: "AIR 08", exam: "AFCAT 2024", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1976&auto=format&fit=crop" },
    { name: "Vikram Batra", rank: "Rec. Rec.", exam: "TES 50", image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=1998&auto=format&fit=crop" },
    { name: "S. Yadav", rank: "AIR 99", exam: "NDA 151", image: "https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&w=1974&auto=format&fit=crop" },
];

export default function ResultsWall() {
    return (
        <section className="py-20 bg-[#0a0f1c] relative overflow-hidden">
            <div className="container mx-auto px-4 z-10 relative">
                <SectionHeading title="Hall of Fame" subtitle="Our Recent Selections" />

                <div className="flex flex-wrap justify-center gap-8">
                    {results.map((result, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative w-64 h-80 bg-[#10172a] rounded-xl overflow-hidden shadow-2xl border border-gold/20 group hover:border-gold transition-all"
                        >
                            <Image
                                src={result.image}
                                alt={result.name}
                                fill
                                className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                sizes="(max-width: 768px) 50vw, 25vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-center transform translate-y-2 group-hover:translate-y-0 transition-transform">
                                <div className="bg-gold text-black text-xs font-bold px-2 py-1 rounded inline-block mb-2">
                                    {result.rank}
                                </div>
                                <h4 className="text-xl font-bold text-white mb-1">{result.name}</h4>
                                <p className="text-gold font-medium text-sm">{result.exam}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
