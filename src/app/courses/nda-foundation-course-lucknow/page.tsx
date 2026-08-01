import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
    title: "Best NDA Foundation Course in Lucknow | Class 11 & 12 | PFDA",
    description: "2-Year NDA Foundation Course in Lucknow — Class 11 & 12 schooling with integrated NDA & SSB prep till selection. Hostel facility at Alambagh & I. Nagar.",
    keywords: ["NDA foundation course after 10th Lucknow", "Class 11 NDA coaching Lucknow", "integrated NDA coaching with schooling Lucknow", "residential NDA coaching after 10th Lucknow", "NDA foundation batch Lucknow"],
    alternates: { canonical: "https://pathfinderdefenceacademy.com/courses/nda-foundation-course-lucknow" },
};

export default function NDAFoundationCoachingPage() {
    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is the age limit for NDA if my child starts the Foundation course in Class 11?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "NDA has its own age eligibility criteria applied at the time of the actual NDA written exam (generally taken after Class 12), not at the time of joining the Foundation course. Our mentors will walk you through exact current-year NDA age brackets so you can plan accordingly."
                }
            },
            {
                "@type": "Question",
                "name": "Will the NDA Foundation course affect my child's Class 12 board exam results?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No — the program is specifically designed so board academics and NDA preparation are built together, not in competition. Board curriculum coverage remains a core part of the daily schedule throughout both years."
                }
            },
            {
                "@type": "Question",
                "name": "Do you provide hostel and mess facilities for NDA Foundation students in Lucknow?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we offer residential hostel facilities with proper food and supervised study routines for students joining from outside Lucknow or those who prefer a fully structured environment."
                }
            },
            {
                "@type": "Question",
                "name": "What is the fee structure for the 2-year NDA Foundation course at Pathfinder?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Fees are structured for the full 2-year program. Please contact our Alambagh or Indira Nagar centre directly for current details."
                }
            },
            {
                "@type": "Question",
                "name": "Is the NDA Foundation course worth it compared to normal schooling?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For a student already committed to a defence career, the integrated approach saves time, builds physical and psychological readiness earlier, and avoids the last-minute rush many students face when NDA prep is added only after Class 12. For students still exploring options, a conversation with our mentors can help decide what's right for them."
                }
            },
            {
                "@type": "Question",
                "name": "What is the success rate of the NDA Foundation program at Pathfinder Defence Academy?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our Foundation program builds directly on the same mentorship and infrastructure behind our 1000+ overall selections. Contact us for the latest Foundation-batch-specific results and selection details."
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
                title="NDA Foundation Course" 
                subtitle="Integrated 2-Year Preparation for Class 11 & 12" 
                image="/images/nda.jpeg" 
            />

            <section className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    
                    {/* H1 Section */}
                    <div className="mb-12">
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Best NDA Foundation Course in Lucknow — Class 11 & 12 (After 10th)
                        </h1>
                        <p className="text-gray-300 text-lg leading-relaxed mb-4">
                            For a student serious about joining the National Defence Academy, starting early makes a real difference. Our NDA Foundation Course is a long-term, integrated program — students join right after Class 10, continue their regular Class 11 and 12 schooling, and simultaneously build a strong, structured foundation in NDA preparation, all the way through the written exam and SSB interview until final selection.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Instead of juggling separate school tuition and a separate coaching institute, students get both under one roof at Pathfinder Defence Academy's Alambagh and Indira Nagar centres — with a curriculum specifically designed so board exam preparation and NDA preparation strengthen each other, not compete with each other.
                        </p>
                    </div>

                    {/* H2: What Is It */}
                    <div className="mb-16 bg-[#24332B] p-8 rounded-xl border border-white/5">
                        <h2 className="text-2xl font-bold text-gold mb-6">What Is the NDA Foundation Program?</h2>
                        <p className="text-gray-300 mb-6">This is a 2-year integrated program combining:</p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-gold shrink-0 mt-1" size={20} />
                                <span className="text-gray-300"><strong className="text-white">Class 11 & 12 academics</strong> — full board exam curriculum, taught by qualified subject teachers</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-gold shrink-0 mt-1" size={20} />
                                <span className="text-gray-300"><strong className="text-white">NDA written exam preparation</strong> — Mathematics, General Ability Test (GAT), and General Knowledge built specifically around the NDA exam pattern</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-gold shrink-0 mt-1" size={20} />
                                <span className="text-gray-300"><strong className="text-white">Physical training</strong> — regular physical fitness routines matching NDA's physical standards</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-gold shrink-0 mt-1" size={20} />
                                <span className="text-gray-300"><strong className="text-white">SSB interview groundwork</strong> — personality development and group activities introduced early, so students aren't starting SSB preparation from zero after Class 12</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="text-gold shrink-0 mt-1" size={20} />
                                <span className="text-gray-300"><strong className="text-white">Continuous mentorship</strong> — students stay with the same academy and mentors from Class 11 through their eventual NDA selection, rather than switching institutes at each stage</span>
                            </li>
                        </ul>
                    </div>

                    {/* H2: Foundation vs Normal Schooling Table */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-bold text-white mb-6">Why Choose Integrated NDA Coaching Over Normal Schooling + Separate Coaching</h2>
                        <p className="text-gray-300 mb-6">Many parents default to enrolling their child in a regular school and adding NDA coaching separately later, around Class 12. Here's why the integrated approach works better for defence aspirants:</p>
                        
                        <div className="overflow-x-auto mb-6">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-gold text-black">
                                        <th className="p-4 font-bold border border-gold">Aspect</th>
                                        <th className="p-4 font-bold border border-gold">NDA Foundation (Integrated)</th>
                                        <th className="p-4 font-bold border border-gold">Regular School + Separate Coaching</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    <tr className="bg-[#1B2620] hover:bg-[#1B2620]/80 transition-colors">
                                        <td className="p-4 border border-white/10 font-semibold">Time management</td>
                                        <td className="p-4 border border-white/10 text-gold font-bold">Academics and NDA prep planned together, no conflict</td>
                                        <td className="p-4 border border-white/10">Student juggles two separate schedules and institutes</td>
                                    </tr>
                                    <tr className="bg-transparent hover:bg-[#1B2620] transition-colors">
                                        <td className="p-4 border border-white/10 font-semibold">Physical training</td>
                                        <td className="p-4 border border-white/10">Built into the daily routine from Class 11</td>
                                        <td className="p-4 border border-white/10">Often skipped or rushed, added only near Class 12</td>
                                    </tr>
                                    <tr className="bg-[#1B2620] hover:bg-[#1B2620]/80 transition-colors">
                                        <td className="p-4 border border-white/10 font-semibold">SSB groundwork</td>
                                        <td className="p-4 border border-white/10">Starts early, developed gradually over 2 years</td>
                                        <td className="p-4 border border-white/10">Often crammed in the final months before SSB</td>
                                    </tr>
                                    <tr className="bg-transparent hover:bg-[#1B2620] transition-colors">
                                        <td className="p-4 border border-white/10 font-semibold">Continuity</td>
                                        <td className="p-4 border border-white/10">Same mentors track progress for 2 full years</td>
                                        <td className="p-4 border border-white/10">Student restarts with a new coaching institute later</td>
                                    </tr>
                                    <tr className="bg-[#1B2620] hover:bg-[#1B2620]/80 transition-colors">
                                        <td className="p-4 border border-white/10 font-semibold">Board exam focus</td>
                                        <td className="p-4 border border-white/10">Maintained throughout, not sacrificed for NDA prep</td>
                                        <td className="p-4 border border-white/10">Risk of one being deprioritized over the other</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-gray-400 italic">
                            This isn't to say separate coaching can't work — but for a student who already knows they want NDA, the integrated approach removes a lot of avoidable friction.
                        </p>
                    </div>

                    {/* H2: Our Program Structure */}
                    <div className="mb-16">
                        <SectionHeading title="Our NDA Foundation Program Structure" alignment="left" />
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                            <div className="bg-[#1B2620] p-6 rounded-lg border border-white/5">
                                <h3 className="text-xl font-bold text-white mb-3">Academics</h3>
                                <p className="text-gray-400">Full Class 11 and 12 curriculum (board-aligned), taught alongside NDA-specific Mathematics and English to reinforce both simultaneously.</p>
                            </div>
                            
                            <div className="bg-[#1B2620] p-6 rounded-lg border border-gold/20">
                                <h3 className="text-xl font-bold text-white mb-3">NDA Written Exam Preparation</h3>
                                <p className="text-gray-400">Structured, staged coverage of Mathematics, General Ability Test (English + General Knowledge), building progressively across the 2 years rather than being crammed into a few months.</p>
                            </div>
                            
                            <div className="bg-[#1B2620] p-6 rounded-lg border border-white/5">
                                <h3 className="text-xl font-bold text-white mb-3">Physical Training</h3>
                                <p className="text-gray-400">Daily physical fitness routines aligned with NDA's physical standards, building endurance and discipline gradually rather than as a last-minute push.</p>
                            </div>

                            <div className="bg-[#1B2620] p-6 rounded-lg border border-gold/20">
                                <h3 className="text-xl font-bold text-white mb-3">SSB & Personality Development</h3>
                                <p className="text-gray-400">Regular group activities, communication exercises, and personality-development sessions introduced from Class 11 onward, so students walk into their actual SSB interview with real preparation behind them, not a crash course.</p>
                            </div>
                        </div>
                    </div>

                    {/* H2: Hostel & Residential Facilities */}
                    <div className="mb-16 bg-[#24332B] p-8 rounded-xl border border-gold/20 text-center">
                        <h2 className="text-2xl font-bold text-white mb-4">Hostel & Residential Facilities</h2>
                        <p className="text-gray-300 max-w-2xl mx-auto">
                            For students joining from outside Lucknow, or families who prefer a fully structured, disciplined routine, we offer safe, supervised residential hostel facilities alongside the Foundation program — with proper food, study hours, and physical training built into daily life at the hostel.
                        </p>
                    </div>

                    {/* H2: Centres */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-2">Our NDA Foundation Centres in Lucknow</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex gap-4 items-start">
                                <CheckCircle className="text-gold shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-lg text-white mb-1">Alambagh Branch</h4>
                                    <p className="text-gray-400 text-sm">Our head office centre running the full 2-year NDA Foundation batch, with complete academic, physical training, and hostel infrastructure.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <CheckCircle className="text-gold shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-lg text-white mb-1">Indira Nagar Branch</h4>
                                    <p className="text-gray-400 text-sm">A convenient option for families around Indira Nagar and Faizabad Road, offering the same integrated Foundation program.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* H2: FAQs */}
                    <div className="mb-16">
                        <SectionHeading title="Frequently Asked Questions" alignment="left" />
                        <div className="space-y-6 mt-8">
                            {[
                                { q: "What is the age limit for NDA if my child starts the Foundation course in Class 11?", a: "NDA has its own age eligibility criteria applied at the time of the actual NDA written exam (generally taken after Class 12), not at the time of joining the Foundation course. Our mentors will walk you through exact current-year NDA age brackets so you can plan accordingly." },
                                { q: "Will the NDA Foundation course affect my child's Class 12 board exam results?", a: "No — the program is specifically designed so board academics and NDA preparation are built together, not in competition. Board curriculum coverage remains a core part of the daily schedule throughout both years." },
                                { q: "Do you provide hostel and mess facilities for NDA Foundation students in Lucknow?", a: "Yes, we offer residential hostel facilities with proper food and supervised study routines for students joining from outside Lucknow or those who prefer a fully structured environment." },
                                { q: "What is the fee structure for the 2-year NDA Foundation course at Pathfinder?", a: "Fees are structured for the full 2-year program. Please contact our Alambagh or Indira Nagar centre directly for current details." },
                                { q: "Is the NDA Foundation course worth it compared to normal schooling?", a: "For a student already committed to a defence career, the integrated approach saves time, builds physical and psychological readiness earlier, and avoids the last-minute rush many students face when NDA prep is added only after Class 12. For students still exploring options, a conversation with our mentors can help decide what's right for them." },
                                { q: "What is the success rate of the NDA Foundation program at Pathfinder Defence Academy?", a: "Our Foundation program builds directly on the same mentorship and infrastructure behind our 1000+ overall selections. Contact us for the latest Foundation-batch-specific results and selection details." }
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
                            <h2 className="text-2xl font-bold text-white mb-2">Give Your Child a 2-Year Head Start Toward NDA</h2>
                            <p className="text-gray-300">
                                The earlier the right preparation begins, the stronger the foundation for NDA and SSB success. Visit our Alambagh or Indira Nagar centre, or reach out today to enroll your child in our NDA Foundation Course.
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
