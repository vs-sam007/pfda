"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

export default function FloatingCTA() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="fixed bottom-24 left-4 md:bottom-8 md:left-8 z-50 flex items-center justify-center"
        >
            {/* Ping effect behind the button */}
            <div className="absolute inset-0 rounded-full bg-gold opacity-75 animate-ping"></div>
            
            {/* The actual button */}
            <Link 
                href="/contact" 
                className="relative bg-[#e11d48] text-white font-bold tracking-wide uppercase px-5 py-3 md:px-6 md:py-4 rounded-full shadow-2xl flex items-center gap-2 border-2 border-white/20 transition-transform hover:scale-105"
            >
                <Calendar className="w-5 h-5" />
                <span className="text-sm md:text-base">Book Free Demo Now</span>
            </Link>
        </motion.div>
    );
}
