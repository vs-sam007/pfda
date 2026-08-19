"use client";

import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import { Calendar, ArrowLeft, Clock, Share2, Facebook, Twitter, Linkedin, ChevronRight } from "lucide-react";

interface BlogArticleProps {
    title: string;
    date: string;
    readTime: string;
    heroImage: string;
    children: React.ReactNode;
}

export default function BlogArticle({ title, date, readTime, heroImage, children }: BlogArticleProps) {
    return (
        <main className="bg-primary min-h-screen pb-20 font-sans">
            <PageHeader
                title={title}
                subtitle="PFDA Defence Blog"
                image={heroImage}
            />

            <div className="container mx-auto px-4 py-12 max-w-7xl">
                {/* Breadcrumbs */}
                <nav className="mb-10">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-gold hover:text-white transition-colors">
                        <ArrowLeft size={16} /> Back to Articles
                    </Link>
                </nav>

                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    
                    {/* Main Content Area */}
                    <article className="lg:w-2/3 w-full">
                        <div className="bg-[#1B2620]/40 backdrop-blur-sm border border-gold/10 rounded-[2rem] p-6 md:p-14 shadow-2xl relative overflow-hidden">
                            
                            {/* Decorative Top Accent */}
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50"></div>

                            {/* Meta */}
                            <div className="flex flex-wrap items-center gap-4 md:gap-8 text-gray-400 text-sm md:text-base font-medium mb-12 border-b border-white/5 pb-8">
                                <div className="flex items-center gap-2">
                                    <div className="bg-white/5 p-2 rounded-full text-gold">
                                        <Calendar size={18} />
                                    </div>
                                    <time>{date}</time>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="bg-white/5 p-2 rounded-full text-gold">
                                        <Clock size={18} />
                                    </div>
                                    <span>{readTime} read</span>
                                </div>
                            </div>

                            {/* Prose Content */}
                            <div className="
                                prose prose-invert max-w-none
                                prose-p:text-gray-300 prose-p:text-lg md:prose-p:text-xl prose-p:leading-[2] prose-p:mb-10
                                prose-headings:text-white prose-headings:font-black prose-headings:tracking-tight
                                prose-h2:text-4xl md:prose-h2:text-5xl prose-h2:mt-20 prose-h2:mb-8 prose-h2:text-white prose-h2:border-b prose-h2:border-gold/30 prose-h2:pb-4
                                prose-h3:text-2xl md:prose-h3:text-3xl prose-h3:mt-14 prose-h3:mb-6 prose-h3:text-gold
                                prose-li:text-gray-300 prose-li:text-lg md:prose-li:text-xl prose-li:leading-[2] prose-li:mb-6 prose-li:marker:text-gold
                                prose-ul:my-12 prose-ul:list-disc prose-ul:pl-8
                                prose-strong:text-white prose-strong:font-bold
                                prose-a:text-gold prose-a:no-underline hover:prose-a:underline
                                [&>p:first-of-type]:text-xl md:[&>p:first-of-type]:text-2xl [&>p:first-of-type]:leading-relaxed [&>p:first-of-type]:text-gray-200 [&>p:first-of-type]:mb-12
                                [&>p:first-of-type]:first-letter:text-[5rem] md:[&>p:first-of-type]:first-letter:text-[7rem] [&>p:first-of-type]:first-letter:font-black [&>p:first-of-type]:first-letter:text-gold [&>p:first-of-type]:first-letter:float-left [&>p:first-of-type]:first-letter:mr-6 [&>p:first-of-type]:first-letter:mt-2 [&>p:first-of-type]:first-letter:leading-none
                            ">
                                {children}
                            </div>
                        </div>

                        {/* CTA Inside Article */}
                        <div className="mt-12 bg-gradient-to-br from-[#24332B] to-[#1B2620] rounded-[2rem] p-8 md:p-12 text-center border border-gold/20 shadow-2xl relative overflow-hidden group">
                            <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10 group-hover:opacity-20 transition-opacity"></div>
                            <div className="relative z-10">
                                <h3 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase tracking-tight">Ready To Wear The Uniform?</h3>
                                <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                                    Join the league of extraordinary officers. Book your free demo class at Path Finder Defence Academy today and experience the difference.
                                </p>
                                <Link href="/contact" className="inline-block bg-gold text-black font-black px-10 py-5 rounded-full hover:bg-white transition-colors uppercase tracking-widest text-lg shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                                    Book Free Demo Now
                                </Link>
                            </div>
                        </div>
                    </article>

                    {/* Sticky Sidebar */}
                    <aside className="lg:w-1/3 w-full sticky top-32 space-y-8">
                        
                        {/* Author/About Box */}
                        <div className="bg-[#24332B] rounded-3xl p-8 border border-white/5 shadow-xl text-center">
                            <div className="w-24 h-24 mx-auto bg-[#1B2620] rounded-full flex items-center justify-center mb-6 border-2 border-gold/30">
                                <img src="/images/logo.png" alt="PFDA Logo" className="w-16 h-16 object-contain mix-blend-screen" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Written by PFDA Team</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                Path Finder Defence Academy is Lucknow's premier defence coaching institute, helping aspirants crack NDA, CDS, AFCAT, and SSB with 1000+ selections.
                            </p>
                            <Link href="/about" className="text-gold text-sm font-bold uppercase tracking-wider hover:text-white transition-colors inline-flex items-center gap-1">
                                Read More About Us <ChevronRight size={16} />
                            </Link>
                        </div>

                        {/* Share Links */}
                        <div className="bg-[#24332B] rounded-3xl p-8 border border-white/5 shadow-xl">
                            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                                <Share2 className="text-gold" size={20} /> Share This Article
                            </h3>
                            <div className="flex gap-4">
                                <button className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:bg-[#1877F2] hover:text-white transition-all">
                                    <Facebook size={20} />
                                </button>
                                <button className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:bg-[#1DA1F2] hover:text-white transition-all">
                                    <Twitter size={20} />
                                </button>
                                <button className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:bg-[#0A66C2] hover:text-white transition-all">
                                    <Linkedin size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="bg-[#24332B] rounded-3xl p-8 border border-white/5 shadow-xl">
                            <h3 className="text-lg font-bold text-white mb-6 border-b border-white/5 pb-4">Popular Topics</h3>
                            <ul className="space-y-4">
                                <li>
                                    <Link href="/blog/how-to-crack-nda" className="group flex items-start gap-3">
                                        <ChevronRight className="text-gold shrink-0 mt-1" size={16} />
                                        <span className="text-gray-400 group-hover:text-gold transition-colors line-clamp-2">How to Crack NDA Exam in First Attempt</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog/ssb-interview-guide" className="group flex items-start gap-3">
                                        <ChevronRight className="text-gold shrink-0 mt-1" size={16} />
                                        <span className="text-gray-400 group-hover:text-gold transition-colors line-clamp-2">Complete SSB Interview Preparation Guide</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog/nda-vs-cds" className="group flex items-start gap-3">
                                        <ChevronRight className="text-gold shrink-0 mt-1" size={16} />
                                        <span className="text-gray-400 group-hover:text-gold transition-colors line-clamp-2">NDA vs CDS — Which Defence Exam Should You Choose?</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </aside>
                </div>
            </div>
        </main>
    );
}
