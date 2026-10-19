import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, MapPin, Award, Users, ShieldCheck, PhoneCall, GraduationCap, School, BookOpen, Clock, HeartHandshake } from "lucide-react";

export const metadata: Metadata = {
    title: "Best NDA Foundation Course in Lucknow (Class 11 & 12 Schooling + NDA 2026)",
    description: "Join Lucknow's #1 2-Year NDA Foundation Course after 10th in Alambagh. Integrated CBSE/UP Board Class 11 & 12 schooling with UPSC NDA written, physical drills, SSB & residential hostel.",
    keywords: [
        "NDA foundation course in Lucknow",
        "best NDA foundation coaching in Lucknow",
        "NDA foundation course in Alambagh Lucknow",
        "NDA coaching with schooling in Lucknow",
        "2 year NDA foundation batch after 10th Lucknow",
        "residential NDA foundation coaching Lucknow",
        "Class 11 NDA coaching with hostel Lucknow",
        "Pathfinder Defence Academy foundation course"
    ],
    alternates: { canonical: "https://pathfinderdefenceacademy.com/courses/foundation" },
    openGraph: {
        title: "Best NDA Foundation Course in Lucknow | Class 11 & 12 Schooling + NDA",
        description: "Premier 2-Year integrated NDA Foundation Course for Class 10 pass students in Alambagh & Indira Nagar, Lucknow. Complete schooling, UPSC written prep & SSB mentorship.",
        url: "https://pathfinderdefenceacademy.com/courses/foundation",
        type: "website",
        images: [{ url: "https://pathfinderdefenceacademy.com/images/nda.jpeg", width: 1200, height: 630, alt: "NDA Foundation Course at PFDA Lucknow" }],
    },
};

