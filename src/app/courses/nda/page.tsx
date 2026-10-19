import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, MapPin, Award, Users, ShieldCheck, PhoneCall, GraduationCap, Clock, BookOpen, Compass, Target, Calendar } from "lucide-react";

export const metadata: Metadata = {
    title: "Best NDA Coaching in Lucknow & Alambagh 2026 | Batches, Hostel & Admissions",
    description: "Join Lucknow's top-rated NDA coaching institute at Alambagh & Indira Nagar. Expert UPSC NDA written preparation, 14+ years faculty, Ex-Defence SSB mentors, GTO ground & hostel facility.",
    keywords: [
        "best NDA coaching in Lucknow",
        "NDA coaching in Alambagh Lucknow",
        "NDA coaching in Alambagh",
        "NDA coaching near me",
        "best NDA academy Lucknow",
        "NDA coaching in Lucknow",
        "NDA written and SSB coaching Alambagh",
        "Pathfinder Defence Academy NDA",
        "NDA coaching with hostel Lucknow",
        "NDA coaching near Charbagh",
        "NDA coaching near Singar Nagar",
    ],
    alternates: { canonical: "https://pathfinderdefenceacademy.com/courses/nda" },
    openGraph: {
        title: "Best NDA Coaching in Lucknow & Alambagh 2026 | Pathfinder Defence Academy",
        description: "Join Lucknow's premier NDA coaching institute in Alambagh. Expert UPSC written classes, GTO ground, SSB interview training, and hostel facilities.",
        url: "https://pathfinderdefenceacademy.com/courses/nda",
        type: "website",
        images: [{ url: "https://pathfinderdefenceacademy.com/images/nda.jpeg", width: 1200, height: 630, alt: "NDA Coaching at Pathfinder Defence Academy Lucknow" }],
    },
};

