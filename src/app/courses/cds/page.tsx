import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, MapPin, Award, BookOpen, Users, Clock, ShieldCheck, PhoneCall, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
    title: "Best CDS Coaching in Lucknow & Alambagh | IMA, OTA & AFA Exam Prep",
    description: "Join Lucknow's top-rated CDS coaching institute in Alambagh. Expert UPSC CDS written preparation (IMA, OTA, INA, AFA) with Ex-Defence SSB mentors, GTO ground & hostel facility.",
    keywords: [
        "best CDS coaching in Lucknow",
        "CDS coaching in Alambagh Lucknow",
        "CDS coaching in Alambagh",
        "CDS coaching near me",
        "CDS OTA coaching Lucknow",
        "CDS IMA coaching Lucknow",
        "UPSC CDS exam preparation Lucknow",
        "CDS coaching with hostel in Lucknow",
        "CDS SSB interview coaching Alambagh",
        "Pathfinder Defence Academy CDS",
        "CDS coaching fees in Lucknow",
    ],
    alternates: { canonical: "https://pathfinderdefenceacademy.com/courses/cds" },
    openGraph: {
        title: "Best CDS Coaching in Lucknow & Alambagh | IMA & OTA Preparation",
        description: "Join Lucknow's premier CDS coaching in Alambagh. Comprehensive UPSC CDS written classes, GTO ground, SSB interview training, and hostel facilities.",
        url: "https://pathfinderdefenceacademy.com/courses/cds",
        type: "website",
        images: [{ url: "https://pathfinderdefenceacademy.com/images/gallery8.jpg", width: 1200, height: 630, alt: "CDS Coaching at PFDA Lucknow" }],
    },
};

