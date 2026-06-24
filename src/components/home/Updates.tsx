"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";

export default function Updates() {
    const recentBlogs = [
        {
            title: "How to Crack NDA Exam in First Attempt",
            date: "May 15, 2025",
            slug: "/blog/how-to-crack-nda",
            image: "/images/classroom-1.jpg",
            badge: "Preparation"
        },
        {
            title: "NDA vs CDS — Which Defence Exam Should You Choose?",
            date: "May 28, 2025",
            slug: "/blog/nda-vs-cds",
            image: "/images/gallery8.jpg",
            badge: "Career Guide"
        },
        {
            title: "Complete SSB Interview Preparation Guide",
            date: "May 12, 2025",
            slug: "/blog/ssb-interview-guide",
            image: "/images/gallery7.jpg",
            badge: "SSB Guide"
        }
    ];

    return (
        <section className="py-20 bg-[#060910]">
            <div className="container mx-auto px-4">
                <SectionHeading title="Defence Updates" subtitle="Stay Informed" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {recentBlogs.map((blog, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-[#24332B] rounded-xl overflow-hidden border border-white/5 hover:border-gold/30 transition-all group flex flex-col"
                        >
                            <div className="h-48 bg-gray-800 relative overflow-hidden shrink-0">
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    className="object-cover transform group-hover:scale-105 transition-transform"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute top-4 left-4 bg-gold text-black text-xs font-bold px-3 py-1 rounded z-10">
                                    {blog.badge}
                                </div>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center gap-2 text-gray-400 text-xs mb-3">
                                    <Calendar size={14} />
                                    <span>{blog.date}</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gold transition-colors line-clamp-2">
                                    {blog.title}
                                </h3>
                                <div className="mt-auto pt-4 border-t border-white/5">
                                    <Link href={blog.slug} className="text-gold text-sm font-semibold flex items-center gap-2 hover:gap-3 transition-all inline-flex">
                                        Read More <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                
                <div className="mt-12 text-center">
                    <Link href="/blog" className="inline-block bg-transparent border-2 border-gold text-gold font-bold px-8 py-3 rounded hover:bg-gold hover:text-black transition-colors uppercase tracking-wider text-sm">
                        View All Articles
                    </Link>
                </div>
            </div>
        </section>
    );
}
