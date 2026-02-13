"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export default function CTA() {
    return (
        <section className="py-24 relative overflow-hidden flex items-center justify-center">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1533473359331-0135ef1bcfb0?q=80&w=2070&auto=format&fit=crop')" }}
            >
                <div className="absolute inset-0 bg-military-dark/90 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight"
                >
                    Ready To Wear The Uniform?
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
                >
                    Join the league of extraordinary officers. Book your free demo class today and experience the difference.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-12 py-6 shadow-lg shadow-red-600/30 uppercase tracking-widest">
                        Book Your Free Demo Class Today
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
