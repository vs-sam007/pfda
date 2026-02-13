"use client";

import { Phone, MessageCircle, Calendar } from "lucide-react";
import { Button } from "./ui/Button";

export default function StickyMobileBar() {
    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0a0f1c]/95 backdrop-blur-md border-t border-white/10 px-4 py-3 pb-6 flex gap-3 shadow-[0_-4px_20px_rgba(0,0,0,0.5)]">
            <a
                href="tel:+919999999999"
                className="flex-1 flex flex-col items-center justify-center gap-1 text-white bg-neutral-800/50 rounded-lg py-2 active:scale-95 transition-transform"
            >
                <Phone size={18} className="text-[#d4af37]" />
                <span className="text-[10px] uppercase font-bold tracking-wide">Call</span>
            </a>

            <a
                href="https://wa.me/919999999999"
                className="flex-1 flex flex-col items-center justify-center gap-1 text-white bg-green-900/20 border border-green-500/20 rounded-lg py-2 active:scale-95 transition-transform"
            >
                <MessageCircle size={18} className="text-green-500" />
                <span className="text-[10px] uppercase font-bold tracking-wide">WhatsApp</span>
            </a>

            <Button
                className="flex-[2] bg-[#ff3b3b] hover:bg-red-700 text-white font-bold rounded-lg active:scale-95 shadow-lg shadow-red-900/20"
            >
                <Calendar size={18} className="mr-2" />
                Book Demo
            </Button>
        </div>
    );
}