export default function NDAFoundationCoursePage() {
    const courseSchema = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "2-Year Integrated NDA Foundation Course with Schooling (Class 11 & 12)",
        "description": "Comprehensive 2-year dual preparation program in Lucknow combining recognized CBSE/UP Board Class 11 & 12 schooling with UPSC NDA written exam coaching, physical fitness drills, and 5-day SSB interview training under ex-defence mentors.",
        "courseMode": "Offline, Residential Classroom",
        "educationalCredentialAwarded": "Class 12 Board Certificate & UPSC NDA Qualification",
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
                "name": "What is the NDA Foundation Course at Pathfinder Defence Academy Lucknow?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The NDA Foundation Course at PFDA Lucknow is an integrated 2-year residential and day-boarding program for Class 10 passed students. It simultaneously covers formal Class 11 and 12 schooling (CBSE or UP Board) and intensive UPSC NDA written coaching, English communication, daily sports drills, and 5-day SSB interview training."
                }
            },
            {
                "@type": "Question",
                "name": "What is the age limit to join the NDA Foundation Course after Class 10th?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Students should ideally be between 14.5 to 16.5 years old when joining Class 11 after Class 10 board results. This guarantees that when they appear for their first UPSC NDA exam in Class 12, they fall comfortably within the UPSC eligibility window of 16.5 to 19.5 years."
                }
            },
            {
                "@type": "Question",
                "name": "Does the NDA Foundation program negatively impact Class 12 board exam marks?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. The curriculum is synchronized so that core board subjects (Mathematics, Physics, Chemistry, English) directly feed into the NDA syllabus. Our foundation students consistently achieve 85%+ in their Class 12 board examinations while clearing the NDA written exam on their very first attempt."
                }
            },
            {
                "@type": "Question",
                "name": "Are separate hostel facilities available for outstation students in Lucknow?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. PFDA provides fully furnished, supervised residential hostels with separate wings for boys and girls in Alambagh, Lucknow. Hostels include hygienic dining, 24/7 security, Wi-Fi, laundry, and disciplined evening doubt-clearing sessions supervised by ex-defence staff."
                }
            },
            {
                "@type": "Question",
                "name": "Where is the NDA Foundation campus located in Lucknow?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The flagship Foundation campus is located at 3rd Floor, KSM Plaza, opposite Singar Nagar Metro Station in Alambagh, Lucknow. We also operate a dedicated branch at Uma Krishna Complex, Murari Nagar, Indira Nagar, Lucknow."
                }
            },
            {
                "@type": "Question",
                "name": "What is the admission procedure and fee structure for the Foundation course?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Admission is granted based on Class 10 board performance and an entrance assessment test followed by an interview. Scholarships are awarded to meritorious students. For exact fee details and batch schedules, call our admissions office at +91 75051 88009."
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
                title="NDA Foundation Course"
                subtitle="Class 11 & 12 Integrated Schooling + NDA Coaching in Lucknow"
                image="/images/nda.jpeg"
            />

            <section className="container mx-auto px-4 py-16">
                <div className="max-w-5xl mx-auto">

                    {/* H1 & Campus Location Badge */}
                    <div className="mb-12">
                        <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/30 text-gold text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                            <MapPin className="w-3.5 h-3.5" />
                            Alambagh (Opp. Singar Nagar Metro) &amp; Indira Nagar, Lucknow
                        </div>
                        <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6">
                            Best NDA Foundation Course in Lucknow — Class 11 &amp; 12 Integrated Schooling + NDA Coaching
                        </h1>

                        {/* AEO / AI Direct-Answer Summary Box */}
                        <div className="bg-[#1B2620] border-l-4 border-gold p-6 md:p-8 rounded-r-2xl my-8 shadow-xl">
                            <h2 className="text-lg md:text-xl font-bold text-gold mb-3 flex items-center gap-2">
                                <GraduationCap className="w-5 h-5 text-gold shrink-0" />
                                Quick Summary: 2-Year NDA Foundation Program at PFDA Lucknow
                            </h2>
                            <p className="text-gray-200 text-base md:text-lg font-medium leading-relaxed">
                                <strong>Pathfinder Defence Academy (PFDA)</strong> conducts Lucknow’s premier 2-Year NDA Foundation Course for Class 10 pass students. Located opposite Singar Nagar Metro Station in Alambagh, this program seamlessly integrates recognized CBSE and UP Board Class 11 &amp; 12 schooling with comprehensive UPSC NDA written coaching, daily physical drills on our authentic GTO obstacle ground, and continuous 5-day SSB interview mentoring under retired armed forces officers. Complete residential hostel and mess facilities are provided.
                            </p>
                        </div>

                        {/* Stat Badges for GEO / Search Snippets */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
                            <div className="bg-[#24332B] p-4 rounded-xl border border-white/5 text-center shadow-lg">
                                <Award className="w-6 h-6 text-gold mx-auto mb-2" />
                                <div className="text-2xl font-black text-white">1000+</div>
                                <div className="text-gray-400 text-xs mt-1">Officer Selections</div>
                            </div>
                            <div className="bg-[#24332B] p-4 rounded-xl border border-white/5 text-center shadow-lg">
                                <School className="w-6 h-6 text-gold mx-auto mb-2" />
                                <div className="text-2xl font-black text-white">2-Year Dual</div>
                                <div className="text-gray-400 text-xs mt-1">Schooling + NDA</div>
                            </div>
                            <div className="bg-[#24332B] p-4 rounded-xl border border-white/5 text-center shadow-lg">
                                <ShieldCheck className="w-6 h-6 text-gold mx-auto mb-2" />
                                <div className="text-2xl font-black text-white">Ex-Officers</div>
                                <div className="text-gray-400 text-xs mt-1">SSB Board Mentors</div>
                            </div>
                            <div className="bg-[#24332B] p-4 rounded-xl border border-white/5 text-center shadow-lg">
                                <MapPin className="w-6 h-6 text-gold mx-auto mb-2" />
                                <div className="text-2xl font-black text-white">Alambagh</div>
                                <div className="text-gray-400 text-xs mt-1">Singar Nagar Metro</div>
                            </div>
                        </div>
                    </div>

                    {/* Section 1: Why Start NDA Preparation Right After Class 10th? */}
                    <div className="mb-16">
                        <SectionHeading title="Why Start NDA Preparation After Class 10th?" alignment="left" />
                        <div className="prose prose-invert max-w-none text-gray-300 text-base md:text-lg leading-relaxed space-y-6">
                            <p>
                                The UPSC National Defence Academy (NDA) examination is one of India&apos;s most competitive assessments, testing candidates on advanced 11th and 12th Mathematics, English comprehension, General Science, and Current Affairs. Most students who start preparing after completing Class 12 face an acute time crunch: they must unlearn school-style lengthy problem solving, prepare for the 900-mark UPSC written exam, master physical endurance, and build Officer-Like Qualities (OLQs) within just a few short months before crossing the strict 19.5-year age limit.
                            </p>
                            <p>
                                By contrast, enrolling in the <strong>NDA Foundation Course right after Class 10</strong> gives a student an unassailable 2-year competitive advantage. Rather than separating school academics from competitive coaching, PFDA synchronizes both. Conceptual topics like Coordinate Geometry, Calculus, Trigonometry, Mechanics, Optics, and Modern Indian History are taught directly at the UPSC depth from day one. When our students sit for their first NDA exam in the middle of Class 12, they do so with 24 months of rigorous practice behind them.
                            </p>
                        </div>
                    </div>

                    {/* Section 2: 2-Year Program Structure (Class 11 & Class 12) */}
                    <div className="mb-16">
                        <SectionHeading title="Structured 2-Year Academic &amp; SSB Training Roadmap" alignment="left" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                            {/* Year 1: Class 11 */}
                            <div className="bg-[#24332B] border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-gold font-bold text-xs uppercase tracking-widest bg-gold/10 px-3 py-1 rounded-full">Phase 1: Foundation</span>
                                    <span className="text-white font-black text-xl">Class 11th</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">Conceptual Dominance &amp; Personality Grooming</h3>
                                <ul className="space-y-3 text-sm text-gray-300">
                                    <li className="flex items-start gap-2.5">
                                        <CheckCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                                        <span>Complete Class 11 board syllabus in Physics, Chemistry, Maths/Bio.</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <CheckCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                                        <span>Daily 2-hour NDA Paper 1 Mathematics speed tricks &amp; shortcuts.</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <CheckCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                                        <span>English vocabulary building, grammar fundamentals, and public speaking.</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <CheckCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                                        <span>Morning physical fitness drills: 2.4 km run, push-ups, chin-ups &amp; agility.</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <CheckCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                                        <span>Introduction to Officer-Like Qualities (OLQs) and group discussions.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Year 2: Class 12 */}
                            <div className="bg-[#24332B] border border-gold/30 rounded-2xl p-6 md:p-8 shadow-xl">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-gold font-bold text-xs uppercase tracking-widest bg-gold/20 px-3 py-1 rounded-full">Phase 2: Execution</span>
                                    <span className="text-white font-black text-xl">Class 12th</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">UPSC Exam Mastery &amp; SSB Outdoor Drills</h3>
                                <ul className="space-y-3 text-sm text-gray-300">
                                    <li className="flex items-start gap-2.5">
                                        <CheckCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                                        <span>Class 12 board preparation aligned with CBSE/UP Board standards.</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <CheckCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                                        <span>Solving last 10 years of UPSC NDA question papers with OMR negative-marking simulation.</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <CheckCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                                        <span>Intensive General Ability Test (GAT) classes covering Geography, History, Polity &amp; Defence News.</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <CheckCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                                        <span>Outdoor GTO training on authentic military obstacle grounds at Alambagh campus.</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <CheckCircle className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                                        <span>One-on-one mock SSB interviews with retired Brigadier, Colonel, and Psychologist mentors.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Section 3: Comparison Table - Normal Schooling vs PFDA NDA Foundation */}
                    <div className="mb-16">
                        <SectionHeading title="Normal Schooling vs. PFDA NDA Foundation Program" alignment="left" />
                        <div className="overflow-x-auto my-8">
                            <table className="w-full text-left border-collapse border border-white/10 text-sm md:text-base">
                                <thead>
                                    <tr className="bg-[#1B2620] text-gold">
                                        <th className="p-4 border border-white/10 font-bold">Feature</th>
                                        <th className="p-4 border border-white/10 font-bold">Regular School + Tuition</th>
                                        <th className="p-4 border border-white/10 font-bold bg-gold/15">PFDA NDA Foundation (Integrated)</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    <tr className="border-b border-white/5 hover:bg-white/5">
                                        <td className="p-4 font-semibold text-white border border-white/10">Study Schedule</td>
                                        <td className="p-4 border border-white/10">Scattered 6 hrs school + 3 hrs evening coaching</td>
                                        <td className="p-4 border border-white/10 text-gold font-medium">Synchronized single-campus daily schedule</td>
                                    </tr>
                                    <tr className="border-b border-white/5 hover:bg-white/5">
                                        <td className="p-4 font-semibold text-white border border-white/10">UPSC Maths Preparation</td>
                                        <td className="p-4 border border-white/10">Traditional lengthy steps; no MCQ speed techniques</td>
                                        <td className="p-4 border border-white/10 text-gold font-medium">Step-less mental shortcuts &amp; Vedic maths tricks</td>
                                    </tr>
                                    <tr className="border-b border-white/5 hover:bg-white/5">
                                        <td className="p-4 font-semibold text-white border border-white/10">Physical &amp; GTO Obstacle Training</td>
                                        <td className="p-4 border border-white/10">Zero structured military physical conditioning</td>
                                        <td className="p-4 border border-white/10 text-gold font-medium">Daily morning PT &amp; authentic outdoor GTO grounds</td>
                                    </tr>
                                    <tr className="border-b border-white/5 hover:bg-white/5">
                                        <td className="p-4 font-semibold text-white border border-white/10">SSB Interview Mentorship</td>
                                        <td className="p-4 border border-white/10">Delayed until written results (less than 30 days)</td>
                                        <td className="p-4 border border-white/10 text-gold font-medium">Continuous 2-year personality &amp; psychology building</td>
                                    </tr>
                                    <tr className="border-b border-white/5 hover:bg-white/5">
                                        <td className="p-4 font-semibold text-white border border-white/10">Board Exam Security</td>
                                        <td className="p-4 border border-white/10">Good for boards, poor for competitive exams</td>
                                        <td className="p-4 border border-white/10 text-gold font-medium">Dual achievement: 85%+ boards + NDA 1st attempt clear</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Section 4: Daily Routine at Lucknow Alambagh Campus */}
                    <div className="mb-16">
                        <SectionHeading title="A Day in the Life of a Foundation Cadet in Lucknow" alignment="left" />
                        <div className="bg-[#1B2620]/80 border border-white/10 rounded-2xl p-6 md:p-8 space-y-4 text-gray-300">
                            <p className="text-base md:text-lg leading-relaxed">
                                Discipline is not forced at PFDA; it is cultivated through a purpose-driven military routine that models the daily life of an academy cadet:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                                <div className="bg-[#24332B] p-4 rounded-xl border border-white/5">
                                    <div className="text-gold font-bold text-sm mb-1 flex items-center gap-1.5"><Clock className="w-4 h-4" /> 05:45 – 07:00 AM</div>
                                    <div className="text-white font-semibold text-base">Physical Conditioning</div>
                                    <div className="text-gray-400 text-xs mt-1">Cross-country runs, calisthenics, stamina drills &amp; obstacle clearing.</div>
                                </div>
                                <div className="bg-[#24332B] p-4 rounded-xl border border-white/5">
                                    <div className="text-gold font-bold text-sm mb-1 flex items-center gap-1.5"><Clock className="w-4 h-4" /> 08:30 – 01:30 PM</div>
                                    <div className="text-white font-semibold text-base">Academic Schooling &amp; Theory</div>
                                    <div className="text-gray-400 text-xs mt-1">Classroom board subjects integrated with deep concept clarity.</div>
                                </div>
                                <div className="bg-[#24332B] p-4 rounded-xl border border-white/5">
                                    <div className="text-gold font-bold text-sm mb-1 flex items-center gap-1.5"><Clock className="w-4 h-4" /> 02:30 – 05:00 PM</div>
                                    <div className="text-white font-semibold text-base">NDA Competitive Sessions</div>
                                    <div className="text-gray-400 text-xs mt-1">UPSC Maths problem solving, GAT lectures &amp; English workshops.</div>
                                </div>
                                <div className="bg-[#24332B] p-4 rounded-xl border border-white/5">
                                    <div className="text-gold font-bold text-sm mb-1 flex items-center gap-1.5"><Clock className="w-4 h-4" /> 06:30 – 09:30 PM</div>
                                    <div className="text-white font-semibold text-base">Supervised Evening Study</div>
                                    <div className="text-gray-400 text-xs mt-1">Silent study halls with faculty presence for immediate doubt clearing.</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 5: Hostel, Mess & Safety Facilities in Alambagh */}
                    <div className="mb-16">
                        <SectionHeading title="Residential Hostel &amp; Student Welfare at Alambagh" alignment="left" />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                            <div className="bg-[#24332B] p-6 rounded-2xl border border-white/5">
                                <ShieldCheck className="w-8 h-8 text-gold mb-4" />
                                <h3 className="text-lg font-bold text-white mb-2">24/7 Monitored Campus</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Separate hostel blocks for boys and girls with biometric access, CCTV monitoring, and ex-servicemen residential wardens ensuring a zero-ragging environment.
                                </p>
                            </div>
                            <div className="bg-[#24332B] p-6 rounded-2xl border border-white/5">
                                <HeartHandshake className="w-8 h-8 text-gold mb-4" />
                                <h3 className="text-lg font-bold text-white mb-2">Nutritious Defence Diet</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Four wholesome, hygienic meals daily planned according to the caloric and nutritional needs of growing athletes preparing for military endurance standards.
                                </p>
                            </div>
                            <div className="bg-[#24332B] p-6 rounded-2xl border border-white/5">
                                <BookOpen className="w-8 h-8 text-gold mb-4" />
                                <h3 className="text-lg font-bold text-white mb-2">Library &amp; Medical Wing</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Air-conditioned study library stocked with defence journals, current affairs digests, high-speed Wi-Fi, and regular military doctor check-ups for eyesight and fitness.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Section 6: Cross-links to Related Guides */}
                    <div className="mb-16 bg-gradient-to-r from-gold/10 via-[#1B2620] to-gold/10 border border-gold/30 rounded-2xl p-6 md:p-8">
                        <h3 className="text-xl font-bold text-white mb-4">Related Defence Aspirant Resources:</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm font-semibold">
                            <Link href="/blog/nda-foundation-course-after-10th" className="p-3 bg-white/5 rounded-lg border border-white/5 text-gray-200 hover:border-gold hover:text-gold transition-colors">
                                → NDA Foundation After 10th Complete Guide
                            </Link>
                            <Link href="/blog/nda-medical-test-physical-fitness-guide" className="p-3 bg-white/5 rounded-lg border border-white/5 text-gray-200 hover:border-gold hover:text-gold transition-colors">
                                → NDA Medical &amp; Physical Fitness Standards
                            </Link>
                            <Link href="/blog/ssb-interview-guide" className="p-3 bg-white/5 rounded-lg border border-white/5 text-gray-200 hover:border-gold hover:text-gold transition-colors">
                                → 5-Day SSB Interview Preparation Guide
                            </Link>
                            <Link href="/courses/nda" className="p-3 bg-white/5 rounded-lg border border-white/5 text-gray-200 hover:border-gold hover:text-gold transition-colors">
                                → Regular NDA Written Coaching (12th Pass)
                            </Link>
                            <Link href="/study-material" className="p-3 bg-white/5 rounded-lg border border-white/5 text-gray-200 hover:border-gold hover:text-gold transition-colors">
                                → Download Free NDA Study Material PDF
                            </Link>
                            <Link href="/branches/alambagh" className="p-3 bg-white/5 rounded-lg border border-white/5 text-gray-200 hover:border-gold hover:text-gold transition-colors">
                                → Visit Alambagh Central Campus Lucknow
                            </Link>
                        </div>
                    </div>

                    {/* Section 7: FAQs */}
                    <div className="mb-16">
                        <SectionHeading title="Frequently Asked Questions (NDA Foundation)" alignment="left" />
                        <div className="space-y-4 my-8">
                            <div className="bg-[#24332B] p-6 rounded-xl border border-white/5">
                                <h3 className="text-lg font-bold text-white mb-2">What is the NDA Foundation Course at Pathfinder Defence Academy Lucknow?</h3>
                                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                                    The NDA Foundation Course at PFDA Lucknow is an integrated 2-year residential and day-boarding program for Class 10 passed students. It simultaneously covers formal Class 11 and 12 schooling (CBSE or UP Board) and intensive UPSC NDA written coaching, English communication, daily sports drills, and 5-day SSB interview training.
                                </p>
                            </div>
                            <div className="bg-[#24332B] p-6 rounded-xl border border-white/5">
                                <h3 className="text-lg font-bold text-white mb-2">What is the age limit to join the NDA Foundation Course after Class 10th?</h3>
                                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                                    Students should ideally be between 14.5 to 16.5 years old when joining Class 11 after Class 10 board results. This guarantees that when they appear for their first UPSC NDA exam in Class 12, they fall comfortably within the UPSC eligibility window of 16.5 to 19.5 years.
                                </p>
                            </div>
                            <div className="bg-[#24332B] p-6 rounded-xl border border-white/5">
                                <h3 className="text-lg font-bold text-white mb-2">Does the NDA Foundation program negatively impact Class 12 board exam marks?</h3>
                                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                                    No. The curriculum is synchronized so that core board subjects (Mathematics, Physics, Chemistry, English) directly feed into the NDA syllabus. Our foundation students consistently achieve 85%+ in their Class 12 board examinations while clearing the NDA written exam on their very first attempt.
                                </p>
                            </div>
                            <div className="bg-[#24332B] p-6 rounded-xl border border-white/5">
                                <h3 className="text-lg font-bold text-white mb-2">Are separate hostel facilities available for outstation students in Lucknow?</h3>
                                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                                    Yes. PFDA provides fully furnished, supervised residential hostels with separate wings for boys and girls in Alambagh, Lucknow. Hostels include hygienic dining, 24/7 security, Wi-Fi, laundry, and disciplined evening doubt-clearing sessions supervised by ex-defence staff.
                                </p>
                            </div>
                            <div className="bg-[#24332B] p-6 rounded-xl border border-white/5">
                                <h3 className="text-lg font-bold text-white mb-2">Where is the NDA Foundation campus located in Lucknow?</h3>
                                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                                    The flagship Foundation campus is located at 3rd Floor, KSM Plaza, opposite Singar Nagar Metro Station in Alambagh, Lucknow. We also operate a dedicated branch at Uma Krishna Complex, Murari Nagar, Indira Nagar, Lucknow.
                                </p>
                            </div>
                            <div className="bg-[#24332B] p-6 rounded-xl border border-white/5">
                                <h3 className="text-lg font-bold text-white mb-2">What is the admission procedure and fee structure for the Foundation course?</h3>
                                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                                    Admission is granted based on Class 10 board performance and an entrance assessment test followed by an interview. Scholarships are awarded to meritorious students. For exact fee details and batch schedules, call our admissions office at +91 75051 88009.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Section 8: Final CTA */}
                    <div className="bg-gradient-to-br from-[#24332B] to-[#1B2620] border border-gold/30 rounded-2xl p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
                        <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-4">
                            Start Your Defence Career After 10th at Lucknow&apos;s Best Academy
                        </h2>
                        <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                            Limited seats available in our upcoming Class 11 NDA Foundation batch. Secure your seat, visit our Alambagh campus opposite Singar Nagar Metro Station, or schedule a free counselling session today.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <Link href="/contact" className="bg-gold text-black font-extrabold px-8 py-4 rounded-xl hover:bg-white transition-all uppercase tracking-wider text-sm shadow-lg">
                                Apply for Foundation Batch
                            </Link>
                            <a href="tel:+917505188009" className="inline-flex items-center gap-2 border-2 border-gold text-gold font-bold px-8 py-4 rounded-xl hover:bg-gold hover:text-black transition-all uppercase tracking-wider text-sm">
                                <PhoneCall className="w-4 h-4" /> Call 075051 88009
                            </a>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}