export default function CDSCoursePage() {
    const courseSchema = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "UPSC CDS Coaching Program (IMA, OTA, INA, AFA)",
        "description": "Comprehensive coaching program for the UPSC Combined Defence Services examination covering English, General Knowledge, Elementary Mathematics, and SSB Interview preparation.",
        "provider": {
            "@type": "EducationalOrganization",
            "name": "Pathfinder Defence Academy",
            "url": "https://pathfinderdefenceacademy.com",
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
                "name": "Which is the best CDS coaching institute in Lucknow and Alambagh?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Pathfinder Defence Academy (PFDA), located at Singar Nagar Metro Station in Alambagh, Lucknow, is widely regarded as the best CDS coaching institute in Lucknow. PFDA provides specialized written exam preparation, daily mock tests, ex-defence officer mentoring, an in-house GTO obstacle ground, and complete hostel facilities."
                }
            },
            {
                "@type": "Question",
                "name": "Can female graduates apply for the CDS exam, and does PFDA offer separate batches?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, female graduates can apply for the Officers Training Academy (OTA) through the CDS exam. PFDA runs dedicated CDS OTA batches with specialized training in English and General Knowledge, along with secure, separate hostel facilities for female students."
                }
            },
            {
                "@type": "Question",
                "name": "What is the difference between OTA and IMA/INA/AFA in the CDS exam?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For OTA (Officers Training Academy), candidates appear for only two papers: English (100 marks) and General Knowledge (100 marks). For IMA, INA, and AFA, candidates must also clear a third paper in Elementary Mathematics (100 marks). PFDA provides modular coaching so OTA students can focus exclusively on English and GK."
                }
            },
            {
                "@type": "Question",
                "name": "What is the fee structure and batch duration for CDS coaching in Lucknow at PFDA?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "PFDA offers flexible CDS preparation batches: 3-month crash courses, 6-month target batches, and 1-year foundation batches. Fees are highly competitive and include comprehensive study material, online/offline test series, and SSB foundation classes. Contact +91-7505188009 for the current fee structure and scholarship options."
                }
            },
            {
                "@type": "Question",
                "name": "Is hostel facility available for outstation students preparing for CDS in Alambagh, Lucknow?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We offer fully furnished residential hostels with separate blocks for boys and girls in Alambagh, Lucknow. Facilities include 24/7 security, nutritious hygienic meals, high-speed Wi-Fi, and disciplined study rooms under the supervision of ex-defence wardens."
                }
            },
            {
                "@type": "Question",
                "name": "Does PFDA provide SSB Interview training along with CDS written exam preparation?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Clearing the CDS written exam is only stage one. PFDA integrates 5-day SSB interview training from day one, covering screening tests (OIR/PPDT), psychology tests (TAT, WAT, SRT), full outdoor GTO ground tasks, and personal mock interviews by retired board officers."
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
                title="Best CDS Coaching in Lucknow"
                subtitle="UPSC Combined Defence Services Exam (IMA, OTA, INA & AFA) — Alambagh Campus"
                image="/images/gallery8.jpg"
            />

            <section className="container mx-auto px-4 py-16">
                <div className="max-w-5xl mx-auto space-y-16">

                    {/* H1 & Instant Answer Section (Above the fold clarity) */}
                    <div>
                        <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/30 text-gold text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                            <MapPin className="w-3.5 h-3.5" />
                            Alambagh & Central Lucknow Centre
                        </div>
                        <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6">
                            Best CDS Coaching in Lucknow & Alambagh — UPSC IMA, OTA, INA & AFA Preparation
                        </h1>

                        <div className="bg-[#1B2620] border-l-4 border-gold p-6 md:p-8 rounded-r-2xl shadow-xl space-y-4 mb-8">
                            <p className="text-gray-200 text-lg md:text-xl font-medium leading-relaxed">
                                Looking for the top CDS coaching in Lucknow? <strong className="text-white">Pathfinder Defence Academy (PFDA)</strong>, located right opposite the <strong className="text-gold">Singar Nagar Metro Station in Alambagh, Lucknow</strong>, delivers Uttar Pradesh’s most result-oriented preparation for the UPSC Combined Defence Services (CDS) examination.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                With a proud record of <span className="text-gold font-bold">1,000+ officer selections</span>, our specialized faculty covers complete syllabus mastery across English, General Knowledge, and Elementary Mathematics. Combined with dedicated <strong className="text-white">OTA tracks for male & female graduates</strong>, daily morning physical fitness training, an outdoor GTO obstacle ground, and mentorship by retired Armed Forces officers, PFDA provides the ultimate ecosystem to turn your graduation into a commissioned rank.
                            </p>
                        </div>

                        {/* Quick Highlights Bar */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="bg-[#24332B] p-4 rounded-xl border border-white/5 text-center">
                                <Award className="w-6 h-6 text-gold mx-auto mb-2" />
                                <div className="text-2xl font-black text-white">1000+</div>
                                <div className="text-gray-400 text-xs mt-1">Armed Forces Selections</div>
                            </div>
                            <div className="bg-[#24332B] p-4 rounded-xl border border-white/5 text-center">
                                <Users className="w-6 h-6 text-gold mx-auto mb-2" />
                                <div className="text-2xl font-black text-white">Ex-Officers</div>
                                <div className="text-gray-400 text-xs mt-1">SSB Interview Mentors</div>
                            </div>
                            <div className="bg-[#24332B] p-4 rounded-xl border border-white/5 text-center">
                                <ShieldCheck className="w-6 h-6 text-gold mx-auto mb-2" />
                                <div className="text-2xl font-black text-white">IMA & OTA</div>
                                <div className="text-gray-400 text-xs mt-1">Specialized Dual Tracks</div>
                            </div>
                            <div className="bg-[#24332B] p-4 rounded-xl border border-white/5 text-center">
                                <MapPin className="w-6 h-6 text-gold mx-auto mb-2" />
                                <div className="text-2xl font-black text-white">Alambagh</div>
                                <div className="text-gray-400 text-xs mt-1">Opp. Singar Nagar Metro</div>
                            </div>
                        </div>

                        {/* Local Centre Link Bar */}
                        <div className="mt-8 bg-gradient-to-r from-gold/15 to-transparent border border-gold/30 rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div>
                                <h4 className="text-white font-bold text-base md:text-lg">Visiting our Lucknow Campus?</h4>
                                <p className="text-gray-300 text-sm">3rd Floor, KSM Plaza, Sneh Nagar Mod, Singar Nagar, Alambagh, Lucknow - 226005</p>
                            </div>
                            <div className="flex gap-3 shrink-0">
                                <Link href="/branches/alambagh">
                                    <Button className="bg-gold text-black hover:bg-gold/90 font-bold px-5 py-2.5 text-sm">
                                        Alambagh Branch Details →
                                    </Button>
                                </Link>
                                <a href="tel:+917505188009">
                                    <Button className="bg-white/10 hover:bg-white/20 text-white font-semibold px-4 py-2.5 text-sm flex items-center gap-2">
                                        <PhoneCall className="w-4 h-4 text-gold" />
                                        Call Branch
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* H2: Why PFDA Leads CDS Coaching in Lucknow */}
                    <div>
                        <SectionHeading title="Why PFDA is Lucknow's #1 Choice for CDS Coaching" alignment="left" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                            <div className="bg-[#1B2620] p-6 rounded-xl border border-white/5 hover:border-gold/30 transition-colors">
                                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold font-bold mb-4">
                                    <Award className="w-5 h-5" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Ex-Defence Officers & Subject Specialists</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Our CDS faculty consists of highly qualified teachers with 12+ years of teaching experience alongside retired Armed Forces officers (including ex-SSB Psychologists and ex-GTOs). Students receive deep conceptual understanding in General Studies, English, and Mathematics rather than superficial rote learning.
                                </p>
                            </div>

                            <div className="bg-[#1B2620] p-6 rounded-xl border border-gold/20 hover:border-gold/40 transition-colors">
                                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold font-bold mb-4">
                                    <GraduationCap className="w-5 h-5" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Dedicated OTA Track (Men & Women)</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Aspirants aiming for the Officers Training Academy (OTA) Chennai do not need to study Mathematics. We run distinct OTA batches focusing purely on high-scoring English grammar, reading comprehension, and comprehensive General Knowledge to ensure maximum cutoff clearance.
                                </p>
                            </div>

                            <div className="bg-[#1B2620] p-6 rounded-xl border border-white/5 hover:border-gold/30 transition-colors">
                                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold font-bold mb-4">
                                    <ShieldCheck className="w-5 h-5" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">In-House GTO Ground & Outdoor Tasks</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Unlike ordinary coaching institutes with only theoretical classes, PFDA features an authentic outdoor GTO obstacle ground in Lucknow. Students practice Progressive Group Tasks (PGT), Half Group Tasks (HGT), Command Tasks, and Individual Obstacles under real SSB conditions.
                                </p>
                            </div>

                            <div className="bg-[#1B2620] p-6 rounded-xl border border-white/5 hover:border-gold/30 transition-colors">
                                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold font-bold mb-4">
                                    <Clock className="w-5 h-5" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">Weekly UPSC Pattern Mock Test Series</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Every weekend, students take full-length timed mock tests matching the exact UPSC CDS negative marking pattern (-0.33 per error). Detailed question-by-question analytics highlight weak areas in time management and accuracy.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* H2: Detailed UPSC CDS Exam Pattern */}
                    <div className="bg-[#24332B] p-6 md:p-10 rounded-2xl border border-white/10 shadow-2xl">
                        <SectionHeading title="UPSC CDS Exam Pattern (IMA, INA, AFA vs. OTA)" alignment="left" />
                        <p className="text-gray-300 mt-2 mb-8 leading-relaxed">
                            The Combined Defence Services Examination is conducted twice annually by UPSC. The exam structure varies fundamentally depending on whether you are competing for a Permanent Commission (IMA, INA, AFA) or a Short Service Commission (OTA):
                        </p>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-white/20 text-gold text-sm uppercase tracking-wider">
                                        <th className="py-4 px-4">Subject</th>
                                        <th className="py-4 px-4">Applicable Academies</th>
                                        <th className="py-4 px-4">Questions</th>
                                        <th className="py-4 px-4">Marks</th>
                                        <th className="py-4 px-4">Duration</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/10 text-gray-200 text-sm">
                                    <tr>
                                        <td className="py-4 px-4 font-bold text-white">Paper 1: English</td>
                                        <td className="py-4 px-4">IMA, INA, AFA & OTA</td>
                                        <td className="py-4 px-4">120</td>
                                        <td className="py-4 px-4 text-gold font-bold">100 Marks</td>
                                        <td className="py-4 px-4">2 Hours</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 px-4 font-bold text-white">Paper 2: General Knowledge</td>
                                        <td className="py-4 px-4">IMA, INA, AFA & OTA</td>
                                        <td className="py-4 px-4">120</td>
                                        <td className="py-4 px-4 text-gold font-bold">100 Marks</td>
                                        <td className="py-4 px-4">2 Hours</td>
                                    </tr>
                                    <tr>
                                        <td className="py-4 px-4 font-bold text-white">Paper 3: Elementary Mathematics</td>
                                        <td className="py-4 px-4">IMA, INA, AFA Only <span className="text-xs text-red-400 block font-normal">(Exempt for OTA)</span></td>
                                        <td className="py-4 px-4">100</td>
                                        <td className="py-4 px-4 text-gold font-bold">100 Marks</td>
                                        <td className="py-4 px-4">2 Hours</td>
                                    </tr>
                                    <tr className="bg-white/5 font-bold">
                                        <td className="py-4 px-4 text-white">Total for IMA / INA / AFA</td>
                                        <td className="py-4 px-4" colSpan={2}>3 Papers Combined</td>
                                        <td className="py-4 px-4 text-gold">300 Marks</td>
                                        <td className="py-4 px-4">6 Hours Total</td>
                                    </tr>
                                    <tr className="bg-gold/10 font-bold">
                                        <td className="py-4 px-4 text-gold">Total for OTA (Men & Women)</td>
                                        <td className="py-4 px-4" colSpan={2}>2 Papers Only (English + GK)</td>
                                        <td className="py-4 px-4 text-gold">200 Marks</td>
                                        <td className="py-4 px-4">4 Hours Total</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-gray-400 text-xs mt-4 italic">
                            *Note: Each wrong answer attracts a negative marking of one-third (0.33) of the marks assigned to that question. Minimum sectional cutoff of 20% is required in each paper.
                        </p>
                    </div>

                    {/* H2: CDS Eligibility Criteria Standards */}
                    <div>
                        <SectionHeading title="CDS Eligibility Criteria (Age, Education & Gender)" alignment="left" />
                        <p className="text-gray-300 mt-2 mb-8">
                            Before registering for CDS coaching in Lucknow, review the precise UPSC eligibility benchmarks across each defence academy wing:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-[#1B2620] p-6 rounded-xl border border-white/5">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold text-sm">1</div>
                                    <h4 className="text-lg font-bold text-white">IMA — Indian Military Academy</h4>
                                </div>
                                <ul className="space-y-2 text-gray-300 text-sm">
                                    <li><strong className="text-white">Age Limit:</strong> 19 to 24 years</li>
                                    <li><strong className="text-white">Education:</strong> Degree from any recognized university (BA, B.Sc, B.Com, B.Tech, etc.)</li>
                                    <li><strong className="text-white">Marital Status & Gender:</strong> Unmarried male candidates only</li>
                                </ul>
                            </div>

                            <div className="bg-[#1B2620] p-6 rounded-xl border border-white/5">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold text-sm">2</div>
                                    <h4 className="text-lg font-bold text-white">INA — Indian Naval Academy</h4>
                                </div>
                                <ul className="space-y-2 text-gray-300 text-sm">
                                    <li><strong className="text-white">Age Limit:</strong> 19 to 24 years</li>
                                    <li><strong className="text-white">Education:</strong> Bachelor of Engineering (B.E. / B.Tech) from a recognized university</li>
                                    <li><strong className="text-white">Marital Status & Gender:</strong> Unmarried male candidates only</li>
                                </ul>
                            </div>

                            <div className="bg-[#1B2620] p-6 rounded-xl border border-white/5">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold text-sm">3</div>
                                    <h4 className="text-lg font-bold text-white">AFA — Air Force Academy</h4>
                                </div>
                                <ul className="space-y-2 text-gray-300 text-sm">
                                    <li><strong className="text-white">Age Limit:</strong> 20 to 24 years</li>
                                    <li><strong className="text-white">Education:</strong> Graduation with Physics and Mathematics at 10+2 level OR B.E. / B.Tech</li>
                                    <li><strong className="text-white">Marital Status & Gender:</strong> Unmarried male candidates only</li>
                                </ul>
                            </div>

                            <div className="bg-[#1B2620] p-6 rounded-xl border border-gold/30">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-black font-bold text-sm">4</div>
                                    <h4 className="text-lg font-bold text-white">OTA — Officers Training Academy (Men & Women)</h4>
                                </div>
                                <ul className="space-y-2 text-gray-300 text-sm">
                                    <li><strong className="text-white">Age Limit:</strong> 19 to 25 years</li>
                                    <li><strong className="text-white">Education:</strong> Degree from any recognized university in any discipline</li>
                                    <li><strong className="text-white">Gender:</strong> Both unmarried males and unmarried females (including eligible issueless widows)</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* H2: The 4-Stage CDS Selection Process */}
                    <div className="bg-[#1B2620] p-6 md:p-8 rounded-2xl border border-white/5">
                        <SectionHeading title="The 4-Stage CDS Selection Process" alignment="left" />
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
                            <div className="bg-[#24332B] p-5 rounded-xl border-t-2 border-gold">
                                <span className="text-gold font-mono text-xs font-bold block mb-1">STAGE 01</span>
                                <h4 className="font-bold text-white text-base mb-2">UPSC Written Exam</h4>
                                <p className="text-gray-400 text-xs leading-relaxed">
                                    Objective MCQs testing English, GK & Mathematics. PFDA provides daily chapter drills and UPSC past 10-year question solving.
                                </p>
                            </div>
                            <div className="bg-[#24332B] p-5 rounded-xl border-t-2 border-gold">
                                <span className="text-gold font-mono text-xs font-bold block mb-1">STAGE 02</span>
                                <h4 className="font-bold text-white text-base mb-2">5-Day SSB Interview</h4>
                                <p className="text-gray-400 text-xs leading-relaxed">
                                    Screening (OIR/PPDT), Psychological testing (TAT, WAT, SRT), GTO outdoor obstacles, and Personal Board Interview.
                                </p>
                            </div>
                            <div className="bg-[#24332B] p-5 rounded-xl border-t-2 border-gold">
                                <span className="text-gold font-mono text-xs font-bold block mb-1">STAGE 03</span>
                                <h4 className="font-bold text-white text-base mb-2">Special Medical Board</h4>
                                <p className="text-gray-400 text-xs leading-relaxed">
                                    Detailed medical assessment at Armed Forces Military Hospitals (eye standards, surgical, ENT, and dental health).
                                </p>
                            </div>
                            <div className="bg-[#24332B] p-5 rounded-xl border-t-2 border-gold">
                                <span className="text-gold font-mono text-xs font-bold block mb-1">STAGE 04</span>
                                <h4 className="font-bold text-white text-base mb-2">Final Merit List</h4>
                                <p className="text-gray-400 text-xs leading-relaxed">
                                    Combined scores of Written Exam + SSB Interview decide joining letters for IMA, OTA, INA, or AFA academies.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* H2: CDS Batches & Hostel Facilities in Alambagh Lucknow */}
                    <div>
                        <SectionHeading title="Classroom Batches & Hostel Facilities in Alambagh, Lucknow" alignment="left" />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                            <div className="bg-[#1B2620] p-6 rounded-xl border border-white/5 flex flex-col justify-between">
                                <div>
                                    <span className="text-xs font-bold text-gold uppercase tracking-wider block mb-1">Intensive Fast-Track</span>
                                    <h3 className="text-xl font-bold text-white mb-3">3-Month Crash Course</h3>
                                    <p className="text-gray-300 text-sm mb-4">
                                        Designed for repeaters or final-year students with basic syllabus familiarity. Intensive 6-hour daily lectures, rapid revision, and daily mock test series.
                                    </p>
                                </div>
                                <ul className="text-gray-400 text-xs space-y-2 border-t border-white/10 pt-4">
                                    <li className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-gold" /> 200+ Hours Classroom Coaching</li>
                                    <li className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-gold" /> Daily Speed Tests & Analysis</li>
                                </ul>
                            </div>

                            <div className="bg-[#1B2620] p-6 rounded-xl border border-gold/40 relative flex flex-col justify-between">
                                <div className="absolute -top-3 right-4 bg-gold text-black text-xs font-black uppercase px-2.5 py-0.5 rounded-full">
                                    Most Popular
                                </div>
                                <div>
                                    <span className="text-xs font-bold text-gold uppercase tracking-wider block mb-1">Complete Preparation</span>
                                    <h3 className="text-xl font-bold text-white mb-3">6-Month Target Batch</h3>
                                    <p className="text-gray-300 text-sm mb-4">
                                        The ideal duration for fresh graduates. Covers entire syllabus from zero level, comprehensive doubt-clearing sessions, and integrated SSB groundwork.
                                    </p>
                                </div>
                                <ul className="text-gray-400 text-xs space-y-2 border-t border-white/10 pt-4">
                                    <li className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-gold" /> 450+ Hours Structured Classes</li>
                                    <li className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-gold" /> Weekly Mock Tests & SSB Basics</li>
                                </ul>
                            </div>

                            <div className="bg-[#1B2620] p-6 rounded-xl border border-white/5 flex flex-col justify-between">
                                <div>
                                    <span className="text-xs font-bold text-gold uppercase tracking-wider block mb-1">Graduation Integrated</span>
                                    <h3 className="text-xl font-bold text-white mb-3">1-Year Foundation Batch</h3>
                                    <p className="text-gray-300 text-sm mb-4">
                                        Perfect for college students preparing concurrently with their final degree years. Flexible weekend and evening timings with continuous testing.
                                    </p>
                                </div>
                                <ul className="text-gray-400 text-xs space-y-2 border-t border-white/10 pt-4">
                                    <li className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-gold" /> Multi-Attempt Support</li>
                                    <li className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5 text-gold" /> Full GTO Ground & Physical Drills</li>
                                </ul>
                            </div>
                        </div>

                        {/* Hostel details */}
                        <div className="mt-8 bg-[#24332B] p-6 rounded-xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="space-y-2">
                                <h4 className="text-lg font-bold text-white">Hostel & Mess Facilities in Alambagh, Lucknow</h4>
                                <p className="text-gray-300 text-sm max-w-2xl">
                                    We provide clean, air-cooled/AC hostel rooms with separate dedicated buildings for boys and girls within 5 minutes of our Singar Nagar campus. Includes 4 hygienic meals daily, Wi-Fi, 24/7 power backup, and round-the-clock security.
                                </p>
                            </div>
                            <Link href="/contact" className="shrink-0">
                                <Button className="bg-white/10 hover:bg-white/20 text-white font-bold border border-white/20 px-6 py-3">
                                    Inquire for Hostel
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* H2: FAQs Section */}
                    <div>
                        <SectionHeading title="Frequently Asked Questions about CDS Coaching in Lucknow" alignment="left" />
                        <div className="space-y-4 mt-8">
                            {[
                                {
                                    q: "Which is the best CDS coaching institute in Lucknow and Alambagh?",
                                    a: "Pathfinder Defence Academy (PFDA), located at Singar Nagar Metro Station in Alambagh, Lucknow, is widely regarded as the best CDS coaching institute in Lucknow. PFDA provides specialized written exam preparation, daily mock tests, ex-defence officer mentoring, an in-house GTO obstacle ground, and complete hostel facilities."
                                },
                                {
                                    q: "Can female graduates apply for the CDS exam, and does PFDA offer separate batches?",
                                    a: "Yes, female graduates can apply for the Officers Training Academy (OTA) through the CDS exam. PFDA runs dedicated CDS OTA batches with specialized training in English and General Knowledge, along with secure, separate hostel facilities for female students in Alambagh, Lucknow."
                                },
                                {
                                    q: "What is the difference between OTA and IMA/INA/AFA in the CDS exam?",
                                    a: "For OTA (Officers Training Academy), candidates appear for only two papers: English (100 marks) and General Knowledge (100 marks). For IMA, INA, and AFA, candidates must also clear a third paper in Elementary Mathematics (100 marks). PFDA provides modular coaching so OTA students can focus exclusively on English and GK."
                                },
                                {
                                    q: "What is the fee structure and batch duration for CDS coaching in Lucknow at PFDA?",
                                    a: "PFDA offers flexible CDS preparation batches: 3-month crash courses, 6-month target batches, and 1-year foundation batches. Fees are highly competitive and include comprehensive study material, online/offline test series, and SSB foundation classes. Contact +91-7505188009 for the current fee structure and scholarship options."
                                },
                                {
                                    q: "Is hostel facility available for outstation students preparing for CDS in Alambagh, Lucknow?",
                                    a: "Yes. We offer fully furnished residential hostels with separate blocks for boys and girls in Alambagh, Lucknow. Facilities include 24/7 security, nutritious hygienic meals, high-speed Wi-Fi, and disciplined study rooms under the supervision of ex-defence wardens."
                                },
                                {
                                    q: "Does PFDA provide SSB Interview training along with CDS written exam preparation?",
                                    a: "Yes. Clearing the CDS written exam is only stage one. PFDA integrates 5-day SSB interview training from day one, covering screening tests (OIR/PPDT), psychology tests (TAT, WAT, SRT), full outdoor GTO ground tasks, and personal mock interviews by retired board officers."
                                }
                            ].map((faq, index) => (
                                <div key={index} className="bg-[#1B2620] p-6 rounded-xl border border-white/5">
                                    <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
                                    <p className="text-gray-300 text-sm leading-relaxed">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Closing High-Converting CTA */}
                    <div className="bg-gradient-to-r from-gold/20 via-[#1B2620] to-[#24332B] p-8 md:p-12 rounded-2xl border border-gold/30 text-center md:text-left md:flex justify-between items-center shadow-2xl">
                        <div className="mb-6 md:mb-0 md:mr-8 max-w-2xl">
                            <span className="text-gold font-bold text-xs uppercase tracking-widest block mb-2">New Batches Starting Every Monday</span>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
                                Start Your CDS Officer Journey in Alambagh, Lucknow
                            </h2>
                            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                                Book a free demo class today at our Alambagh centre. Meet our ex-defence mentors, evaluate our study material, and take the first confident step toward wearing stars on your shoulders.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                            <Link href="/contact">
                                <Button className="w-full sm:w-auto bg-gold hover:bg-gold/90 text-black font-extrabold px-8 py-4 shadow-lg text-base">
                                    Book Free Demo Class
                                </Button>
                            </Link>
                            <a href="tel:+917505188009">
                                <Button className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-4 border border-white/20 text-base flex items-center justify-center gap-2">
                                    <PhoneCall className="w-4 h-4 text-gold" />
                                    075051 88009
                                </Button>
                            </a>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}

