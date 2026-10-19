import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, MapPin, Award, Users, ShieldCheck, PhoneCall, Plane, GraduationCap, Clock, BookOpen, Compass, Target } from "lucide-react";

export const metadata: Metadata = {
    title: "Best AFCAT Coaching in Lucknow & Alambagh 2026 | Flying & Ground Duty Prep",
    description: "Join Lucknow's top-rated AFCAT coaching institute in Alambagh (opposite Singar Nagar Metro). Specialized Air Force Common Admission Test preparation, AFSB interview training & hostel.",
    keywords: [
        "best AFCAT coaching in Lucknow",
        "AFCAT coaching in Alambagh Lucknow",
        "AFCAT coaching in Alambagh",
        "AFCAT coaching near me",
        "Air Force coaching academy Lucknow",
        "AFCAT written exam coaching",
        "AFSB interview preparation Lucknow",
        "Pathfinder Defence Academy AFCAT",
        "AFCAT coaching fees in Lucknow",
        "AFCAT coaching near Charbagh",
        "AFCAT Ground Duty coaching Lucknow",
    ],
    alternates: { canonical: "https://pathfinderdefenceacademy.com/courses/afcat" },
    openGraph: {
        title: "Best AFCAT Coaching in Lucknow & Alambagh 2026 | Pathfinder Defence Academy",
        description: "Join Lucknow's premier AFCAT coaching institute in Alambagh. Expert Air Force written classes, AFSB interview training, and hostel facilities.",
        url: "https://pathfinderdefenceacademy.com/courses/afcat",
        type: "website",
        images: [{ url: "https://pathfinderdefenceacademy.com/images/1707393182_indian-army.jpg", width: 1200, height: 630, alt: "AFCAT Coaching at Pathfinder Defence Academy Lucknow" }],
    },
};

