"use client";

import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CheckCircle, Clock, Calendar, Users, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

interface CourseDetailProps {
    title: string;
    subtitle: string;
    image: string;
    description: string;
    eligibility: string[];
    syllabus: string[];
    duration: string;
    batchTiming: string;
}

export default function CourseDetail({
    title,
    subtitle,
    image,
    description,
    eligibility,
    syllabus,
    duration,
    batchTiming,
}: CourseDetailProps) {
    return (
        <main className="bg-primary min-h-screen pb-20">
            <PageHeader title={title} subtitle={subtitle} image={image} />

            <section className="container mx-auto px-4 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <SectionHeading title="Course Overview" alignment="left" />
                        <p className="text-gray-300 text-lg leading-relaxed mb-8">
                            {description}
                        </p>

                        <div className="bg-[#10172a] rounded-xl p-8 border border-white/5 mb-12">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <BookOpen className="text-gold" /> Syllabus The Covered
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {syllabus.map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-gold rounded-full"></div>
                                        <span className="text-gray-300">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-[#10172a] rounded-xl p-8 border border-white/5">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <Users className="text-gold" /> Eligibility Criteria
                            </h3>
                            <ul className="space-y-4">
                                {eligibility.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle className="text-gold shrink-0 mt-1" size={18} />
                                        <span className="text-gray-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-[#10172a] rounded-xl p-8 border border-gold/20 sticky top-24">
                            <h3 className="text-2xl font-bold text-white mb-6 text-center">Batch Details</h3>

                            <div className="space-y-6 mb-8">
                                <div className="flex items-center gap-4">
                                    <div className="bg-white/5 p-3 rounded-lg text-gold">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">Duration</p>
                                        <p className="text-white font-bold">{duration}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="bg-white/5 p-3 rounded-lg text-gold">
                                        <Calendar size={24} />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">Batch Timing</p>
                                        <p className="text-white font-bold">{batchTiming}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <Button className="w-full bg-accent hover:bg-accent-hover text-white py-6 text-lg font-bold">
                                    Enroll Now
                                </Button>
                                <Button variant="outline" className="w-full border-gold text-gold hover:bg-gold hover:text-black">
                                    Download Brochure
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
