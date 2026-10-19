import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
    title: "SSB Interview Coaching in Lucknow Alambagh: 14-Day GTO Ground Prep 2026",
    description: "Premier SSB interview coaching in Lucknow Alambagh with dedicated outdoor GTO ground. Ex-board assessors for Screening, Psych, GTO & PI. Call 07505188009.",
    keywords: ["SSB coaching in Lucknow", "SSB interview classes in Lucknow", "SSB coaching Alambagh", "SSB interview coaching Lucknow Alambagh", "best SSB coaching in Lucknow", "SSB GTO ground Lucknow"],
    alternates: { canonical: "https://pathfinderdefenceacademy.com/courses/ssb-interview-coaching-lucknow" },
};

export default function SSBCoachingPage() {
    const courseJsonLd = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "SSB Interview Coaching in Lucknow Alambagh",
        "description": "Comprehensive 14-day SSB interview training covering Stage 1 OIR/PPDT screening, psychological tests, outdoor GTO tasks, and personal interview with ex-board officers at Pathfinder Defence Academy Lucknow.",
        "provider": {
            "@type": "EducationalOrganization",
            "name": "Pathfinder Defence Academy",
            "url": "https://pathfinderdefenceacademy.com"
        },
        "courseMode": "In-Person Classroom, Ground and Boarding",
        "educationalCredentialAwarded": "SSB Interview Recommendation Readiness"
    };

    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Which is the best coaching for SSB interview in Lucknow?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Pathfinder Defence Academy in Alambagh, Lucknow is the premier choice because it features Lucknow's only dedicated outdoor GTO obstacle ground and mentoring by retired defence officers who served on SSB selection boards."
                }
            },
            {
                "@type": "Question",
                "name": "Does Pathfinder Defence Academy have an outdoor GTO ground in Lucknow?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Pathfinder Defence Academy features an exclusive full-scale outdoor GTO obstacle ground at its Alambagh centre with PGT, HGT, Command Task, and individual obstacles matching actual military SSB boards."
                }
            },
            {
                "@type": "Question",
                "name": "What is the duration of SSB coaching batches at Pathfinder?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We run intensive 14-day residential batches every month covering Stage 1 screening (OIR, PPDT), Psychology tests (TAT, WAT, SRT), full GTO obstacle training, and 1-on-1 personal interview rehearsals."
                }
            },
            {
                "@type": "Question",
                "name": "Are hostel facilities available for outstation SSB aspirants?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, complete residential hostel and mess facilities are available at our Alambagh campus for candidates arriving from across India for the 14-day SSB training."
                }
            },
            {
                "@type": "Question",
                "name": "Where is Pathfinder Defence Academy located in Lucknow for SSB training?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our SSB training campus and GTO ground are located at KSM Plaza, opposite Singar Nagar Metro Station, Alambagh, Lucknow. Contact: 07505188009."
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
                title="SSB Interview Coaching" 
                subtitle="Expert 14-Day Preparation & Outdoor GTO Ground | Alambagh, Lucknow" 
                image="/images/nccSSB1.jpg" 
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
                            Pathfinder Defence Academy conducts an intensive 14-day SSB interview coaching program in Lucknow (Alambagh) for NDA, CDS, AFCAT, and CAPF candidates. Featuring Lucknow's only dedicated outdoor GTO obstacle ground, individual psychological test evaluations (TAT/WAT/SRT), and 1-on-1 personal interviews by ex-SSB assessors, with complete residential boarding.
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 pt-4 border-t border-white/10 text-center">
                            <div className="bg-[#1B2620] p-2.5 rounded-lg border border-gold/20">
                                <span className="block text-gold font-bold text-lg">Outdoor GTO</span>
                                <span className="text-xs text-gray-300">Ground On-Site</span>
                            </div>
                            <div className="bg-[#1B2620] p-2.5 rounded-lg border border-gold/20">
                                <span className="block text-gold font-bold text-lg">14 Days</span>
                                <span className="text-xs text-gray-300">Intensive Course</span>
                            </div>
                            <div className="bg-[#1B2620] p-2.5 rounded-lg border border-gold/20">
                                <span className="block text-gold font-bold text-lg">Ex-Board</span>
                                <span className="text-xs text-gray-300">Interview Assessors</span>
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
                            Best SSB Interview Coaching in Lucknow Alambagh — Expert 14-Day GTO Ground Prep
                        </h1>
                        <p className="text-gray-300 text-lg leading-relaxed mb-4">
                            Clearing the written exam for NDA, CDS, or AFCAT is only half the journey — the Services Selection Board (SSB) interview is where most candidates are actually selected or rejected. It's a rigorous 5-day process testing psychology, group behaviour, physical tasks, and personal interview skills, and it demands focused, experienced coaching, not last-minute tips.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            At Pathfinder Defence Academy, our SSB interview coaching in Lucknow is led by mentors with real SSB board experience, supported by a dedicated GTO ground at our Alambagh centre (Opp. Singar Nagar Metro) — giving students genuine, hands-on preparation rather than just classroom theory.
                        </p>
                    </div>

                    {/* H2: What SSB Tests */}
                    <div className="mb-16">
                        <SectionHeading title="What the SSB Interview Actually Tests" alignment="left" />
                        <p className="text-gray-300 mb-8 text-lg">Many candidates walk into the SSB process without understanding what it's actually evaluating. Here's a quick breakdown of the stages our coaching covers:</p>
                        
                        <div className="space-y-6">
                            <div className="bg-[#24332B] p-6 rounded-lg border border-gold/20 flex flex-col md:flex-row gap-6 items-start">
                                <div className="bg-gold text-black font-bold text-xl px-4 py-2 rounded shrink-0">Stage 1</div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Screening</h3>
                                    <p className="text-gray-400">Includes the Officer Intelligence Rating (OIR) test and Picture Perception & Discussion Test (PPDT). Candidates who clear this stage move to Stage 2.</p>
                                </div>
                            </div>

                            <div className="bg-[#24332B] p-6 rounded-lg border border-gold/20 flex flex-col md:flex-row gap-6 items-start">
                                <div className="bg-gold text-black font-bold text-xl px-4 py-2 rounded shrink-0">Stage 2</div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Psychology Tests</h3>
                                    <p className="text-gray-400">Covers the Thematic Apperception Test (TAT), Word Association Test (WAT), Situation Reaction Test (SRT), and Self-Description Test — all designed to assess personality traits under time pressure.</p>
                                </div>
                            </div>

                            <div className="bg-[#24332B] p-6 rounded-lg border border-gold/20 flex flex-col md:flex-row gap-6 items-start">
                                <div className="bg-gold text-black font-bold text-xl px-4 py-2 rounded shrink-0">Stage 2</div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">GTO Tasks (Group Testing Officer)</h3>
                                    <p className="text-gray-400">Includes group discussions, group planning exercises, progressive group tasks, half-group tasks, and individual obstacles — practical, physical tasks conducted on a real GTO ground.</p>
                                </div>
                            </div>

                            <div className="bg-[#24332B] p-6 rounded-lg border border-gold/20 flex flex-col md:flex-row gap-6 items-start">
                                <div className="bg-gold text-black font-bold text-xl px-4 py-2 rounded shrink-0">Stage 2</div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Personal Interview & Conference</h3>
                                    <p className="text-gray-400">A detailed one-on-one interview with a board member, followed by a final conference where the board discusses each candidate's overall performance.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* H2: Our Coaching Program */}
                    <div className="mb-16">
                        <SectionHeading title="Our SSB Coaching Program in Lucknow" alignment="left" />
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                            <div className="bg-[#1B2620] p-6 rounded-lg border border-white/5">
                                <h3 className="text-xl font-bold text-white mb-3">Psychology Test Preparation</h3>
                                <p className="text-gray-400">Structured practice on TAT, WAT, SRT, and Self-Description tests, with mentor feedback focused on genuine personality development rather than memorized answers.</p>
                            </div>
                            
                            <div className="bg-[#1B2620] p-6 rounded-lg border border-gold/20">
                                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                                    GTO Ground Training
                                    <span className="bg-gold text-black text-xs px-2 py-1 rounded-full uppercase tracking-wider">In-House</span>
                                </h3>
                                <p className="text-gray-400">Hands-on practice for group tasks and individual obstacles on our dedicated GTO ground — a facility many Lucknow coaching centres don't offer in-house.</p>
                            </div>
                            
                            <div className="bg-[#1B2620] p-6 rounded-lg border border-white/5">
                                <h3 className="text-xl font-bold text-white mb-3">Personal Interview Practice</h3>
                                <p className="text-gray-400">One-on-one mock interviews conducted by mentors with real SSB board experience, followed by detailed, honest feedback.</p>
                            </div>

                            <div className="bg-[#1B2620] p-6 rounded-lg border border-white/5">
                                <h3 className="text-xl font-bold text-white mb-3">Group Discussion & Conference Practice</h3>
                                <p className="text-gray-400">Regular group discussion sessions with peers, simulating the real group dynamics candidates face during SSB.</p>
                            </div>
                        </div>
                    </div>

                    {/* H2: Centres */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-2">Our SSB Coaching Centres in Lucknow</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="flex gap-4 items-start">
                                <CheckCircle className="text-gold shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-lg text-white mb-1">Alambagh Branch</h4>
                                    <p className="text-gray-400 text-sm">Our Alambagh centre is equipped with a full GTO ground and complete SSB training infrastructure.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <CheckCircle className="text-gold shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-lg text-white mb-1">Indira Nagar Branch</h4>
                                    <p className="text-gray-400 text-sm">A convenient centre for families around Indira Nagar and Faizabad Road, offering the same structured SSB coaching program.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <CheckCircle className="text-gold shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-lg text-white mb-1">Hostel Options</h4>
                                    <p className="text-gray-400 text-sm">For candidates joining our 14-day (or similar duration) SSB batches from outside Lucknow, we offer residential hostel facilities alongside training.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* H2: FAQs */}
                    <div className="mb-16">
                        <SectionHeading title="Frequently Asked Questions" alignment="left" />
                        <div className="space-y-6 mt-8">
                            {[
                                { q: "Which is the best coaching for SSB interview in Lucknow?", a: "Pathfinder Defence Academy in Alambagh, Lucknow is the premier choice because it features Lucknow's only dedicated outdoor GTO obstacle ground and mentoring by retired defence officers who served on SSB selection boards." },
                                { q: "Does Pathfinder Defence Academy have an outdoor GTO ground in Lucknow?", a: "Yes, Pathfinder Defence Academy features an exclusive full-scale outdoor GTO obstacle ground at its Alambagh centre with PGT, HGT, Command Task, and individual obstacles matching actual military SSB boards." },
                                { q: "What is the duration of SSB coaching batches at Pathfinder?", a: "We run intensive 14-day residential batches every month covering Stage 1 screening (OIR, PPDT), Psychology tests (TAT, WAT, SRT), full GTO obstacle training, and 1-on-1 personal interview rehearsals." },
                                { q: "Are hostel facilities available for outstation SSB aspirants?", a: "Yes, complete residential hostel and mess facilities are available at our Alambagh campus for candidates arriving from across India for the 14-day SSB training." },
                                { q: "Where is Pathfinder Defence Academy located in Lucknow for SSB training?", a: "Our SSB training campus and GTO ground are located at KSM Plaza, opposite Singar Nagar Metro Station, Alambagh, Lucknow. Contact: 07505188009." }
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
                            <h2 className="text-2xl font-bold text-white mb-2">Turn Your Written Exam Success Into a Final Selection</h2>
                            <p className="text-gray-300">
                                The SSB interview is where real preparation makes the difference between a recommendation and a repeat attempt. Visit our Alambagh or Indira Nagar centre, or get in touch today to join our SSB interview coaching batch in Lucknow.
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
