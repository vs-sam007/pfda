import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, MapPin, Award, Users, ShieldCheck, PhoneCall, Shield, GraduationCap, Clock, BookOpen, Activity, Target } from "lucide-react";

export const metadata: Metadata = {
    title: "Best CAPF AC Coaching in Lucknow & Alambagh 2026 | Assistant Commandant Prep",
    description: "Join Lucknow's premier CAPF AC coaching institute in Alambagh (opposite Singar Nagar Metro). Expert UPSC Paper 1 & 2 preparation, PET physical ground training & hostel.",
    keywords: [
        "best CAPF coaching in Lucknow",
        "CAPF AC coaching in Alambagh Lucknow",
        "CAPF coaching in Alambagh",
        "CAPF AC exam preparation Lucknow",
        "Assistant Commandant coaching Lucknow",
        "BSF CRPF CISF coaching Lucknow",
        "CAPF written and physical coaching",
        "Pathfinder Defence Academy CAPF",
        "CAPF coaching fees in Lucknow",
        "CAPF Paper 2 coaching Lucknow",
    ],
    alternates: { canonical: "https://pathfinderdefenceacademy.com/courses/capf" },
    openGraph: {
        title: "Best CAPF AC Coaching in Lucknow & Alambagh 2026 | Pathfinder Defence Academy",
        description: "Join Lucknow's premier CAPF AC coaching institute in Alambagh. Expert UPSC Assistant Commandant classes, PET ground, and hostel facilities.",
        url: "https://pathfinderdefenceacademy.com/courses/capf",
        type: "website",
        images: [{ url: "https://pathfinderdefenceacademy.com/images/bg.webp", width: 1200, height: 630, alt: "CAPF AC Coaching at Pathfinder Defence Academy Lucknow" }],
    },
};

