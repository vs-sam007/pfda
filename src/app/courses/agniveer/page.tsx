import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, MapPin, Award, Users, ShieldCheck, PhoneCall, Zap, GraduationCap, Clock, BookOpen, Activity, Target } from "lucide-react";

export const metadata: Metadata = {
    title: "Best Agniveer Coaching in Lucknow & Alambagh 2026 | Army, Navy & Air Force",
    description: "Join Lucknow's #1 Agniveer coaching academy in Alambagh (opposite Singar Nagar Metro). Complete Army GD, Technical, Clerk, Navy SSR & IAF Vayu preparation, daily 1.6km running ground & hostel.",
    keywords: [
        "best Agniveer coaching in Lucknow",
        "Agniveer coaching in Alambagh Lucknow",
        "Agniveer coaching in Alambagh",
        "Agniveer coaching near me",
        "Agnipath scheme coaching Lucknow",
        "Indian Army Agniveer coaching",
        "Agniveer physical fitness training Lucknow",
        "Pathfinder Defence Academy Agniveer",
        "Agniveer coaching fees in Lucknow",
        "Army GD coaching Lucknow",
        "Air Force Agniveer Vayu coaching Lucknow",
    ],
    alternates: { canonical: "https://pathfinderdefenceacademy.com/courses/agniveer" },
    openGraph: {
        title: "Best Agniveer Coaching in Lucknow & Alambagh 2026 | Pathfinder Defence Academy",
        description: "Join Lucknow's premier Agniveer coaching institute in Alambagh. Daily 1.6km physical training ground, CBT mock tests, and hostel facilities.",
        url: "https://pathfinderdefenceacademy.com/courses/agniveer",
        type: "website",
        images: [{ url: "https://pathfinderdefenceacademy.com/images/1707393182_indian-army.jpg", width: 1200, height: 630, alt: "Agniveer Coaching at Pathfinder Defence Academy Lucknow" }],
    },
};

