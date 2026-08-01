"use client";

import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
    // Photo Gallery Folder
    "/photo gallery/WhatsApp Image 2026-07-31 at 20.26.34 (1).jpeg",
    "/photo gallery/WhatsApp Image 2026-07-31 at 20.26.34 (2).jpeg",
    "/photo gallery/WhatsApp Image 2026-07-31 at 20.26.35 (2).jpeg",
    "/photo gallery/WhatsApp Image 2026-07-31 at 20.26.35.jpeg",

    // SSB Activities Folder
    "/ssb activities/WhatsApp Image 2025-12-02 at 5.23.56 PM.jpeg",
    "/ssb activities/WhatsApp Image 2026-03-28 at 7.07.43 PM (2).jpeg",
    "/ssb activities/WhatsApp Image 2026-03-28 at 7.07.44 PM (1).jpeg",
    "/ssb activities/WhatsApp Image 2026-03-28 at 7.07.48 PM.jpeg",
    "/ssb activities/WhatsApp Image 2026-03-28 at 7.07.49 PM (1).jpeg",
    "/ssb activities/WhatsApp Image 2026-03-28 at 7.07.49 PM.jpeg",
    "/ssb activities/WhatsApp Image 2026-03-28 at 7.07.50 PM (1).jpeg",
    "/ssb activities/WhatsApp Image 2026-03-28 at 7.07.50 PM (2).jpeg",
    "/ssb activities/WhatsApp Image 2026-03-28 at 7.07.51 PM (1).jpeg",
    "/ssb activities/WhatsApp Image 2026-03-28 at 7.07.51 PM (2).jpeg",
    "/ssb activities/WhatsApp Image 2026-03-28 at 7.07.52 PM (2).jpeg",
    "/ssb activities/WhatsApp Image 2026-03-28 at 7.07.52 PM.jpeg",
];

export default function GalleryPage() {
    return (
        <main className="bg-primary min-h-screen pb-20">
            <PageHeader
                title="Life at PFDA"
                subtitle="Training, Discipline & Glory"
                image="/images/CAPF-2020-1.webp"
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
                                    className="object-contain bg-black/40 transform group-hover:scale-110 transition-transform duration-700"
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
