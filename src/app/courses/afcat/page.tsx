import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
    title: "Best AFCAT Coaching in India | Top Air Force Exam Preparation",
    description: "Prepare for the Air Force Common Admission Test (AFCAT) with India's top coaching academy. Online & residential batches, AFSB interview preparation, and elite faculty.",
    keywords: ["best AFCAT coaching in India", "AFCAT exam preparation online", "Air Force coaching academy India", "AFCAT written exam coaching", "AFSB interview preparation", "how to become Air Force officer"],
    alternates: { canonical: "https://pathfinderdefenceacademy.com/courses/afcat" },
};

export default function AFCATNationalPage() {
    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Is AFCAT coaching available for students outside of Uttar Pradesh?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we cater to Air Force aspirants nationwide. You can either join our comprehensive residential batches (with hostel and mess facilities) or opt for our digital test series and online modules."
                }
            },
            {
                "@type": "Question",
                "name": "Does the AFCAT program cover preparation for the AFSB interview?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. The Air Force Selection Board (AFSB) interview is highly intensive. Our curriculum integrates personality development, psychological tests, and communication skills early in the course to ensure you are fully prepared for the 5-day AFSB process."
                }
            },
            {
                "@type": "Question",
                "name": "Can non-engineering graduates apply for AFCAT?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, graduates from any recognized discipline can apply for the Ground Duty (Non-Technical) branches. However, the Flying Branch requires Mathematics and Physics at the 10+2 level, and Ground Duty (Technical) requires a relevant Engineering degree."
                }
            },
            {
                "@type": "Question",
                "name": "What subjects are covered in the AFCAT written exam coaching?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our coaching covers all sections of the AFCAT exam: General Awareness, Verbal Ability in English, Numerical Ability, and Reasoning & Military Aptitude Test. We conduct regular all-India mock tests to evaluate your standing."
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
                title="Best AFCAT Coaching in India" 
                subtitle="Air Force Common Admission Test" 
                image="/images/1707393182_indian-army.jpg" 
            />

            <section className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    
                    {/* H1 Section */}
                    <div className="mb-12">
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Premier AFCAT Exam Preparation — Skyward Journey for Indian Graduates
                        </h1>
                        <p className="text-gray-300 text-lg leading-relaxed mb-4">
                            The Air Force Common Admission Test (AFCAT) is the gateway for dynamic graduates across India to earn a commissioned rank in the Indian Air Force. Conducted twice a year, it opens doors to the Flying Branch, Ground Duty (Technical), and Ground Duty (Non-Technical) branches.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Path Finder Defence Academy stands as a premier institution nationally for Air Force aspirants. By combining rigorous written exam strategies—spanning Numerical Ability, Reasoning, and English—with dedicated Air Force Selection Board (AFSB) interview groundwork, we ensure our students from across the country are fully equipped to earn their wings.
                        </p>
                        
                        {/* Internal Link to Local Page equivalent */}
                        <div className="mt-8 bg-gold/10 border border-gold/30 rounded-lg p-4 flex items-center justify-between flex-wrap gap-4">
                            <p className="text-gray-300">
                                <strong className="text-gold">Looking for offline classroom batches?</strong> We run dedicated AFCAT classes at our specialized physical centres.
                            </p>
                            <Link href="/branches" className="text-gold hover:text-white font-bold shrink-0 transition-colors">
                                Find a Centre Near You →
                            </Link>
                        </div>
                    </div>

                    {/* H2: Why Choose PFDA Nationally */}
                    <div className="mb-16">
                        <SectionHeading title="Why Air Force Aspirants Choose PFDA" alignment="left" />
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                            <div className="bg-[#1B2620] p-6 rounded-lg border border-white/5">
                                <h3 className="text-xl font-bold text-white mb-3">Pan-India Reach & Hostels</h3>
                                <p className="text-gray-400">Whether utilizing our online modules or relocating to our secure residential campus, students across India have access to our top-tier coaching and specialized mess facilities.</p>
                            </div>
                            
                            <div className="bg-[#1B2620] p-6 rounded-lg border border-gold/20">
                                <h3 className="text-xl font-bold text-white mb-3">Military Aptitude Focus</h3>
                                <p className="text-gray-400">The AFCAT reasoning and military aptitude sections require a specific problem-solving mindset. Our expert faculty trains you extensively on these unique, high-scoring segments.</p>
                            </div>
                            
                            <div className="bg-[#1B2620] p-6 rounded-lg border border-white/5">
                                <h3 className="text-xl font-bold text-white mb-3">AFSB Interview Prep</h3>
                                <p className="text-gray-400">The AFSB process is notoriously strict. We integrate psychological profiling, group tasks, and mock interviews from the very beginning of the written curriculum.</p>
                            </div>

                            <div className="bg-[#1B2620] p-6 rounded-lg border border-white/5">
                                <h3 className="text-xl font-bold text-white mb-3">Speed & Accuracy Testing</h3>
                                <p className="text-gray-400">AFCAT is a race against time. Our weekly national-level mock tests are designed to drastically improve your time management and calculation speed.</p>
                            </div>
                        </div>
                    </div>

                    {/* H2: Exam Breakdown */}
                    <div className="mb-16 bg-[#24332B] p-8 rounded-xl border border-white/5">
                        <h2 className="text-2xl font-bold text-gold mb-6">AFCAT Written Exam Structure</h2>
                        <p className="text-gray-300 mb-6">The AFCAT written exam is a 2-hour objective test (300 marks) encompassing four core areas:</p>
                        
                        <div className="space-y-6">
                            <div className="flex items-start gap-4 border-b border-white/10 pb-6">
                                <div className="bg-gold text-black font-bold px-4 py-2 rounded shrink-0">Sec 1</div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">General Awareness</h3>
                                    <p className="text-gray-400">History, Geography, Polity, Basic Science, Defence, Art & Culture, Sports, and Current Affairs.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 border-b border-white/10 pb-6">
                                <div className="bg-gold text-black font-bold px-4 py-2 rounded shrink-0">Sec 2</div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Verbal Ability in English</h3>
                                    <p className="text-gray-400">Comprehension, Error Detection, Sentence Completion, Synonyms, Antonyms, and Testing of Vocabulary.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 border-b border-white/10 pb-6">
                                <div className="bg-gold text-black font-bold px-4 py-2 rounded shrink-0">Sec 3</div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Numerical Ability</h3>
                                    <p className="text-gray-400">Decimal Fraction, Time & Work, Average, Profit & Loss, Percentage, Ratio & Proportion, and Simple Interest.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-gold text-black font-bold px-4 py-2 rounded shrink-0">Sec 4</div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Reasoning & Military Aptitude Test</h3>
                                    <p className="text-gray-400">Verbal and Non-Verbal Reasoning, Spatial Ability, and Pattern Recognition.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* H2: Eligibility */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-2">National Eligibility Standards for AFCAT</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex gap-4 items-start">
                                <CheckCircle className="text-gold shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-lg text-white mb-1">Age Limits</h4>
                                    <p className="text-gray-400 text-sm">Flying Branch: 20 to 24 years. Ground Duty (Technical & Non-Technical): 20 to 26 years.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <CheckCircle className="text-gold shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-lg text-white mb-1">Educational Qualification</h4>
                                    <p className="text-gray-400 text-sm">Graduation with minimum 60% marks. Flying branch requires mandatory Maths & Physics at 10+2 level. Tech branch requires Engineering degree.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <CheckCircle className="text-gold shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-lg text-white mb-1">Gender & Marital Status</h4>
                                    <p className="text-gray-400 text-sm">Both men and women from across India are eligible. Candidates below 25 years must be unmarried.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <CheckCircle className="text-gold shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-lg text-white mb-1">Physical & Medical</h4>
                                    <p className="text-gray-400 text-sm">Strict height, weight, and vision standards apply, especially for the Flying Branch. Candidates must be medically fit.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* H2: FAQs */}
                    <div className="mb-16">
                        <SectionHeading title="Frequently Asked Questions" alignment="left" />
                        <div className="space-y-6 mt-8">
                            {[
                                { q: "Is AFCAT coaching available for students outside of Uttar Pradesh?", a: "Yes, we cater to Air Force aspirants nationwide. You can either join our comprehensive residential batches (with hostel and mess facilities) or opt for our digital test series and online modules." },
                                { q: "Does the AFCAT program cover preparation for the AFSB interview?", a: "Absolutely. The Air Force Selection Board (AFSB) interview is highly intensive. Our curriculum integrates personality development, psychological tests, and communication skills early in the course to ensure you are fully prepared for the 5-day AFSB process." },
                                { q: "Can non-engineering graduates apply for AFCAT?", a: "Yes, graduates from any recognized discipline can apply for the Ground Duty (Non-Technical) branches. However, the Flying Branch requires Mathematics and Physics at the 10+2 level, and Ground Duty (Technical) requires a relevant Engineering degree." },
                                { q: "What subjects are covered in the AFCAT written exam coaching?", a: "Our coaching covers all sections of the AFCAT exam: General Awareness, Verbal Ability in English, Numerical Ability, and Reasoning & Military Aptitude Test. We conduct regular all-India mock tests to evaluate your standing." }
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
                            <h2 className="text-2xl font-bold text-white mb-2">Earn Your Wings With Elite Preparation</h2>
                            <p className="text-gray-300">
                                Thousands of aspirants across India compete for limited Air Force vacancies. Gain the competitive edge with Path Finder Defence Academy's proven AFCAT and AFSB curriculum.
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
