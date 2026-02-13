"use client";

import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
    "https://images.unsplash.com/photo-1595183492724-4f40f0c07d57?q=80&w=2070&auto=format&fit=crop", // Parade
    "https://images.unsplash.com/photo-1453491945771-a1e904948959?q=80&w=2070&auto=format&fit=crop", // Jets
    "https://images.unsplash.com/photo-1610173824040-ec89a42f567b?q=80&w=2069&auto=format&fit=crop", // Flag
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop", // Meeting/Class
    "https://images.unsplash.com/photo-1533473359331-0135ef1bcfb0?q=80&w=2070&auto=format&fit=crop", // Tactical
    "https://images.unsplash.com/photo-1589308001205-2d480de8b149?q=80&w=2070&auto=format&fit=crop", // Army trucks
    "https://images.unsplash.com/photo-1544168190-79c11c140f59?q=80&w=1978&auto=format&fit=crop", // Portrait (can assume guest lecture)
    "https://images.unsplash.com/photo-1541829070764-84a7d30ddb93?q=80&w=1979&auto=format&fit=crop", // Outdoors
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop", // Classroom
];

export default function GalleryPage() {
    return (
        <main className="bg-primary min-h-screen pb-20">
            <PageHeader
                title="Life at PFDA"
                subtitle="Training, Discipline & Glory"
                image="https://images.unsplash.com/photo-1533473359331-0135ef1bcfb0?q=80&w=2070&auto=format&fit=crop"
            />

            <section className="container mx-auto px-4 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="rounded-xl overflow-hidden shadow-lg border border-white/5 hover:border-gold/50 transition-all h-64 group"
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src={src}
                                    alt={`Gallery Image ${index + 1}`}
                                    fill
                                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </main>
    );
}
