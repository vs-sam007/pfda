"use client";

import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import Image from "next/image";
import { Download, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/Button";

const materials = [
    {
        title: "Mathematics for CDS Entrance Examination",
        author: "Dr. R.S. Aggarwal (S. Chand)",
        description: "Fully solved revised edition covering all essential mathematical concepts and shortcuts required for the CDS Entrance Examination. Includes solved papers.",
        image: "/images/cds-math-book.jpg",
        tags: ["CDS", "Mathematics", "Fully Solved"],
    }
];

export default function StudyMaterialPage() {
    return (
        <main className="bg-primary min-h-screen pb-20">
            <PageHeader
                title="Study Material"
                subtitle="Resources to Ace Your Exams"
                image="/images/bg.jpg"
            />

            <section className="container mx-auto px-4 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-tight">
                        Recommended <span className="text-gold">Books</span>
                    </h2>
                    <div className="w-24 h-1 bg-gold mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Enhance your preparation with our curated list of highly recommended study materials and textbooks.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {materials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-[#24332B] rounded-2xl overflow-hidden border border-white/5 hover:border-gold/30 transition-all shadow-xl group flex flex-col"
                        >
                            <div className="relative h-80 w-full bg-white flex items-center justify-center p-6 shrink-0">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 right-4 bg-gold text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                                    <BookOpen size={14} /> Book
                                </div>
                            </div>
                            
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {item.tags.map((tag, i) => (
                                        <span key={i} className="text-[10px] font-bold uppercase tracking-wider bg-[#1B2620] text-gold px-2 py-1 rounded border border-gold/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 leading-tight">
                                    {item.title}
                                </h3>
                                <p className="text-gold text-sm font-medium mb-4">
                                    By {item.author}
                                </p>
                                <p className="text-gray-400 text-sm mb-6 flex-grow">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </main>
    );
}
