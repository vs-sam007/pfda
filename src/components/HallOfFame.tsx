"use client";

import { motion } from "framer-motion";
import { Award, Star, Trophy, Medal } from "lucide-react";
import Image from "next/image";

// Top Rankers Data - Hall of Fame
const hallOfFameData = [
    {
        name: "Ashish Kumar Kushwaha",
        rank: "AIR 53",
        exam: "NDA 151",
        year: "2024",
        image: "/selections/WhatsApp Image 2026-04-17 at 2.00.02 PM.jpeg",
        icon: <Trophy className="w-12 h-12 text-gold" />,
    },
    {
        name: "Vedant Tripathi",
        rank: "Final Rec.",
        exam: "CDS Entry",
        year: "2024",
        image: "/selections/WhatsApp Image 2026-07-24 at 15.21.33.jpeg",
        icon: <Medal className="w-12 h-12 text-gold" />,
    },
    {
        name: "Sanchit Verma",
        rank: "Selected",
        exam: "TES 53",
        year: "2024",
        image: "/selections/WhatsApp Image 2026-07-24 at 15.19.38.jpeg",
        icon: <Star className="w-12 h-12 text-gold" />,
    },
    {
        name: "Harshvardhan P. Singh",
        rank: "Selected",
        exam: "NDA, CDS, SSB",
        year: "2024",
        image: "/selections/WhatsApp Image 2026-07-24 at 15.23.18.jpeg",
        icon: <Award className="w-12 h-12 text-gold" />,
    }
];

const otherSelections = [
    { image: "/selections/WhatsApp Image 2026-04-17 at 2.00.01 PM (2).jpeg", name: "Aman Pal" },
    { image: "/selections/WhatsApp Image 2026-04-17 at 2.00.01 PM.jpeg", name: "Suyash Kumar" },
    { image: "/selections/WhatsApp Image 2026-04-17 at 2.00.02 PM (1).jpeg", name: "Shrishti Tyagi" },
    { image: "/selections/WhatsApp Image 2026-04-17 at 2.00.04 PM (1).jpeg", name: "Adarsh Verma" },
    { image: "/selections/WhatsApp Image 2026-04-17 at 2.00.04 PM.jpeg", name: "Jamshed Alam" },
    { image: "/selections/WhatsApp Image 2026-04-17 at 2.00.02 PM (2).jpeg", name: "Mridulesh Tiwari" },
    { image: "/selections/WhatsApp Image 2026-04-17 at 2.00.03 PM (2).jpeg", name: "Anushikha" },
    { image: "/selections/Aditya Sukla.jpeg", name: "Aditya Shukla" },
    { image: "/selections/Mansi Gupta.jpeg", name: "Maansi Gupta" },
    { image: "/selections/Utkarsh.jpeg", name: "Utkarsh" },
    { image: "/selections/WhatsApp Image 2026-04-17 at 2.00.03 PM (1).jpeg", name: "Parth Tiwari" },
];

export default function HallOfFame({ showMoreSelections = false }: { showMoreSelections?: boolean }) {
    return (
        <section className="py-16 bg-[#1B2620]">
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {hallOfFameData.map((student, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-[#111827] border border-white/5 rounded-xl p-4 text-center relative group hover:border-gold/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] overflow-hidden"
                        >
                            {/* Decorative Background */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold/5 rounded-full blur-3xl group-hover:bg-gold/10 transition-colors"></div>

                            {student.image ? (
                                <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden group-hover:scale-[1.02] transition-transform duration-300 flex items-center justify-center">
                                    <Image
                                        src={student.image}
                                        alt={student.name}
                                        width={600}
                                        height={800}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            ) : (
                                <div className="py-8">
                                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#1a202c] to-[#1B2620] border border-gold/20 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 overflow-hidden relative">
                                        {student.icon}
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
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Other Selections Grid */}
                {showMoreSelections && (
                    <>
                        <div className="text-center mb-10">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                More <span className="text-gold">Selections</span>
                            </h3>
                            <p className="text-gray-400 text-sm">
                                Consistent results year after year
                            </p>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                            {otherSelections.map((student, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    className="bg-[#111827] border border-white/5 rounded-xl p-3 relative group hover:border-gold/50 transition-all duration-300 overflow-hidden"
                                >
                                    <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden group-hover:scale-[1.02] transition-transform duration-300 flex items-center justify-center">
                                        <Image
                                            src={student.image}
                                            alt={student.name}
                                            width={400}
                                            height={500}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}
