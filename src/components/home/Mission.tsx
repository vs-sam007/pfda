"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Shield, Target, Users } from "lucide-react";

const features = [
    {
        icon: <Shield className="w-12 h-12 text-gold" />,
        title: "Iron Discipline",
        description: "We instill military-grade discipline from day one, forming the bedrock of officer qualities.",
    },
    {
        icon: <Target className="w-12 h-12 text-gold" />,
        title: "Laser Focus",
        description: "Our curriculum is hyper-focused on exam patterns, ensuring every hour spent yields results.",
    },
    {
        icon: <Users className="w-12 h-12 text-gold" />,
        title: "Officer Like Qualities",
        description: "Beyond academics, we groom your personality to match the high standards of the armed forces.",
    },
];

export default function Mission() {
    return (
        <section className="py-20 relative bg-primary overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <SectionHeading title="Our Mission" subtitle="Serving the Nation" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-[#10172a]/50 backdrop-blur-sm border border-gold/10 p-8 rounded-xl hover:border-gold/30 transition-all group text-center"
                        >
                            <div className="bg-gradient-to-br from-gold/10 to-transparent p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wide group-hover:text-gold transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="bg-gradient-to-r from-military-dark to-military/80 rounded-2xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <motion.h3
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6 font-serif italic relative z-10"
                    >
                        "One Officer From Every Family"
                    </motion.h3>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto relative z-10">
                        Our vision is to empower every household with the pride of serving the motherland. We are not just an academy; we are a nursery for patriots.
                    </p>
                </div>
            </div>
        </section>
    );
}
