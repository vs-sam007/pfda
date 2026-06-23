import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import { CheckCircle, Award, Users, BookOpen } from "lucide-react";
import FacultyCard from "@/components/FacultyCard";

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
        name: "Sandeep Sharma",
        role: "Maths & Reasoning Faculty",
        experience: "12 Years Experience",
        qualification: "MBA",
        imageUrl: "/images/Sandeep%20Sir.jpeg"
    },
    {
        name: "Dr. Imran Khan",
        role: "Science Faculty",
        experience: "15+ Years Experience",
        qualification: "BHMS",
        imageUrl: "/images/Imran%20Sir.jpeg"
    },
    {
        name: "Miss Divya Thakur",
        role: "Centre Manager",
        experience: "5+ Years Experience",
        qualification: "M.Sc From University Of Lucknow, G.K Faculty",
        imageUrl: "/images/Divya%20Maam.jpeg"
    },
    {
        name: "Mr. Rohit Gupta",
        role: "Maths Faculty",
        experience: "10+ Years Experience",
        qualification: "M.Sc From Mathematics",
        imageUrl: "/images/Rohit.jpeg"
    },
    {
        name: "Awanendra Pratap Singh",
        role: "Maths Faculty",
        experience: "5 Years Experience",
        qualification: "M.Sc from Mathematics",
        imageUrl: "/images/Awanendra.jpeg"
    },
    {
        name: "Vivek Pandey",
        role: "English Faculty",
        experience: "15+ Years Experience",
        qualification: "M.A. In English",
        imageUrl: "/images/Vivek.jpeg"
    },
    {
        name: "Girish Shukla",
        role: "Faculty of Science",
        experience: "14+ Years Experience",
        qualification: "M.Sc From Zoology",
        imageUrl: "/images/Girish.jpeg"
    }
];

export default function AboutPage() {
    return (
        <main className="bg-primary min-h-screen pb-20">
            <PageHeader
                title="About Us"
                subtitle="Legacy of Excellence"
                image="/images/gallery1.jpg"
            />

            <section className="container mx-auto px-4 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <SectionHeading title="Who We Are" alignment="left" />
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            Path Finder Defence Academy (PFDA) is Lucknow's premier institute dedicated to training aspirants for the Indian Armed Forces. Established with a vision to serve the nation by grooming young minds, we have consistently produced top rankers in NDA, CDS, AFCAT, and other defence examinations.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed mb-8">
                            Under the guidance of retired defence officers and expert faculty, we provide a holistic environment that nurtures not just academic excellence but also physical fitness and character development – the core "Officer Like Qualities" (OLQs).
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="flex items-center gap-3">
                                <CheckCircle className="text-gold" />
                                <span className="text-white font-medium">Ex-Defence Mentors</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle className="text-gold" />
                                <span className="text-white font-medium">High Selection Rate</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle className="text-gold" />
                                <span className="text-white font-medium">SSB Ground Facility</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle className="text-gold" />
                                <span className="text-white font-medium">Hostel Facility</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-gold/10 transform translate-x-4 translate-y-4 rounded-2xl"></div>
                        <img
                            src="/images/Pathfinderimg.JPG"
                            alt="Director"
                            className="w-full rounded-2xl shadow-2xl relative z-10 md:grayscale md:hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                </div>
            </section>

            {/* Faculties Section */}
            <section className="py-20 bg-[#1B2620] border-t border-white/5">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <SectionHeading title="Our Expert Faculties" alignment="center" />
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg mt-4">
                            Learn from the best. Our faculty comprises ex-defence personnel and subject matter experts with years of experience.
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
                        <p className="text-gray-400">Selections</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <BookOpen className="text-gold w-10 h-10 mb-4" />
                        <h3 className="text-4xl font-bold text-white mb-2">2</h3>
                        <p className="text-gray-400">Centers in Lucknow</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
