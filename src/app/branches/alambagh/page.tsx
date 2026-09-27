import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import { MapPin, Phone, Mail, Navigation, CheckCircle2, Award, Users, BookOpen } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "NDA Coaching in Alambagh Lucknow | Path Finder Defence Academy",
    description: "Visit Path Finder Defence Academy (PFDA) in Alambagh, Lucknow. Best coaching for NDA, CDS, AFCAT & SSB near Singar Nagar Metro Station. Hostel & ground facility.",
    keywords: ["NDA coaching in Alambagh", "defence academy Alambagh Lucknow", "NDA coaching near Singar Nagar Metro", "best NDA institute Alambagh", "PFDA Alambagh branch"],
    alternates: { canonical: "https://pathfinderdefenceacademy.com/branches/alambagh" },
    openGraph: {
        title: "NDA Coaching in Alambagh Lucknow | Path Finder Defence Academy",
        description: "Best coaching for NDA, CDS, AFCAT & SSB near Singar Nagar Metro Station, Alambagh, Lucknow. Hostel & GTO ground facility.",
        url: "https://pathfinderdefenceacademy.com/branches/alambagh",
        type: "website",
        images: [{ url: "https://pathfinderdefenceacademy.com/images/classroom-2.jpg", width: 1200, height: 630, alt: "PFDA Alambagh Branch" }]
    }
};

const alambaghSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Path Finder Defence Academy - Alambagh Branch",
    "url": "https://pathfinderdefenceacademy.com/branches/alambagh",
    "logo": "https://pathfinderdefenceacademy.com/images/logo.png",
    "description": "Leading defence coaching academy in Alambagh, Lucknow for NDA, CDS, AFCAT, and SSB interview preparation.",
    "telephone": "+91-7505188009",
    "email": "info@pathfinderdefenceacademy.co.in",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Metro Station, 3rd Floor, KSM Plaza, 826-Sneh Nagar Mod, Opposite to Hero Showroom, Singar nagar",
        "addressLocality": "Alambagh",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "226005",
        "addressCountry": "IN"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": "26.8188",
        "longitude": "80.9087"
    },
    "hasMap": "https://maps.app.goo.gl/EBqtfWVp8Akaeeki7"
};

