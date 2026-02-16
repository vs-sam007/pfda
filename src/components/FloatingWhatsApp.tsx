"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingWhatsApp() {
    return (
        <motion.a
            href="https://wa.me/7505188009"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            className="fixed bottom-20 right-4 md:bottom-8 md:right-8 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg shadow-green-500/30 flex items-center justify-center transition-colors"
        >
            <MessageCircle size={32} fill="white" />
        </motion.a>
    );
}
