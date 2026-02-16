"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MapPin, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/Button";

import Image from "next/image";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
        name: "Courses",
        href: "/courses",
        dropdown: [
            { name: "NDA", href: "/courses/nda" },
            { name: "CDS", href: "/courses/cds" },
            { name: "SSB", href: "/courses/ssb" },
            { name: "NDA Foundation", href: "/courses/foundation" },
            { name: "AFCAT", href: "/courses/afcat" },
            { name: "CAPF", href: "/courses/capf" },
            { name: "Sainik School", href: "/courses/sainik-school" },
            { name: "Agniveer", href: "/courses/agniveer" },
        ]
    },
    { name: "Results", href: "/results" },
    {
        name: "Gallery",
        href: "/gallery",
        dropdown: [
            { name: "Photo gallery", href: "/gallery/photos" },
            { name: "Video gallery", href: "/gallery/videos" },
        ]
    },
    {
        name: "Branches",
        href: "/branches",
        dropdown: [
            { name: "Alambagh", href: "/branches/alambagh" },
            { name: "Indiranagar", href: "/branches/indiranagar" },
        ]
    },
    { name: "Student", href: "/student" },
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
                        <div key={link.name} className="relative group h-full flex items-center">
                            <Link
                                href={link.href}
                                className={`text-sm font-bold uppercase tracking-wide transition-colors duration-300 flex items-center h-full gap-1 ${pathname === link.href || (link.dropdown && pathname.startsWith(link.href) && link.href !== "/") ? "text-gold" : "text-neutral-300 hover:text-white"
                                    }`}
                            >
                                <span className="relative">
                                    {link.name}
                                    <span className={`absolute -bottom-1 left-0 h-[2px] bg-gold transition-all duration-300 ${pathname === link.href ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                                </span>
                                {link.dropdown && <ChevronDown className="w-4 h-4" />}
                            </Link>

                            {/* Dropdown Menu */}
                            {link.dropdown && (
                                <div className="absolute top-full left-0 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 pt-2">
                                    <div className="bg-primary border border-gold/20 rounded-md shadow-xl overflow-hidden">
                                        {link.dropdown.map((subLink) => (
                                            <Link
                                                key={subLink.name}
                                                href={subLink.href}
                                                className="block px-4 py-3 text-sm text-neutral-300 hover:text-white hover:bg-white/5 border-b border-white/5 last:border-0 transition-colors"
                                            >
                                                {subLink.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
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
                        <div className="flex flex-col p-6 h-full pb-32 overflow-y-auto">
                            {navLinks.map((link) => (
                                <div key={link.name} className="border-b border-white/5 last:border-0">
                                    {link.dropdown ? (
                                        <div className="py-3">
                                            <div className="flex justify-between items-center text-xl font-bold uppercase tracking-wide text-neutral-400 mb-2">
                                                {link.name}
                                                <ChevronDown className="w-5 h-5" />
                                            </div>
                                            <div className="pl-4 flex flex-col gap-2 border-l border-gold/20 ml-1">
                                                {link.dropdown.map((subLink) => (
                                                    <Link
                                                        key={subLink.name}
                                                        href={subLink.href}
                                                        onClick={() => setIsOpen(false)}
                                                        className="text-base text-neutral-400 py-1 hover:text-gold"
                                                    >
                                                        {subLink.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className={`block text-xl font-bold uppercase tracking-wide py-3 ${pathname === link.href ? "text-gold" : "text-neutral-400"
                                                }`}
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                            <Button className="w-full mt-6" size="lg">
                                BOOK FREE DEMO
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
