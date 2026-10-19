import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import { CheckCircle, Award, Users, BookOpen, Shield, Star, MapPin, PhoneCall } from "lucide-react";
import FacultyCard from "@/components/FacultyCard";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About Pathfinder Defence Academy | Best Defence Academy in Lucknow",
    description: "Know about Pathfinder Defence Academy (PFDA) — the premier defence coaching institute in Lucknow. Founded by Atul Omar Sir & Anand Krishna Chauhan Sir with retired Armed Forces board officers. 15+ years, 1000+ selections.",
    keywords: [
        "best defence academy in Lucknow",
        "top defence coaching institute in Uttar Pradesh",
        "Pathfinder Defence Academy founder Atul Omar",
        "defence academy with NDA and SSB preparation",
        "NDA coaching with physical training Lucknow",
        "defence coaching with hostel facility Lucknow",
        "Pathfinder Defence Academy about"
    ],
    alternates: { canonical: "https://pathfinderdefenceacademy.com/about" },
};

const foundersAndLeadership = [
    {
        name: "Mr. Atul Omar Sir",
        title: "Founder & Academic Director (Mathematics)",
        credentials: "M.Tech (Kanpur)",
        experience: "14+ Years of Specialized Defence Mentoring",
        achievement: "500+ Selections in NDA & CDS examinations",
        description: "Widely recognized across Uttar Pradesh for his innovative calculation shortcuts and conceptual clarity in Higher Mathematics. His exam-tested pedagogy simplifies calculus, algebra, and trigonometry for NDA aspirants, drastically improving speed and accuracy under UPSC time constraints.",
        image: "/images/Atul.jpeg",
    },
    {
        name: "Mr. Anand Krishna Chauhan Sir",
        title: "Co-Founder & Director of General Studies",
        credentials: "M.A. (Ancient History)",
        experience: "12+ Years of UPSC General Studies Guidance",
        achievement: "Structured GS Curriculum with 85%+ hit-ratio in UPSC questions",
        description: "A master educator in General Studies, Modern & Ancient Indian History, and Geopolitics. His structured chronological approach helps defence cadets retain extensive General Knowledge and Current Affairs effortlessly for NDA, CDS, and CAPF written examinations.",
        image: "/images/Anand.jpeg",
    },
    {
        name: "Mr. Abhishek Awasthi Sir",
        title: "Branch Head & H.O.D. English",
        credentials: "Post Graduate in English Literature",
        experience: "15+ Years of Defence English Mastery",
        achievement: "Pioneered English communication modules for Hindi-medium aspirants",
        description: "Specializes in UPSC English grammar, vocabulary mnemonics, précis writing, and SSB lecturette communication. He has empowered thousands of rural and semi-urban cadets to achieve top cutoffs in NDA, CDS, and AFCAT English papers.",
        image: "/images/Abhishek.jpeg",
    }
];

const exDefenceBoard = [
    {
        name: "Maj. Gen. S.K. Singh",
        role: "Ex. Senior Psychologist",
        credentials: "Ex. Commandant, Kapurthala SSB",
        specialty: "Psychological Assessment (TAT, WAT, SRT, SD) & Officer Cadre Mentoring",
        image: "/images/sksingh.jpeg",
    },
    {
        name: "Col. Praveen Kumar",
        role: "Ex. Interviewing Officer (I.O.)",
        credentials: "Ex. Senior Instructor at NDA (Khadakwasla) & IMA (Dehradun)",
        specialty: "Personal Interview Simulation, Comprehensive PIQ Dossier Analysis & Leadership Development",
        image: "/images/praveensrivastava.jpeg",
    },
    {
        name: "Gp. Capt. A.K. Srivastava",
        role: "Ex. Senior Psychologist",
        credentials: "Varanasi 4 AFSB & Mysore 2 AFSB",
        specialty: "Air Force Selection Board (AFSB) Stage 1 Screening & In-Depth Psychological Profiling",
        image: "/images/aksrivastava.jpeg",
    },
    {
        name: "Asst. Comdt. Sarvesh Tripathi",
        role: "Ex. Assistant Commandant",
        credentials: "Central Reserve Police Force (CRPF)",
        specialty: "UPSC CAPF AC Exam Strategy, Field Internal Security & PET Physical Training",
        image: "/images/serveshtripathi.jpeg",
    },
    {
        name: "Col. Ashok Pathak",
        role: "Ex. Group Testing Officer (GTO)",
        credentials: "Allahabad & Bhopal SSB Boards",
        specialty: "Outdoor GTO Obstacle Ground Training (PGT, HGT, Command Task & Snake Race)",
        image: "/images/ashokpathak.jpeg",
    },
    {
        name: "Gp. Capt. L.K. Pandey",
        role: "Ex. Psychologist & Board Administrator",
        credentials: "Deputy President AFSB / SSB",
        specialty: "Officer Like Qualities (OLQ) Evaluation, Conference Stage Strategies & CPSS Guidance",
        image: "/images/lkpandey.jpeg",
    }
];

