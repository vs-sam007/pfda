"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import Link from "next/link";
import Image from "next/image";
import { useDemoModal } from "./DemoModalProvider";
import { useRouter } from "next/navigation";

import { TextShimmerWave } from "@/components/motion-primitives/text-shimmer-wave";
import { TextEffect } from "@/components/motion-primitives/text-effect";
import { GlowEffect } from "@/components/motion-primitives/glow-effect";
import { Magnetic } from "@/components/motion-primitives/magnetic";

const stats = [
    { label: "Selections", value: "1000+" },
    { label: "Students", value: "5000+" },
    { label: "Expert Mentors", value: "40+" },
    { label: "Branches in Lucknow", value: "2" },
];

export default function Hero() {
    const { openDemoModal } = useDemoModal();
    const router = useRouter();

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/bg.jpg"
                    alt="Indian Army Cadets Training at Sunrise"
                    fill
                    className="object-cover object-center scale-[1.15] md:scale-110 transform"
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
                        <TextShimmerWave className="inline-block" duration={1.5}>
                            Path Finder Defence Academy
                        </TextShimmerWave>
                    </span>
                </motion.div>

                <div className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 uppercase tracking-tight leading-none drop-shadow-lg flex flex-col items-center gap-2 md:gap-4">
                    <TextEffect
                        as='span'
                        per='char'
                        delay={0.5}
                        variants={{
                            container: { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.05 } } },
                            item: { hidden: { opacity: 0, rotateX: 90, y: 10 }, visible: { opacity: 1, rotateX: 0, y: 0, transition: { duration: 0.2 } } }
                        }}
                    >
                        Best NDA & Defence
                    </TextEffect>
                    <span className="text-gold">
                        <TextEffect as='span' per='char' delay={1.5}>
                            Coaching in Lucknow
                        </TextEffect>
                    </span>
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-lg md:text-xl text-[#cbd5e1] mb-10 max-w-2xl font-light drop-shadow-md"
                >
                    Expert NDA, CDS, AFCAT & SSB Coaching by Ex-Defence Officers — Your Journey From Aspirant To Officer Starts Here 🇮🇳
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-8 mb-20"
                >
                    <div className="relative group">
                        <div className="absolute -inset-1 opacity-50 group-hover:opacity-100 transition duration-500 rounded-lg blur">
                           <GlowEffect colors={['#FF5733', '#33FF57', '#3357FF', '#F1C40F']} mode='colorShift' blur='soft' duration={3} scale={0.9} />
                        </div>
                        <Button onClick={openDemoModal} size="lg" className="relative bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-lg border-0 text-lg px-8">
                            Book Free Demo
                        </Button>
                    </div>

                    <Magnetic intensity={0.2} springOptions={{ bounce: 0.1 }} actionArea='global' range={200}>
                        <Button onClick={() => router.push('/courses')} size="lg" variant="outline" className="text-lg px-8 bg-black/30 backdrop-blur-sm border-gold text-gold hover:bg-gold hover:text-black">
                            Explore Courses
                        </Button>
                    </Magnetic>
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
