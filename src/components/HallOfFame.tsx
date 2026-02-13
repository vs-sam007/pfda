"use client";

import { motion } from "framer-motion";
import { Award, Star, Trophy, Medal } from "lucide-react";
import Image from "next/image";

// Top Rankers Data - Hall of Fame
const hallOfFameData = [
    {
        name: "Rahul Singh",
        rank: "AIR 12",
        exam: "NDA 151",
        year: "2023",
        image: "/images/img-1.png",
        icon: <Trophy className="w-12 h-12 text-gold" />,
    },
    {
        name: "Priya Sharma",
        rank: "AIR 45",
        exam: "CDS 2024",
        year: "2024",
        image: "/images/img-1 (2).png",
        icon: <Medal className="w-12 h-12 text-gold" />,
    },
    {
        name: "Amit Kumar",
        rank: "AIR 08",
        exam: "AFCAT 2024",
        year: "2024",
        image: null,
        icon: <Star className="w-12 h-12 text-gold" />,
    },
    {
        name: "Vikram Batra",
        rank: "Rec. Rec.",
        exam: "TES 50",
        year: "2023",
        image: null,
        icon: <Award className="w-12 h-12 text-gold" />,
    }
];

export default function HallOfFame() {
    return (
        <section className="py-16 bg-[#0a0f1c]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-bold tracking-widest uppercase mb-4">
                            Excellence in Action
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Hall of <span className="text-gold">Fame</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Celebrating our top achievers who have made the nation proud.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {hallOfFameData.map((student, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-[#111827] border border-white/5 rounded-xl p-8 text-center relative group hover:border-gold/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] overflow-hidden"
                        >
                            {/* Decorative Background */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold/5 rounded-full blur-3xl group-hover:bg-gold/10 transition-colors"></div>

                            {/* Icon / Avatar Placeholder */}
                            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#1a202c] to-[#0a0f1c] border border-gold/20 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 overflow-hidden relative">
                                {student.image ? (
                                    <Image
                                        src={student.image}
                                        alt={student.name}
                                        fill
                                        className="object-cover"
                                    />
                                ) : (
                                    student.icon
                                )}
                            </div>

                            {/* Rank Badge */}
                            <div className="mb-4">
                                <span className="inline-block bg-gold text-black text-sm font-bold px-3 py-1 rounded shadow-md">
                                    {student.rank}
                                </span>
                            </div>

                            {/* Name & Details */}
                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-gold transition-colors">
                                {student.name}
                            </h3>
                            <p className="text-gray-400 text-sm font-medium mb-1">
                                {student.exam}
                            </p>
                            <p className="text-gray-600 text-xs">
                                Batch {student.year}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
