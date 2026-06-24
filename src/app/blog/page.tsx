import PageHeader from "@/components/PageHeader";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Defence Blog | NDA, CDS, SSB Tips & Updates | Path Finder Defence Academy",
    description: "Read expert articles on NDA exam preparation, SSB interview tips, CDS coaching strategies, defence career options after 12th & graduation. Latest defence news and updates from PFDA Lucknow.",
    keywords: ["NDA preparation tips", "SSB interview tips", "defence career blog", "NDA vs CDS", "how to crack NDA", "defence coaching blog Lucknow"],
    alternates: { canonical: "https://pathfinderdefenceacademy.com/blog" },
};

const posts = [
    {
        title: "How to Crack NDA Exam in First Attempt — Complete Guide",
        date: "Jun 20, 2025",
        excerpt: "Master the NDA syllabus, exam pattern, maths preparation strategy, GAT tips, and previous year question analysis. A complete roadmap to clear the UPSC NDA exam on your first try.",
        image: "/images/nda.jpeg",
        slug: "how-to-crack-nda",
    },
    {
        title: "Best NDA Coaching in Lucknow — Why PFDA Leads the Way",
        date: "Jun 15, 2025",
        excerpt: "Discover what makes Path Finder Defence Academy the top NDA coaching institute in Lucknow. From expert faculty to affordable fees and hostel facility.",
        image: "/images/Pathfinderimg.JPG",
        slug: "best-nda-coaching-lucknow",
    },
    {
        title: "Complete SSB Interview Preparation Guide",
        date: "Jun 10, 2025",
        excerpt: "Everything you need to know about SSB screening test, psychology tests (TAT, WAT, SRT), GTO tasks, personal interview, and conference. Tips from ex-SSB officers.",
        image: "/images/nccSSB1.jpg",
        slug: "ssb-interview-guide",
    },
    {
        title: "How to Join Indian Army, Navy & Air Force After 12th",
        date: "Jun 5, 2025",
        excerpt: "All defence career paths explained — NDA, Agniveer, TES, NCC Special Entry, and more. Complete guide for 12th pass students aspiring to serve the nation.",
        image: "/images/1707393182_indian-army.jpg",
        slug: "defence-career-after-12th",
    },
    {
        title: "NDA vs CDS — Which Defence Exam Should You Choose?",
        date: "May 28, 2025",
        excerpt: "A detailed comparison of NDA and CDS exams — eligibility, syllabus, exam pattern, career prospects. Find out which defence exam is right for you.",
        image: "/images/gallery8.jpg",
        slug: "nda-vs-cds",
    },
    {
        title: "Defence Coaching Near Me in Lucknow — Locations & Guide",
        date: "May 20, 2025",
        excerpt: "Looking for NDA coaching near Alambagh or Indiranagar? Here's your guide to finding the best defence academy in Lucknow.",
        image: "/images/classroom-1.jpg",
        slug: "defence-coaching-near-me",
    },
];

export default function BlogPage() {
    return (
        <main className="bg-primary min-h-screen pb-20">
            <PageHeader
                title="Defence Blog"
                subtitle="Expert Tips, News & Guides"
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
                                <Link href={`/blog/${post.slug}`} className="text-gold text-sm font-semibold flex items-center gap-2 hover:gap-3 transition-all">
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