export default function NDACoursePage() {
    const courseSchema = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "UPSC NDA Coaching Program (Written Exam + SSB Interview)",
        "description": "Comprehensive coaching program for the UPSC National Defence Academy examination covering Mathematics shortcuts, General Ability Test (GAT), physical training drills, and 5-day SSB interview preparation under ex-defence officers.",
        "courseMode": "Offline, Classroom & Residential",
        "educationalCredentialAwarded": "UPSC NDA Written Exam & SSB Interview Qualification",
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
                "name": "Which is the best NDA coaching institute in Lucknow and Alambagh?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Pathfinder Defence Academy (PFDA), located opposite Singar Nagar Metro Station in Alambagh, Lucknow, is widely recognized as the best NDA coaching institute in Lucknow. PFDA provides specialized UPSC Mathematics shortcuts by Atul Omar Sir, comprehensive General Ability Test (GAT) classes, daily physical conditioning, an authentic in-house GTO obstacle training ground, and 5-day SSB interview mentoring by retired armed forces officers."
                }
            },
            {
                "@type": "Question",
                "name": "What is the fee structure for NDA coaching in Lucknow at Pathfinder Defence Academy?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Pathfinder Defence Academy offers affordable and transparent NDA coaching fee packages with merit-based scholarships and flexible payment options. For exact fee details, installment schedules, and hostel accommodation, please contact our admissions office at +91 75051 88009."
                }
            },
            {
                "@type": "Question",
                "name": "What is the eligibility criteria for the UPSC NDA examination?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Candidates must be unmarried male or female students aged between 16.5 and 19.5 years. Educational qualification requires passing or appearing in Class 12. For the Army Wing, students from any stream (Arts, Commerce, Science) can apply; for the Navy and Air Force Wings, Physics and Mathematics at the 10+2 level are mandatory."
                }
            },
            {
                "@type": "Question",
                "name": "How accessible is the PFDA Alambagh campus from Charbagh, Krishna Nagar, and other Lucknow localities?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The flagship Alambagh campus is situated on Kanpur Road directly opposite the Singar Nagar Metro Station (Gate No. 2). It is just 3.5 km (a 7-minute metro or bus ride) from Charbagh Railway Station, 1.5 km from Krishna Nagar, and easily accessible from Aminabad, Thakurganj, and Alambagh Bus Terminal via the Lucknow Metro Red Line."
                }
            },
            {
                "@type": "Question",
                "name": "Are residential hostel and mess facilities available for outstation NDA aspirants?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Pathfinder Defence Academy operates separate residential hostels for boys and girls in Alambagh, Lucknow. Hostels feature 24/7 security, disciplined study hours, hygienic dining serving 4 balanced meals daily, and warden supervision by ex-defence personnel."
                }
            },
            {
                "@type": "Question",
                "name": "Does Pathfinder Defence Academy prepare students for both the NDA written exam and SSB interview?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Written exam clearance and SSB interview preparation run concurrently. PFDA integrates officer intelligence rating (OIR), PPDT screening, psychological test series (TAT, WAT, SRT), outdoor GTO obstacle ground drills, and personal interview simulations conducted by retired board officers from day one."
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
                title="Best NDA Coaching in Lucknow"
                subtitle="UPSC National Defence Academy Preparation — Alambagh & Indira Nagar"
                image="/images/nda.jpeg"
            />

            <section className="container mx-auto px-4 py-16">
                <div className="max-w-5xl mx-auto space-y-16">

                    {/* H1 & Local Centre Badge */}
                    <div>
                        <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/30 text-gold text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                            <MapPin className="w-3.5 h-3.5" />
                            Alambagh (Opp. Singar Nagar Metro) &amp; Indira Nagar, Lucknow
                        </div>
                        <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6">
                            Best NDA Coaching in Lucknow &amp; Alambagh — UPSC Written &amp; SSB Interview Preparation
                        </h1>

                        {/* AEO / AI Direct-Answer Summary Box */}
                        <div className="bg-[#1B2620] border-l-4 border-gold p-6 md:p-8 rounded-r-2xl shadow-xl space-y-4 my-8">
                            <div className="flex items-center gap-2 text-gold font-bold text-sm uppercase tracking-wider">
                                <GraduationCap className="w-5 h-5 text-gold shrink-0" />
                                Course Snapshot: UPSC NDA Coaching at Pathfinder Defence Academy
                            </div>
                            <p className="text-gray-200 text-base md:text-lg font-medium leading-relaxed">
                                <strong className="text-white">Pathfinder Defence Academy (PFDA)</strong> is Lucknow’s premier defence academy providing comprehensive preparation for the UPSC National Defence Academy (NDA &amp; NA) examination. Located opposite Singar Nagar Metro Station in Alambagh and Sector 8 in Indira Nagar, PFDA delivers expert classroom coaching across Mathematics and the General Ability Test (GAT), integrated with morning physical fitness drills, an in-house GTO obstacle ground, and 5-day SSB interview training led by retired Armed Forces officers.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-white/10 text-sm">
                                <div className="bg-black/30 p-3 rounded-lg border border-white/5">
                                    <div className="text-gold font-semibold flex items-center gap-1.5 mb-1">
                                        <Clock className="w-4 h-4" /> Batch Duration
                                    </div>
                                    <p className="text-gray-300 text-xs">6 Months (Crash/Target) to 1-Year Comprehensive Batch</p>
                                </div>
                                <div className="bg-black/30 p-3 rounded-lg border border-white/5">
                                    <div className="text-gold font-semibold flex items-center gap-1.5 mb-1">
                                        <Users className="w-4 h-4" /> Eligibility
                                    </div>
                                    <p className="text-gray-300 text-xs">Age 16.5–19.5 Yrs | 12th Pass or Appearing (Boys &amp; Girls)</p>
                                </div>
                                <div className="bg-black/30 p-3 rounded-lg border border-white/5">
                                    <div className="text-gold font-semibold flex items-center gap-1.5 mb-1">
                                        <ShieldCheck className="w-4 h-4" /> SSB &amp; GTO Ground
                                    </div>
                                    <p className="text-gray-300 text-xs">In-House Obstacle Ground &amp; Ex-Board Mentors</p>
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
                                <Users className="w-6 h-6 text-gold mx-auto mb-2" />
                                <div className="text-2xl font-black text-white">Ex-Officers</div>
                                <div className="text-gray-400 text-xs mt-1">SSB Interview Mentors</div>
                            </div>
                            <div className="bg-[#24332B] p-4 rounded-xl border border-white/5 text-center shadow-lg">
                                <ShieldCheck className="w-6 h-6 text-gold mx-auto mb-2" />
                                <div className="text-2xl font-black text-white">15+ Years</div>
                                <div className="text-gray-400 text-xs mt-1">Teaching Legacy</div>
                            </div>
                            <div className="bg-[#24332B] p-4 rounded-xl border border-white/5 text-center shadow-lg">
                                <MapPin className="w-6 h-6 text-gold mx-auto mb-2" />
                                <div className="text-2xl font-black text-white">Alambagh</div>
                                <div className="text-gray-400 text-xs mt-1">Opp. Singar Nagar Metro</div>
                            </div>
                        </div>

                        {/* Integrated Schooling Cross-Link */}
                        <div className="bg-gradient-to-r from-gold/15 to-transparent border border-gold/30 rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div>
                                <h4 className="text-white font-bold text-base md:text-lg">Passed Class 10th and Seeking Schooling + NDA?</h4>
                                <p className="text-gray-300 text-sm">Join our 2-Year Integrated Foundation Batch with Class 11 &amp; 12 CBSE/UP Board schooling.</p>
                            </div>
                            <Link href="/courses/foundation" className="shrink-0 bg-gold hover:bg-yellow-500 text-black font-bold text-xs md:text-sm px-4 py-2.5 rounded-lg transition-colors">
                                Explore Foundation Course →
                            </Link>
                        </div>
                    </div>

                    {/* Section: Why Lucknow & Alambagh Is the NDA Hub */}
                    <div className="space-y-6">
                        <SectionHeading title="Why Lucknow & Alambagh Is the Hub for NDA Aspirants" alignment="left" />
                        <p className="text-gray-300 text-lg leading-relaxed">
                            For defence aspirants across Uttar Pradesh, Lucknow is the undisputed centre for competitive military preparation. Within Lucknow, the <strong className="text-white">Alambagh corridor</strong> stands out as the ultimate student destination. Situated on Kanpur Road, Pathfinder Defence Academy’s flagship Alambagh campus is positioned immediately opposite the <strong className="text-gold">Singar Nagar Metro Station (Gate 2)</strong>, making daily commutes effortless for day-scholars traveling from <strong className="text-white">Charbagh (3.5 km away), Krishna Nagar (1.5 km away), Aminabad, Thakurganj, and Transport Nagar</strong>.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            Aspirants residing in East Lucknow—such as Gomti Nagar, Aliganj, Mahanagar, and Munshipulia—can access our second full-fledged campus at <strong className="text-white">Uma Krishna Complex in Indira Nagar</strong>. For outstation students arriving from Kanpur, Ayodhya, Sitapur, Raebareli, Sultanpur, and Gorakhpur, our Alambagh residential hostels offer an authentic military routine with round-the-clock security, disciplined evening study hours, and wholesome dining.
                        </p>
                    </div>

                    {/* Section: UPSC NDA Exam Structure & Syllabus */}
                    <div className="bg-[#24332B] p-8 rounded-2xl border border-white/5 space-y-6 shadow-xl">
                        <div className="flex items-center gap-3">
                            <BookOpen className="w-6 h-6 text-gold" />
                            <h2 className="text-2xl font-bold text-white">UPSC NDA Exam Structure &amp; Syllabus Coverage</h2>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                            The UPSC NDA written exam consists of two objective papers conducted on the same day for a total of 900 marks. At Pathfinder Defence Academy, each paper is handled by specialized faculty with rigorous time-management drills:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                            <div className="bg-[#1B2620] p-6 rounded-xl border border-white/10 space-y-3">
                                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                                    <span className="text-gold font-bold text-lg">Paper 1: Mathematics</span>
                                    <span className="bg-gold/20 text-gold text-xs font-bold px-2.5 py-1 rounded">300 Marks</span>
                                </div>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    120 Questions | 2.5 Hours duration. Covers Algebra, Matrices, Determinants, Trigonometry, 2D &amp; 3D Analytical Geometry, Differential Calculus, Integral Calculus, Vectors, Probability, and Statistics.
                                </p>
                                <p className="text-gray-400 text-xs italic">
                                    *Mentored by Atul Omar Sir with shortcut tricks allowing students to solve complex calculus and geometry problems in under 45 seconds.
                                </p>
                            </div>

                            <div className="bg-[#1B2620] p-6 rounded-xl border border-white/10 space-y-3">
                                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                                    <span className="text-gold font-bold text-lg">Paper 2: General Ability Test</span>
                                    <span className="bg-gold/20 text-gold text-xs font-bold px-2.5 py-1 rounded">600 Marks</span>
                                </div>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    150 Questions | 2.5 Hours duration. Divided into Part A: English (200 marks, 50 questions focusing on grammar, vocabulary, idioms, comprehension) and Part B: General Knowledge (400 marks covering Physics, Chemistry, General Science, History, Geography, and Current Affairs).
                                </p>
                                <p className="text-gray-400 text-xs italic">
                                    *Guided by Abhishek Awasthi Sir (English HOD) and Anand Krishna Chauhan Sir (GS Director) for unmatched scoring consistency.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Section: Comprehensive Eligibility */}
                    <div className="space-y-6">
                        <SectionHeading title="National NDA Eligibility Standards" alignment="left" />
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-[#1B2620] p-6 rounded-xl border border-white/5 space-y-2">
                                <h4 className="text-white font-bold text-base flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-gold shrink-0" /> Age Requirements
                                </h4>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Aspirants must be between 16.5 and 19.5 years old on the first day of the month when the course commences. Only unmarried candidates are eligible.
                                </p>
                            </div>
                            <div className="bg-[#1B2620] p-6 rounded-xl border border-white/5 space-y-2">
                                <h4 className="text-white font-bold text-base flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-gold shrink-0" /> Academic Qualifications
                                </h4>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    <strong>Army Wing:</strong> 12th Class pass/appearing from any stream. <br />
                                    <strong>Air Force &amp; Navy:</strong> 12th Class pass/appearing with Physics and Mathematics.
                                </p>
                            </div>
                            <div className="bg-[#1B2620] p-6 rounded-xl border border-white/5 space-y-2">
                                <h4 className="text-white font-bold text-base flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-gold shrink-0" /> Physical &amp; Medical Fit
                                </h4>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Minimum height: 157 cm (162.5 cm for Air Force). Eyesight, color vision, and BMI must conform to Armed Forces Medical Services benchmarks.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Section: Why PFDA Lucknow Stands Apart */}
                    <div className="space-y-6">
                        <SectionHeading title="Why Aspirants Choose Pathfinder Defence Academy" alignment="left" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-[#1B2620] p-6 rounded-xl border border-white/5 space-y-3">
                                <div className="w-12 h-12 rounded-lg bg-gold/15 flex items-center justify-center text-gold mb-2">
                                    <Target className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white">Authentic In-House GTO Obstacle Ground</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Clearing the written exam is only half the battle. PFDA maintains its own outdoor GTO ground in Alambagh equipped with real SSB obstacles—including Progressive Group Tasks (PGT), Half Group Tasks (HGT), Command Tasks, Individual Obstacles (Tarzan Swing, Burma Bridge, Tiger Leap), and Snake Race conditioning.
                                </p>
                            </div>

                            <div className="bg-[#1B2620] p-6 rounded-xl border border-white/5 space-y-3">
                                <div className="w-12 h-12 rounded-lg bg-gold/15 flex items-center justify-center text-gold mb-2">
                                    <Users className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white">Mentorship by Retired SSB Board Officers</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Our SSB advisory board includes distinguished ex-presidents and interviewing officers—such as Maj. Gen. S.K. Singh (Ex-SSB Commandant), Col. Praveen Kumar (Ex-NDA &amp; IMA Instructor), and Gp. Capt. A.K. Srivastava (Ex-AFSB Psychologist)—giving cadets personal feedback on OLQs (Officer Like Qualities).
                                </p>
                            </div>

                            <div className="bg-[#1B2620] p-6 rounded-xl border border-white/5 space-y-3">
                                <div className="w-12 h-12 rounded-lg bg-gold/15 flex items-center justify-center text-gold mb-2">
                                    <Award className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white">Weekly UPSC Pattern OMR Mock Tests</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Every Saturday, students undergo timed OMR mock tests mirroring the exact UPSC marking scheme and negative marking. Detailed performance analytics pinpoint weak subject areas, followed by dedicated doubt-clearing sessions on Sundays.
                                </p>
                            </div>

                            <div className="bg-[#1B2620] p-6 rounded-xl border border-white/5 space-y-3">
                                <div className="w-12 h-12 rounded-lg bg-gold/15 flex items-center justify-center text-gold mb-2">
                                    <Compass className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white">Disciplined Residential Hostel Environment</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Separate hostels for boys and girls in Alambagh with round-the-clock wardens, biometric access, hygienic dining, high-speed Wi-Fi, and peer study groups that cultivate the discipline, teamwork, and camaraderie essential for the National Defence Academy.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Section: Daily Routine */}
                    <div className="bg-[#24332B] p-8 rounded-2xl border border-white/5 space-y-6">
                        <h2 className="text-2xl font-bold text-gold">A Day in the Life of a PFDA NDA Cadet in Lucknow</h2>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4 border-b border-white/10 pb-3 text-sm">
                                <span className="bg-gold text-black font-bold px-3 py-1 rounded text-xs shrink-0">05:45 AM – 07:15 AM</span>
                                <span className="text-gray-300">Morning Physical Fitness: 2.4 km endurance running, push-ups, chin-ups, and GTO obstacle ground agility drills.</span>
                            </div>
                            <div className="flex items-start gap-4 border-b border-white/10 pb-3 text-sm">
                                <span className="bg-gold text-black font-bold px-3 py-1 rounded text-xs shrink-0">08:00 AM – 09:00 AM</span>
                                <span className="text-gray-300">Nutritious breakfast at the cadet mess followed by daily newspaper analysis and current affairs briefing.</span>
                            </div>
                            <div className="flex items-start gap-4 border-b border-white/10 pb-3 text-sm">
                                <span className="bg-gold text-black font-bold px-3 py-1 rounded text-xs shrink-0">09:00 AM – 02:00 PM</span>
                                <span className="text-gray-300">Intensive academic lectures: Mathematics shortcuts, English vocabulary &amp; grammar mastery, and General Science sessions.</span>
                            </div>
                            <div className="flex items-start gap-4 border-b border-white/10 pb-3 text-sm">
                                <span className="bg-gold text-black font-bold px-3 py-1 rounded text-xs shrink-0">03:00 PM – 05:00 PM</span>
                                <span className="text-gray-300">Subject doubt-clearing clinics and supervised problem-solving tutorials with faculty.</span>
                            </div>
                            <div className="flex items-start gap-4 border-b border-white/10 pb-3 text-sm">
                                <span className="bg-gold text-black font-bold px-3 py-1 rounded text-xs shrink-0">05:30 PM – 07:00 PM</span>
                                <span className="text-gray-300">SSB Stage 1 &amp; 2 workshops: OIR test series, PPDT story writing, group discussion (GD), and lecturette practice.</span>
                            </div>
                            <div className="flex items-start gap-4 text-sm">
                                <span className="bg-gold text-black font-bold px-3 py-1 rounded text-xs shrink-0">08:30 PM – 10:30 PM</span>
                                <span className="text-gray-300">Supervised self-study in hostel study halls, lights out at 10:45 PM for adequate recovery.</span>
                            </div>
                        </div>
                    </div>

                    {/* Section: FAQs with UI */}
                    <div className="space-y-8">
                        <SectionHeading title="Frequently Asked Questions (NDA Coaching in Lucknow)" alignment="left" />
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
                            <h2 className="text-2xl md:text-3xl font-extrabold text-white">Join Lucknow’s Premier NDA Coaching Academy</h2>
                            <p className="text-gray-300 max-w-xl text-sm md:text-base">
                                New batches commence every Monday at our Alambagh and Indira Nagar centres. Secure your seat today, request a campus tour, or attend a free 3-day demo class.
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
