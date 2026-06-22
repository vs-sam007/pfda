"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Grid, Send, TrendingUp, Menu, X, Info, BookOpen, Image as ImageIcon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function MobileBottomNav() {
    const pathname = usePathname();
    const [isMoreOpen, setIsMoreOpen] = useState(false);

    const navItems = [
        { name: "Home", href: "/", icon: Home },
        { name: "Courses", href: "/courses", icon: Grid },
    ];

    const rightNavItems = [
        { name: "Results", href: "/results", icon: TrendingUp },
    ];

    const moreItems = [
        { name: "Gallery", href: "/gallery", icon: <ImageIcon className="w-5 h-5 text-[#4f46e5]" />, bg: "bg-[#eef2ff]", text: "text-[#3730a3]" },
        { name: "About Us", href: "/about", icon: <Info className="w-5 h-5 text-[#9333ea]" />, bg: "bg-[#f3e8ff]", text: "text-[#6b21a8]" },
        { name: "Branches", href: "/branches", icon: <BookOpen className="w-5 h-5 text-[#e11d48]" />, bg: "bg-[#ffe4e6]", text: "text-[#9f1239]" },
    ];

    return (
        <div className="md:hidden">
            {/* Backdrop for the 'More' menu */}
            <AnimatePresence>
                {isMoreOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/60 z-[60]"
                            onClick={() => setIsMoreOpen(false)}
                        />
                        {/* Floating More Menu */}
                        <div className="fixed bottom-24 right-4 z-[61] flex flex-col items-end">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                className="flex flex-col gap-3 items-end"
                            >
                                {moreItems.map((item, idx) => (
                                    <Link key={idx} href={item.href} onClick={() => setIsMoreOpen(false)}>
                                        <motion.div
                                            initial={{ opacity: 0, x: 20, scale: 0.9 }}
                                            animate={{ opacity: 1, x: 0, scale: 1 }}
                                            exit={{ opacity: 0, x: 20, scale: 0.9 }}
                                            transition={{ delay: idx * 0.05 }}
                                            className={`flex items-center gap-3 ${item.bg} px-6 py-3 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:scale-105 transition-transform border border-white/50`}
                                        >
                                            {item.icon}
                                            <span className={`${item.text} font-bold text-sm tracking-wide whitespace-nowrap`}>
                                                {item.name}
                                            </span>
                                        </motion.div>
                                    </Link>
                                ))}
                            </motion.div>
                        </div>
                    </>
                )}
            </AnimatePresence>

            {/* Bottom Navigation Bar */}
            <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 z-[70] shadow-[0_-10px_40px_rgba(0,0,0,0.1)] rounded-t-2xl pb-1">
                <div className="flex justify-between items-center h-[68px] relative px-2">
                    
                    {/* Left Items */}
                    <div className="flex w-[40%] justify-around items-center h-full">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                            return (
                                <Link key={item.name} href={item.href} className="flex flex-col items-center justify-center w-full h-full text-gray-500 hover:text-[#1B2620] relative pt-1">
                                    <Icon className={`w-6 h-6 mb-1 ${isActive ? "text-gold" : ""}`} />
                                    <span className={`text-[10px] font-bold ${isActive ? "text-[#1B2620]" : ""}`}>{item.name}</span>
                                    {isActive && <div className="absolute bottom-1 w-1.5 h-1.5 rounded-full bg-gold"></div>}
                                </Link>
                            )
                        })}
                    </div>

                    {/* Center Floating Action Button */}
                    <div className="absolute left-1/2 -translate-x-1/2 -top-6 flex flex-col items-center justify-center">
                        <Link href="/contact" className="bg-[#1B2620] text-white w-14 h-14 flex items-center justify-center rounded-full shadow-[0_8px_20px_rgba(30,27,75,0.4)] border-[5px] border-white transform hover:scale-105 transition-transform">
                            <Send className="w-6 h-6 ml-1" />
                        </Link>
                        <span className="text-[10px] font-extrabold text-[#1B2620] mt-1.5 tracking-wider uppercase">Enquire</span>
                    </div>

                    {/* Right Items */}
                    <div className="flex w-[40%] justify-around items-center h-full">
                        {rightNavItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                            return (
                                <Link key={item.name} href={item.href} className="flex flex-col items-center justify-center w-full h-full text-gray-500 hover:text-[#1B2620] relative pt-1">
                                    <Icon className={`w-6 h-6 mb-1 ${isActive ? "text-gold" : ""}`} />
                                    <span className={`text-[10px] font-bold ${isActive ? "text-[#1B2620]" : ""}`}>{item.name}</span>
                                    {isActive && <div className="absolute bottom-1 w-1.5 h-1.5 rounded-full bg-gold"></div>}
                                </Link>
                            )
                        })}
                        
                        {/* More Button */}
                        <button onClick={() => setIsMoreOpen(!isMoreOpen)} className="flex flex-col items-center justify-center w-full h-full text-gray-500 hover:text-[#1B2620] relative pt-1">
                            {isMoreOpen ? <X className="w-6 h-6 mb-1 text-gold" /> : <Menu className="w-6 h-6 mb-1" />}
                            <span className={`text-[10px] font-bold ${isMoreOpen ? "text-[#1B2620]" : ""}`}>More</span>
                            {isMoreOpen && <div className="absolute bottom-1 w-1.5 h-1.5 rounded-full bg-gold"></div>}
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}
