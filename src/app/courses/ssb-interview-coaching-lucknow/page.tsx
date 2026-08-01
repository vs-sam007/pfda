import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
    title: "Top SSB Interview Coaching in Lucknow | Alambagh & I.Nagar",
    description: "Best SSB interview coaching in Lucknow for NDA, CDS & AFCAT candidates. Expert GTO, Psychology & PI prep with GTO ground at Alambagh & Indira Nagar. Enroll now.",
    keywords: ["SSB coaching in Lucknow", "SSB interview classes in Lucknow", "SSB coaching Alambagh", "SSB coaching Indira Nagar", "NDA SSB interview preparation Lucknow", "SSB GTO tasks coaching Lucknow"],
    alternates: { canonical: "https://pathfinderdefenceacademy.com/courses/ssb-interview-coaching-lucknow" },
};

export default function SSBCoachingPage() {
    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Which is the best coaching for SSB interview in Lucknow?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Look for an academy with mentors who have real SSB board experience and, importantly, an actual GTO ground for hands-on task practice — not just classroom sessions. Our Alambagh and Indira Nagar centres offer both."
                }
            },
            {
                "@type": "Question",
                "name": "Does Pathfinder Defence Academy have a GTO ground in Lucknow?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we have a dedicated GTO ground at our Alambagh centre, used for group task and individual obstacle practice as part of our SSB coaching program."
                }
            },
            {
                "@type": "Question",
                "name": "What are the fees for SSB interview coaching in Lucknow?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Fees depend on the batch duration (short-term or full 14-day residential batches). Contact our Alambagh or Indira Nagar centre for current fee details."
                }
            },
            {
                "@type": "Question",
                "name": "Are hostel facilities available for SSB coaching candidates?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we offer residential hostel arrangements for candidates joining our SSB coaching batches from outside Lucknow."
                }
            },
            {
                "@type": "Question",
                "name": "How should I prepare for the SSB interview at home before joining coaching?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Reading current affairs daily, practicing basic self-awareness exercises, and staying physically active are useful starting points — though the psychology tests, GTO tasks, and personal interview are best prepared with structured, expert guidance."
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
                title="SSB Interview Coaching" 
                subtitle="Expert 5-Day Preparation in Lucknow" 
                image="/images/nccSSB1.jpg" 
            />

            <section className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    
                    {/* H1 Section */}
                    <div className="mb-12">
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Best SSB Interview Coaching in Lucknow — Expert 5-Day Preparation
                        </h1>
                        <p className="text-gray-300 text-lg leading-relaxed mb-4">
                            Clearing the written exam for NDA, CDS, or AFCAT is only half the journey — the Services Selection Board (SSB) interview is where most candidates are actually selected or rejected. It's a rigorous 5-day process testing psychology, group behaviour, physical tasks, and personal interview skills, and it demands focused, experienced coaching, not last-minute tips.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            At Pathfinder Defence Academy, our SSB interview coaching in Lucknow is led by mentors with real SSB board experience, supported by a dedicated GTO ground at our Alambagh and Indira Nagar centres — giving students genuine, hands-on preparation rather than just classroom theory.
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
                                    <p className="text-gray-400 text-sm">Our head office centre, equipped with a full GTO ground and complete SSB training infrastructure.</p>
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
                                { q: "Which is the best coaching for SSB interview in Lucknow?", a: "Look for an academy with mentors who have real SSB board experience and, importantly, an actual GTO ground for hands-on task practice — not just classroom sessions. Our Alambagh and Indira Nagar centres offer both." },
                                { q: "Does Pathfinder Defence Academy have a GTO ground in Lucknow?", a: "Yes, we have a dedicated GTO ground at our Alambagh centre, used for group task and individual obstacle practice as part of our SSB coaching program." },
                                { q: "What are the fees for SSB interview coaching in Lucknow?", a: "Fees depend on the batch duration (short-term or full 14-day residential batches). Contact our Alambagh or Indira Nagar centre for current fee details." },
                                { q: "Are hostel facilities available for SSB coaching candidates?", a: "Yes, we offer residential hostel arrangements for candidates joining our SSB coaching batches from outside Lucknow." },
                                { q: "How should I prepare for the SSB interview at home before joining coaching?", a: "Reading current affairs daily, practicing basic self-awareness exercises, and staying physically active are useful starting points — though the psychology tests, GTO tasks, and personal interview are best prepared with structured, expert guidance." }
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
