"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Star, Play } from "lucide-react";
import Image from "next/image";

import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";

export default function Testimonials() {
    const testimonials = [
        {
            name: "Rahul Singh",
            role: "NDA 151 Recommended",
            image: "https://placehold.co/150x150/1B2620/D4AF37.png?text=RS",
            quote: "PFDA transformed my life. The discipline and rigorous training helped me clear my SSB in the first attempt. Forever grateful."
        },
        {
            name: "Priya Sharma",
            role: "CDS 2024 OTA",
            image: "https://placehold.co/150x150/1B2620/D4AF37.png?text=PS",
            quote: "The mentors at PFDA are exceptional. Their guidance on GTO tasks and psychology tests was spot on. Highly recommended!"
        },
        {
            name: "Amit Kumar",
            role: "AFCAT 2024 Flying Branch",
            image: "https://placehold.co/150x150/1B2620/D4AF37.png?text=AK",
            quote: "Joining PFDA was the best decision. The environment is motivating, and the focus on personality development is unique."
        },
        {
            name: "Vikram Batra",
            role: "TES 50 Army",
            image: "https://placehold.co/150x150/1B2620/D4AF37.png?text=VB",
            quote: "From checking physical fitness to mock interviews, PFDA covers everything. I felt confident walking into my SSB."
        },
    ];

    return (
        <section className="py-12 bg-[#050810] overflow-hidden">
            <div className="container mx-auto px-4 mb-10">
                <SectionHeading title="Cadet Stories" subtitle="What Our Students Say" />
            </div>

            <div className="relative w-full">
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050810] to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050810] to-transparent z-10 pointer-events-none"></div>

                <InfiniteSlider gap={32} speedOnHover={20}>
                    {testimonials.map((student, i) => (
                        <div
                            key={i}
                            className="w-[350px] bg-[#24332B] rounded-xl p-6 border border-white/5 relative group shrink-0 hover:border-gold/30 transition-colors"
                        >
                            <div className="flex text-gold mb-4">
                                {[...Array(5)].map((_, idx) => (
                                    <Star key={idx} size={16} fill="currentColor" />
                                ))}
                            </div>
                            <p className="text-gray-300 mb-6 italic text-sm leading-relaxed">
                                "{student.quote}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gray-700 overflow-hidden relative">
                                    <Image
                                        src={student.image}
                                        alt={student.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-sm">{student.name}</h4>
                                    <p className="text-[10px] text-gray-500 uppercase tracking-wider">{student.role}</p>
                                </div>
                            </div>

                            {/* Video Thumbnail Style Overlay */}
                            <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors cursor-pointer">
                                <Play size={14} className="text-gold fill-gold ml-0.5" />
                            </div>
                        </div>
                    ))}
                </InfiniteSlider>
            </div>
        </section>
    );
}