export default function AFCATCoursePage() {
    const courseSchema = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "Indian Air Force AFCAT Coaching Program (Flying Branch & Ground Duty)",
        "description": "Comprehensive coaching program for the Air Force Common Admission Test covering General Awareness, Verbal Ability in English, Numerical Ability, Reasoning and Military Aptitude, coupled with 5-day AFSB interview preparation under ex-AFSB officers.",
        "courseMode": "Offline, Classroom & Residential",
        "educationalCredentialAwarded": "AFCAT Written Exam & AFSB Interview Qualification",
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
                "name": "Which is the best AFCAT coaching institute in Lucknow and Alambagh?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Pathfinder Defence Academy (PFDA), located opposite the Singar Nagar Metro Station in Alambagh, Lucknow, is widely regarded as the best AFCAT coaching institute. PFDA delivers specialized training for both Flying Branch and Ground Duty (Technical & Non-Technical) branches, computer-based test series, and personalized 5-day AFSB interview preparation under retired Air Force Selection Board psychologists."
                }
            },
            {
                "@type": "Question",
                "name": "Can non-engineering graduates apply for the AFCAT exam?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Graduates from any recognized stream (B.A., B.Com, B.Sc., BBA) with a minimum of 60% aggregate marks are fully eligible to apply for Ground Duty (Non-Technical) branches like Administration and Logistics. Candidates aspiring for the Flying Branch require Mathematics and Physics at 10+2 level with graduation, or a B.E./B.Tech degree."
                }
            },
            {
                "@type": "Question",
                "name": "What is the fee structure and duration for AFCAT coaching in Lucknow at PFDA?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Pathfinder Defence Academy offers affordable AFCAT coaching packages for 3-month crash courses and 6-month target batches, with flexible payment plans and optional residential hostel amenities. Please contact our admissions desk at +91 75051 88009 for the latest fee structure and scholarship details."
                }
            },
            {
                "@type": "Question",
                "name": "Does Pathfinder Defence Academy prepare candidates for the AFSB interview?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Passing the AFCAT written test is only stage one. PFDA's dedicated AFSB wing is mentored by ex-Air Force officers including Gp. Capt. A.K. Srivastava (Ex-AFSB Psychologist) and Gp. Capt. L.K. Pandey (Deputy President AFSB/SSB), covering computer-based testing, Screening (OIR/PPDT), psychology tests, GTO outdoor obstacle ground drills, and mock personal interviews."
                }
            },
            {
                "@type": "Question",
                "name": "How convenient is the PFDA Alambagh campus for students traveling from Charbagh or Krishna Nagar?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The PFDA Alambagh campus is situated directly opposite Singar Nagar Metro Station on Kanpur Road. It is only 3.5 km (less than 10 minutes by Lucknow Metro) from Charbagh Railway Station, 1.5 km from Krishna Nagar, and easily accessible from Aminabad, Thakurganj, and Alambagh Bus Stand."
                }
            },
            {
                "@type": "Question",
                "name": "Can female graduates apply for AFCAT and join the residential batches in Lucknow?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, female candidates are eligible for both Flying and Ground Duty branches through AFCAT. Pathfinder Defence Academy provides dedicated batches for women aspirants with secure, separate hostel blocks equipped with female wardens and 24/7 CCTV surveillance in Alambagh, Lucknow."
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
                title="Best AFCAT Coaching in Lucknow"
                subtitle="Air Force Common Admission Test — Alambagh & Indira Nagar Campuses"
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
                            Best AFCAT Coaching in Lucknow &amp; Alambagh — Indian Air Force Officer Preparation
                        </h1>

                        {/* AEO / AI Direct-Answer Summary Box */}
                        <div className="bg-[#1B2620] border-l-4 border-gold p-6 md:p-8 rounded-r-2xl shadow-xl space-y-4 my-8">
                            <div className="flex items-center gap-2 text-gold font-bold text-sm uppercase tracking-wider">
                                <Plane className="w-5 h-5 text-gold shrink-0" />
                                Course Snapshot: AFCAT Coaching at Pathfinder Defence Academy Lucknow
                            </div>
                            <p className="text-gray-200 text-base md:text-lg font-medium leading-relaxed">
                                <strong className="text-white">Pathfinder Defence Academy (PFDA)</strong> conducts Lucknow’s highest-rated coaching program for the Air Force Common Admission Test (AFCAT). Operating opposite Singar Nagar Metro Station in Alambagh and Sector 8 in Indira Nagar, PFDA provides focused Computer-Based Test (CBT) preparation across General Awareness, Verbal Ability, Numerical Ability, and Reasoning &amp; Military Aptitude. The program integrates authentic 5-day Air Force Selection Board (AFSB) interview training under retired Air Force Psychologists and Interviewing Officers, with complete residential hostel amenities for male and female graduate aspirants.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-white/10 text-sm">
                                <div className="bg-black/30 p-3 rounded-lg border border-white/5">
                                    <div className="text-gold font-semibold flex items-center gap-1.5 mb-1">
                                        <Clock className="w-4 h-4" /> Batch Duration
                                    </div>
                                    <p className="text-gray-300 text-xs">3 Months (Intensive) / 6 Months (Target Comprehensive)</p>
                                </div>
                                <div className="bg-black/30 p-3 rounded-lg border border-white/5">
                                    <div className="text-gold font-semibold flex items-center gap-1.5 mb-1">
                                        <Users className="w-4 h-4" /> Eligibility
                                    </div>
                                    <p className="text-gray-300 text-xs">Age 20–24 (Flying) / 20–26 (Ground Duty) | Graduates (60% min)</p>
                                </div>
                                <div className="bg-black/30 p-3 rounded-lg border border-white/5">
                                    <div className="text-gold font-semibold flex items-center gap-1.5 mb-1">
                                        <ShieldCheck className="w-4 h-4" /> AFSB &amp; GTO Mentorship
                                    </div>
                                    <p className="text-gray-300 text-xs">Ex-AFSB Psychologists &amp; Outdoor Ground</p>
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
                                <div className="text-gray-400 text-xs mt-1">Armed Forces Selections</div>
                            </div>
                            <div className="bg-[#24332B] p-4 rounded-xl border border-white/5 text-center shadow-lg">
                                <Plane className="w-6 h-6 text-gold mx-auto mb-2" />
                                <div className="text-2xl font-black text-white">Flying &amp; GD</div>
                                <div className="text-gray-400 text-xs mt-1">Specialized Dual Tracks</div>
                            </div>
                            <div className="bg-[#24332B] p-4 rounded-xl border border-white/5 text-center shadow-lg">
                                <Users className="w-6 h-6 text-gold mx-auto mb-2" />
                                <div className="text-2xl font-black text-white">Ex-AFSB</div>
                                <div className="text-gray-400 text-xs mt-1">Psychologist Mentors</div>
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
                        <SectionHeading title="Strategic AFCAT Preparation in Central Lucknow" alignment="left" />
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Graduate defence aspirants across Uttar Pradesh choose <strong className="text-white">Pathfinder Defence Academy</strong> in Lucknow because of its rigorous academic rigor and unmatched campus accessibility. Situated right on the Kanpur Road arterial highway, our flagship Alambagh campus is located opposite the <strong className="text-gold">Singar Nagar Metro Station</strong>.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            College students and working professionals from <strong className="text-white">Charbagh (3.5 km away), Krishna Nagar (1.5 km), Aminabad, Thakurganj, Rajajipuram, and Mawaiya</strong> commute comfortably on the Lucknow Metro Red Line. Aspirants located in Trans-Gomti areas—including Gomti Nagar, Indira Nagar, Mahanagar, and Munshipulia—attend our fully staffed Indira Nagar centre. For outstation aspirants arriving from Kanpur, Raebareli, Unnao, Ayodhya, and Prayagraj, our supervised Alambagh residential hostels offer high-speed study libraries, disciplined evening preparation, and nutritious dining.
                        </p>
                    </div>

                    {/* Section: Detailed AFCAT Exam Pattern & Syllabus */}
                    <div className="bg-[#24332B] p-8 rounded-2xl border border-white/5 space-y-6 shadow-xl">
                        <div className="flex items-center gap-3">
                            <BookOpen className="w-6 h-6 text-gold" />
                            <h2 className="text-2xl font-bold text-white">AFCAT Exam Pattern &amp; Section-Wise Syllabus Breakdown</h2>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                            The Air Force Common Admission Test is a single online Computer-Based Examination comprising 100 questions for 300 marks (duration: 2 hours). Marking follows +3 marks for every correct answer and -1 mark penalty for each wrong answer. At PFDA Lucknow, each domain is broken down into structured speed drills:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                            <div className="bg-[#1B2620] p-6 rounded-xl border border-white/10 space-y-3">
                                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                                    <span className="text-gold font-bold text-lg">General Awareness</span>
                                    <span className="bg-gold/20 text-gold text-xs font-bold px-2.5 py-1 rounded">25 Questions | 75 Marks</span>
                                </div>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Covers Indian Polity, Defence Affairs &amp; Weapons Systems, Modern Indian History, Geography, Environment, Basic Sciences, Sports, and International Summits.
                                </p>
                                <p className="text-gray-400 text-xs italic">
                                    *Daily current affairs digests and weekly static GK quizzes curated specifically for IAF question trends.
                                </p>
                            </div>

                            <div className="bg-[#1B2620] p-6 rounded-xl border border-white/10 space-y-3">
                                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                                    <span className="text-gold font-bold text-lg">Verbal Ability in English</span>
                                    <span className="bg-gold/20 text-gold text-xs font-bold px-2.5 py-1 rounded">30 Questions | 90 Marks</span>
                                </div>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Comprehension passages, error detection, sentence completion, synonyms/antonyms, idioms &amp; phrases, and cloze test practice.
                                </p>
                                <p className="text-gray-400 text-xs italic">
                                    *Headed by Abhishek Awasthi Sir with active vocabulary flashcards and grammar rule sheets.
                                </p>
                            </div>

                            <div className="bg-[#1B2620] p-6 rounded-xl border border-white/10 space-y-3">
                                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                                    <span className="text-gold font-bold text-lg">Numerical Ability (Mathematics)</span>
                                    <span className="bg-gold/20 text-gold text-xs font-bold px-2.5 py-1 rounded">20 Questions | 60 Marks</span>
                                </div>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Decimal fraction, time &amp; work, average, profit &amp; loss, percentage, ratio &amp; proportion, simple and compound interest, time &amp; distance, and trains/boats.
                                </p>
                                <p className="text-gray-400 text-xs italic">
                                    *Guided with shortcut calculation methods to solve questions without scratchpad delays.
                                </p>
                            </div>

                            <div className="bg-[#1B2620] p-6 rounded-xl border border-white/10 space-y-3">
                                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                                    <span className="text-gold font-bold text-lg">Reasoning &amp; Military Aptitude</span>
                                    <span className="bg-gold/20 text-gold text-xs font-bold px-2.5 py-1 rounded">25 Questions | 75 Marks</span>
                                </div>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Verbal reasoning, non-verbal spatial aptitude, pattern completion, embedded figures, odd one out, and analogy tests.
                                </p>
                                <p className="text-gray-400 text-xs italic">
                                    *Continuous practice on actual IAF previous-year patterns ensures maximum score yield.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Section: AFCAT Eligibility Criteria */}
                    <div className="space-y-6">
                        <SectionHeading title="AFCAT Eligibility Standards (Flying & Ground Duty)" alignment="left" />
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-[#1B2620] p-6 rounded-xl border border-white/5 space-y-2">
                                <h4 className="text-white font-bold text-base flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-gold shrink-0" /> Flying Branch
                                </h4>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Age: 20 to 24 years. Mandatory 50% marks in Math &amp; Physics at 10+2 level AND minimum 60% in Graduation (any discipline) or B.E./B.Tech (60% min).
                                </p>
                            </div>
                            <div className="bg-[#1B2620] p-6 rounded-xl border border-white/5 space-y-2">
                                <h4 className="text-white font-bold text-base flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-gold shrink-0" /> Ground Duty (Technical)
                                </h4>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Age: 20 to 26 years. Aeronautical Engineering (Electronics/Mechanical). 50% in Math &amp; Physics at 10+2 plus 4-year Engineering Degree (min 60%).
                                </p>
                            </div>
                            <div className="bg-[#1B2620] p-6 rounded-xl border border-white/5 space-y-2">
                                <h4 className="text-white font-bold text-base flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-gold shrink-0" /> Ground Duty (Non-Tech)
                                </h4>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Age: 20 to 26 years. Administration &amp; Logistics: Graduate Degree in any discipline (min 60%). Accounts Branch: B.Com Degree (min 60%).
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Section: AFSB Interview Mentorship */}
                    <div className="space-y-6">
                        <SectionHeading title="Complete 5-Day AFSB Mentoring Under Ex-Air Force Officers" alignment="left" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-[#1B2620] p-6 rounded-xl border border-white/5 space-y-3">
                                <div className="w-12 h-12 rounded-lg bg-gold/15 flex items-center justify-center text-gold mb-2">
                                    <Target className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white">Stage 1: Screening &amp; OIR Tests</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Over 60% of candidates are screened out on Day 1. PFDA provides rigorous daily OIR test practice, Picture Perception &amp; Description Test (PPDT) story formulation, and assertive group discussion techniques to guarantee Stage 1 qualification.
                                </p>
                            </div>

                            <div className="bg-[#1B2620] p-6 rounded-xl border border-white/5 space-y-3">
                                <div className="w-12 h-12 rounded-lg bg-gold/15 flex items-center justify-center text-gold mb-2">
                                    <Users className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white">Stage 2: Psychology &amp; Personal Interview</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Mentored directly by Gp. Capt. A.K. Srivastava (Varanasi 4 AFSB &amp; Mysore 2 AFSB Psychologist) and Gp. Capt. L.K. Pandey (Deputy President AFSB/SSB), candidates undergo authentic TAT, WAT, SRT, and SD dossier reviews with one-on-one feedback.
                                </p>
                            </div>

                            <div className="bg-[#1B2620] p-6 rounded-xl border border-white/5 space-y-3">
                                <div className="w-12 h-12 rounded-lg bg-gold/15 flex items-center justify-center text-gold mb-2">
                                    <Compass className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white">Stage 3: GTO Ground Tasks &amp; Obstacles</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Cadets train on our physical GTO ground in Alambagh, mastering Progressive Group Tasks, Half Group Tasks, Snake Race, and Command Tasks under the watchful eyes of retired GTO officers.
                                </p>
                            </div>

                            <div className="bg-[#1B2620] p-6 rounded-xl border border-white/5 space-y-3">
                                <div className="w-12 h-12 rounded-lg bg-gold/15 flex items-center justify-center text-gold mb-2">
                                    <Award className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white">Computerised Pilot Selection System (CPSS)</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    For Flying Branch aspirants, CPSS is a once-in-a-lifetime test. PFDA provides psychomotor reflex drills and instrument reading orientation to prepare candidates mentally for the Air Force Academy simulator tests.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Section: FAQs with UI */}
                    <div className="space-y-8">
                        <SectionHeading title="Frequently Asked Questions (AFCAT Coaching in Lucknow)" alignment="left" />
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
                            <h2 className="text-2xl md:text-3xl font-extrabold text-white">Soar High With the Indian Air Force</h2>
                            <p className="text-gray-300 max-w-xl text-sm md:text-base">
                                Join Lucknow’s dedicated AFCAT batches at Alambagh (opposite Singar Nagar Metro) and Indira Nagar. Book your free demo class or counsel with our ex-defence mentors today.
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
