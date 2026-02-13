"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import Link from "next/link";
import Image from "next/image";

const stats = [
    { label: "Selections", value: "1000+" },
    { label: "Students", value: "5000+" },
    { label: "Expert Mentors", value: "10+" },
    { label: "Branches in Lucknow", value: "2" },
];

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/bg.jpg"
                    alt="Indian Army Cadets Training at Sunrise"
                    fill
                    className="object-cover object-center"
                    priority
                    quality={90}
                />
                {/* Dark Cinematic Overlay */}
                <div
                    className="absolute inset-0 z-10"
                    style={{
                        background: "linear-gradient(rgba(10,15,28,0.85), rgba(10,15,28,0.75))"
                    }}
                ></div>
            </div>

            <div className="container mx-auto px-4 z-20 relative flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-gold/30 text-gold text-xs font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-md">
                        Path Finder Defence Academy
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 uppercase tracking-tight leading-none drop-shadow-lg"
                >
                    India's Most Trusted <br />
                    <span className="text-gold">
                        Defence Career Academy
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-lg md:text-xl text-[#cbd5e1] mb-10 max-w-2xl font-light drop-shadow-md"
                >
                    Your Journey From Aspirant To Officer Starts Here 🇮🇳
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 mb-20"
                >
                    <Button size="lg" className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-lg shadow-red-900/30 border-0 text-lg px-8">
                        Book Free Demo
                    </Button>
                    <Link href="/courses">
                        <Button size="lg" variant="outline" className="text-lg px-8 bg-black/30 backdrop-blur-sm border-gold text-gold hover:bg-gold hover:text-black">
                            Explore Courses
                        </Button>
                    </Link>
                </motion.div>

                {/* Animated Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-5xl border-t border-white/10 pt-8"
                >
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <span className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</span>
                            <span className="text-xs md:text-sm text-gray-400 uppercase tracking-wider">{stat.label}</span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Military Texture Overlay - Subtle addition for depth */}
            <div className="absolute inset-0 pointer-events-none opacity-5 bg-[url('https://www.transparenttextures.com/patterns/camouflage.png')] mix-blend-overlay z-10"></div>
        </section>
    );
}
