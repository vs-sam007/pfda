import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
    title: "Best NDA Coaching in India | Top NDA Exam Preparation | PFDA",
    description: "Looking for the best NDA coaching in India? Path Finder Defence Academy offers premier offline and online NDA preparation, hostel facilities, and SSB guidance. 1000+ selections.",
    keywords: ["best NDA coaching in India", "top NDA academy in India", "NDA exam preparation online", "NDA coaching with hostel facility", "NDA written exam coaching", "UPSC NDA preparation", "NDA SSB coaching India"],
    alternates: { canonical: "https://pathfinderdefenceacademy.com/courses/nda" },
};

export default function NDANationalPage() {
    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Can students from outside Uttar Pradesh join Path Finder Defence Academy for NDA?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. We welcome defence aspirants from all over India. We provide dedicated hostel and mess facilities to ensure out-of-state students have a secure, structured, and disciplined environment for their NDA preparation."
                }
            },
            {
                "@type": "Question",
                "name": "What is included in the NDA coaching program?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our comprehensive NDA coaching covers the complete UPSC syllabus for both Mathematics and the General Ability Test (GAT). We also integrate physical training and early SSB interview preparation to ensure candidates are ready for all stages of selection."
                }
            },
            {
                "@type": "Question",
                "name": "Do you offer online NDA batches for students across India?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we provide online learning modules and digital test series for students who cannot relocate, though our residential campus program is highly recommended for the most immersive preparation experience."
                }
            },
            {
                "@type": "Question",
                "name": "Does PFDA prepare students for both the Written Exam and the SSB Interview?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, clearing the written exam is only step one. Our program includes SSB groundwork, psychological test practice, and physical training so students are fully prepared for the Services Selection Board."
                }
            }
        ]
    };

    return (
        <main className="bg-primary min-h-screen pb-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            
            <PageHeader 
                title="Best NDA Coaching in India" 
                subtitle="National Defence Academy Preparation" 
                image="/images/nda.jpeg" 
            />

            <section className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    
                    {/* H1 Section */}
                    <div className="mb-12">
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Top NDA Exam Preparation Academy — Serving Aspirants Across India
                        </h1>
                        <p className="text-gray-300 text-lg leading-relaxed mb-4">
                            The National Defence Academy (NDA) is India's most prestigious tri-service academy, and cracking its UPSC-conducted entrance exam requires more than just reading textbooks. It demands a highly strategic approach to Mathematics and the General Ability Test (GAT), combined with physical readiness and early SSB preparation.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            At Path Finder Defence Academy, we have built a pan-India reputation by producing over 1000+ successful officers. Whether you travel to our campus to utilize our premium hostel facilities or engage with our study materials remotely, our mission is to transform dedicated students into commissioned officers of the Indian Army, Navy, and Air Force.
                        </p>
                        
                        {/* Internal Link to Local Page */}
                        <div className="mt-8 bg-gold/10 border border-gold/30 rounded-lg p-4 flex items-center justify-between flex-wrap gap-4">
                            <p className="text-gray-300">
                                <strong className="text-gold">Looking for NDA coaching in Lucknow specifically?</strong> We offer a specialized integrated Class 11 & 12 program locally.
                            </p>
                            <Link href="/courses/nda-foundation-course-lucknow" className="text-gold hover:text-white font-bold shrink-0 transition-colors">
                                View Lucknow Foundation Course →
                            </Link>
                        </div>
                    </div>

                    {/* H2: Why Choose PFDA Nationally */}
                    <div className="mb-16">
                        <SectionHeading title="Why Students From All Over India Choose PFDA" alignment="left" />
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                            <div className="bg-[#1B2620] p-6 rounded-lg border border-white/5">
                                <h3 className="text-xl font-bold text-white mb-3">Residential Campus & Hostels</h3>
                                <p className="text-gray-400">We offer safe, supervised hostel facilities with nutritious mess food, ensuring out-of-station candidates can focus entirely on their studies without lifestyle distractions.</p>
                            </div>
                            
                            <div className="bg-[#1B2620] p-6 rounded-lg border border-gold/20">
                                <h3 className="text-xl font-bold text-white mb-3">All-India Test Series</h3>
                                <p className="text-gray-400">Regular, rigorous mock tests designed exactly on the latest UPSC pattern, allowing you to rank yourself against serious defence aspirants nationwide.</p>
                            </div>
                            
                            <div className="bg-[#1B2620] p-6 rounded-lg border border-white/5">
                                <h3 className="text-xl font-bold text-white mb-3">Holistic SSB Integration</h3>
                                <p className="text-gray-400">We don't wait for you to clear the written exam. Personality development, communication skills, and physical training are baked into the curriculum from day one.</p>
                            </div>

                            <div className="bg-[#1B2620] p-6 rounded-lg border border-white/5">
                                <h3 className="text-xl font-bold text-white mb-3">Elite Faculty</h3>
                                <p className="text-gray-400">Learn from seasoned educators and retired defence personnel who understand the exact psychology and standard expected by the Services Selection Board.</p>
                            </div>
                        </div>
                    </div>

                    {/* H2: Exam Breakdown */}
                    <div className="mb-16 bg-[#24332B] p-8 rounded-xl border border-white/5">
                        <h2 className="text-2xl font-bold text-gold mb-6">UPSC NDA Exam Structure</h2>
                        <p className="text-gray-300 mb-6">The written examination is divided into two comprehensive papers completed on the same day:</p>
                        
                        <div className="space-y-6">
                            <div className="flex items-start gap-4 border-b border-white/10 pb-6">
                                <div className="bg-gold text-black font-bold px-4 py-2 rounded shrink-0">Paper 1</div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Mathematics (300 Marks)</h3>
                                    <p className="text-gray-400">120 Questions (2.5 hours). Covers Algebra, Matrices, Determinants, Trigonometry, Analytical Geometry, Differential Calculus, Integral Calculus, and Statistics.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-gold text-black font-bold px-4 py-2 rounded shrink-0">Paper 2</div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">General Ability Test - GAT (600 Marks)</h3>
                                    <p className="text-gray-400">150 Questions (2.5 hours). Part A focuses entirely on English proficiency (200 marks). Part B (400 marks) covers General Knowledge, Physics, Chemistry, Indian History, Geography, and Current Events.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* H2: Eligibility */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-2">National Eligibility Standards</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex gap-4 items-start">
                                <CheckCircle className="text-gold shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-lg text-white mb-1">Age Limits</h4>
                                    <p className="text-gray-400 text-sm">Candidates must be between 16.5 and 19.5 years of age at the time of commencement of the course (exact dates vary by UPSC notification).</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <CheckCircle className="text-gold shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-lg text-white mb-1">Educational Qualification</h4>
                                    <p className="text-gray-400 text-sm">12th Class pass or appearing. For Army wing, any stream is accepted. For Navy and Air Force, Physics and Mathematics are mandatory.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <CheckCircle className="text-gold shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-lg text-white mb-1">Gender</h4>
                                    <p className="text-gray-400 text-sm">Both unmarried male and female candidates from across India are eligible to apply.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <CheckCircle className="text-gold shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-lg text-white mb-1">Physical Fitness</h4>
                                    <p className="text-gray-400 text-sm">Candidates must be physically and medically fit according to the strict guidelines prescribed by the National Defence Academy.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* H2: FAQs */}
                    <div className="mb-16">
                        <SectionHeading title="Frequently Asked Questions" alignment="left" />
                        <div className="space-y-6 mt-8">
                            {[
                                { q: "Can students from outside Uttar Pradesh join Path Finder Defence Academy for NDA?", a: "Absolutely. We welcome defence aspirants from all over India. We provide dedicated hostel and mess facilities to ensure out-of-state students have a secure, structured, and disciplined environment for their NDA preparation." },
                                { q: "What is included in the NDA coaching program?", a: "Our comprehensive NDA coaching covers the complete UPSC syllabus for both Mathematics and the General Ability Test (GAT). We also integrate physical training and early SSB interview preparation to ensure candidates are ready for all stages of selection." },
                                { q: "Do you offer online NDA batches for students across India?", a: "Yes, we provide online learning modules and digital test series for students who cannot relocate, though our residential campus program is highly recommended for the most immersive preparation experience." },
                                { q: "Does PFDA prepare students for both the Written Exam and the SSB Interview?", a: "Yes, clearing the written exam is only step one. Our program includes SSB groundwork, psychological test practice, and physical training so students are fully prepared for the Services Selection Board." }
                            ].map((faq, index) => (
                                <div key={index} className="bg-[#24332B] p-6 rounded-lg">
                                    <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
                                    <p className="text-gray-400">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Closing CTA */}
                    <div className="bg-gradient-to-r from-blue-900/50 to-transparent p-8 rounded-xl border border-blue-900 text-center md:text-left md:flex justify-between items-center">
                        <div className="mb-6 md:mb-0 md:mr-8">
                            <h2 className="text-2xl font-bold text-white mb-2">Start Your Journey to Khadakwasla Today</h2>
                            <p className="text-gray-300">
                                Whether you want to join our residential campus batches or leverage our pan-India online testing platforms, your path to the National Defence Academy begins with expert guidance.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                            <Link href="/contact">
                                <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4">
                                    Enroll Now
                                </Button>
                            </Link>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}
