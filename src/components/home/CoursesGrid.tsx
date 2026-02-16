"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen } from "lucide-react";

const courses = [
    {
        title: "NDA",
        desc: "National Defence Academy",
        details: "For 12th Appearing/Pass",
        image: "/images/nda.jpeg",
    },
    {
        title: "CDS",
        desc: "Combined Defence Services",
        details: "For Graduates",
        image: "/images/gallery8.jpg",
    },
    {
        title: "SSB Interview",
        desc: "Service Selection Board",
        details: "Personality Test",
        image: "/images/nccSSB1.jpg",
    },
    {
        title: "Foundation",
        desc: "Complete Class 11th & 12th schooling from dummy school along with dedicated NDA preparation.",
        details: "For Class 11th & 12th",
        image: "/images/service4.jpg",
    },
    {
        title: "AFCAT",
        desc: "Air Force Common Admission",
        details: "For Graduates",
        image: "/images/1657188081910.png",
    },
    {
        title: "CAPF",
        desc: "Central Armed Police Forces",
        details: "For Graduates",
        image: "/images/CAPF-2020-1.webp",
    },
    {
        title: "Sainik School",
        desc: "Sainik School Entrance",
        details: "For Class 6th & 9th",
        image: "/images/sainic-1.jpg",
    },
    {
        title: "Agniveer",
        desc: "Agnipath Scheme",
        details: "For 10th/12th Pass",
        image: "/images/1707393182_indian-army.jpg",
    }
];

export default function CoursesGrid() {
    return (
        <section className="py-20 bg-[#060910]">
            <div className="container mx-auto px-4">
                <SectionHeading title="Our Courses" subtitle="Choose Your Path" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-2xl bg-[#10172a] border border-gold/10 hover:border-gold/30 transition-all shadow-xl"
                        >
                            {/* Image Overlay */}
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-[#10172a] to-transparent z-10"></div>
                                <Image
                                    src={course.image}
                                    alt={course.title}
                                    fill
                                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute top-4 right-4 z-20 bg-gold/90 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    Most Popular
                                </div>
                            </div>

                            <div className="p-6 relative z-20 -mt-10">
                                <div className="bg-[#10172a] p-4 rounded-xl border border-white/5 shadow-2xl">
                                    <div className="flex items-start justify-between mb-2">
                                        <h3 className="text-2xl font-bold text-white group-hover:text-gold transition-colors">{course.title}</h3>
                                        <BookOpen className="text-gold/50 group-hover:text-gold transition-colors" size={24} />
                                    </div>
                                    <p className="text-gray-400 text-sm mb-1">{course.desc}</p>
                                    <p className="text-gold text-xs font-semibold uppercase tracking-wider mb-6">{course.details}</p>

                                    <Link href={`/courses/${course.title.toLowerCase().split(' ')[0]}`} className="block">
                                        <Button className="w-full bg-white/5 hover:bg-gold hover:text-black border border-white/10 group-hover:border-gold/50 transition-all flex items-center justify-between group-hover:font-bold">
                                            Enroll Now
                                            <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
