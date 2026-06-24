"use client";

import { useState } from "react";
import { X, Loader2 } from "lucide-react";
import { Button } from "./ui/Button";

interface DemoModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            phone: formData.get("phone"),
            email: formData.get("email"),
            course: formData.get("course"),
            formType: "demo",
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setStatus("success");
                setTimeout(() => {
                    setStatus("idle");
                    onClose();
                }, 3000);
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="bg-[#1B2620] border border-gold/30 rounded-2xl p-6 md:p-8 w-full max-w-md relative shadow-[0_0_40px_rgba(255,215,0,0.15)] overflow-hidden">
                {/* Background effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
                
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                >
                    <X size={24} />
                </button>

                <div className="mb-6">
                    <h2 className="text-2xl font-black text-white tracking-tight mb-2">Book Your <span className="text-gold">Free Demo</span></h2>
                    <p className="text-gray-300 text-sm">Fill out the details below and our team will schedule your trial class immediately.</p>
                </div>

                {status === "success" ? (
                    <div className="bg-green-500/10 border border-green-500/30 text-green-400 p-4 rounded-lg text-center animate-in fade-in zoom-in duration-300">
                        <h3 className="font-bold mb-1">Request Received!</h3>
                        <p className="text-sm">We will contact you shortly to confirm your demo schedule.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                        <div>
                            <label className="block text-xs font-semibold text-gray-400 mb-1 uppercase tracking-wider">Full Name *</label>
                            <input 
                                type="text" 
                                name="name" 
                                required 
                                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-all" 
                                placeholder="Enter your name" 
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-gray-400 mb-1 uppercase tracking-wider">Phone Number *</label>
                            <input 
                                type="tel" 
                                name="phone" 
                                required 
                                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-all" 
                                placeholder="10-digit mobile number" 
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-gray-400 mb-1 uppercase tracking-wider">Email (Optional)</label>
                            <input 
                                type="email" 
                                name="email" 
                                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-all" 
                                placeholder="For confirmation details" 
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-gray-400 mb-1 uppercase tracking-wider">Select Course *</label>
                            <select 
                                name="course" 
                                required 
                                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-all"
                            >
                                <option value="" disabled selected>Choose a course</option>
                                <option value="NDA">NDA</option>
                                <option value="CDS">CDS</option>
                                <option value="AFCAT">AFCAT</option>
                                <option value="SSB Interview">SSB Interview</option>
                                <option value="CAPF">CAPF</option>
                                <option value="Agniveer">Agniveer</option>
                                <option value="Sainik School">Sainik School</option>
                                <option value="Foundation">Foundation</option>
                            </select>
                        </div>
                        
                        {status === "error" && (
                            <p className="text-red-400 text-sm">Failed to send request. Please try again or call us.</p>
                        )}

                        <Button 
                            disabled={status === "loading"}
                            className="w-full bg-gradient-to-r from-gold to-yellow-500 hover:from-yellow-500 hover:to-gold text-black font-black py-3 mt-2 text-base shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-[0_0_25px_rgba(255,215,0,0.5)] transition-all"
                        >
                            {status === "loading" ? (
                                <span className="flex items-center justify-center gap-2">
                                    <Loader2 className="animate-spin" size={18} /> Processing...
                                </span>
                            ) : "BOOK MY DEMO"}
                        </Button>
                    </form>
                )}
            </div>
        </div>
    );
}
