import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
    title: "Best CAPF AC Coaching in India | Assistant Commandant Exam Prep",
    description: "Join the top CAPF AC coaching academy in India. Comprehensive UPSC Assistant Commandant preparation for BSF, CRPF, CISF, ITBP & SSB with elite faculty and hostels.",
    keywords: ["best CAPF coaching in India", "CAPF AC exam preparation online", "Assistant Commandant coaching India", "UPSC CAPF exam prep", "BSF CRPF CISF coaching", "CAPF written and physical coaching"],
    alternates: { canonical: "https://pathfinderdefenceacademy.com/courses/capf" },
};

export default function CAPFNationalPage() {
    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Does the CAPF coaching program cover both Paper I and Paper II?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our curriculum provides dedicated classes for Paper I (General Ability and Intelligence) and intensive writing practice for Paper II (General Studies, Essay, and Comprehension)."
                }
            },
            {
                "@type": "Question",
                "name": "Can out-of-station students join the CAPF AC offline batches?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we welcome students from all across India. Our residential campus offers fully-equipped hostel and mess facilities to provide a secure and focused learning environment."
                }
            },
            {
                "@type": "Question",
                "name": "Is physical fitness training included in the CAPF preparation?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. The CAPF Assistant Commandant exam requires clearing a rigorous Physical Efficiency Test (PET). We incorporate guided physical training into our daily schedules to ensure you meet the required standards."
                }
            },
            {
                "@type": "Question",
                "name": "Do you provide interview preparation for CAPF?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, the final stage is the Personality Test/Interview conducted by UPSC. Our retired officers and expert faculty conduct comprehensive mock interviews to build your confidence and communication skills."
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
                title="Best CAPF AC Coaching in India" 
                subtitle="UPSC Assistant Commandant Preparation" 
                image="/images/bg.webp" 
            />

            <section className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    
                    {/* H1 Section */}
                    <div className="mb-12">
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Top CAPF AC Exam Preparation — Become a Group A Officer
                        </h1>
                        <p className="text-gray-300 text-lg leading-relaxed mb-4">
                            The Central Armed Police Forces (CAPF) Assistant Commandant exam is conducted annually by the UPSC. It is a highly prestigious pathway for graduates across India to serve as Group A Gazetted Officers in the BSF, CRPF, CISF, ITBP, and SSB, defending the nation's internal security and borders.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            At Path Finder Defence Academy, we prepare aspirants on a national scale. Whether you are learning through our digital classes or living at our specialized residential campus, we provide expert guidance for the objective Paper I, the descriptive Paper II, and the demanding Physical Efficiency Test (PET).
                        </p>
                        
                        {/* Internal Link to Local Page equivalent */}
                        <div className="mt-8 bg-gold/10 border border-gold/30 rounded-lg p-4 flex items-center justify-between flex-wrap gap-4">
                            <p className="text-gray-300">
                                <strong className="text-gold">Looking for an offline CAPF batch?</strong> We conduct intensive classroom coaching at our dedicated physical centres.
                            </p>
                            <Link href="/branches" className="text-gold hover:text-white font-bold shrink-0 transition-colors">
                                Find a Centre Near You →
                            </Link>
                        </div>
                    </div>

                    {/* H2: Why Choose PFDA Nationally */}
                    <div className="mb-16">
                        <SectionHeading title="Why Aspirants Nationwide Trust PFDA for CAPF" alignment="left" />
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                            <div className="bg-[#1B2620] p-6 rounded-lg border border-white/5">
                                <h3 className="text-xl font-bold text-white mb-3">Residential Campus for Out-of-State Students</h3>
                                <p className="text-gray-400">Our secure hostels and mess facilities ensure that candidates from anywhere in India can live comfortably while maintaining an unbroken, disciplined study routine.</p>
                            </div>
                            
                            <div className="bg-[#1B2620] p-6 rounded-lg border border-gold/20">
                                <h3 className="text-xl font-bold text-white mb-3">Mastery in Descriptive Writing</h3>
                                <p className="text-gray-400">Paper II (Essay and Comprehension) is where most students struggle. We provide rigorous, daily writing practice and personalized feedback to elevate your score.</p>
                            </div>
                            
                            <div className="bg-[#1B2620] p-6 rounded-lg border border-white/5">
                                <h3 className="text-xl font-bold text-white mb-3">Physical Efficiency Training</h3>
                                <p className="text-gray-400">Passing the written exam means nothing if you fail the PET. Our coaches conduct regular field training (100m sprint, 800m run, long jump, shot put) to build your physical stamina.</p>
                            </div>

                            <div className="bg-[#1B2620] p-6 rounded-lg border border-white/5">
                                <h3 className="text-xl font-bold text-white mb-3">Interview Readiness</h3>
                                <p className="text-gray-400">UPSC personality tests are highly analytical. We conduct extensive mock interviews focusing on DAF (Detailed Application Form) analysis, current affairs, and leadership traits.</p>
                            </div>
                        </div>
                    </div>

                    {/* H2: Exam Breakdown */}
                    <div className="mb-16 bg-[#24332B] p-8 rounded-xl border border-white/5">
                        <h2 className="text-2xl font-bold text-gold mb-6">UPSC CAPF AC Exam Structure</h2>
                        <p className="text-gray-300 mb-6">The CAPF selection process is divided into Written Examination, Physical Efficiency Test (PET), and Personality Test.</p>
                        
                        <div className="space-y-6">
                            <div className="flex items-start gap-4 border-b border-white/10 pb-6">
                                <div className="bg-gold text-black font-bold px-4 py-2 rounded shrink-0">Paper 1</div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">General Ability and Intelligence (250 Marks)</h3>
                                    <p className="text-gray-400">Objective (Multiple Choice). Covers General Mental Ability, General Science, Current Events, Indian Polity & Economy, History of India, and Indian/World Geography.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 border-b border-white/10 pb-6">
                                <div className="bg-gold text-black font-bold px-4 py-2 rounded shrink-0">Paper 2</div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">General Studies, Essay & Comprehension (200 Marks)</h3>
                                    <p className="text-gray-400">Descriptive format. Part A: Essay questions (can be answered in English or Hindi). Part B: Comprehension, précis writing, and language skills (English only).</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-gold text-black font-bold px-4 py-2 rounded shrink-0">PET</div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Physical Efficiency Test & Interview</h3>
                                    <p className="text-gray-400">After clearing the written exam, candidates face a qualifying Physical Test, followed by a final Personality Test/Interview (150 Marks).</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* H2: Eligibility */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-2">National Eligibility Standards for CAPF AC</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex gap-4 items-start">
                                <CheckCircle className="text-gold shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-lg text-white mb-1">Age Limits</h4>
                                    <p className="text-gray-400 text-sm">20 to 25 years of age (standard UPSC age relaxation applies for SC/ST, OBC, and ex-servicemen categories).</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <CheckCircle className="text-gold shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-lg text-white mb-1">Educational Qualification</h4>
                                    <p className="text-gray-400 text-sm">Candidates must hold a Bachelor's degree from a recognized university across India.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <CheckCircle className="text-gold shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-lg text-white mb-1">Gender & Nationality</h4>
                                    <p className="text-gray-400 text-sm">Both male and female candidates are eligible. The candidate must be a citizen of India.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <CheckCircle className="text-gold shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-lg text-white mb-1">Physical & Medical Standards</h4>
                                    <p className="text-gray-400 text-sm">Must meet stringent physical requirements regarding height, weight, chest (for males), and vision as prescribed by CAPF guidelines.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* H2: FAQs */}
                    <div className="mb-16">
                        <SectionHeading title="Frequently Asked Questions" alignment="left" />
                        <div className="space-y-6 mt-8">
                            {[
                                { q: "Does the CAPF coaching program cover both Paper I and Paper II?", a: "Yes, our curriculum provides dedicated classes for Paper I (General Ability and Intelligence) and intensive writing practice for Paper II (General Studies, Essay, and Comprehension)." },
                                { q: "Can out-of-station students join the CAPF AC offline batches?", a: "Yes, we welcome students from all across India. Our residential campus offers fully-equipped hostel and mess facilities to provide a secure and focused learning environment." },
                                { q: "Is physical fitness training included in the CAPF preparation?", a: "Absolutely. The CAPF Assistant Commandant exam requires clearing a rigorous Physical Efficiency Test (PET). We incorporate guided physical training into our daily schedules to ensure you meet the required standards." },
                                { q: "Do you provide interview preparation for CAPF?", a: "Yes, the final stage is the Personality Test/Interview conducted by UPSC. Our retired officers and expert faculty conduct comprehensive mock interviews to build your confidence and communication skills." }
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
                            <h2 className="text-2xl font-bold text-white mb-2">Lead from the Front as an Assistant Commandant</h2>
                            <p className="text-gray-300">
                                With elite faculty, structured physical training, and premium residential facilities, Path Finder Defence Academy is your ultimate partner for cracking the UPSC CAPF AC exam.
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