export default function CAPFCoursePage() {
    const courseSchema = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "UPSC CAPF Assistant Commandant (AC) Coaching Program",
        "description": "Comprehensive coaching program for the UPSC Central Armed Police Forces Assistant Commandant examination covering Paper 1 (General Ability & Intelligence), Paper 2 (General Studies, Essay & Comprehension), PET physical training, and UPSC interview guidance.",
        "courseMode": "Offline, Classroom & Residential",
        "educationalCredentialAwarded": "UPSC CAPF AC Exam & Interview Qualification",
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
                "name": "Which is the best CAPF AC coaching institute in Lucknow and Alambagh?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Pathfinder Defence Academy (PFDA), located opposite Singar Nagar Metro Station in Alambagh, Lucknow, is Uttar Pradesh's leading coaching academy for UPSC CAPF Assistant Commandant (AC) exams. PFDA provides specialized GS faculty for Paper 1, daily answer & essay writing drills for Paper 2, dedicated PET physical training ground, and personality interview guidance by serving and retired paramilitary officers."
                }
            },
            {
                "@type": "Question",
                "name": "What is the exam pattern for UPSC CAPF Assistant Commandant?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The UPSC CAPF AC exam features two written papers on the same day: Paper 1 (General Ability and Intelligence, 250 marks, objective) and Paper 2 (General Studies, Essay, and Comprehension, 200 marks, descriptive). Candidates who qualify the written cutoff are called for the Physical Efficiency Test (PET), Medical Standards Test, and final UPSC Personality Interview (150 marks)."
                }
            },
            {
                "@type": "Question",
                "name": "What are the eligibility requirements for the UPSC CAPF AC examination?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Candidates must be Indian citizens (male or female) aged between 20 and 25 years on the 1st of August of the examination year (with standard age relaxations for OBC/SC/ST). Candidates must hold a bachelor's degree from a recognized university in any discipline."
                }
            },
            {
                "@type": "Question",
                "name": "Does Pathfinder Defence Academy provide physical fitness training for the CAPF PET test in Lucknow?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Physical fitness is a mandatory qualifying hurdle for CAPF AC. PFDA conducts daily physical training on its dedicated ground in Alambagh covering the 100m sprint, 800m run, long jump, and shot put (for male candidates) under certified physical trainers."
                }
            },
            {
                "@type": "Question",
                "name": "What is the fee structure for CAPF AC coaching in Lucknow at PFDA?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Pathfinder Defence Academy offers structured and affordable UPSC CAPF AC batches with merit scholarships and optional residential hostel amenities. For detailed fee structures and installment options, please call our admissions office at +91 75051 88009."
                }
            },
            {
                "@type": "Question",
                "name": "How do students from Charbagh, Krishna Nagar, and Aminabad reach the PFDA Alambagh campus?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "PFDA's flagship campus is directly opposite Singar Nagar Metro Station on Kanpur Road in Alambagh. It is just a 7-minute ride (3.5 km) from Charbagh Railway Station, 1.5 km from Krishna Nagar, and easily accessible by direct metro or auto-rickshaw from Aminabad, Thakurganj, and Alambagh Bus Terminal."
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
                title="Best CAPF AC Coaching in Lucknow"
                subtitle="UPSC Assistant Commandant Preparation — BSF, CRPF, CISF, ITBP & SSB"
                image="/images/bg.webp"
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
                            Best CAPF AC Coaching in Lucknow &amp; Alambagh — UPSC Assistant Commandant Preparation
                        </h1>

                        {/* AEO / AI Direct-Answer Summary Box */}
                        <div className="bg-[#1B2620] border-l-4 border-gold p-6 md:p-8 rounded-r-2xl shadow-xl space-y-4 my-8">
                            <div className="flex items-center gap-2 text-gold font-bold text-sm uppercase tracking-wider">
                                <Shield className="w-5 h-5 text-gold shrink-0" />
                                Course Snapshot: UPSC CAPF AC Coaching at Pathfinder Defence Academy Lucknow
                            </div>
                            <p className="text-gray-200 text-base md:text-lg font-medium leading-relaxed">
                                <strong className="text-white">Pathfinder Defence Academy (PFDA)</strong> is Lucknow’s premier academy for the UPSC Central Armed Police Forces (Assistant Commandant) examination. Operating opposite Singar Nagar Metro Station in Alambagh and Sector 8 in Indira Nagar, PFDA delivers comprehensive coaching across Paper 1 (General Ability &amp; Intelligence) and descriptive Paper 2 (General Studies, Essay &amp; Comprehension). The program integrates daily morning track workouts for the Physical Efficiency Test (PET), pre-medical evaluations, and UPSC interview guidance led by retired paramilitary officers such as Asst. Comdt. Sarvesh Tripathi (CRPF) with complete residential hostel facilities.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-white/10 text-sm">
                                <div className="bg-black/30 p-3 rounded-lg border border-white/5">
                                    <div className="text-gold font-semibold flex items-center gap-1.5 mb-1">
                                        <Clock className="w-4 h-4" /> Batch Duration
                                    </div>
                                    <p className="text-gray-300 text-xs">6 Months (Target) / 1-Year Comprehensive Batch</p>
                                </div>
                                <div className="bg-black/30 p-3 rounded-lg border border-white/5">
                                    <div className="text-gold font-semibold flex items-center gap-1.5 mb-1">
                                        <Users className="w-4 h-4" /> Eligibility
                                    </div>
                                    <p className="text-gray-300 text-xs">Age 20–25 Yrs | Graduate in any stream (Male &amp; Female)</p>
                                </div>
                                <div className="bg-black/30 p-3 rounded-lg border border-white/5">
                                    <div className="text-gold font-semibold flex items-center gap-1.5 mb-1">
                                        <ShieldCheck className="w-4 h-4" /> PET &amp; Physical Ground
                                    </div>
                                    <p className="text-gray-300 text-xs">Dedicated Track Drills &amp; Paramilitary Mentors</p>
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
                                <div className="text-gray-400 text-xs mt-1">Officer Selections</div>
                            </div>
                            <div className="bg-[#24332B] p-4 rounded-xl border border-white/5 text-center shadow-lg">
                                <Shield className="w-6 h-6 text-gold mx-auto mb-2" />
                                <div className="text-2xl font-black text-white">Group A</div>
                                <div className="text-gray-400 text-xs mt-1">Gazetted Officer Ranks</div>
                            </div>
                            <div className="bg-[#24332B] p-4 rounded-xl border border-white/5 text-center shadow-lg">
                                <Activity className="w-6 h-6 text-gold mx-auto mb-2" />
                                <div className="text-2xl font-black text-white">PET Ground</div>
                                <div className="text-gray-400 text-xs mt-1">Daily Running &amp; Drills</div>
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
                        <SectionHeading title="Premier CAPF AC Training Center in Central Lucknow" alignment="left" />
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Aspirants targeting prestigious gazetted posts in the Central Armed Police Forces—including the <strong className="text-white">Border Security Force (BSF), Central Reserve Police Force (CRPF), Central Industrial Security Force (CISF), Indo-Tibetan Border Police (ITBP), and Sashastra Seema Bal (SSB)</strong>—require a balanced blend of rigorous civil services-grade academic preparation and high-level physical stamina.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            Pathfinder Defence Academy’s Alambagh campus is located directly on Kanpur Road opposite <strong className="text-gold">Singar Nagar Metro Station</strong>. Its central transit connectivity makes it the top choice for day-scholars traveling from <strong className="text-white">Charbagh (3.5 km away), Krishna Nagar (1.5 km), Aminabad, Thakurganj, Rajajipuram, and Transport Nagar</strong>. Eastern Lucknow residents can attend our dedicated Indira Nagar campus near Munshipulia. For candidates traveling from Raebareli, Hardoi, Sitapur, Kanpur, and Varanasi, our on-site residential hostels offer disciplined hostel life with round-the-clock security and clean dining.
                        </p>
                    </div>

                    {/* Section: Detailed UPSC CAPF Exam Structure */}
                    <div className="bg-[#24332B] p-8 rounded-2xl border border-white/5 space-y-6 shadow-xl">
                        <div className="flex items-center gap-3">
                            <BookOpen className="w-6 h-6 text-gold" />
                            <h2 className="text-2xl font-bold text-white">UPSC CAPF (AC) Exam Structure &amp; Syllabus Details</h2>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                            The written examination consists of two papers conducted on the same day. Candidates must clear the sectional qualifying cutoff in Paper 1 for their descriptive Paper 2 answer script to be evaluated:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                            <div className="bg-[#1B2620] p-6 rounded-xl border border-white/10 space-y-3">
                                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                                    <span className="text-gold font-bold text-lg">Paper 1: General Ability &amp; Intelligence</span>
                                    <span className="bg-gold/20 text-gold text-xs font-bold px-2.5 py-1 rounded">250 Marks | Objective</span>
                                </div>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    125 Multiple-Choice Questions (2 Hours). Covers Indian Polity &amp; Constitution, Modern Indian History &amp; Freedom Movement, Physical &amp; Economic Geography of India, Macroeconomics, General Science, and Quantitative Aptitude/Reasoning.
                                </p>
                                <p className="text-gray-400 text-xs italic">
                                    *Guided by Anand Krishna Chauhan Sir (Ancient History &amp; Polity specialist) with weekly sectional tests.
                                </p>
                            </div>

                            <div className="bg-[#1B2620] p-6 rounded-xl border border-white/10 space-y-3">
                                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                                    <span className="text-gold font-bold text-lg">Paper 2: General Studies, Essay &amp; Comprehension</span>
                                    <span className="bg-gold/20 text-gold text-xs font-bold px-2.5 py-1 rounded">200 Marks | Descriptive</span>
                                </div>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Part A (80 Marks): 4 Long-form Essays on national security, geostrategy, economics, and human rights (Hindi or English). Part B (120 Marks): Comprehension, Précis writing, Counter-Argument writing, Report writing, and advanced English grammar.
                                </p>
                                <p className="text-gray-400 text-xs italic">
                                    *Daily handwritten answer evaluation by Abhishek Awasthi Sir with personalized line-by-line feedback.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Section: Physical Efficiency Standards */}
                    <div className="space-y-6">
                        <SectionHeading title="Mandatory Physical Efficiency Test (PET) Standards" alignment="left" />
                        <p className="text-gray-300 text-base leading-relaxed">
                            Written qualifiers must pass every event in the PET on the ground. PFDA conducts daily morning physical training on our dedicated obstacle ground in Alambagh to ensure 100% clearing rate:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-[#1B2620] p-6 rounded-xl border border-white/5 space-y-4">
                                <h3 className="text-lg font-bold text-gold border-b border-white/10 pb-2">Male Candidates Standards</h3>
                                <ul className="space-y-2 text-sm text-gray-300">
                                    <li className="flex items-center justify-between"><span className="text-white">100 Meters Sprint:</span> <span>16 Seconds</span></li>
                                    <li className="flex items-center justify-between"><span className="text-white">800 Meters Race:</span> <span>3 Minutes 45 Seconds</span></li>
                                    <li className="flex items-center justify-between"><span className="text-white">Long Jump:</span> <span>3.5 Meters (3 chances)</span></li>
                                    <li className="flex items-center justify-between"><span className="text-white">Shot Put (7.26 kgs):</span> <span>4.5 Meters</span></li>
                                </ul>
                            </div>
                            <div className="bg-[#1B2620] p-6 rounded-xl border border-white/5 space-y-4">
                                <h3 className="text-lg font-bold text-gold border-b border-white/10 pb-2">Female Candidates Standards</h3>
                                <ul className="space-y-2 text-sm text-gray-300">
                                    <li className="flex items-center justify-between"><span className="text-white">100 Meters Sprint:</span> <span>18 Seconds</span></li>
                                    <li className="flex items-center justify-between"><span className="text-white">800 Meters Race:</span> <span>4 Minutes 45 Seconds</span></li>
                                    <li className="flex items-center justify-between"><span className="text-white">Long Jump:</span> <span>3.0 Meters (3 chances)</span></li>
                                    <li className="flex items-center justify-between"><span className="text-white">Shot Put:</span> <span>Not Applicable</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Section: Why PFDA Stands Apart for CAPF */}
                    <div className="space-y-6">
                        <SectionHeading title="Why PFDA Is Uttar Pradesh's #1 CAPF AC Academy" alignment="left" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-[#1B2620] p-6 rounded-xl border border-white/5 space-y-3">
                                <div className="w-12 h-12 rounded-lg bg-gold/15 flex items-center justify-center text-gold mb-2">
                                    <Users className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white">Mentorship by Paramilitary Veterans</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Benefit from the first-hand operational insights of Asst. Comdt. Sarvesh Tripathi (CRPF) and retired defence officers who mentor students on internal security challenges, border management doctrines, and the exact psychological mindset required for the UPSC interview board.
                                </p>
                            </div>

                            <div className="bg-[#1B2620] p-6 rounded-xl border border-white/5 space-y-3">
                                <div className="w-12 h-12 rounded-lg bg-gold/15 flex items-center justify-center text-gold mb-2">
                                    <Target className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white">Weekly Evaluated Essay &amp; Argument Drills</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Paper 2 is where most candidates miss the cutoff. PFDA conducts 2 full-length Paper 2 writing sessions every week under exam time constraints, returning graded scripts with structural feedback on introduction, thesis arguments, data citations, and balanced conclusions.
                                </p>
                            </div>

                            <div className="bg-[#1B2620] p-6 rounded-xl border border-white/5 space-y-3">
                                <div className="w-12 h-12 rounded-lg bg-gold/15 flex items-center justify-center text-gold mb-2">
                                    <Activity className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white">Dedicated Physical Ground &amp; Sprint Tracks</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Daily morning stamina sessions ensure students avoid shin splints and injury during preparation. Real measurement of the 3.5m long jump pit and shot put throws guarantees peak performance during the official recruitment rally.
                                </p>
                            </div>

                            <div className="bg-[#1B2620] p-6 rounded-xl border border-white/5 space-y-3">
                                <div className="w-12 h-12 rounded-lg bg-gold/15 flex items-center justify-center text-gold mb-2">
                                    <Award className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white">UPSC Personality Test Mock Interviews</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Upon clearing the PET, cadets sit before our mock interview panel comprising retired IPS officers, DIGs, and senior civil servants. Comprehensive DAF (Detailed Application Form) analysis ensures flawless interview readiness.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Section: FAQs with UI */}
                    <div className="space-y-8">
                        <SectionHeading title="Frequently Asked Questions (CAPF AC Coaching in Lucknow)" alignment="left" />
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
                            <h2 className="text-2xl md:text-3xl font-extrabold text-white">Command the Paramilitary Forces as Assistant Commandant</h2>
                            <p className="text-gray-300 max-w-xl text-sm md:text-base">
                                Enlist in Lucknow’s top-performing CAPF AC batches at Alambagh and Indira Nagar. Claim your demo classes or consult our veteran faculty today.
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
