import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import { MapPin, Phone, Mail, Navigation, CheckCircle2, BookOpen } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "NDA Coaching in Indira Nagar Lucknow | PFDA",
    description: "Join Path Finder Defence Academy in Indira Nagar, Lucknow. Premier NDA, CDS, AFCAT & SSB coaching institute at Uma Krishna Complex, Murari Nagar. Book free demo class.",
    keywords: ["NDA coaching in Indira Nagar", "defence coaching Indira Nagar Lucknow", "NDA coaching near Munshipulya", "best defence academy Indira Nagar", "PFDA Indira Nagar branch"],
    alternates: { canonical: "https://pathfinderdefenceacademy.com/branches/indiranagar" },
    openGraph: {
        title: "NDA Coaching in Indira Nagar Lucknow | Path Finder Defence Academy",
        description: "Premier NDA, CDS, AFCAT & SSB coaching institute at Uma Krishna Complex, Murari Nagar, Indira Nagar, Lucknow.",
        url: "https://pathfinderdefenceacademy.com/branches/indiranagar",
        type: "website",
        images: [{ url: "https://pathfinderdefenceacademy.com/images/classroom-2.jpg", width: 1200, height: 630, alt: "PFDA Indira Nagar Branch" }]
    }
};

const indiranagarSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Path Finder Defence Academy - Indira Nagar Branch",
    "url": "https://pathfinderdefenceacademy.com/branches/indiranagar",
    "logo": "https://pathfinderdefenceacademy.com/images/logo.png",
    "description": "Top defence coaching academy in Indira Nagar, Lucknow for NDA, CDS, AFCAT, and SSB interview preparation.",
    "telephone": "+91-8115011771",
    "email": "info@pathfinderdefenceacademy.co.in",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Uma Krishna Complex, Murari Nagar",
        "addressLocality": "Indira Nagar",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "226016",
        "addressCountry": "IN"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": "26.8833",
        "longitude": "80.9933"
    },
    "hasMap": "https://maps.app.goo.gl/hpaLiDeWJZzRhmVy6"
};

export default function IndiranagarBranchPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(indiranagarSchema) }}
            />
            <main className="bg-primary min-h-screen pb-20">
                <PageHeader
                    title="Indira Nagar Branch"
                    subtitle="Lucknow Centre"
                    image="/images/classroom-2.jpg"
                />

                <section className="container mx-auto px-4 py-16 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                        
                        {/* Left 2 Cols: Branch Details & Facilities */}
                        <div className="lg:col-span-2 space-y-8">
                            <div className="bg-[#1B2620]/60 border border-gold/20 rounded-2xl p-6 md:p-8 shadow-xl">
                                <span className="text-gold font-bold uppercase tracking-widest text-xs mb-2 block">Trans-Gomti Campus</span>
                                <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
                                    Path Finder Defence Academy, Indira Nagar
                                </h2>
                                <p className="text-gray-300 leading-relaxed mb-6">
                                    Situated in the peaceful educational belt of Murari Nagar, Indira Nagar, this centre caters to defence aspirants from across Lucknow, Barabanki, and eastern UP districts. Equipped with state-of-the-art multimedia classrooms, individual doubt counters, and comprehensive study material, the Indira Nagar campus provides an intensive academic environment.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                                        <span className="text-gray-200 text-sm">Air-Conditioned Modern Classrooms</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                                        <span className="text-gray-200 text-sm">Special Focus on Mathematics &amp; GAT</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                                        <span className="text-gray-200 text-sm">Complete SSB Screening &amp; Psychology Lab</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                                        <span className="text-gray-200 text-sm">Weekly All-India Level Mock Tests</span>
                                    </div>
                                </div>
                            </div>

                            {/* Courses Offered */}
                            <div className="bg-[#1B2620]/60 border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                    <BookOpen className="text-gold w-5 h-5" /> Courses Available at Indira Nagar
                                </h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm font-semibold">
                                    <Link href="/courses/nda" className="p-3 bg-white/5 rounded-lg border border-white/5 text-gray-200 hover:border-gold hover:text-gold transition-colors text-center">
                                        NDA Coaching
                                    </Link>
                                    <Link href="/courses/nda-foundation-course-lucknow" className="p-3 bg-white/5 rounded-lg border border-white/5 text-gray-200 hover:border-gold hover:text-gold transition-colors text-center">
                                        NDA Foundation Course
                                    </Link>
                                    <Link href="/courses/cds" className="p-3 bg-white/5 rounded-lg border border-white/5 text-gray-200 hover:border-gold hover:text-gold transition-colors text-center">
                                        CDS Exam Preparation
                                    </Link>
                                    <Link href="/courses/afcat" className="p-3 bg-white/5 rounded-lg border border-white/5 text-gray-200 hover:border-gold hover:text-gold transition-colors text-center">
                                        AFCAT Classes
                                    </Link>
                                    <Link href="/courses/ssb-interview-coaching-lucknow" className="p-3 bg-white/5 rounded-lg border border-white/5 text-gray-200 hover:border-gold hover:text-gold transition-colors text-center">
                                        SSB Personality Grooming
                                    </Link>
                                    <Link href="/courses/sainik-school-coaching-lucknow" className="p-3 bg-white/5 rounded-lg border border-white/5 text-gray-200 hover:border-gold hover:text-gold transition-colors text-center">
                                        Sainik / RMS School
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
                                            Uma Krishna Complex, Murari Nagar, Lucknow, Uttar Pradesh - 226016
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Phone className="w-5 h-5 text-gold shrink-0 mt-1" />
                                    <div>
                                        <p className="font-semibold text-white mb-1">Helpline Phone</p>
                                        <a href="tel:+918115011771" className="text-gold font-bold hover:underline block text-base">
                                            +91 81150 11771
                                        </a>
                                        <a href="tel:+917505188009" className="text-gray-300 hover:text-gold transition-colors block">
                                            +91 75051 88009
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
                                    href="https://maps.app.goo.gl/hpaLiDeWJZzRhmVy6"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-4 rounded-xl border border-white/20 transition-all text-sm"
                                >
                                    <Navigation className="w-4 h-4 text-gold" /> Navigate on Google Maps
                                </a>

                                <a
                                    href="tel:+918115011771"
                                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-gold to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-extrabold py-3.5 px-4 rounded-xl shadow-lg shadow-gold/20 transition-all text-sm uppercase tracking-wider"
                                >
                                    <Phone className="w-4 h-4" /> Call Indira Nagar Branch
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