const facultiesList = [
    {
        name: "Amrish Sir",
        role: "Chemistry Faculty",
        experience: "10+ Years Experience",
        qualification: "Ph.D From IIT BHU",
        imageUrl: "/images/Amrish%20Sir.jpeg"
    },
    {
        name: "Sonu Sir",
        role: "Physics Faculty",
        experience: "13+ Years Experience",
        qualification: "B.Tech From AKTU",
        imageUrl: "/images/Sonu%20Sir.jpeg"
    },
    {
        name: "Vivek Sir",
        role: "Mathematics Faculty",
        experience: "6+ Years Experience",
        qualification: "M.Tech From IIT Kanpur",
        imageUrl: "/images/Vivek%20Sir.jpeg"
    },
    {
        name: "Vipin Sir",
        role: "G.S Faculty",
        experience: "9+ Years Experience",
        qualification: "Post Graduate in Geography",
        imageUrl: "/images/Vipin%20Sir.jpeg"
    },
    {
        name: "Sandeep Sharma Sir",
        role: "Maths & Reasoning Faculty",
        experience: "12 Years Experience",
        qualification: "MBA",
        imageUrl: "/images/Sandeep%20Sir.jpeg"
    },
    {
        name: "Dr. Imran Khan Sir",
        role: "Science Faculty",
        experience: "15+ Years Experience",
        qualification: "BHMS",
        imageUrl: "/images/Imran%20Sir.jpeg"
    },
    {
        name: "Miss Divya Thakur Ma'am",
        role: "Centre Manager & GK Faculty",
        experience: "5+ Years Experience",
        qualification: "M.Sc From University Of Lucknow",
        imageUrl: "/images/Divya%20Maam.jpeg"
    },
    {
        name: "Mr. Rohit Gupta Sir",
        role: "Maths Faculty",
        experience: "10+ Years Experience",
        qualification: "M.Sc From Mathematics",
        imageUrl: "/images/Rohit.jpeg"
    },
    {
        name: "Awanendra Pratap Singh Sir",
        role: "Maths Faculty",
        experience: "5 Years Experience",
        qualification: "M.Sc from Mathematics",
        imageUrl: "/images/Awanendra.jpeg"
    },
    {
        name: "Vivek Pandey Sir",
        role: "English Faculty",
        experience: "15+ Years Experience",
        qualification: "M.A. In English",
        imageUrl: "/images/Vivek.jpeg"
    },
    {
        name: "Girish Shukla Sir",
        role: "Faculty of Science",
        experience: "14+ Years Experience",
        qualification: "M.Sc From Zoology",
        imageUrl: "/images/Girish.jpeg"
    }
];

