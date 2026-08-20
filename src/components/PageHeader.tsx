"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    image?: string;
}

export default function PageHeader({
    title,
    subtitle,
    image = "/images/bg.webp"
}: PageHeaderProps) {
    return (
        <div className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-[1.05] transform"
                style={{ backgroundImage: `url('${image}')` }}
            >
                <div 
                    className="absolute inset-0"
                    style={{
                        background: "linear-gradient(rgba(10,15,28,0.5), rgba(10,15,28,0.3))"
                    }}
                ></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-6xl font-bold text-white mb-4 uppercase tracking-tight"
                >
                    {title}
                </motion.h1>
                {subtitle && (
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-gold text-lg md:text-xl font-medium tracking-widest uppercase"
                    >
                        {subtitle}
                    </motion.p>
                )}
            </div>
        </div>
    );
}
