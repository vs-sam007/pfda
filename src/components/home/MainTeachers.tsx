"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, BookOpen, Star } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const mainTeachers = [
    {
        title: "Centre Head",
        name: "Mr. Rajeev Kumar",
        description: "Leading the institution with over 20 years of experience in defense coaching, focusing on holistic development and strategic preparation for all aspirants.",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
        icon: <Star className="w-8 h-8 text-gold" />
    },
    {
        title: "Academic Head",
        name: "Dr. Alok Sharma",
        description: "Ensuring academic excellence and rigorous training standards. Dedicated to building strong conceptual foundations for competitive exams.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
        icon: <BookOpen className="w-8 h-8 text-gold" />
    },
    {
        title: "SSB Head",
        name: "Col. R.K. Singh",
        description: "Ex-Indian Army. Specializing in SSB Interview & Psychology. Helping candidates master the GTO tasks and personal interviews with confidence.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
        icon: <Award className="w-8 h-8 text-gold" />
    }
];

export default function MainTeachers() {
    return (
        <section className="py-16 bg-[#24332B] border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <SectionHeading title="Management Desk" alignment="center" />
                </div>
                <div className="flex flex-col gap-8">
                    {mainTeachers.map((teacher, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative overflow-hidden rounded-2xl bg-[#1B2620] border border-white/10 hover:border-gold/50 transition-all duration-300 group flex flex-col md:flex-row items-stretch min-h-[250px]"
                        >
                            {/* Decorative Background gradient */}
                            <div className="absolute inset-0 bg-gradient-to-r from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            <div className="w-full md:w-1/3 h-64 md:h-auto relative overflow-hidden shrink-0">
                                <Image 
                                    src={teacher.image}
                                    alt={teacher.name}
                                    fill
                                    className="object-cover object-top md:grayscale md:group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#1B2620] via-[#1B2620]/60 to-transparent md:to-[#1B2620]/10"></div>
                            </div>

                            <div className="w-full md:w-2/3 p-8 md:p-12 relative z-10 flex flex-col justify-center">
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