export default function AboutPage() {
    const aboutEntitySchema = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "Pathfinder Defence Academy",
        "alternateName": "PFDA Lucknow",
        "url": "https://pathfinderdefenceacademy.com",
        "logo": "https://pathfinderdefenceacademy.com/images/logo.png",
        "foundingDate": "2010",
        "description": "Pathfinder Defence Academy is Lucknow's premier defence coaching institute, founded by Atul Omar Sir and Anand Krishna Chauhan Sir. Mentored by retired Armed Forces officers including Maj. Gen. S.K. Singh and Col. Praveen Kumar, PFDA offers written preparation, GTO obstacle ground training, and SSB interview coaching with 1000+ officer selections.",
        "founder": [
            {
                "@type": "Person",
                "name": "Atul Omar",
                "jobTitle": "Founder & Academic Director",
                "alumniOf": "Kanpur",
                "description": "M.Tech Kanpur with 14+ years experience in Higher Mathematics and 500+ successful defence exam selections."
            },
            {
                "@type": "Person",
                "name": "Anand Krishna Chauhan",
                "jobTitle": "Co-Founder & Director of General Studies",
                "alumniOf": "University of Lucknow",
                "description": "M.A. Ancient History with 12+ years experience in UPSC General Studies."
            }
        ],
        "employee": [
            {
                "@type": "Person",
                "name": "Maj. Gen. S.K. Singh",
                "jobTitle": "Ex. Senior Psychologist & Mentor",
                "description": "Ex. Commandant, Kapurthala SSB with decades of experience in Armed Forces selection boards."
            },
            {
                "@type": "Person",
                "name": "Col. Praveen Kumar",
                "jobTitle": "Ex. Interviewing Officer & Senior Mentor",
                "description": "Ex. Senior Instructor at National Defence Academy (NDA) and Indian Military Academy (IMA)."
            },
            {
                "@type": "Person",
                "name": "Gp. Capt. A.K. Srivastava",
                "jobTitle": "Ex. Senior Psychologist",
                "description": "Ex-Psychologist at Varanasi 4 AFSB and Mysore 2 AFSB."
            }
        ]
    };

    return (
        <main className="bg-primary min-h-screen pb-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutEntitySchema) }}
            />

            <PageHeader
                title="About Us"
                subtitle="Legacy of Excellence — Pathfinder Defence Academy"
                image="/images/pexels-theamritdev-34954633.webp"
            />

            {/* Who We Are Section */}
            <section className="container mx-auto px-4 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/30 text-gold text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                            <MapPin className="w-3.5 h-3.5" />
                            Alambagh &amp; Indira Nagar, Lucknow
                        </div>
                        <SectionHeading title="Who We Are" alignment="left" />
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            <strong className="text-white">Pathfinder Defence Academy (PFDA)</strong> is widely acknowledged as the premier defence training institution in Lucknow and Uttar Pradesh. Established with a single-minded mission to train future officers for the Indian Armed Forces (Army, Navy, Air Force) and Paramilitary services, PFDA has produced <span className="text-gold font-bold">1,000+ commissioned officers and defence personnel</span> through UPSC NDA, CDS, AFCAT, CAPF AC, and military school examinations.
                        </p>
                        <p className="text-gray-300 text-base leading-relaxed mb-8">
                            Founded by visionary educators <strong className="text-white">Mr. Atul Omar Sir</strong> and <strong className="text-white">Mr. Anand Krishna Chauhan Sir</strong>, PFDA combines rigorous academic discipline with physical readiness and officer personality development. Supported by an esteemed advisory board of retired Armed Forces Generals, Colonels, and Group Captains, we operate two world-class training centres in Lucknow: our flagship residential campus opposite <strong className="text-gold">Singar Nagar Metro Station in Alambagh</strong> and our branch campus in <strong className="text-white">Indira Nagar</strong>.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center gap-3 bg-[#1B2620] p-3 rounded-lg border border-white/5">
                                <CheckCircle className="text-gold w-5 h-5 shrink-0" />
                                <span className="text-white font-medium text-sm">Ex-Defence SSB Mentors</span>
                            </div>
                            <div className="flex items-center gap-3 bg-[#1B2620] p-3 rounded-lg border border-white/5">
                                <CheckCircle className="text-gold w-5 h-5 shrink-0" />
                                <span className="text-white font-medium text-sm">1000+ Selections</span>
                            </div>
                            <div className="flex items-center gap-3 bg-[#1B2620] p-3 rounded-lg border border-white/5">
                                <CheckCircle className="text-gold w-5 h-5 shrink-0" />
                                <span className="text-white font-medium text-sm">Outdoor GTO Ground</span>
                            </div>
                            <div className="flex items-center gap-3 bg-[#1B2620] p-3 rounded-lg border border-white/5">
                                <CheckCircle className="text-gold w-5 h-5 shrink-0" />
                                <span className="text-white font-medium text-sm">Residential Hostels</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-gold/10 transform translate-x-4 translate-y-4 rounded-2xl"></div>
                        <img
                            src="/images/Pathfinderimg.JPG"
                            alt="Pathfinder Defence Academy campus in Alambagh Lucknow — best defence coaching institute"
                            className="w-full rounded-2xl shadow-2xl relative z-10 transition-all duration-500"
                        />
                    </div>
                </div>
            </section>

            {/* Founders & Leadership Section (AEO & GEO Trust Anchor) */}
            <section className="py-20 bg-[#1B2620] border-t border-white/5">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <SectionHeading title="Founders & Academic Leadership" alignment="center" />
                        <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg mt-3">
                            The visionary educators shaping India’s next generation of military officers through proven pedagogy, smart calculations, and unwavering integrity.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {foundersAndLeadership.map((leader, index) => (
                            <div
                                key={index}
                                className="bg-[#24332B] border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center shadow-xl hover:border-gold/40 transition-all"
                            >
                                <div className="w-36 h-36 md:w-44 md:h-44 relative rounded-2xl overflow-hidden shrink-0 border-2 border-gold/40 shadow-lg">
                                    <Image
                                        src={leader.image}
                                        alt={`${leader.name} at Pathfinder Defence Academy Lucknow`}
                                        fill
                                        className="object-cover object-top"
                                    />
                                </div>
                                <div className="space-y-3 flex-1 text-center md:text-left">
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{leader.name}</h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2 justify-center md:justify-start text-xs font-semibold">
                                        <span className="bg-black/40 border border-white/10 text-gray-200 px-3 py-1 rounded-full">
                                            🎓 {leader.credentials}
                                        </span>
                                        <span className="bg-black/40 border border-white/10 text-gray-200 px-3 py-1 rounded-full">
                                            ⏳ {leader.experience}
                                        </span>
                                        <span className="bg-gold/15 border border-gold/30 text-gold px-3 py-1 rounded-full">
                                            🎖️ {leader.achievement}
                                        </span>
                                    </div>
                                    <p className="text-gray-300 text-sm md:text-base leading-relaxed pt-1">
                                        {leader.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ex-Defence Officers & SSB Advisory Board */}
            <section className="py-20 bg-[#24332B] border-t border-white/5">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/30 text-gold text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                            <Shield className="w-3.5 h-3.5" />
                            Highest-Calibre Military Mentorship
                        </div>
                        <SectionHeading title="Ex-Defence Advisory Board & SSB Mentors" alignment="center" />
                        <p className="text-gray-400 max-w-3xl mx-auto text-base md:text-lg mt-3">
                            Direct guidance from retired Armed Forces officers who have served as SSB Presidents, Interviewing Officers, GTOs, and Senior Psychologists across Kapurthala, Allahabad, Bhopal, Varanasi, and Mysore boards.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {exDefenceBoard.map((officer, index) => (
                            <div
                                key={index}
                                className="bg-[#1B2620] border border-white/10 rounded-2xl p-6 shadow-xl hover:border-gold/50 transition-all flex flex-col justify-between"
                            >
                                <div className="space-y-4">
                                    <div className="w-28 h-28 relative rounded-full overflow-hidden mx-auto border-2 border-gold/40 shadow-lg">
                                        <Image
                                            src={officer.image}
                                            alt={`${officer.name} — ${officer.role} at Pathfinder Defence Academy`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="text-center">
                                        <h4 className="text-xl font-bold text-white">{officer.name}</h4>
                                        <p className="text-gold text-xs font-semibold mt-0.5">{officer.role}</p>
                                        <p className="text-gray-400 text-xs mt-1 font-medium">{officer.credentials}</p>
                                    </div>
                                    <p className="text-gray-300 text-xs leading-relaxed border-t border-white/5 pt-3">
                                        <strong className="text-white">Specialty:</strong> {officer.specialty}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Subject Matter Faculties Section */}
            <section className="py-20 bg-[#1B2620] border-t border-white/5">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <SectionHeading title="Our Subject Matter Faculties" alignment="center" />
                        <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg mt-4">
                            Our classroom instructors combine academic rigor with defence exam test-taking strategies to build conceptual mastery.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {facultiesList.map((faculty, index) => (
                            <FacultyCard key={index} {...faculty} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-[#24332B] border-y border-white/5">
                <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div className="flex flex-col items-center">
                        <Award className="text-gold w-10 h-10 mb-4" />
                        <h3 className="text-4xl font-bold text-white mb-2">15+</h3>
                        <p className="text-gray-400">Years of Legacy</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Users className="text-gold w-10 h-10 mb-4" />
                        <h3 className="text-4xl font-bold text-white mb-2">5000+</h3>
                        <p className="text-gray-400">Students Trained</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Award className="text-gold w-10 h-10 mb-4" />
                        <h3 className="text-4xl font-bold text-white mb-2">1000+</h3>
                        <p className="text-gray-400">Armed Forces Selections</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <BookOpen className="text-gold w-10 h-10 mb-4" />
                        <h3 className="text-4xl font-bold text-white mb-2">2</h3>
                        <p className="text-gray-400">Campuses in Lucknow</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
