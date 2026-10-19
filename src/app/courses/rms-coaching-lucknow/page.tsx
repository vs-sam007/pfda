import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
    title: "RMS Coaching in Lucknow Alambagh: Class 6 & 9 CET Entrance Prep 2026",
    description: "Best RMS (Rashtriya Military School) coaching in Lucknow Alambagh for Class 6 & 9 CET. Top results, daily mock tests & hostel facility. Call 07505188009.",
    keywords: ["RMS coaching in Lucknow", "RMS coaching Alambagh", "Rashtriya Military School entrance exam coaching Lucknow", "RMS CET preparation Lucknow", "RMS class 6 coaching Alambagh", "RMS class 9 coaching Lucknow"],
    alternates: { canonical: "https://pathfinderdefenceacademy.com/courses/rms-coaching-lucknow" },
};

export default function RMSCoachingPage() {
    const courseJsonLd = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "RMS Entrance Exam Coaching Lucknow Alambagh",
        "description": "Comprehensive Rashtriya Military School Common Entrance Test (RMS CET) coaching for Class 6 and Class 9 at Pathfinder Defence Academy Lucknow.",
        "provider": {
            "@type": "EducationalOrganization",
            "name": "Pathfinder Defence Academy",
            "url": "https://pathfinderdefenceacademy.com"
        },
        "courseMode": "In-Person Classroom and Boarding",
        "educationalCredentialAwarded": "RMS CET Class 6 & 9 Entrance Qualification"
    };

    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is the age limit for RMS Class 6 and Class 9 admission?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For RMS Class 6 admission, candidate age must be between 10 to 12 years. For Class 9 admission, candidate age must be between 13 to 15 years as of 31st March of the year of admission."
                }
            },
            {
                "@type": "Question",
                "name": "What is the RMS CET exam pattern?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "RMS Class 6 CET tests English (qualifying), Intelligence, Mathematics, and General Knowledge (200 marks total). Class 9 CET consists of Paper 1 (English, Hindi, Social Science) and Paper 2 (Maths, Science) followed by a 50-mark interview."
                }
            },
            {
                "@type": "Question",
                "name": "Where is Pathfinder Defence Academy RMS coaching campus located in Lucknow?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our primary RMS coaching campus is located at KSM Plaza, opposite Singar Nagar Metro Station, Alambagh, Lucknow. We also have a branch in Indira Nagar, Lucknow."
                }
            },
            {
                "@type": "Question",
                "name": "Do you provide hostel facilities for outstation RMS students?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Pathfinder Defence Academy provides secure residential hostel facilities with nutritious meals, disciplined study schedules, and medical care at our Alambagh, Lucknow campus."
                }
            },
            {
                "@type": "Question",
                "name": "How does RMS differ from Sainik Schools?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "RMS consists of only 5 military schools directly governed by the Ministry of Defence with high seat competition, while Sainik Schools comprise 33+ schools administered by the Sainik Schools Society."
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
                title="RMS Coaching in Lucknow" 
                subtitle="Expert Preparation for Rashtriya Military School (Class 6 & 9 CET) | Alambagh" 
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
                            Pathfinder Defence Academy delivers specialized RMS CET coaching in Lucknow (Alambagh & Indira Nagar) for Class 6 and Class 9 admissions into all 5 Rashtriya Military Schools. The course includes daily subject classes in Maths, English, Intelligence, and GK, interview orientation, regular OMR mock tests, and full boarding facilities at our Alambagh campus.
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 pt-4 border-t border-white/10 text-center">
                            <div className="bg-[#1B2620] p-2.5 rounded-lg border border-gold/20">
                                <span className="block text-gold font-bold text-lg">Class 6 & 9</span>
                                <span className="text-xs text-gray-300">CET Batches</span>
                            </div>
                            <div className="bg-[#1B2620] p-2.5 rounded-lg border border-gold/20">
                                <span className="block text-gold font-bold text-lg">5 RMS Schools</span>
                                <span className="text-xs text-gray-300">Target Network</span>
                            </div>
                            <div className="bg-[#1B2620] p-2.5 rounded-lg border border-gold/20">
                                <span className="block text-gold font-bold text-lg">OMR Series</span>
                                <span className="text-xs text-gray-300">Weekly Testing</span>
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
                            Best Rashtriya Military School (RMS) Coaching in Lucknow Alambagh
                        </h1>
                        <p className="text-gray-300 text-lg leading-relaxed mb-4">
                            Rashtriya Military School (RMS) is a network of just 5 institutions across India — Chail, Ajmer, Belgaum, Bengaluru, and Dholpur — offering disciplined, military-style schooling to students from Class 6 onward. Admission happens through the RMS Common Entrance Test (CET), a competitive exam that requires focused, exam-specific preparation.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            At Pathfinder Defence Academy, our RMS coaching in Lucknow prepares students for the CET exam at both Class 6 and Class 9 entry levels, with expert faculty, structured mock tests, and hostel facilities for outstation families at our Alambagh centre (Opp. Singar Nagar Metro).
                        </p>
                    </div>

                    {/* H2: RMS vs Sainik School Table */}
                    <div className="mb-16 bg-[#24332B] p-8 rounded-xl border border-white/5">
                        <h2 className="text-2xl font-bold text-gold mb-6">Is RMS the Same as Sainik School? (No — Here's the Difference)</h2>
                        <p className="text-gray-300 mb-6">This is one of the most common questions we get from parents, so let's answer it directly.</p>
                        
                        <div className="overflow-x-auto mb-6">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-gold text-black">
                                        <th className="p-4 font-bold border border-gold">Feature</th>
                                        <th className="p-4 font-bold border border-gold">Rashtriya Military School (RMS)</th>
                                        <th className="p-4 font-bold border border-gold">Sainik School</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    <tr className="bg-[#1B2620] hover:bg-[#1B2620]/80 transition-colors">
                                        <td className="p-4 border border-white/10 font-semibold">Number of institutions in India</td>
                                        <td className="p-4 border border-white/10 font-bold text-white">5</td>
                                        <td className="p-4 border border-white/10">33+</td>
                                    </tr>
                                    <tr className="bg-transparent hover:bg-[#1B2620] transition-colors">
                                        <td className="p-4 border border-white/10 font-semibold">Entrance exam</td>
                                        <td className="p-4 border border-white/10 font-bold text-white">RMS CET</td>
                                        <td className="p-4 border border-white/10">AISSEE</td>
                                    </tr>
                                    <tr className="bg-[#1B2620] hover:bg-[#1B2620]/80 transition-colors">
                                        <td className="p-4 border border-white/10 font-semibold">Entry classes</td>
                                        <td className="p-4 border border-white/10">Class 6 and Class 9</td>
                                        <td className="p-4 border border-white/10">Class 6 and Class 9</td>
                                    </tr>
                                    <tr className="bg-transparent hover:bg-[#1B2620] transition-colors">
                                        <td className="p-4 border border-white/10 font-semibold">Administration</td>
                                        <td className="p-4 border border-white/10">Directly under the Ministry of Defence</td>
                                        <td className="p-4 border border-white/10">State-affiliated, under Sainik Schools Society</td>
                                    </tr>
                                    <tr className="bg-[#1B2620] hover:bg-[#1B2620]/80 transition-colors">
                                        <td className="p-4 border border-white/10 font-semibold">Selectivity</td>
                                        <td className="p-4 border border-white/10 text-gold">Very high, due to fewer schools</td>
                                        <td className="p-4 border border-white/10">High, but larger overall intake</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-gray-400 italic">
                            Both are excellent, disciplined pathways toward a defence career and eventual NDA entry — RMS is simply a smaller, more selective network. If you're unsure which one fits your child better, our mentors can guide you through both options.
                        </p>
                    </div>

                    {/* H2: Our Coaching Program */}
                    <div className="mb-16">
                        <SectionHeading title="Our RMS CET Coaching Program" alignment="left" />
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                            <div className="bg-[#1B2620] p-6 rounded-lg border border-gold/20">
                                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                                    <span className="bg-gold text-black px-2 py-1 rounded text-sm font-bold">Class 6</span>
                                    RMS Coaching
                                </h3>
                                <p className="text-gray-400">Focused preparation in Mathematics, Language, Intelligence, and General Knowledge, matched to the RMS CET Class 6 pattern, with regular mock tests to track progress.</p>
                            </div>
                            
                            <div className="bg-[#1B2620] p-6 rounded-lg border border-gold/20">
                                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                                    <span className="bg-gold text-black px-2 py-1 rounded text-sm font-bold">Class 9</span>
                                    RMS Coaching
                                </h3>
                                <p className="text-gray-400">Subject-wise preparation covering Mathematics, Science, Social Science, English, and General Knowledge, aligned to the Class 9 CET pattern, along with guidance on the interview stage.</p>
                            </div>
                            
                            <div className="bg-[#1B2620] p-6 rounded-lg border border-gold/20 md:col-span-2">
                                <h3 className="text-xl font-bold text-white mb-3">Physical & Interview Readiness</h3>
                                <p className="text-gray-400">Beyond academics, our program builds discipline, physical fitness awareness, and interview confidence — all part of what RMS looks for in a candidate.</p>
                            </div>
                        </div>
                    </div>

                    {/* H2: Centres */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-2">Our RMS Coaching Centres in Lucknow</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="flex gap-4 items-start">
                                <CheckCircle className="text-gold shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-lg text-white mb-1">Alambagh Branch</h4>
                                    <p className="text-gray-400 text-sm">Our main centre offering full RMS CET batches for both Class 6 and Class 9 entry, with access to our complete training infrastructure.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <CheckCircle className="text-gold shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-lg text-white mb-1">Indira Nagar Branch</h4>
                                    <p className="text-gray-400 text-sm">A convenient centre for families in and around Indira Nagar and Faizabad Road, running the same structured RMS preparation program.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <CheckCircle className="text-gold shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-lg text-white mb-1">Hostel Facility</h4>
                                    <p className="text-gray-400 text-sm">For families outside Lucknow, we offer residential hostel arrangements so outstation students can join our RMS coaching batches without disruption.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* H2: FAQs */}
                    <div className="mb-16">
                        <SectionHeading title="Frequently Asked Questions" alignment="left" />
                        <div className="space-y-6 mt-8">
                            {[
                                { q: "What is the age limit for RMS Class 6 and Class 9 admission?", a: "For RMS Class 6 admission, candidate age must be between 10 to 12 years. For Class 9 admission, candidate age must be between 13 to 15 years as of 31st March of the year of admission." },
                                { q: "What is the RMS CET exam pattern?", a: "RMS Class 6 CET tests English (qualifying), Intelligence, Mathematics, and General Knowledge (200 marks total). Class 9 CET consists of Paper 1 (English, Hindi, Social Science) and Paper 2 (Maths, Science) followed by a 50-mark interview." },
                                { q: "Where is Pathfinder Defence Academy RMS coaching campus located in Lucknow?", a: "Our primary RMS coaching campus is located at KSM Plaza, opposite Singar Nagar Metro Station, Alambagh, Lucknow. We also have a branch in Indira Nagar, Lucknow." },
                                { q: "Do you provide hostel facilities for outstation RMS students?", a: "Yes, Pathfinder Defence Academy provides secure residential hostel facilities with nutritious meals, disciplined study schedules, and medical care at our Alambagh, Lucknow campus." },
                                { q: "How does RMS differ from Sainik Schools?", a: "RMS consists of only 5 military schools directly governed by the Ministry of Defence with high seat competition, while Sainik Schools comprise 33+ schools administered by the Sainik Schools Society." }
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
                            <h2 className="text-2xl font-bold text-white mb-2">Start Your Child's Journey Toward a Disciplined Defence Career</h2>
                            <p className="text-gray-300">
                                With only 5 RMS institutions in India, seats are highly competitive — the right preparation makes all the difference. Visit our Alambagh or Indira Nagar centre today to enroll in our RMS CET coaching program.
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
