"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export default function BranchesPreview() {
    return (
        <section className="py-20 bg-[#0a0f1c] relative">
            <div className="container mx-auto px-4">
                <SectionHeading title="Our Centers" subtitle="Visit Us Today" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Alambagh Branch */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#10172a] rounded-2xl overflow-hidden shadow-2xl border border-white/5 flex flex-col md:flex-row"
                    >
                        <div className="w-full md:w-1/2 h-64 md:h-auto bg-gray-800 relative">
                            <Image
                                src="/images/images.jpg" // Education building
                                alt="Alambagh Branch"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                        <div className="p-8 w-full md:w-1/2 flex flex-col justify-center">
                            <h3 className="text-2xl font-bold text-white mb-2">Alambagh Branch</h3>
                            <p className="text-gold font-medium mb-6">Head Office</p>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-start gap-3 text-gray-400">
                                    <MapPin className="text-gold shrink-0 mt-1" size={18} />
                                    <p className="text-sm">567/12, Kanpur Road, Near Phoenix Mall, Alambagh, Lucknow</p>
                                </div>
                                <div className="flex items-center gap-3 text-gray-400">
                                    <Phone className="text-gold shrink-0" size={18} />
                                    <p className="text-sm">+91 99999 88888</p>
                                </div>
                            </div>
                            <Button variant="outline" className="w-full border-gold text-gold hover:bg-gold hover:text-black">Get Directions</Button>
                        </div>
                    </motion.div>

                    {/* Indira Nagar Branch */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#10172a] rounded-2xl overflow-hidden shadow-2xl border border-white/5 flex flex-col md:flex-row"
                    >
                        <div className="w-full md:w-1/2 h-64 md:h-auto bg-gray-800 md:order-2 relative">
                            <Image
                                src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1986&auto=format&fit=crop" // College campus
                                alt="Indira Nagar Branch"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                        <div className="p-8 w-full md:w-1/2 flex flex-col justify-center md:order-1">
                            <h3 className="text-2xl font-bold text-white mb-2">Indira Nagar Branch</h3>
                            <p className="text-gold font-medium mb-6">City Center</p>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-start gap-3 text-gray-400">
                                    <MapPin className="text-gold shrink-0 mt-1" size={18} />
                                    <p className="text-sm">B-Block, Near Munshipulia Metro Station, Indira Nagar, Lucknow</p>
                                </div>
                                <div className="flex items-center gap-3 text-gray-400">
                                    <Phone className="text-gold shrink-0" size={18} />
                                    <p className="text-sm">+91 99999 77777</p>
                                </div>
                            </div>
                            <Button variant="outline" className="w-full border-gold text-gold hover:bg-gold hover:text-black">Get Directions</Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
