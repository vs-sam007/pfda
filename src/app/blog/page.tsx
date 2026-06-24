"use client";

import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const posts = [
    {
        title: "NDA 2 2024 Notification Out",
        date: "Oct 24, 2024",
        excerpt: "The Union Public Service Commission has released the notification for National Defence Academy & Naval Academy Examination (II), 2024.",
        image: "/images/gallery8.jpg"
    },
    {
        title: "Top 5 Tips for SSB Screening Test",
        date: "Sep 15, 2024",
        excerpt: "Screening is the first hurdle in the SSB interview. Learn how to master OIR and PPDT with these expert tips.",
        image: "/images/gallery1.jpg"
    },
    {
        title: "How to Prepare for CDS Maths",
        date: "Aug 10, 2024",
        excerpt: "Mathematics in CDS can be scoring if approached correctly. Here is a strategy to score 70+ marks in the Maths paper.",
        image: "/images/sainic-1.jpg"
    }
];

export default function BlogPage() {
    return (
        <main className="bg-primary min-h-screen pb-20">
            <PageHeader
                title="Defence Updates"
                subtitle="Latest News & Articles"
                image="/images/team-m-1.jpg"
            />

            <section className="container mx-auto px-4 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <div key={index} className="bg-[#24332B] rounded-xl overflow-hidden border border-white/5 hover:border-gold/30 transition-all group shadow-xl">
                            <div className="h-48 relative overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transform group-hover:scale-105 transition-transform"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-2 text-gray-400 text-xs mb-3">
                                    <Calendar size={14} />
                                    <span>{post.date}</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-gray-400 mb-4 text-sm line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <Link href="#" className="text-gold text-sm font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                                    Read Full Article <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
