import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
    title: "Best RIMC Coaching in Lucknow | Elite Entrance Prep | PFDA",
    description: "Prepare for RIMC Dehradun with Pathfinder Defence Academy's elite Lucknow coaching. Expert Maths, English & Viva-Voce training for Class 8 entry. Enroll now.",
    keywords: ["RIMC coaching in Lucknow", "RIMC entrance exam classes Lucknow", "RIMC preparation near me", "best RIMC coaching institute in Lucknow", "RIMC Dehradun preparation"],
    alternates: { canonical: "https://pathfinderdefenceacademy.com/courses/rimc-coaching-lucknow" },
};

export default function RIMCCoachingPage() {
    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is the age limit and eligibility for RIMC?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "RIMC generally admits boys and girls around 11.5 to 13 years of age, applying for Class 8 entry, meeting specified academic and medical standards. Exact age brackets are notified each year — our mentors guide you through the latest eligibility details."
                }
            },
            {
                "@type": "Question",
                "name": "Can girls apply for RIMC Dehradun?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, RIMC has opened admissions to girls in recent years. Our coaching batches are open to both boys and girls."
                }
            },
            {
                "@type": "Question",
                "name": "What is the fee structure for RIMC coaching at Pathfinder Defence Academy?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Fees depend on the batch type and duration. Contact our Alambagh or Indira Nagar centre directly for the current fee structure and batch schedule."
                }
            },
            {
                "@type": "Question",
                "name": "How is RIMC's written exam different from a regular school test?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "RIMC's Mathematics and English papers are considerably tougher than standard school-level papers for the same age group, requiring dedicated, exam-specific preparation rather than regular school study alone."
                }
            },
            {
                "@type": "Question",
                "name": "How can I prepare my child for the RIMC viva-voce?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Consistent mock interview practice, confidence-building exercises, and general awareness development — all part of our structured RIMC coaching program — are the most effective ways to prepare a child for the viva-voce stage."
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
                title="RIMC Coaching in Lucknow" 
                subtitle="Expert Preparation for RIMC Dehradun (Class 8 Entry)" 
                image="/images/sainic-1.jpg" 
            />

            <section className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    
                    {/* H1 Section */}
                    <div className="mb-12">
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Best RIMC Coaching in Lucknow — Expert Preparation for RIMC Dehradun
                        </h1>
                        <p className="text-gray-300 text-lg leading-relaxed mb-4">
                            The Rashtriya Indian Military College (RIMC), Dehradun, is one of the most prestigious defence institutions in India, admitting boys and girls around Class 8 through a rigorous written exam and interview. With only a handful of seats available per state each term, getting in requires focused, expert guidance — not generic coaching.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            At Pathfinder Defence Academy, our RIMC coaching in Lucknow is built specifically for this exam. We run small, focused batches at our Alambagh and Indira Nagar centres, led by mentors who understand exactly what RIMC's written test and viva-voce demand.
                        </p>
                    </div>

                    {/* H2: Why RIMC Needs Different Approach */}
                    <div className="mb-12 bg-[#24332B] p-8 rounded-xl border border-white/5">
                        <h2 className="text-2xl font-bold text-gold mb-4">Why RIMC Preparation Needs a Different Approach</h2>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            Most coaching institutes in Lucknow treat RIMC as a smaller version of Sainik School prep. That approach doesn't work. RIMC's written exam — especially Mathematics and English — is set at a difficulty level well beyond a typical Class 7–8 curriculum, and its viva-voce process is far more intensive than a standard interview.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            That's why our RIMC batches are kept deliberately small. Every student gets direct attention from mentors trained specifically in RIMC-pattern papers, not repurposed Sainik School material.
                        </p>
                    </div>

                    {/* H2: What Our Coaching Covers */}
                    <div className="mb-16">
                        <SectionHeading title="What Our RIMC Coaching in Lucknow Covers" alignment="left" />
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                            <div className="bg-[#1B2620] p-6 rounded-lg border border-gold/20">
                                <h3 className="text-xl font-bold text-white mb-3">Written Exam Preparation</h3>
                                <p className="text-gray-400">Our faculty builds a strong foundation in Mathematics, English, General Knowledge, and Intelligence — going beyond standard school-level difficulty to match RIMC's actual paper pattern. Students work through previous years' question papers and full-length mock tests under exam conditions.</p>
                            </div>
                            
                            <div className="bg-[#1B2620] p-6 rounded-lg border border-gold/20">
                                <h3 className="text-xl font-bold text-white mb-3">Viva-Voce (Interview) Training</h3>
                                <p className="text-gray-400">RIMC places heavy weight on the viva-voce stage. We run structured mock interviews and personality-development sessions designed for the 11–13 age group, helping students build genuine confidence, clear communication, and composure in front of a panel.</p>
                            </div>
                            
                            <div className="bg-[#1B2620] p-6 rounded-lg border border-gold/20 md:col-span-2">
                                <h3 className="text-xl font-bold text-white mb-3">Physical & Medical Readiness Guidance</h3>
                                <p className="text-gray-400">Our mentors guide students and parents through RIMC's physical and medical standards well ahead of the exam, so there are no last-minute surprises.</p>
                            </div>
                        </div>
                    </div>

                    {/* H2: Centres */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-2">Our RIMC Coaching Centres in Lucknow</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex gap-4 items-start">
                                <CheckCircle className="text-gold shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-lg text-white mb-1">Alambagh Branch</h4>
                                    <p className="text-gray-400">Our head office centre offers dedicated RIMC batches with access to our full academic and physical training infrastructure.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <CheckCircle className="text-gold shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-lg text-white mb-1">Indira Nagar Branch</h4>
                                    <p className="text-gray-400">A convenient option for families based in and around Indira Nagar, Faizabad Road, and nearby areas, offering the same structured RIMC preparation.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* H2: RIMC vs Sainik School Table */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-bold text-white mb-6">RIMC vs. Sainik School — What's the Difference?</h2>
                        <p className="text-gray-300 mb-6">Parents often ask how RIMC differs from Sainik School preparation. Here's a quick comparison:</p>
                        
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-gold text-black">
                                        <th className="p-4 font-bold border border-gold">Feature</th>
                                        <th className="p-4 font-bold border border-gold">RIMC</th>
                                        <th className="p-4 font-bold border border-gold">Sainik School</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    <tr className="bg-[#24332B]/50 hover:bg-[#24332B] transition-colors">
                                        <td className="p-4 border border-white/10 font-semibold">Number of institutions</td>
                                        <td className="p-4 border border-white/10">1 (Dehradun)</td>
                                        <td className="p-4 border border-white/10">33+ across India</td>
                                    </tr>
                                    <tr className="bg-transparent hover:bg-[#24332B] transition-colors">
                                        <td className="p-4 border border-white/10 font-semibold">Approx. seats per term</td>
                                        <td className="p-4 border border-white/10">Very limited (a few per state)</td>
                                        <td className="p-4 border border-white/10">Larger intake per school</td>
                                    </tr>
                                    <tr className="bg-[#24332B]/50 hover:bg-[#24332B] transition-colors">
                                        <td className="p-4 border border-white/10 font-semibold">Exam difficulty</td>
                                        <td className="p-4 border border-white/10">Higher, especially Maths & English</td>
                                        <td className="p-4 border border-white/10">Standard school-level</td>
                                    </tr>
                                    <tr className="bg-transparent hover:bg-[#24332B] transition-colors">
                                        <td className="p-4 border border-white/10 font-semibold">Interview weight</td>
                                        <td className="p-4 border border-white/10">Very high (detailed viva-voce)</td>
                                        <td className="p-4 border border-white/10">Moderate</td>
                                    </tr>
                                    <tr className="bg-[#24332B]/50 hover:bg-[#24332B] transition-colors">
                                        <td className="p-4 border border-white/10 font-semibold">Pathway</td>
                                        <td className="p-4 border border-white/10 text-gold">Near-direct pipeline to NDA</td>
                                        <td className="p-4 border border-white/10">Strong preparation ground</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-gray-400 mt-4 italic">
                            Both are excellent starting points for a defence career — RIMC is simply a smaller, more intensive, higher-stakes route.
                        </p>
                    </div>

                    {/* H2: FAQs */}
                    <div className="mb-16">
                        <SectionHeading title="Frequently Asked Questions" alignment="left" />
                        <div className="space-y-6 mt-8">
                            {[
                                { q: "What is the age limit and eligibility for RIMC?", a: "RIMC generally admits boys and girls around 11.5 to 13 years of age, applying for Class 8 entry, meeting specified academic and medical standards. Exact age brackets are notified each year — our mentors guide you through the latest eligibility details." },
                                { q: "Can girls apply for RIMC Dehradun?", a: "Yes, RIMC has opened admissions to girls in recent years. Our coaching batches are open to both boys and girls." },
                                { q: "What is the fee structure for RIMC coaching at Pathfinder Defence Academy?", a: "Fees depend on the batch type and duration. Contact our Alambagh or Indira Nagar centre directly for the current fee structure and batch schedule." },
                                { q: "How is RIMC's written exam different from a regular school test?", a: "RIMC's Mathematics and English papers are considerably tougher than standard school-level papers for the same age group, requiring dedicated, exam-specific preparation rather than regular school study alone." },
                                { q: "How can I prepare my child for the RIMC viva-voce?", a: "Consistent mock interview practice, confidence-building exercises, and general awareness development — all part of our structured RIMC coaching program — are the most effective ways to prepare a child for the viva-voce stage." }
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
                            <h2 className="text-2xl font-bold text-white mb-2">Give Your Child the Right Start Toward a Defence Career</h2>
                            <p className="text-gray-300">
                                RIMC is one of the most rewarding paths into the armed forces — but it demands focused, expert preparation. Visit our Alambagh or Indira Nagar centre, or get in touch today to enroll your child in our RIMC coaching batch in Lucknow.
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
