"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, User, Phone, BookOpen, GraduationCap } from "lucide-react";
import { Button } from "./ui/Button";

export default function LeadPopup() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            setIsSubmitted(true);
            setTimeout(() => {
                handleClose();
            }, 2000);
        }, 1000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="bg-[#0f172a] border border-gold/40 rounded-2xl shadow-[0_0_50px_rgba(212,175,55,0.15)] w-full max-w-lg overflow-hidden relative"
                    >
                        {/* Decorative Gradient Line */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>

                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10 bg-white/5 rounded-full p-1 hover:bg-white/10"
                        >
                            <X size={20} />
                        </button>

                        <div className="p-8 pb-0 text-center relative">
                            {/* Background Glow */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-gold/10 rounded-full blur-3xl pointer-events-none"></div>

                            <h3 className="text-3xl font-bold text-white mb-2 relative z-10">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gold to-white">
                                    Unlock Your Potential
                                </span>
                            </h3>
                            <p className="text-gray-400 text-sm max-w-xs mx-auto relative z-10">
                                Join India's Elite Defence Academy. Book your free consultation call now.
                            </p>
                        </div>

                        <div className="p-8">
                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex flex-col items-center justify-center py-10 text-center"
                                >
                                    <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
                                        <CheckCircle className="text-green-500 w-10 h-10" />
                                    </div>
                                    <h4 className="text-2xl font-bold text-white mb-2">Request Received!</h4>
                                    <p className="text-gray-400">Our expert counselors will call you shortly.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">

                                    {/* Name Input */}
                                    <div className="relative group">
                                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-gold transition-colors">
                                            <User size={18} />
                                        </div>
                                        <input
                                            required
                                            type="text"
                                            placeholder="Full Name"
                                            className="w-full bg-[#1e293b] border border-gray-700/50 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:border-gold/50 focus:ring-1 focus:ring-gold/50 focus:outline-none transition-all"
                                        />
                                    </div>

                                    {/* Phone Input */}
                                    <div className="relative group">
                                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-gold transition-colors">
                                            <Phone size={18} />
                                        </div>
                                        <input
                                            required
                                            type="tel"
                                            placeholder="Mobile Number"
                                            className="w-full bg-[#1e293b] border border-gray-700/50 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:border-gold/50 focus:ring-1 focus:ring-gold/50 focus:outline-none transition-all"
                                        />
                                    </div>

                                    {/* Select Dropdowns */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="relative group">
                                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-gold transition-colors">
                                                <GraduationCap size={18} />
                                            </div>
                                            <select className="w-full bg-[#1e293b] border border-gray-700/50 rounded-lg pl-10 pr-4 py-3 text-white focus:border-gold/50 focus:ring-1 focus:ring-gold/50 focus:outline-none appearance-none transition-all cursor-pointer">
                                                <option>Class 11th</option>
                                                <option>Class 12th</option>
                                                <option>Graduate</option>
                                            </select>
                                        </div>

                                        <div className="relative group">
                                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-gold transition-colors">
                                                <BookOpen size={18} />
                                            </div>
                                            <select className="w-full bg-[#1e293b] border border-gray-700/50 rounded-lg pl-10 pr-4 py-3 text-white focus:border-gold/50 focus:ring-1 focus:ring-gold/50 focus:outline-none appearance-none transition-all cursor-pointer">
                                                <option>NDA</option>
                                                <option>CDS</option>
                                                <option>AFCAT</option>
                                                <option>SSB</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <Button type="submit" className="w-full bg-gradient-to-r from-gold to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold text-lg py-6 shadow-lg shadow-gold/20 border-0">
                                        BOOK FREE DEMO
                                    </Button>

                                    <p className="text-center text-xs text-gray-600 mt-4">
                                        *Your data is safe with us. We do not spam.
                                    </p>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
