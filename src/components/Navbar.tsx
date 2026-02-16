"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/Button";

import Image from "next/image";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Results", href: "/results" },
    { name: "Gallery", href: "/gallery" },
    { name: "Branches", href: "/branches" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-nav h-[72px]" : "bg-transparent h-20"
                }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center h-full">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative w-12 h-12 transform group-hover:scale-105 transition-transform">
                        <Image
                            src="/images/logo.png"
                            alt="PFDA Logo"
                            fill
                            className="object-contain mix-blend-screen"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold text-lg leading-none text-white tracking-wide">PATH FINDER</span>
                        <span className="text-[10px] font-bold tracking-[0.2em] text-gold">DEFENCE ACADEMY</span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 h-full">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-bold uppercase tracking-wide transition-colors duration-300 flex items-center h-full group ${pathname === link.href ? "text-gold" : "text-neutral-300 hover:text-white"
                                }`}
                        >
                            <span className="relative">
                                {link.name}
                                <span className={`absolute -bottom-1 left-0 h-[2px] bg-gold transition-all duration-300 ${pathname === link.href ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                            </span>
                        </Link>
                    ))}
                    <Button variant="default" className="ml-4 self-center mt-0">
                        BOOK FREE DEMO
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="text-gold" /> : <Menu className="text-white" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-primary absolute w-full left-0 top-full overflow-hidden border-t border-white/10"
                    >
                        <div className="flex flex-col p-6 gap-6 h-full pb-32 overflow-y-auto">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-xl font-bold uppercase tracking-wide py-3 border-b border-white/5 ${pathname === link.href ? "text-gold" : "text-neutral-400"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Button className="w-full mt-4" size="lg">
                                BOOK FREE DEMO
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
