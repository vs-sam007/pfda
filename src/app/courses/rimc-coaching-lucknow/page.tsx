import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
    title: "RIMC Coaching in Lucknow Alambagh: Class 8 Admission & Viva-Voce Prep 2026",
    description: "Best RIMC coaching in Lucknow Alambagh for Class 8 admission. 100% exam-focused Maths, English, GK & Viva-Voce training with hostel facility. Call 07505188009.",
    keywords: ["RIMC coaching in Lucknow", "RIMC coaching Alambagh", "RIMC entrance exam classes Lucknow", "best RIMC coaching in Lucknow", "RIMC Dehradun preparation Alambagh Lucknow"],
    alternates: { canonical: "https://pathfinderdefenceacademy.com/courses/rimc-coaching-lucknow" },
};

export default function RIMCCoachingPage() {
    const courseJsonLd = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "RIMC Coaching in Lucknow Alambagh",
        "description": "Specialized RIMC Dehradun Class 8 entrance examination preparation including written test in Maths, English, GK, plus viva-voce interview and residential training at Pathfinder Defence Academy Lucknow.",
        "provider": {
            "@type": "EducationalOrganization",
            "name": "Pathfinder Defence Academy",
            "url": "https://pathfinderdefenceacademy.com"
        },
        "courseMode": "In-Person Classroom and Boarding",
        "educationalCredentialAwarded": "RIMC Dehradun Class 8 Entrance Qualification"
    };

    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is the age limit for RIMC admission?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For RIMC Class 8 admission, a candidate must be between 11.5 and 13 years of age at the time of joining the college. The applicant must either be studying in Class 7 or have passed Class 7 from a recognized school."
                }
            },
            {
                "@type": "Question",
                "name": "Can girls apply for RIMC Dehradun?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, RIMC Dehradun now admits female candidates for Class 8 entry following Supreme Court directives. Pathfinder Defence Academy runs dedicated batches for both boys and girls at our Alambagh campus."
                }
            },
            {
                "@type": "Question",
                "name": "Where is Pathfinder Defence Academy located for RIMC coaching in Lucknow?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our primary RIMC coaching campus is located at KSM Plaza, opposite Singar Nagar Metro Station, Alambagh, Lucknow, with an additional branch in Indira Nagar. Both centres provide full academic mentoring and boarding."
                }
            },
            {
                "@type": "Question",
                "name": "What is the exam pattern for the RIMC written test?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The RIMC entrance exam comprises three written papers: English (125 marks), Mathematics (200 marks), and General Knowledge (75 marks) totaling 400 marks, followed by a 50-mark viva-voce interview for qualifying candidates."
                }
            },
            {
                "@type": "Question",
                "name": "How does Pathfinder Defence Academy prepare students for the RIMC viva-voce?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We conduct 1-on-1 mock interviews, personality grooming sessions, and current affairs discussions with ex-defence officers to build confidence, articulation, and presence of mind required for the 50-mark viva-voce."
                }
            }
        ]
    };

    return (
        <main className="bg-primary min-h-screen pb-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            
            <PageHeader 
                title="RIMC Coaching in Lucknow" 
                subtitle="Expert Preparation for RIMC Dehradun (Class 8 Entry) | Alambagh & Indira Nagar" 
                image="/images/sainic-1.jpg" 
            />

            <section className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    
                    {/* AEO Crisp Summary Paragraph Box */}
                    <div className="mb-10 p-6 rounded-2xl bg-[#24332B] border-2 border-gold/40 shadow-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="inline-block w-2.5 h-2.5 rounded-full bg-gold animate-pulse"></span>
                            <span className="text-xs uppercase font-bold tracking-widest text-gold">Course Overview</span>
                        </div>
                        <p className="text-gray-200 text-lg leading-relaxed font-medium">
                            Pathfinder Defence Academy provides premier RIMC coaching in Lucknow (Alambagh & Indira Nagar) for boys and girls seeking Class 8 entry to RIMC Dehradun. The program offers intensive Mathematics and English written test modules, dedicated viva-voce mock interviews, previous 10-year paper analysis, and complete residential hostel facilities near Singar Nagar Metro, Alambagh.
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 pt-4 border-t border-white/10 text-center">
                            <div className="bg-[#1B2620] p-2.5 rounded-lg border border-gold/20">
                                <span className="block text-gold font-bold text-lg">11.5 - 13 Yrs</span>
                                <span className="text-xs text-gray-300">Age Eligibility</span>
                            </div>
                            <div className="bg-[#1B2620] p-2.5 rounded-lg border border-gold/20">
                                <span className="block text-gold font-bold text-lg">15:1 Ratio</span>
                                <span className="text-xs text-gray-300">Small Batches</span>
                            </div>
                            <div className="bg-[#1B2620] p-2.5 rounded-lg border border-gold/20">
                                <span className="block text-gold font-bold text-lg">100% Viva</span>
                                <span className="text-xs text-gray-300">Interview Training</span>
                            </div>
                            <div className="bg-[#1B2620] p-2.5 rounded-lg border border-gold/20">
                                <span className="block text-gold font-bold text-lg">Alambagh</span>
                                <span className="text-xs text-gray-300">Head Campus</span>
                            </div>
                        </div>
                    </div>

                    {/* H1 Section */}
                    <div className="mb-12">
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Best RIMC Coaching in Lucknow Alambagh — Expert Preparation for RIMC Dehradun
                        </h1>
                        <p className="text-gray-300 text-lg leading-relaxed mb-4">
                            The Rashtriya Indian Military College (RIMC), Dehradun, is one of the most prestigious defence institutions in India, admitting boys and girls around Class 8 through a rigorous written exam and interview. With only a handful of seats available per state each term, getting in requires focused, expert guidance — not generic coaching.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            At Pathfinder Defence Academy, our RIMC coaching in Lucknow is built specifically for this exam. We run small, focused batches at our Alambagh (Opp. Singar Nagar Metro) and Indira Nagar centres, led by mentors who understand exactly what RIMC's written test and viva-voce demand.
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
                                    <p className="text-gray-400">Our Alambagh centre offers dedicated RIMC batches with access to our full academic and physical training infrastructure.</p>
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
                                { q: "What is the age limit for RIMC admission?", a: "For RIMC Class 8 admission, a candidate must be between 11.5 and 13 years of age at the time of joining the college. The applicant must either be studying in Class 7 or have passed Class 7 from a recognized school." },
                                { q: "Can girls apply for RIMC Dehradun?", a: "Yes, RIMC Dehradun now admits female candidates for Class 8 entry following Supreme Court directives. Pathfinder Defence Academy runs dedicated batches for both boys and girls at our Alambagh campus." },
                                { q: "Where is Pathfinder Defence Academy located for RIMC coaching in Lucknow?", a: "Our primary RIMC coaching campus is located at KSM Plaza, opposite Singar Nagar Metro Station, Alambagh, Lucknow, with an additional branch in Indira Nagar. Both centres provide full academic mentoring and boarding." },
                                { q: "What is the exam pattern for the RIMC written test?", a: "The RIMC entrance exam comprises three written papers: English (125 marks), Mathematics (200 marks), and General Knowledge (75 marks) totaling 400 marks, followed by a 50-mark viva-voce interview for qualifying candidates." },
                                { q: "How does Pathfinder Defence Academy prepare students for the RIMC viva-voce?", a: "We conduct 1-on-1 mock interviews, personality grooming sessions, and current affairs discussions with ex-defence officers to build confidence, articulation, and presence of mind required for the 50-mark viva-voce." }
                            ].map((faq, index) => (
                                <div key={index} className="bg-[#24332B] p-6 rounded-lg">
                                    <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
                                    <p className="text-gray-300 leading-relaxed">{faq.a}</p>
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
