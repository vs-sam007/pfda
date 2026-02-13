"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { UserCheck } from "lucide-react";
import Image from "next/image";

const mentors = [
    {
        name: "Col. R.K. Singh",
        role: "Ex-Indian Army (Infantry)",
        specialty: "SSB Interview & Psychology",
        image: "/images/team-m-1.jpg", // Placeholder: Serious portrait
    },
    {
        name: "Major S. Gupta",
        role: "Ex-Indian Army (Artillery)",
        specialty: "GTO Specialist",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    },
    {
        name: "Gp Capt. A. Mishra",
        role: "Ex-Indian Air Force",
        specialty: "Interviewing Officer",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1976&auto=format&fit=crop",
    },
    {
        name: "Dr. P. Verma",
        role: "Psychologist",
        specialty: "Personality Development",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
    }
];

export default function Mentors() {
    return (
        <section className="py-20 bg-gradient-to-b from-[#0a0f1c] to-[#10172a]">
            <div className="container mx-auto px-4">
                <SectionHeading title="Elite Mentors" subtitle="Learn From The Legends" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {mentors.map((mentor, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-xl bg-[#0a0f1c] border border-white/5 hover:border-gold/50 transition-all text-center"
                        >
                            <div className="h-80 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-500">
                                <Image
                                    src={mentor.image}
                                    alt={mentor.name}
                                    fill
                                    className="object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-transparent to-transparent opacity-90"></div>
                                <div className="absolute bottom-4 left-0 right-0 p-4">
                                    <h3 className="text-xl font-bold text-white group-hover:text-gold transition-colors">{mentor.name}</h3>
                                    <p className="text-sm text-gold font-medium uppercase tracking-wider">{mentor.role}</p>
                                </div>
                            </div>
                            <div className="p-4 bg-[#10172a] border-t border-white/10">
                                <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
                                    <UserCheck size={14} className="text-gold" />
                                    {mentor.specialty}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
