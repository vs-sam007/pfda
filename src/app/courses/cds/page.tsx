import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
    title: "Best CDS Coaching in India | Combined Defence Services Preparation | PFDA",
    description: "Join the top CDS coaching in India for IMA, OTA, INA, and AFA preparation. Path Finder Defence Academy provides online/offline batches, hostel facilities, and SSB guidance. 1000+ selections.",
    keywords: ["best CDS coaching in India", "CDS exam preparation online", "Combined Defence Services coaching", "top CDS academy India", "CDS written exam coaching", "UPSC CDS preparation", "CDS coaching with hostel facility"],
    alternates: { canonical: "https://pathfinderdefenceacademy.com/courses/cds" },
};

export default function CDSNationalPage() {
    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Can graduates from any stream apply for the CDS exam?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, graduates from any recognized university stream can apply for the Indian Military Academy (IMA) and Officers Training Academy (OTA). However, the Indian Naval Academy (INA) requires an Engineering degree, and the Air Force Academy (AFA) requires Physics and Mathematics at the 10+2 level or a Bachelor of Engineering."
                }
            },
            {
                "@type": "Question",
                "name": "Are there hostel facilities for students joining from outside Uttar Pradesh?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we offer complete residential facilities including secure hostels and mess services, allowing students from across India to focus entirely on their UPSC CDS and SSB preparation."
                }
            },
            {
                "@type": "Question",
                "name": "How is OTA preparation different from IMA/INA/AFA preparation?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For the Officers Training Academy (OTA), candidates only need to appear for the English and General Knowledge papers. Candidates aiming for IMA, INA, or AFA must additionally clear the Elementary Mathematics paper. Our coaching is tailored to let students focus on the subjects relevant to their chosen academy."
                }
            },
            {
                "@type": "Question",
                "name": "Do you provide SSB Interview preparation along with CDS written coaching?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. Clearing the CDS written exam is only the first step. Our curriculum integrates SSB interview groundwork, including psychological tests and physical fitness, right from the beginning of your course."
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
                title="Best CDS Coaching in India" 
                subtitle="Combined Defence Services (UPSC)" 
                image="/images/gallery8.jpg" 
            />

            <section className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    
                    {/* H1 Section */}
                    <div className="mb-12">
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Top CDS Exam Preparation — Elite Training for Graduates Across India
                        </h1>
                        <p className="text-gray-300 text-lg leading-relaxed mb-4">
                            The Combined Defence Services (CDS) Examination is the most prestigious gateway for graduates across India to join the Indian Military Academy (IMA), Officers Training Academy (OTA), Indian Naval Academy (INA), and the Indian Air Force Academy (AFA). Conducted by the UPSC twice a year, this highly competitive exam demands specialized, graduate-level preparation.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Path Finder Defence Academy is recognized nationally for producing top-tier officers through our focused CDS programs. Whether you join our intensive residential campus batches in North India, utilizing our excellent hostel facilities, or opt for our digital learning modules, we ensure you master English, General Knowledge, and Elementary Mathematics—paired with critical SSB interview readiness.
                        </p>
                        
                        {/* Internal Link to Local Page equivalent */}
                        <div className="mt-8 bg-gold/10 border border-gold/30 rounded-lg p-4 flex items-center justify-between flex-wrap gap-4">
                            <p className="text-gray-300">
                                <strong className="text-gold">Prefer to attend offline classes in Lucknow?</strong> We have specialized offline CDS batches running at our Alambagh and Indira Nagar centres.
                            </p>
                            <Link href="/branches" className="text-gold hover:text-white font-bold shrink-0 transition-colors">
                                Find a Centre Near You →
                            </Link>
                        </div>
                    </div>

                    {/* H2: Why Choose PFDA Nationally */}
                    <div className="mb-16">
                        <SectionHeading title="Why Defence Aspirants Across India Choose PFDA" alignment="left" />
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                            <div className="bg-[#1B2620] p-6 rounded-lg border border-white/5">
                                <h3 className="text-xl font-bold text-white mb-3">Residential Hostels</h3>
                                <p className="text-gray-400">Our safe, disciplined campus environment provides out-of-station graduates with premium hostel and mess facilities, ensuring zero distractions during their rigorous CDS preparation.</p>
                            </div>
                            
                            <div className="bg-[#1B2620] p-6 rounded-lg border border-gold/20">
                                <h3 className="text-xl font-bold text-white mb-3">National-Level Test Series</h3>
                                <p className="text-gray-400">Weekly mock exams strictly based on the latest UPSC CDS syllabus and difficulty level, giving students a realistic pan-India ranking and performance analysis.</p>
                            </div>
                            
                            <div className="bg-[#1B2620] p-6 rounded-lg border border-white/5">
                                <h3 className="text-xl font-bold text-white mb-3">Targeted OTA/IMA Tracks</h3>
                                <p className="text-gray-400">Customized study plans depending on whether you are appearing for OTA (English + GK) or IMA/INA/AFA (English + GK + Elementary Mathematics).</p>
                            </div>

                            <div className="bg-[#1B2620] p-6 rounded-lg border border-white/5">
                                <h3 className="text-xl font-bold text-white mb-3">Expert SSB Guidance</h3>
                                <p className="text-gray-400">We don't stop at the written exam. Our faculty includes veteran officers who provide comprehensive training for the 5-day SSB interview process.</p>
                            </div>
                        </div>
                    </div>

                    {/* H2: Exam Breakdown */}
                    <div className="mb-16 bg-[#24332B] p-8 rounded-xl border border-white/5">
                        <h2 className="text-2xl font-bold text-gold mb-6">UPSC CDS Exam Pattern</h2>
                        <p className="text-gray-300 mb-6">The CDS exam tests candidates on up to three subjects, depending on their preferred academy:</p>
                        
                        <div className="space-y-6">
                            <div className="flex items-start gap-4 border-b border-white/10 pb-6">
                                <div className="bg-gold text-black font-bold px-4 py-2 rounded shrink-0">Paper 1</div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">English (100 Marks)</h3>
                                    <p className="text-gray-400">2 Hours. Tests reading comprehension, vocabulary, grammar, and usage. Mandatory for all academies (IMA, INA, AFA, OTA).</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 border-b border-white/10 pb-6">
                                <div className="bg-gold text-black font-bold px-4 py-2 rounded shrink-0">Paper 2</div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">General Knowledge (100 Marks)</h3>
                                    <p className="text-gray-400">2 Hours. Covers Current Affairs, History, Geography, Polity, Economics, and Science. Mandatory for all academies.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-gold text-black font-bold px-4 py-2 rounded shrink-0">Paper 3</div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Elementary Mathematics (100 Marks)</h3>
                                    <p className="text-gray-400">2 Hours. Covers Number System, Algebra, Geometry, Trigonometry, Statistics, and Mensuration. Required for IMA, INA, and AFA only (OTA candidates do not take this paper).</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* H2: Eligibility */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-2">National Eligibility Standards for CDS</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex gap-4 items-start">
                                <CheckCircle className="text-gold shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-lg text-white mb-1">Age Limits</h4>
                                    <p className="text-gray-400 text-sm">Varies by academy. Generally 19–24 years for IMA/INA, 20–24 years for AFA, and 19–25 years for OTA (Non-Technical).</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <CheckCircle className="text-gold shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-lg text-white mb-1">Educational Qualification</h4>
                                    <p className="text-gray-400 text-sm">Graduation from a recognized university. INA requires an Engineering degree. AFA requires Physics/Math at 10+2 or a B.E./B.Tech.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <CheckCircle className="text-gold shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-lg text-white mb-1">Gender & Marital Status</h4>
                                    <p className="text-gray-400 text-sm">Unmarried candidates only for IMA, INA, and AFA. OTA accepts unmarried men/women, as well as certain widowed/divorced candidates.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <CheckCircle className="text-gold shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-lg text-white mb-1">Physical Standards</h4>
                                    <p className="text-gray-400 text-sm">Candidates must meet strict physical and medical standards prescribed by the UPSC and the respective academies.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* H2: FAQs */}
                    <div className="mb-16">
                        <SectionHeading title="Frequently Asked Questions" alignment="left" />
                        <div className="space-y-6 mt-8">
                            {[
                                { q: "Can graduates from any stream apply for the CDS exam?", a: "Yes, graduates from any recognized university stream can apply for the Indian Military Academy (IMA) and Officers Training Academy (OTA). However, the Indian Naval Academy (INA) requires an Engineering degree, and the Air Force Academy (AFA) requires Physics and Mathematics at the 10+2 level or a Bachelor of Engineering." },
                                { q: "Are there hostel facilities for students joining from outside Uttar Pradesh?", a: "Yes, we offer complete residential facilities including secure hostels and mess services, allowing students from across India to focus entirely on their UPSC CDS and SSB preparation." },
                                { q: "How is OTA preparation different from IMA/INA/AFA preparation?", a: "For the Officers Training Academy (OTA), candidates only need to appear for the English and General Knowledge papers. Candidates aiming for IMA, INA, or AFA must additionally clear the Elementary Mathematics paper. Our coaching is tailored to let students focus on the subjects relevant to their chosen academy." },
                                { q: "Do you provide SSB Interview preparation along with CDS written coaching?", a: "Absolutely. Clearing the CDS written exam is only the first step. Our curriculum integrates SSB interview groundwork, including psychological tests and physical fitness, right from the beginning of your course." }
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
                            <h2 className="text-2xl font-bold text-white mb-2">Transform Your Graduation Into a Commissioned Rank</h2>
                            <p className="text-gray-300">
                                Join the ranks of our 1000+ successful alumni. Whether through our rigorous residential batches or online resources, Path Finder Defence Academy is ready to guide you to the academy of your choice.
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
