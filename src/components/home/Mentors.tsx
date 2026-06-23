"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { UserCheck } from "lucide-react";
import Image from "next/image";

const mentors = [
    {
        name: "MAJ. GEN. S.K. SINGH",
        role: "Ex. Psychologist",
        specialty: "Ex. Commandant, Kapurthala SSB",
        image: "/images/sksingh.jpeg",
    },
    {
        name: "Col. Ashok Pathak",
        role: "Ex GTO",
        specialty: "ALLAHABAD & BHOPAL SSB",
        image: "/images/ashokpathak.jpeg",
    },
    {
        name: "COL. PRAVEEN KUMAR",
        role: "Ex. I.O.",
        specialty: "Ex Instructor of NDA & IMA",
        image: "/images/praveensrivastava.jpeg",
    },
    {
        name: "GP CPT. L.K. PANDEY",
        role: "Ex Psychologist",
        specialty: "Deputy President AFSB/SSB",
        image: "/images/lkpandey.jpeg",
    },
    {
        name: "GP. CAPT. A.K. SRIVASTAVA",
        role: "Ex Psychologist",
        specialty: "Varanasi 4AFSB, Mysore 2AFSB",
        image: "/images/aksrivastava.jpeg",
    },
    {
        name: "A.C. Sarvesh Tripathi",
        role: "Ex Assistant Commandant",
        specialty: "CRPF",
        image: "/images/serveshtripathi.jpeg",
    }
];

export default function Mentors() {
    return (
        <section className="py-20 bg-gradient-to-b from-[#1B2620] to-[#24332B]">
            <div className="container mx-auto px-4">
                <SectionHeading title="Elite Mentors" subtitle="Learn From The Legends" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mentors.map((mentor, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-xl bg-[#1B2620] border border-white/5 hover:border-gold/50 transition-all text-center"
                        >
                            <div className="h-56 overflow-hidden relative md:grayscale md:group-hover:grayscale-0 transition-all duration-500">
                                <Image
                                    src={mentor.image}
                                    alt={mentor.name}
                                    fill
                                    quality={100}
                                    className="object-contain object-center transform group-hover:scale-105 transition-transform duration-700"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1B2620] via-transparent to-transparent opacity-90"></div>
                                <div className="absolute bottom-4 left-0 right-0 p-4">
                                    <h3 className="text-xl font-bold text-white group-hover:text-gold transition-colors">{mentor.name}</h3>
                                    <p className="text-sm text-gold font-medium uppercase tracking-wider">{mentor.role}</p>
                                </div>
                            </div>
                            <div className="p-4 bg-[#24332B] border-t border-white/10">
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
