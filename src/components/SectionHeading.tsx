"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    className?: string;
    alignment?: "center" | "left";
}

export default function SectionHeading({
    title,
    subtitle,
    className,
    alignment = "center",
}: SectionHeadingProps) {
    return (
        <div
            className={cn(
                "mb-12 flex flex-col gap-2",
                alignment === "center" ? "items-center text-center" : "items-start text-left",
                className
            )}
        >
            {subtitle && (
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-gold font-bold uppercase tracking-widest text-sm"
                >
                    {subtitle}
                </motion.span>
            )}
            <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-white"
            >
                {title}
                <span className="block h-1 w-20 bg-gold mt-4 rounded-full mx-auto" style={{ marginLeft: alignment === 'left' ? '0' : 'auto', marginRight: alignment === 'left' ? 'auto' : 'auto' }}></span>
            </motion.h2>
        </div>
    );
}
