"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { MapPin, Phone, ArrowRight, Navigation } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BranchesPreview() {
    return (
        <section className="py-12 bg-[#1B2620] relative">
            <div className="container mx-auto px-4">
                <SectionHeading title="Our Branches" subtitle="Visit Us Today in Lucknow" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Alambagh Branch */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#24332B] rounded-2xl border border-white/5 shadow-2xl flex flex-col md:flex-row"
                    >
                        <div className="w-full md:w-1/2 h-64 md:h-auto bg-gray-800 relative">
                            <Image
                                src="/images/images.jpg" // Education building
                                alt="Pathfinder Defence Academy Alambagh Lucknow Campus — Singar Nagar Metro"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                        <div className="p-8 w-full md:w-1/2 flex flex-col justify-center">
                            <h3 className="text-2xl font-bold text-white mb-4">Alambagh Branch</h3>
                            <div className="space-y-4 mb-6">
                                <div className="flex items-start gap-3 text-gray-400">
                                    <MapPin className="text-gold shrink-0 mt-1" size={18} />
                                    <p className="text-sm">Metro Station, 3rd Floor, KSM Plaza, 826-Sneh Nagar Mod, Opposite to Hero Showroom, Singar nagar, Alambagh - 226005</p>
                                </div>
                                <div className="flex items-center gap-3 text-gray-400">
                                    <Phone className="text-gold shrink-0" size={18} />
                                    <a href="tel:+917505188009" className="text-sm hover:text-gold transition-colors">+91 75051 88009</a>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <Link 
                                    href="/branches/alambagh" 
                                    className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-yellow-400 text-black font-bold py-2.5 px-4 rounded-xl shadow-md hover:shadow-gold/20 transition-all text-xs uppercase tracking-wider group"
                                >
                                    <span>Explore Branch</span>
                                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                                </Link>
                                <a 
                                    href="https://maps.app.goo.gl/EBqtfWVp8Akaeeki7" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white hover:text-gold border border-white/15 hover:border-gold/40 font-semibold py-2.5 px-4 rounded-xl transition-all text-xs uppercase tracking-wider"
                                >
                                    <Navigation size={14} className="text-gold" />
                                    <span>Directions</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Indira Nagar Branch */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#24332B] rounded-2xl border border-white/5 shadow-2xl flex flex-col md:flex-row"
                    >
                        <div className="w-full md:w-1/2 h-64 md:h-auto bg-gray-800 md:order-2 relative">
                            <Image
                                src="/images/Pathfinderimg.JPG" // College campus
                                alt="Pathfinder Defence Academy Indira Nagar Lucknow Campus — Sector 8"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                        <div className="p-8 w-full md:w-1/2 flex flex-col justify-center md:order-1">
                            <h3 className="text-2xl font-bold text-white mb-4">Indira Nagar Branch</h3>
                            <div className="space-y-4 mb-6">
                                <div className="flex items-start gap-3 text-gray-400">
                                    <MapPin className="text-gold shrink-0 mt-1" size={18} />
                                    <p className="text-sm">Uma Krishna Complex, Murari Nagar, Lucknow, UP 226016</p>
                                </div>
                                <div className="flex items-start gap-3 text-gray-400">
                                    <Phone className="text-gold shrink-0 mt-1" size={18} />
                                    <a href="tel:+918115011771" className="text-sm hover:text-gold transition-colors">+91 81150 11771</a>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <Link 
                                    href="/branches/indiranagar" 
                                    className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-yellow-400 text-black font-bold py-2.5 px-4 rounded-xl shadow-md hover:shadow-gold/20 transition-all text-xs uppercase tracking-wider group"
                                >
                                    <span>Explore Branch</span>
                                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                                </Link>
                                <a 
                                    href="https://maps.app.goo.gl/hpaLiDeWJZzRhmVy6" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white hover:text-gold border border-white/15 hover:border-gold/40 font-semibold py-2.5 px-4 rounded-xl transition-all text-xs uppercase tracking-wider"
                                >
                                    <Navigation size={14} className="text-gold" />
                                    <span>Directions</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
