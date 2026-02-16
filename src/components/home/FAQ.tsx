"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Plus, Minus } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const faqs = [
    {
        question: "What courses does Path Finder Defence Academy offer?",
        answer: "We offer comprehensive coaching for NDA, CDS, AFCAT, SSB Interview, CAPF, Sainik School Entrance, and Agniveer recruitment exams. We also provide a Foundation course for Class 11th & 12th students integrated with NDA preparation."
    },
    {
        question: "What is the eligibility criteria for NDA?",
        answer: "Candidates must be between 16.5 to 19.5 years of age and must have passed or be appearing in the 12th standard examination. For Army Wing, any stream is allowed. For Air Force and Naval Wings, Physics and Mathematics are mandatory."
    },
    {
        question: "Do you provide hostel facilities for students?",
        answer: "Yes, we offer separate hostel facilities for boys and girls with 24/7 security, nutritious food, and a disciplined environment conducive to studies. Our hostels are located close to the academy campus."
    },
    {
        question: "How are the physical training sessions conducted?",
        answer: "Our physical training is conducted by retired defence personnel. It includes daily morning drills, obstacle courses, running, and sports activities designed to build stamina and teamwork, mirroring the standards of the armed forces."
    },
    {
        question: "What is the success rate of your academy?",
        answer: "Path Finder Defence Academy has a proven track record of consistently producing high selections in NDA and other defence exams. Our personalized mentorship and rigorous mock tests ensure our students perform their best."
    },
    {
        question: "Can I join for a crash course before the exam?",
        answer: "Yes, we offer targeted crash courses ranging from 45 to 60 days before major exams like NDA and CDS. These courses focus on rapid revision, important topics, and intensive practice sessions to boost your preparation."
    }
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section className="py-20 bg-[#0a0f1c] relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <SectionHeading title="FAQ" subtitle="Frequently Asked Questions" />

                <div className="max-w-3xl mx-auto mt-12 space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-[#10172a] border border-white/5 rounded-xl overflow-hidden hover:border-gold/30 transition-colors"
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className={`text-lg font-bold transition-colors ${activeIndex === index ? "text-gold" : "text-white"}`}>
                                    {faq.question}
                                </span>
                                <div className={`p-2 rounded-full transition-colors ${activeIndex === index ? "bg-gold/20 text-gold" : "bg-white/5 text-gray-400"}`}>
                                    {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </div>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
