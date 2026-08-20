import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
    title: "Best Agniveer Coaching in India | Agnipath Scheme Preparation",
    description: "Prepare for the Agniveer recruitment (Army, Navy, Air Force) under the Agnipath Scheme. Join the best coaching in India for written exams & physical fitness.",
    keywords: ["best Agniveer coaching in India", "Agnipath scheme coaching", "Indian Army Agniveer preparation online", "Agniveer physical fitness training", "Agniveer written exam coaching"],
    alternates: { canonical: "https://pathfinderdefenceacademy.com/courses/agniveer" },
};

export default function AgniveerNationalPage() {
    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Does the academy provide physical fitness training for Agniveer rallies?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Physical fitness is the most critical hurdle for Agniveer rallies. We provide daily rigorous physical training, including the 1.6 km run, pull-ups, and balance exercises, on our dedicated ground."
                }
            },
            {
                "@type": "Question",
                "name": "Can out-of-station candidates join the Agniveer batches?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. Students from villages and cities across India come to our residential campus, where we provide complete hostel and mess facilities to support their demanding daily routine."
                }
            },
            {
                "@type": "Question",
                "name": "Does the coaching cover all Agniveer trades (Army, Navy, Air Force)?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our coaching structure covers General Duty (GD), Technical, Clerk, and Store Keeper trades across the Army, Navy, and Air Force, with specialized subject classes for each."
                }
            },
            {
                "@type": "Question",
                "name": "Are there mock tests for the Agniveer written examination?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we conduct weekly mock tests modeled directly on the latest computer-based test (CBT) patterns for the Agnipath scheme to improve speed and accuracy."
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
                title="Best Agniveer Coaching in India" 
                subtitle="Agnipath Scheme — Armed Forces Recruitment" 
                image="/images/1707393182_indian-army.jpg" 
            />

            <section className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    
                    {/* H1 Section */}
                    <div className="mb-12">
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Top Agniveer Preparation — Join the Indian Armed Forces
                        </h1>
                        <p className="text-gray-300 text-lg leading-relaxed mb-4">
                            The Agnipath Scheme (Agniveer) has transformed the recruitment process for soldiers, sailors, and airmen across India. Serving a 4-year tenure in the Indian Army, Navy, or Air Force—with up to 25% of the most elite candidates retained permanently—is a golden opportunity for dedicated 10th and 12th pass youth nationwide.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Path Finder Defence Academy offers specialized pan-India Agniveer coaching. We recognize that Agniveer recruitment requires an intense combination of flawless physical endurance and sharp written exam accuracy. Through our residential offline batches and digital test modules, we prepare thousands of candidates from across the country for recruitment rallies.
                        </p>
                        
                        {/* Internal Link to Local Page equivalent */}
                        <div className="mt-8 bg-gold/10 border border-gold/30 rounded-lg p-4 flex items-center justify-between flex-wrap gap-4">
                            <p className="text-gray-300">
                                <strong className="text-gold">Looking for intensive offline physical training?</strong> We conduct daily physical and written batches at our dedicated centres.
                            </p>
                            <Link href="/branches" className="text-gold hover:text-white font-bold shrink-0 transition-colors">
                                Find a Centre Near You →
                            </Link>
                        </div>
                    </div>

                    {/* H2: Why Choose PFDA Nationally */}
                    <div className="mb-16">
                        <SectionHeading title="Why Youth Across India Choose PFDA for Agniveer" alignment="left" />
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                            <div className="bg-[#1B2620] p-6 rounded-lg border border-white/5">
                                <h3 className="text-xl font-bold text-white mb-3">Hostels for Out-of-State Youth</h3>
                                <p className="text-gray-400">Our campus provides secure, affordable residential facilities and nutritious mess food, ensuring students from any state can live and train comfortably without distractions.</p>
                            </div>
                            
                            <div className="bg-[#1B2620] p-6 rounded-lg border border-gold/20">
                                <h3 className="text-xl font-bold text-white mb-3">Rigorous Physical Training</h3>
                                <p className="text-gray-400">Agniveer rallies are physically gruelling. Our ex-military instructors conduct daily ground training covering the 1.6km run, pull-ups, and obstacle courses.</p>
                            </div>
                            
                            <div className="bg-[#1B2620] p-6 rounded-lg border border-white/5">
                                <h3 className="text-xl font-bold text-white mb-3">CBT Pattern Mock Tests</h3>
                                <p className="text-gray-400">With the shift to Computer-Based Testing (CBT), we provide digital mock tests that exactly replicate the real exam environment, ensuring zero technical hesitation on exam day.</p>
                            </div>

                            <div className="bg-[#1B2620] p-6 rounded-lg border border-white/5">
                                <h3 className="text-xl font-bold text-white mb-3">Trade-Specific Coaching</h3>
                                <p className="text-gray-400">Whether you are applying for General Duty (GD), Technical, Clerk, or Store Keeper trades, we provide focused subject coaching for your specific syllabus.</p>
                            </div>
                        </div>
                    </div>

                    {/* H2: Exam Breakdown */}
                    <div className="mb-16 bg-[#24332B] p-8 rounded-xl border border-white/5">
                        <h2 className="text-2xl font-bold text-gold mb-6">Agniveer Selection Process</h2>
                        <p className="text-gray-300 mb-6">The Agnipath scheme selection process is structured into two main phases:</p>
                        
                        <div className="space-y-6">
                            <div className="flex items-start gap-4 border-b border-white/10 pb-6">
                                <div className="bg-gold text-black font-bold px-4 py-2 rounded shrink-0">Phase 1</div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Online Computer Based Written Examination (CEE)</h3>
                                    <p className="text-gray-400">Depending on the trade, subjects include General Knowledge, General Science, Mathematics, Logical Reasoning, and English/Hindi. Accuracy and speed are critical.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-gold text-black font-bold px-4 py-2 rounded shrink-0">Phase 2</div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Recruitment Rally (Physical & Medical)</h3>
                                    <p className="text-gray-400">Shortlisted candidates undergo the Physical Fitness Test (PFT), Physical Measurement Test (PMT), and a strict Medical Examination at designated rally sites.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* H2: Eligibility */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-2">Agniveer Eligibility Standards</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex gap-4 items-start">
                                <CheckCircle className="text-gold shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-lg text-white mb-1">Age Limits</h4>
                                    <p className="text-gray-400 text-sm">Candidates must be between 17.5 and 21 years of age (age brackets are strictly enforced as per the latest notifications).</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <CheckCircle className="text-gold shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-lg text-white mb-1">Educational Qualification</h4>
                                    <p className="text-gray-400 text-sm">10th Pass for General Duty (GD). 12th Pass required for Technical, Clerk, and Store Keeper trades (Physics/Maths required for some).</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <CheckCircle className="text-gold shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-lg text-white mb-1">Gender & Nationality</h4>
                                    <p className="text-gray-400 text-sm">Recruitment is open to unmarried male and female candidates who are citizens of India.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <CheckCircle className="text-gold shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-lg text-white mb-1">Physical Standards</h4>
                                    <p className="text-gray-400 text-sm">Must meet specific height, weight, and chest expansion parameters dictated by the Armed Forces.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* H2: FAQs */}
                    <div className="mb-16">
                        <SectionHeading title="Frequently Asked Questions" alignment="left" />
                        <div className="space-y-6 mt-8">
                            {[
                                { q: "Does the academy provide physical fitness training for Agniveer rallies?", a: "Yes. Physical fitness is the most critical hurdle for Agniveer rallies. We provide daily rigorous physical training, including the 1.6 km run, pull-ups, and balance exercises, on our dedicated ground." },
                                { q: "Can out-of-station candidates join the Agniveer batches?", a: "Absolutely. Students from villages and cities across India come to our residential campus, where we provide complete hostel and mess facilities to support their demanding daily routine." },
                                { q: "Does the coaching cover all Agniveer trades (Army, Navy, Air Force)?", a: "Yes, our coaching structure covers General Duty (GD), Technical, Clerk, and Store Keeper trades across the Army, Navy, and Air Force, with specialized subject classes for each." },
                                { q: "Are there mock tests for the Agniveer written examination?", a: "Yes, we conduct weekly mock tests modeled directly on the latest computer-based test (CBT) patterns for the Agnipath scheme to improve speed and accuracy." }
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
                            <h2 className="text-2xl font-bold text-white mb-2">Serve the Nation as an Agniveer</h2>
                            <p className="text-gray-300">
                                Clear your written exam with high scores and conquer the physical rally with Path Finder Defence Academy's structured Agniveer training program.
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
