"use client";

import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, BookOpen, GraduationCap, School } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function FoundationCoursePage() {
    return (
        <main className="bg-[#050810] min-h-screen pb-20">
            <PageHeader
                title="Foundation Course"
                subtitle="School + NDA Preparation"
                image="/images/service4.jpg"
            />

            <section className="container mx-auto px-4 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <SectionHeading title="Course Overview" subtitle="Build Your Base" alignment="left" />

                        <div className="prose prose-invert max-w-none">
                            <p className="text-xl text-gray-300 leading-relaxed mb-6">
                                <strong className="text-gold">Schooling + NDA Preparation</strong>
                            </p>
                            <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                                Our Foundation Course is meticulously designed for students currently in <strong className="text-white">Class 11th</strong>.
                                It offers a unique dual-advantage where students can prepare for the <strong className="text-white">NDA exam</strong>
                                while simultaneously completing their <strong className="text-white">Class 11th and 12th schooling</strong> from a dummy school.
                            </p>

                            <ul className="space-y-6 mb-10">
                                <li className="flex items-start gap-4">
                                    <div className="p-2 bg-gold/10 rounded-full text-gold mt-1">
                                        <School size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg">Integrated Schooling</h4>
                                        <p className="text-gray-400 text-sm">Complete your 11th & 12th from a recognized board without the hassle of daily school attendance.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="p-2 bg-gold/10 rounded-full text-gold mt-1">
                                        <BookOpen size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg">Focused NDA Prep</h4>
                                        <p className="text-gray-400 text-sm">Dedicated curriculum aligned with NDA syllabus to ensure you are exam-ready by 12th.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="p-2 bg-gold/10 rounded-full text-gold mt-1">
                                        <GraduationCap size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg">Board Exam Support</h4>
                                        <p className="text-gray-400 text-sm">Expert guidance ensures excellent performance in your Board Exams alongside competitive prep.</p>
                                    </div>
                                </li>
                            </ul>

                            <Button size="lg" className="px-8 py-6 text-lg">
                                Enroll Now
                            </Button>
                        </div>
                    </motion.div>

                    {/* Image/Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative h-[500px] w-full rounded-2xl overflow-hidden border border-gold/20 shadow-2xl">
                            <Image
                                src="/images/service4.jpg"
                                alt="Foundation Course"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent opacity-40"></div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-gold/10 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gold/5 rounded-full blur-3xl"></div>
                    </motion.div>

                </div>
            </section>
        </main>
    );
}
