"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";

export default function Updates() {
    return (
        <section className="py-20 bg-[#060910]">
            <div className="container mx-auto px-4">
                <SectionHeading title="Defence Updates" subtitle="Stay Informed" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3].map((i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#10172a] rounded-xl overflow-hidden border border-white/5 hover:border-gold/30 transition-all group"
                        >
                            <div className="h-48 bg-gray-800 relative overflow-hidden">
                                <Image
                                    src="/images/blog-11.jpg"
                                    alt="Army Update"
                                    fill
                                    className="object-cover transform group-hover:scale-105 transition-transform"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute top-4 left-4 bg-gold text-black text-xs font-bold px-3 py-1 rounded z-10">
                                    Exam Alert
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-2 text-gray-400 text-xs mb-3">
                                    <Calendar size={14} />
                                    <span>Oct 24, 2024</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors">
                                    NDA 2 2024 Notification Out: Check Eligibility & Dates
                                </h3>
                                <Link href="/blog/nda-notification" className="text-gold text-sm font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                                    Read More <ArrowRight size={16} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
