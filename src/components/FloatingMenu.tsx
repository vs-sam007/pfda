"use client";

import { useState } from "react";
import { Menu, X, Info, BookOpen, Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

export default function FloatingMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { 
            name: "Gallery", 
            href: "/gallery", 
            icon: <ImageIcon className="w-5 h-5 text-[#4f46e5]" />, 
            bg: "bg-[#eef2ff]", 
            text: "text-[#3730a3]" 
        },
        { 
            name: "About Us", 
            href: "/about", 
            icon: <Info className="w-5 h-5 text-[#9333ea]" />, 
            bg: "bg-[#f3e8ff]", 
            text: "text-[#6b21a8]" 
        },
        { 
            name: "Courses", 
            href: "/courses", 
            icon: <BookOpen className="w-5 h-5 text-[#e11d48]" />, 
            bg: "bg-[#ffe4e6]", 
            text: "text-[#9f1239]" 
        },
    ];

    return (
        <div className="fixed bottom-4 right-4 z-[60] md:hidden flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Optional backdrop for better visibility over other elements like WhatsApp */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/40 z-[-1]"
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            className="flex flex-col gap-3 mb-4 items-end"
                        >
                            {menuItems.map((item, idx) => (
                                <Link key={idx} href={item.href} onClick={() => setIsOpen(false)}>
                                    <motion.div
                                        initial={{ opacity: 0, x: 20, scale: 0.9 }}
                                        animate={{ opacity: 1, x: 0, scale: 1 }}
                                        exit={{ opacity: 0, x: 20, scale: 0.9 }}
                                        transition={{ delay: idx * 0.05 }}
                                        className={`flex items-center gap-3 ${item.bg} px-6 py-3 rounded-full shadow-xl hover:scale-105 transition-transform border border-white/20`}
                                    >
                                        {item.icon}
                                        <span className={`${item.text} font-bold text-sm tracking-wide whitespace-nowrap`}>
                                            {item.name}
                                        </span>
                                    </motion.div>
                                </Link>
                            ))}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 relative z-10 ${
                    isOpen ? "bg-[#1B2620] text-white rotate-90" : "bg-white text-[#1B2620] hover:scale-105"
                }`}
            >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                {!isOpen && (
                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-gold"></span>
                    </span>
                )}
            </button>
        </div>
    );
}