export default function AlambaghBranchPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(alambaghSchema) }}
            />
            <main className="bg-primary min-h-screen pb-20">
                <PageHeader
                    title="Alambagh Branch"
                    subtitle="Lucknow Centre"
                    image="/images/classroom-2.jpg"
                />

                <section className="container mx-auto px-4 py-16 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                        
                        {/* Left 2 Cols: Branch Details & Facilities */}
                        <div className="lg:col-span-2 space-y-8">
                            <div className="bg-[#1B2620]/60 border border-gold/20 rounded-2xl p-6 md:p-8 shadow-xl">
                                <span className="text-gold font-bold uppercase tracking-widest text-xs mb-2 block">Central Lucknow Campus</span>
                                <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
                                    Path Finder Defence Academy, Alambagh
                                </h2>
                                <p className="text-gray-300 leading-relaxed mb-6">
                                    Conveniently located right opposite the Singar Nagar Metro Station in Alambagh, our flagship campus offers world-class infrastructure for defence aspirants across Uttar Pradesh. From high-tech smart classrooms and comprehensive library facilities to ex-defence faculty guidance, our Alambagh centre is designed to provide a distraction-free officer training environment.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                                        <span className="text-gray-200 text-sm">Smart Air-Conditioned Classrooms</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                                        <span className="text-gray-200 text-sm">Full GTO Obstacle Training Ground</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                                        <span className="text-gray-200 text-sm">On-Campus Hostel &amp; Nutritious Mess</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                                        <span className="text-gray-200 text-sm">Daily Physical &amp; Medical Training</span>
                                    </div>
                                </div>
                            </div>

                            {/* Courses Offered */}
                            <div className="bg-[#1B2620]/60 border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                    <BookOpen className="text-gold w-5 h-5" /> Courses Available at Alambagh
                                </h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm font-semibold">
                                    <Link href="/courses/nda" className="p-3 bg-white/5 rounded-lg border border-white/5 text-gray-200 hover:border-gold hover:text-gold transition-colors text-center">
                                        NDA Written Exam
                                    </Link>
                                    <Link href="/courses/nda-foundation-course-lucknow" className="p-3 bg-white/5 rounded-lg border border-white/5 text-gray-200 hover:border-gold hover:text-gold transition-colors text-center">
                                        NDA Foundation (11/12)
                                    </Link>
                                    <Link href="/courses/cds" className="p-3 bg-white/5 rounded-lg border border-white/5 text-gray-200 hover:border-gold hover:text-gold transition-colors text-center">
                                        CDS Examination
                                    </Link>
                                    <Link href="/courses/afcat" className="p-3 bg-white/5 rounded-lg border border-white/5 text-gray-200 hover:border-gold hover:text-gold transition-colors text-center">
                                        AFCAT Coaching
                                    </Link>
                                    <Link href="/courses/ssb-interview-coaching-lucknow" className="p-3 bg-white/5 rounded-lg border border-white/5 text-gray-200 hover:border-gold hover:text-gold transition-colors text-center">
                                        SSB Interview (5-Day)
                                    </Link>
                                    <Link href="/courses/sainik-school-coaching-lucknow" className="p-3 bg-white/5 rounded-lg border border-white/5 text-gray-200 hover:border-gold hover:text-gold transition-colors text-center">
                                        Sainik / RIMC
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Contact Card & Quick Actions */}
                        <div className="bg-[#24332B] border border-gold/30 rounded-2xl p-6 md:p-8 shadow-2xl space-y-6">
                            <h3 className="text-xl font-bold text-white border-b border-white/10 pb-4">
                                Branch Contact Details
                            </h3>

                            <div className="space-y-4 text-sm text-gray-300">
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-gold shrink-0 mt-1" />
                                    <div>
                                        <p className="font-semibold text-white mb-1">Campus Address</p>
                                        <p className="leading-relaxed">
                                            Metro Station, 3rd Floor, KSM Plaza, 826-Sneh Nagar Mod, Opposite to Hero Showroom, Singar nagar, Alambagh, Lucknow - 226005
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Phone className="w-5 h-5 text-gold shrink-0 mt-1" />
                                    <div>
                                        <p className="font-semibold text-white mb-1">Helpline Phone</p>
                                        <a href="tel:+917505188009" className="text-gold font-bold hover:underline block text-base">
                                            +91 75051 88009
                                        </a>
                                        <a href="tel:+918115011771" className="text-gray-300 hover:text-gold transition-colors block">
                                            +91 81150 11771
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Mail className="w-5 h-5 text-gold shrink-0 mt-1" />
                                    <div>
                                        <p className="font-semibold text-white mb-1">Email Inquiry</p>
                                        <a href="mailto:info@pathfinderdefenceacademy.co.in" className="hover:text-gold transition-colors break-all">
                                            info@pathfinderdefenceacademy.co.in
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="space-y-3 pt-4 border-t border-white/10">
                                <a
                                    href="https://maps.app.goo.gl/EBqtfWVp8Akaeeki7"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-4 rounded-xl border border-white/20 transition-all text-sm"
                                >
                                    <Navigation className="w-4 h-4 text-gold" /> Navigate on Google Maps
                                </a>

                                <a
                                    href="tel:+917505188009"
                                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-gold to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-extrabold py-3.5 px-4 rounded-xl shadow-lg shadow-gold/20 transition-all text-sm uppercase tracking-wider"
                                >
                                    <Phone className="w-4 h-4" /> Call Alambagh Branch
                                </a>

                                <Link
                                    href="/contact"
                                    className="w-full block text-center bg-transparent border border-gold/40 hover:border-gold text-gold font-semibold py-2.5 px-4 rounded-xl transition-all text-xs uppercase tracking-wider"
                                >
                                    Book Free Demo Class
                                </Link>
                            </div>
                        </div>

                    </div>
                </section>
            </main>
        </>
    );
}
