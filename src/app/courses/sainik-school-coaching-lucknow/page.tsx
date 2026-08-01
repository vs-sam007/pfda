import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
    title: "Best Sainik School Coaching in Lucknow (Class 6 & 9) | PFDA",
    description: "Expert AISSEE & Sainik School entrance coaching in Lucknow for Class 6 & 9. Top success rate, hostel facilities at Alambagh & Indira Nagar. Enroll today.",
    keywords: ["Sainik School coaching in Lucknow", "AISSEE coaching Lucknow", "Sainik School entrance classes near me", "Sainik School class 6 coaching Lucknow", "Sainik School class 9 coaching Lucknow"],
    alternates: { canonical: "https://pathfinderdefenceacademy.com/courses/sainik-school-coaching-lucknow" },
};

export default function SainikSchoolCoachingPage() {
    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is the age limit for Sainik School Class 6 admission?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AISSEE eligibility age brackets are notified each year for both Class 6 and Class 9 entry. Our mentors can walk you through the current-year criteria in detail."
                }
            },
            {
                "@type": "Question",
                "name": "What is the AISSEE exam pattern and syllabus?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AISSEE for Class 6 covers Mathematics, Language, Intelligence, and General Knowledge, while Class 9 covers Mathematics, English, Intelligence, General Science, and Social Science. Our coaching program is structured around these exact patterns."
                }
            },
            {
                "@type": "Question",
                "name": "What are the medical and physical fitness requirements for Sainik School?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sainik School admission includes specific medical and physical fitness standards, which candidates must meet at the time of admission. We guide families through these requirements as part of our coaching program."
                }
            },
            {
                "@type": "Question",
                "name": "How do I apply for Sainik School admission from Lucknow?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Applications for AISSEE are submitted online through the official Sainik Schools admission portal during the notified application window. Our team can guide you through the process alongside your coaching."
                }
            },
            {
                "@type": "Question",
                "name": "What is the fee structure for Sainik School coaching at Pathfinder Defence Academy?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Fees vary by class level and batch type. Please contact our Alambagh or Indira Nagar centre for current details."
                }
            },
            {
                "@type": "Question",
                "name": "What is the difference between UP Sainik School and All India Sainik School entrance?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Admission to Sainik Schools across India, including the UP Sainik School, is conducted through the same AISSEE exam, with seats allocated state-wise. Our coaching prepares students for this common entrance process."
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
                title="Sainik School Coaching" 
                subtitle="Expert Entrance Preparation for Class 6 & Class 9" 
                image="/images/sainic-1.jpg" 
            />

            <section className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    
                    {/* H1 Section */}
                    <div className="mb-12">
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Best Sainik School Entrance Coaching in Lucknow — Class 6 & Class 9
                        </h1>
                        <p className="text-gray-300 text-lg leading-relaxed mb-4">
                            Sainik Schools give students a disciplined, structured foundation from a young age — and for many, it's the first real step toward the National Defence Academy (NDA) and a career in the armed forces. Admission happens through AISSEE (All India Sainik Schools Entrance Exam), a competitive test conducted for Class 6 and Class 9 entry.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            At Pathfinder Defence Academy, our Sainik School coaching in Lucknow prepares students for both entry levels, with structured batches, regular mock tests, and mentors who understand exactly what AISSEE demands — both academically and beyond.
                        </p>
                    </div>

                    {/* H2: Our Coaching Program */}
                    <div className="mb-16">
                        <SectionHeading title="Our Sainik School Coaching Program" alignment="left" />
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                            <div className="bg-[#24332B] p-6 rounded-lg border border-gold/20">
                                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                                    <span className="bg-gold text-black px-2 py-1 rounded text-sm font-bold">Class 6</span>
                                    Entry Preparation
                                </h3>
                                <p className="text-gray-400">Covers Mathematics, Language, Intelligence, and General Knowledge as per the AISSEE Class 6 pattern, with age-appropriate teaching methods for young students and regular practice tests to build exam familiarity.</p>
                            </div>
                            
                            <div className="bg-[#24332B] p-6 rounded-lg border border-gold/20">
                                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                                    <span className="bg-gold text-black px-2 py-1 rounded text-sm font-bold">Class 9</span>
                                    Entry Preparation
                                </h3>
                                <p className="text-gray-400">Covers Mathematics, English, Intelligence, General Science, and Social Science aligned to the AISSEE Class 9 pattern, along with focused practice on the specific question formats used at this level.</p>
                            </div>
                            
                            <div className="bg-[#1B2620] p-6 rounded-lg border border-white/5">
                                <h3 className="text-xl font-bold text-white mb-3">Physical Fitness & Medical Guidance</h3>
                                <p className="text-gray-400">Sainik School admission includes physical fitness and medical standards. We guide both students and parents through these requirements well ahead of the exam so there are no surprises later.</p>
                            </div>

                            <div className="bg-[#1B2620] p-6 rounded-lg border border-white/5">
                                <h3 className="text-xl font-bold text-white mb-3">Mock Tests & Performance Tracking</h3>
                                <p className="text-gray-400">Regular full-length mock tests, modeled on the real AISSEE pattern, help students build speed, accuracy, and exam-day confidence — with performance tracked and shared with parents.</p>
                            </div>
                        </div>
                    </div>

                    {/* H2: Centres */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-2">Our Sainik School Coaching Centres in Lucknow</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="flex gap-4 items-start">
                                <CheckCircle className="text-gold shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-lg text-white mb-1">Alambagh Branch</h4>
                                    <p className="text-gray-400 text-sm">Our head office centre runs dedicated Sainik School batches for both Class 6 and Class 9 entry, with full access to our academic and training infrastructure.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <CheckCircle className="text-gold shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-lg text-white mb-1">Indira Nagar Branch</h4>
                                    <p className="text-gray-400 text-sm">A convenient centre for families around Indira Nagar and Faizabad Road, offering the same structured Sainik School preparation.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <CheckCircle className="text-gold shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-lg text-white mb-1">Hostel Facility</h4>
                                    <p className="text-gray-400 text-sm">For students joining from outside Lucknow, we offer safe, supervised residential hostel arrangements alongside coaching.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* H2: Why Choose Pathfinder */}
                    <div className="mb-16 bg-[#24332B] p-8 rounded-xl border border-white/5">
                        <h2 className="text-2xl font-bold text-gold mb-6">Why Choose Pathfinder for Sainik School Coaching</h2>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-gold shrink-0 mt-1" size={20} />
                                <span className="text-gray-300 text-lg">Mentors experienced specifically in AISSEE-pattern preparation, not generic school tuition</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-gold shrink-0 mt-1" size={20} />
                                <span className="text-gray-300 text-lg">Separate, age-appropriate batches for Class 6 and Class 9 aspirants</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-gold shrink-0 mt-1" size={20} />
                                <span className="text-gray-300 text-lg">Regular parent updates on test performance and areas needing improvement</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-gold shrink-0 mt-1" size={20} />
                                <span className="text-gray-300 text-lg">A natural pathway into our NDA Foundation program for students who want to continue toward NDA after Sainik School</span>
                            </li>
                        </ul>
                    </div>

                    {/* H2: FAQs */}
                    <div className="mb-16">
                        <SectionHeading title="Frequently Asked Questions" alignment="left" />
                        <div className="space-y-6 mt-8">
                            {[
                                { q: "What is the age limit for Sainik School Class 6 admission?", a: "AISSEE eligibility age brackets are notified each year for both Class 6 and Class 9 entry. Our mentors can walk you through the current-year criteria in detail." },
                                { q: "What is the AISSEE exam pattern and syllabus?", a: "AISSEE for Class 6 covers Mathematics, Language, Intelligence, and General Knowledge, while Class 9 covers Mathematics, English, Intelligence, General Science, and Social Science. Our coaching program is structured around these exact patterns." },
                                { q: "What are the medical and physical fitness requirements for Sainik School?", a: "Sainik School admission includes specific medical and physical fitness standards, which candidates must meet at the time of admission. We guide families through these requirements as part of our coaching program." },
                                { q: "How do I apply for Sainik School admission from Lucknow?", a: "Applications for AISSEE are submitted online through the official Sainik Schools admission portal during the notified application window. Our team can guide you through the process alongside your coaching." },
                                { q: "What is the fee structure for Sainik School coaching at Pathfinder Defence Academy?", a: "Fees vary by class level and batch type. Please contact our Alambagh or Indira Nagar centre for current details." },
                                { q: "What is the difference between UP Sainik School and All India Sainik School entrance?", a: "Admission to Sainik Schools across India, including the UP Sainik School, is conducted through the same AISSEE exam, with seats allocated state-wise. Our coaching prepares students for this common entrance process." }
                            ].map((faq, index) => (
                                <div key={index} className="bg-[#24332B] p-6 rounded-lg">
                                    <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
                                    <p className="text-gray-400">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Closing CTA */}
                    <div className="bg-gradient-to-r from-red-900/50 to-transparent p-8 rounded-xl border border-red-900 text-center md:text-left md:flex justify-between items-center">
                        <div className="mb-6 md:mb-0 md:mr-8">
                            <h2 className="text-2xl font-bold text-white mb-2">Give Your Child a Strong, Disciplined Start</h2>
                            <p className="text-gray-300">
                                A Sainik School education builds the foundation for a future in the armed forces — and the right coaching makes all the difference in getting there. Visit our Alambagh or Indira Nagar centre, or reach out today to enroll in our Sainik School coaching batch.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                            <Link href="/contact">
                                <Button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4">
                                    Enroll Now
                                </Button>
                            </Link>
                            <Link href="/branches">
                                <Button variant="outline" className="w-full sm:w-auto border-gold text-gold hover:bg-gold hover:text-black px-8 py-4">
                                    Visit Centres
                                </Button>
                            </Link>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}
