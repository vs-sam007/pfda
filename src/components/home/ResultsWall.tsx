"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";

// Mock data for results. In production, this would come from a database or CMS.
const results = [
    { name: "Rahul Singh", rank: "AIR 12", exam: "NDA 151", image: "/images/img-1.png" },
    { name: "Priya Sharma", rank: "AIR 45", exam: "CDS 2024", image: "/images/img-1 (2).png" },
    { name: "Amit Kumar", rank: "AIR 08", exam: "AFCAT 2024", image: "/images/images.png" },
    { name: "Vikram Batra", rank: "Rec. Rec.", exam: "TES 50", image: "/images/images (1).png" },
    { name: "S. Yadav", rank: "AIR 99", exam: "NDA 151", image: "/images/images.jpg" },
];

export default function ResultsWall() {
    return (
        <section className="py-20 bg-[#1B2620] relative overflow-hidden">
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
                            className="relative w-64 h-80 bg-[#24332B] rounded-xl overflow-hidden shadow-2xl border border-gold/20 group hover:border-gold transition-all"
                        >
                            <Image
                                src={result.image}
                                alt={result.name}
                                fill
                                className="object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity duration-300"
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
