"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";

export default function Updates() {
    const recentBlogs = [
        {
            title: "NDA Foundation Course After 10th: 2-Year Schooling + NDA Coaching Guide",
            date: "Sep 25, 2026",
            slug: "/blog/nda-foundation-course-after-10th",
            image: "/images/service4.jpg",
            badge: "Career Roadmap"
        },
        {
            title: "NDA Medical Fitness Requirements & Physical Standards: Eyesight & Height Chart",
            date: "Sep 20, 2026",
            slug: "/blog/nda-medical-test-physical-fitness-guide",
            image: "/images/pexels-kolkatarchobiwala-37134459.webp",
            badge: "Medical Guide"
        },
        {
            title: "Complete SSB Interview 5-Day Selection Process & Preparation Guide",
            date: "Aug 15, 2026",
            slug: "/blog/ssb-interview-guide",
            image: "/images/nccSSB1.jpg",
            badge: "SSB Guide"
        },
        {
            title: "Sainik School & RIMC Entrance Exam Guide: Class 6 & 9 Pattern & Coaching",
            date: "Aug 10, 2026",
            slug: "/blog/sainik-school-rimc-entrance-exam-guide",
            image: "/images/sainic-1.jpg",
            badge: "School Entrance"
        }
    ];

    return (
        <section className="py-12 bg-[#060910]">
            <div className="container mx-auto px-4">
                <SectionHeading title="Latest Defence Guides &amp; Resources" subtitle="Stay Informed &amp; Exam-Ready" />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {recentBlogs.map((blog, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-[#24332B] rounded-xl overflow-hidden border border-white/5 hover:border-gold/30 transition-all group flex flex-col"
                        >
                            <div className="h-44 bg-gray-800 relative overflow-hidden shrink-0">
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    className="object-cover transform group-hover:scale-105 transition-transform"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                />
                                <div className="absolute top-3 left-3 bg-gold text-black text-xs font-bold px-2.5 py-1 rounded z-10">
                                    {blog.badge}
                                </div>
                            </div>
                            <div className="p-5 flex flex-col flex-grow">
                                <div className="flex items-center gap-2 text-gray-400 text-xs mb-2">
                                    <Calendar size={14} />
                                    <span>{blog.date}</span>
                                </div>
                                <h3 className="text-base font-bold text-white mb-4 group-hover:text-gold transition-colors line-clamp-2">
                                    {blog.title}
                                </h3>
                                <div className="mt-auto pt-3 border-t border-white/5">
                                    <Link href={blog.slug} className="text-gold text-xs font-bold flex items-center gap-1.5 hover:gap-2.5 transition-all inline-flex">
                                        Read Complete Guide <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Quick Resource Link Pills */}
                <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-3">
                    <Link href="/study-material" className="bg-[#1B2620] hover:bg-gold hover:text-black text-gray-200 text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-full border border-gold/30 transition-all">
                        📚 Free Defence Study Material &amp; Notes PDF
                    </Link>
                    <Link href="/gallery/videos" className="bg-[#1B2620] hover:bg-gold hover:text-black text-gray-200 text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-full border border-gold/30 transition-all">
                        🎥 Academy GTO Training Videos
                    </Link>
                    <Link href="/courses/rms-coaching-lucknow" className="bg-[#1B2620] hover:bg-gold hover:text-black text-gray-200 text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-full border border-gold/30 transition-all">
                        🎖️ RMS Entrance Coaching Lucknow
                    </Link>
                    <Link href="/courses/foundation" className="bg-[#1B2620] hover:bg-gold hover:text-black text-gray-200 text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-full border border-gold/30 transition-all">
                        🏫 NDA Foundation Course (11th &amp; 12th)
                    </Link>
                    <Link href="/blog" className="bg-gold text-black hover:bg-white text-xs font-black uppercase tracking-wider px-5 py-2.5 rounded-full transition-all">
                        View All Articles &rarr;
                    </Link>
                </div>
            </div>
        </section>
    );
}
