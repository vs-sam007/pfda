"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, BookOpen, Star } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const mainTeachers = [
    {
        title: "Academic Head",
        name: "Mr. Atul Omar Sir",
        description: "M.Tech (Kanpur) | With over 14 years of dedicated teaching experience, he has mentored and guided 500+ successful selections in defence competitive examinations. Widely recognized for his smart calculation techniques and time-saving mathematical shortcuts, he simplifies complex concepts into clear, exam-focused strategies. His result-driven methodology, combined with strong conceptual clarity, consistently helps aspirants improve speed, accuracy, and overall performance in NDA examinations.",
        image: "/images/Atul.jpeg",
        icon: <BookOpen className="w-8 h-8 text-gold" />
    },
    {
        title: "Centre Head Indiranagar",
        name: "Annad Krishna Chauhan",
        description: "M.A. (Ancient History) | A dedicated General Studies educator, he focuses on building a strong foundation in history, current affairs, and general awareness. His clear explanations and structured teaching approach help students develop both knowledge and analytical understanding essential for competitive exams.",
        image: "/images/Anand.jpeg",
        icon: <Star className="w-8 h-8 text-gold" />
    }
];

export default function MainTeachers() {
    return (
        <section className="py-16 bg-[#24332B] border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <SectionHeading title="Management Desk" alignment="center" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {mainTeachers.map((teacher, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative overflow-hidden rounded-2xl bg-[#1B2620] border border-white/10 hover:border-gold/50 transition-all duration-300 group flex flex-col 2xl:flex-row items-stretch min-h-[250px]"
                        >
                            {/* Decorative Background gradient */}
                            <div className="absolute inset-0 bg-gradient-to-r from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            <div className="w-full 2xl:w-2/5 h-64 2xl:h-auto relative overflow-hidden shrink-0">
                                <Image 
                                    src={teacher.image}
                                    alt={teacher.name}
                                    fill
                                    className="object-contain object-top 2xl:grayscale 2xl:group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t 2xl:bg-gradient-to-r from-[#1B2620] via-[#1B2620]/60 to-transparent 2xl:to-[#1B2620]/10"></div>
                            </div>

                            <div className="w-full 2xl:w-3/5 p-6 md:p-8 relative z-10 flex flex-col justify-center">
                                <div className="flex items-center gap-6 mb-6">
                                    <div className="w-16 h-16 shrink-0 rounded-full bg-[#111827] border border-gold/20 flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.1)] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all">
                                        {teacher.icon}
                                    </div>
                                    <div>
                                        <span className="text-gold text-sm font-bold uppercase tracking-wider block mb-1">
                                            {teacher.title}
                                        </span>
                                        <h3 className="text-3xl font-bold text-white group-hover:text-gold transition-colors">
                                            {teacher.name}
                                        </h3>
                                    </div>
                                </div>
                                <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
                                    {teacher.description}
                                </p>
                            </div>

                            {/* Accent line */}
                            <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-gold to-transparent w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
