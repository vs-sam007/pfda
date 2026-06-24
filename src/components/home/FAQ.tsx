"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Plus, Minus } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const faqs = [
    {
        question: "Which is the best NDA coaching in Lucknow?",
        answer: "Path Finder Defence Academy (PFDA) is widely regarded as the best NDA coaching in Lucknow, with over 1000+ selections and 15+ years of experience. Our expert faculty of ex-defence officers, comprehensive NDA written exam coaching, SSB interview preparation, physical training, and hostel facility make us the top defence coaching institute in Uttar Pradesh."
    },
    {
        question: "How to crack NDA exam in first attempt?",
        answer: "To crack the NDA exam in your first attempt, focus on three pillars: (1) Master the NDA Maths syllabus — Algebra, Trigonometry, Calculus, and Matrices through daily practice. (2) Prepare NDA GAT systematically — cover English, Physics, Chemistry, History, Geography, and Current Affairs. (3) Solve NDA previous year question papers regularly and take weekly mock tests. At PFDA, our structured coaching programme covers all these aspects with expert guidance from day one."
    },
    {
        question: "Can I start NDA preparation after class 12th?",
        answer: "Yes, you can start NDA exam preparation after class 12th. The NDA exam conducted by UPSC is open to candidates who have passed or are appearing in 12th standard. However, the best age to start NDA preparation is during Class 11th through a Foundation course, which integrates school education with NDA coaching. PFDA offers both regular and foundation batches for NDA coaching for class 11 and 12 students."
    },
    {
        question: "What is the NDA coaching fees in Lucknow?",
        answer: "NDA coaching fees in Lucknow vary between ₹30,000 to ₹1,50,000 depending on the course duration and facilities. At Path Finder Defence Academy, we offer affordable NDA coaching with flexible payment plans. Our packages include classroom coaching, study material, mock tests, physical training, and optional hostel facility. Contact us for the latest fee structure and available discounts."
    },
    {
        question: "What is the difference between NDA and CDS?",
        answer: "NDA (National Defence Academy) is for candidates after 12th class (age 16.5–19.5 years), while CDS (Combined Defence Services) is for graduates (age 19–25 years). NDA has Maths and GAT papers, whereas CDS has English, GK, and Elementary Maths. NDA cadets train at the National Defence Academy in Pune, while CDS officers join IMA, OTA, INA, or AFA directly. Both exams are conducted by UPSC twice a year."
    },
    {
        question: "How to prepare for the NDA written exam?",
        answer: "NDA written exam preparation requires a focused approach: (1) Study the complete NDA syllabus — Mathematics (300 marks) covers Algebra, Matrices, Trigonometry, Calculus, Statistics, and Geometry. GAT (600 marks) covers English, Physics, Chemistry, General Science, History, Geography, and Current Events. (2) Understand the NDA exam pattern — it's an objective-type exam with negative marking. (3) Practice NDA previous year questions and analyse NDA cutoff marks trends. PFDA provides dedicated NDA written exam coaching with daily tests."
    },
    {
        question: "How to clear the SSB interview?",
        answer: "To clear the SSB interview, you must develop genuine Officer Like Qualities (OLQs). The 5-day SSB process includes: Day 1 — SSB screening test (OIR + PPDT), Days 2–3 — SSB psychology tests (TAT, WAT, SRT, Self Description), Day 3–4 — SSB GTO tasks (Group Discussion, GPE, Snake Race, Command Task), Day 4 — Personal Interview, and Day 5 — Conference. At PFDA, our SSB panel includes ex-psychologists and GTOs from actual Selection Boards who provide authentic SSB interview preparation."
    },
    {
        question: "Which defence exam is best after graduation?",
        answer: "After graduation, you have multiple defence career options: (1) CDS Exam — for Indian Military Academy, Naval Academy, Air Force Academy, or Officers Training Academy. (2) AFCAT — for Indian Air Force officer entry. (3) CAPF AC — for BSF, CRPF, CISF, ITBP, SSB as Assistant Commandant. (4) Territorial Army — for working professionals. (5) SSC Tech — for engineering graduates. The best choice depends on your age, qualification, and preference. PFDA offers dedicated coaching for all these defence exams in Lucknow."
    },
    {
        question: "Does PFDA provide hostel facility for defence coaching?",
        answer: "Yes, Path Finder Defence Academy provides separate hostel facilities for boys and girls with 24/7 security, nutritious meals, and a disciplined environment. Our hostels are located close to the academy campus in Lucknow. The residential programme includes morning physical training, structured study hours, and a regimented daily routine that mirrors the discipline of the armed forces — making us one of the few defence coaching institutes with hostel facility in Lucknow."
    },
    {
        question: "How to join the Indian Army, Navy, or Air Force after 12th?",
        answer: "After 12th, the primary entry into the Indian Armed Forces is through the NDA exam conducted by UPSC. NDA allows you to join the Indian Army, Indian Navy, or Indian Air Force as an officer. Other routes include: Agniveer (Agnipath scheme for soldiers), NCC Special Entry, and Technical Entry Scheme (TES) for PCM students. For Air Force specifically, you can also appear for AFCAT after graduation. PFDA provides comprehensive coaching for all these defence career paths at our centres in Lucknow."
    },
];

// JSON-LD FAQ Schema
const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
        }
    }))
};

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section className="py-20 bg-[#1B2620] relative overflow-hidden">
            {/* FAQ Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />

            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <SectionHeading title="FAQ" subtitle="Frequently Asked Questions About Defence Coaching" />

                <div className="max-w-3xl mx-auto mt-12 space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-[#24332B] border border-white/5 rounded-xl overflow-hidden hover:border-gold/30 transition-colors"
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