export default function AgniveerCoursePage() {
    const courseSchema = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "Agniveer (Agnipath Scheme) Army, Navy & Air Force Coaching Program",
        "description": "Comprehensive written exam and physical fitness training program for Indian Army (GD, Technical, Clerk), Indian Navy (SSR, MR), and Indian Air Force (Agniveer Vayu) recruitment rallies.",
        "courseMode": "Offline, Classroom & Physical Field Training",
        "educationalCredentialAwarded": "Agniveer Recruitment Written & Physical Rally Qualification",
        "provider": {
            "@type": "EducationalOrganization",
            "name": "Pathfinder Defence Academy",
            "url": "https://pathfinderdefenceacademy.com",
            "telephone": "+91-7505188009",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Metro Station, 3rd Floor, KSM Plaza, 826-Sneh Nagar Mod, Singar Nagar",
                "addressLocality": "Alambagh, Lucknow",
                "addressRegion": "Uttar Pradesh",
                "postalCode": "226005",
                "addressCountry": "IN"
            }
        }
    };

    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Which is the best Agniveer coaching institute in Lucknow and Alambagh?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Pathfinder Defence Academy (PFDA), located opposite Singar Nagar Metro Station in Alambagh, Lucknow, is widely regarded as the best Agniveer coaching institute in Uttar Pradesh. PFDA offers combined Computer-Based Entrance (CEE) classroom coaching, daily 1.6 km timed physical track drills, pre-medical screenings, and full residential hostel facilities."
                }
            },
            {
                "@type": "Question",
                "name": "What trades are covered under the Agniveer coaching program at PFDA?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "PFDA provides trade-specific coaching for Indian Army Agniveer General Duty (GD), Technical, Clerk/Store Keeper Technical, and Tradesman (10th/8th pass); Indian Navy Agniveer SSR and MR; and Indian Air Force Agniveer Vayu (Science and Non-Science subjects)."
                }
            },
            {
                "@type": "Question",
                "name": "What is the fee structure for Agniveer coaching in Lucknow at PFDA?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Agniveer coaching packages at Pathfinder Defence Academy are highly affordable and transparent, covering both CEE written exam preparation and physical rally conditioning, with residential hostel options. For current fee details and trade-wise batches, contact our admissions desk at +91 75051 88009."
                }
            },
            {
                "@type": "Question",
                "name": "Does PFDA offer daily ground physical training for the 1.6 km run?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Physical fitness is the primary elimination phase in military rallies. PFDA runs daily morning physical training on our private training ground in Alambagh, training cadets to achieve Group 1 (under 5 minutes 30 seconds for the 1.6 km run), 10 pull-ups (40 marks), 9-foot ditch jump, and zig-zag beam balance."
                }
            },
            {
                "@type": "Question",
                "name": "What are the age and educational eligibility requirements for Agniveer?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Candidates must be between 17.5 and 21 years of age. For Army GD, 10th pass with 45% aggregate (33% in each subject) is required. For Technical, 10+2 with Physics, Chemistry, Math & English (50% aggregate). For Clerk, 10+2 in any stream (60% aggregate with 50% in English & Math/Accounts). For Navy SSR & Air Force Vayu Science, 10+2 with Math and Physics is mandatory."
                }
            },
            {
                "@type": "Question",
                "name": "How accessible is the PFDA Alambagh campus from nearby Lucknow localities?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The campus is directly opposite Singar Nagar Metro Station on Kanpur Road in Alambagh. It is just 3.5 km from Charbagh Railway Station, 1.5 km from Krishna Nagar, and easily accessible from Aminabad, Thakurganj, Mawaiya, and Alambagh Bus Stand."
                }
            }
        ]
    };

    return (
        <main className="bg-primary min-h-screen pb-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />

            <PageHeader
                title="Best Agniveer Coaching in Lucknow"
                subtitle="Agnipath Scheme — Army, Navy & Air Force — Alambagh Campus"
                image="/images/1707393182_indian-army.jpg"
            />

            <section className="container mx-auto px-4 py-16">
                <div className="max-w-5xl mx-auto space-y-16">

                    {/* H1 & Campus Location Badge */}
                    <div>
                        <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/30 text-gold text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                            <MapPin className="w-3.5 h-3.5" />
                            Alambagh (Opp. Singar Nagar Metro) &amp; Indira Nagar, Lucknow
                        </div>
                        <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6">
                            Best Agniveer Coaching in Lucknow &amp; Alambagh — Army, Navy &amp; Air Force Rally Preparation
                        </h1>

                        {/* AEO / AI Direct-Answer Summary Box */}
                        <div className="bg-[#1B2620] border-l-4 border-gold p-6 md:p-8 rounded-r-2xl shadow-xl space-y-4 my-8">
                            <div className="flex items-center gap-2 text-gold font-bold text-sm uppercase tracking-wider">
                                <Zap className="w-5 h-5 text-gold shrink-0" />
                                Course Snapshot: Agniveer Preparation at Pathfinder Defence Academy Lucknow
                            </div>
                            <p className="text-gray-200 text-base md:text-lg font-medium leading-relaxed">
                                <strong className="text-white">Pathfinder Defence Academy (PFDA)</strong> is Uttar Pradesh’s top-ranked coaching institute for the Agnipath scheme, preparing candidates for recruitment into the Indian Army, Indian Navy, and Indian Air Force. Located opposite Singar Nagar Metro Station in Alambagh, Lucknow, PFDA delivers rigorous Computer-Based Entrance Exam (CEE) classroom coaching, daily morning 1.6 km track endurance training, pull-up beam drills, pre-medical physical tests, and residential hostel facilities with nutritious food for outstation youth.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-white/10 text-sm">
                                <div className="bg-black/30 p-3 rounded-lg border border-white/5">
                                    <div className="text-gold font-semibold flex items-center gap-1.5 mb-1">
                                        <Clock className="w-4 h-4" /> Batch Duration
                                    </div>
                                    <p className="text-gray-300 text-xs">3 Months (Intensive Rally) / 6 Months (Complete Foundation)</p>
                                </div>
                                <div className="bg-black/30 p-3 rounded-lg border border-white/5">
                                    <div className="text-gold font-semibold flex items-center gap-1.5 mb-1">
                                        <Users className="w-4 h-4" /> Eligibility
                                    </div>
                                    <p className="text-gray-300 text-xs">Age 17.5–21 Yrs | 10th / 12th Pass (Male &amp; Female)</p>
                                </div>
                                <div className="bg-black/30 p-3 rounded-lg border border-white/5">
                                    <div className="text-gold font-semibold flex items-center gap-1.5 mb-1">
                                        <ShieldCheck className="w-4 h-4" /> Physical &amp; Medical Drills
                                    </div>
                                    <p className="text-gray-300 text-xs">Daily 1.6 km Track Training &amp; Beam Practice</p>
                                </div>
                                <div className="bg-black/30 p-3 rounded-lg border border-white/5">
                                    <div className="text-gold font-semibold flex items-center gap-1.5 mb-1">
                                        <MapPin className="w-4 h-4" /> Key Locations
                                    </div>
                                    <p className="text-gray-300 text-xs">Singar Nagar, Alambagh &amp; Munshipulia, Indira Nagar</p>
                                </div>
                            </div>
                        </div>

                        {/* Stat Badges for GEO & Search Snippets */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
                            <div className="bg-[#24332B] p-4 rounded-xl border border-white/5 text-center shadow-lg">
                                <Award className="w-6 h-6 text-gold mx-auto mb-2" />
                                <div className="text-2xl font-black text-white">1000+</div>
                                <div className="text-gray-400 text-xs mt-1">Soldier Selections</div>
                            </div>
                            <div className="bg-[#24332B] p-4 rounded-xl border border-white/5 text-center shadow-lg">
                                <Activity className="w-6 h-6 text-gold mx-auto mb-2" />
                                <div className="text-2xl font-black text-white">Daily 1.6 KM</div>
                                <div className="text-gray-400 text-xs mt-1">Ground Physical Drills</div>
                            </div>
                            <div className="bg-[#24332B] p-4 rounded-xl border border-white/5 text-center shadow-lg">
                                <Target className="w-6 h-6 text-gold mx-auto mb-2" />
                                <div className="text-2xl font-black text-white">Army/Navy/Air</div>
                                <div className="text-gray-400 text-xs mt-1">Tri-Service Tracks</div>
                            </div>
                            <div className="bg-[#24332B] p-4 rounded-xl border border-white/5 text-center shadow-lg">
                                <MapPin className="w-6 h-6 text-gold mx-auto mb-2" />
                                <div className="text-2xl font-black text-white">Alambagh</div>
                                <div className="text-gray-400 text-xs mt-1">Opp. Singar Nagar Metro</div>
                            </div>
                        </div>
                    </div>

                    {/* Section: Lucknow & Alambagh Geographic Context */}
                    <div className="space-y-6">
                        <SectionHeading title="Strategic Agniveer Training Hub in Central Lucknow" alignment="left" />
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Securing an Agniveer appointment demands dual excellence: clearing the nationwide Common Entrance Examination (CEE) and ranking in <strong className="text-white">Group 1 in the 1.6 km rally run</strong>. Pathfinder Defence Academy’s Alambagh campus is situated directly on Kanpur Road opposite <strong className="text-gold">Singar Nagar Metro Station (Gate 2)</strong>.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            Day-scholars from <strong className="text-white">Charbagh (3.5 km away), Krishna Nagar (1.5 km), Aminabad, Thakurganj, Mawaiya, and Rajajipuram</strong> reach the centre in under 15 minutes via the Lucknow Metro Red Line. East Lucknow students can attend our branch at Sector 8, Indira Nagar near Munshipulia. Furthermore, thousands of young defence aspirants travel from rural and semi-urban belts across Uttar Pradesh—including Unnao, Hardoi, Sitapur, Barabanki, Rae Bareli, Fatehpur, and Gonda—to reside in our dedicated Alambagh hostels where military physical discipline and smart digital classrooms run hand-in-hand.
                        </p>
                    </div>

                    {/* Section: Comprehensive Trade Breakdown */}
                    <div className="bg-[#24332B] p-8 rounded-2xl border border-white/5 space-y-6 shadow-xl">
                        <div className="flex items-center gap-3">
                            <BookOpen className="w-6 h-6 text-gold" />
                            <h2 className="text-2xl font-bold text-white">Tri-Service Agniveer Specialization Tracks</h2>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                            Under the Agnipath recruitment system, candidates appear for Computer-Based Examinations customized to their chosen trade:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                            <div className="bg-[#1B2620] p-6 rounded-xl border border-white/10 space-y-3">
                                <span className="text-gold font-bold text-lg block border-b border-white/10 pb-2">Indian Army Agniveer</span>
                                <ul className="text-gray-300 text-sm space-y-2">
                                    <li><strong>General Duty (GD):</strong> GK (15Q), General Science (15Q), Math (15Q), Logical Reasoning (5Q) — 100 Marks.</li>
                                    <li><strong>Technical:</strong> GK (10Q), Math (15Q), Physics (15Q), Chemistry (10Q) — 200 Marks.</li>
                                    <li><strong>Clerk / Store Keeper:</strong> General English (25Q) + GK, Science, Math &amp; Computer (25Q) — 200 Marks.</li>
                                </ul>
                            </div>

                            <div className="bg-[#1B2620] p-6 rounded-xl border border-white/10 space-y-3">
                                <span className="text-gold font-bold text-lg block border-b border-white/10 pb-2">Indian Navy Agniveer</span>
                                <ul className="text-gray-300 text-sm space-y-2">
                                    <li><strong>Agniveer SSR:</strong> English, Science (Physics/Chemistry), Mathematics, General Awareness — 100 Questions (1 Hour).</li>
                                    <li><strong>Agniveer MR (Chef/Steward):</strong> Science &amp; Mathematics (25Q), General Awareness (25Q) — 50 Questions (30 Mins).</li>
                                </ul>
                            </div>

                            <div className="bg-[#1B2620] p-6 rounded-xl border border-white/10 space-y-3">
                                <span className="text-gold font-bold text-lg block border-b border-white/10 pb-2">Indian Air Force Vayu</span>
                                <ul className="text-gray-300 text-sm space-y-2">
                                    <li><strong>Science Subjects:</strong> English (20Q), Math (25Q), Physics (25Q) — 60 Minutes duration.</li>
                                    <li><strong>Other Than Science (RAGA):</strong> English (20Q), Reasoning &amp; General Awareness (30Q) — 45 Minutes.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Section: Physical Training Rigor */}
                    <div className="space-y-6">
                        <SectionHeading title="Daily 1.6 KM Physical Track Training in Alambagh" alignment="left" />
                        <p className="text-gray-300 text-base leading-relaxed">
                            In Indian Army rallies, physical marks are decisive. Group 1 runners earn 60 full marks, giving them an insurmountable lead in the final merit list. PFDA conducts structured physical training daily at 5:30 AM:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-[#1B2620] p-6 rounded-xl border border-white/5 space-y-2 text-center">
                                <span className="text-gold font-bold text-3xl">1.6 KM</span>
                                <h4 className="text-white font-bold text-base">Running Speed Drills</h4>
                                <p className="text-gray-400 text-xs">Paced interval workouts to achieve Group 1 timing (under 5 mins 30 secs) on outdoor tracks.</p>
                            </div>
                            <div className="bg-[#1B2620] p-6 rounded-xl border border-white/5 space-y-2 text-center">
                                <span className="text-gold font-bold text-3xl">10 Beam</span>
                                <h4 className="text-white font-bold text-base">Pull-Ups (40 Marks)</h4>
                                <p className="text-gray-400 text-xs">Upper-body core strengthening on official rally standard pull-up bars to earn full 40 marks.</p>
                            </div>
                            <div className="bg-[#1B2620] p-6 rounded-xl border border-white/5 space-y-2 text-center">
                                <span className="text-gold font-bold text-3xl">9 Feet</span>
                                <h4 className="text-white font-bold text-base">Ditch Jump</h4>
                                <p className="text-gray-400 text-xs">Technique training for safe takeoff and landing across the 9-foot qualifying obstacle pit.</p>
                            </div>
                            <div className="bg-[#1B2620] p-6 rounded-xl border border-white/5 space-y-2 text-center">
                                <span className="text-gold font-bold text-3xl">Zig-Zag</span>
                                <h4 className="text-white font-bold text-base">Balance Beam</h4>
                                <p className="text-gray-400 text-xs">Neuromuscular balance training to comfortably clear the zig-zag balance beam without fault.</p>
                            </div>
                        </div>
                    </div>

                    {/* Section: Why PFDA Stands Apart */}
                    <div className="space-y-6">
                        <SectionHeading title="Why Aspirants Choose Pathfinder Defence Academy" alignment="left" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-[#1B2620] p-6 rounded-xl border border-white/5 space-y-3">
                                <div className="w-12 h-12 rounded-lg bg-gold/15 flex items-center justify-center text-gold mb-2">
                                    <Target className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white">Computer Lab for CEE Mock Exams</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    With the Army now conducting the Common Entrance Exam online before the rally, PFDA maintains a dedicated computer testing lab where students take bilingual (Hindi &amp; English) timed CBT mock tests every week.
                                </p>
                            </div>

                            <div className="bg-[#1B2620] p-6 rounded-xl border border-white/5 space-y-3">
                                <div className="w-12 h-12 rounded-lg bg-gold/15 flex items-center justify-center text-gold mb-2">
                                    <Activity className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white">Pre-Medical Examination Checkup</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Avoid getting rejected at the rally medical inspection. Our panel of defence medical experts screens cadets for flat foot, knock knees, eyesight (color blindness), DNS (deviated nasal septum), and ear wax prior to rally attendance.
                                </p>
                            </div>

                            <div className="bg-[#1B2620] p-6 rounded-xl border border-white/5 space-y-3">
                                <div className="w-12 h-12 rounded-lg bg-gold/15 flex items-center justify-center text-gold mb-2">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white">Specialized English for Army Clerk &amp; Air Force</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Army Clerk and Air Force Vayu exams require strong English cutoff scores. Abhishek Awasthi Sir leads dedicated grammar, comprehension, and vocabulary sessions ensuring even Hindi-medium students comfortably score 80%+.
                                </p>
                            </div>

                            <div className="bg-[#1B2620] p-6 rounded-xl border border-white/5 space-y-3">
                                <div className="w-12 h-12 rounded-lg bg-gold/15 flex items-center justify-center text-gold mb-2">
                                    <Users className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white">Disciplined Hostel &amp; Wholesome Nutrition</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Outstation students stay in our secure Alambagh hostels. The mess provides protein-rich, clean diets tailored for high physical output, while ex-servicemen wardens maintain military discipline and scheduled study hours.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Section: FAQs with UI */}
                    <div className="space-y-8">
                        <SectionHeading title="Frequently Asked Questions (Agniveer Coaching in Lucknow)" alignment="left" />
                        <div className="space-y-4">
                            {faqJsonLd.mainEntity.map((faq, index) => (
                                <div key={index} className="bg-[#1B2620] border border-white/5 rounded-xl p-6">
                                    <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-2">
                                        <span className="text-gold font-bold">Q{index + 1}.</span> {faq.name}
                                    </h3>
                                    <p className="text-gray-300 text-sm leading-relaxed pl-6">
                                        {faq.acceptedAnswer.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Closing Enrollment CTA */}
                    <div className="bg-gradient-to-r from-[#1B2620] to-[#24332B] p-8 md:p-12 rounded-2xl border border-gold/30 text-center md:text-left md:flex justify-between items-center shadow-2xl">
                        <div className="mb-6 md:mb-0 md:mr-8 space-y-2">
                            <h2 className="text-2xl md:text-3xl font-extrabold text-white">Wear the Uniform of the Armed Forces as an Agniveer</h2>
                            <p className="text-gray-300 max-w-xl text-sm md:text-base">
                                New physical training and written exam batches start every Monday at Alambagh and Indira Nagar. Register today for a free 2-day trial and fitness assessment.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                            <Link href="/contact">
                                <Button className="w-full sm:w-auto bg-gold hover:bg-yellow-500 text-black font-extrabold px-8 py-4 text-sm uppercase tracking-wider shadow-lg">
                                    Enroll at Lucknow Campus
                                </Button>
                            </Link>
                            <a href="tel:+917505188009" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-4 rounded-xl border border-white/20 transition-all text-sm">
                                <PhoneCall className="w-4 h-4 text-gold" /> Call Admissions Desk
                            </a>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}
