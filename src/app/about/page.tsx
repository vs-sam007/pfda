import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import { CheckCircle, Award, Users, BookOpen } from "lucide-react";

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
                            className="w-full rounded-2xl shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-[#10172a] border-y border-white/5">
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
