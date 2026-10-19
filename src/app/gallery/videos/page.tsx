import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";
import Image from "next/image";
import { Youtube, Play, ShieldCheck, MapPin, Award, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
    title: "Video Gallery | GTO Training & SSB Interviews | Pathfinder Defence Academy",
    description: "Watch training videos, SSB interview obstacle drills, classroom lectures, and cadet success stories from Pathfinder Defence Academy Lucknow.",
    alternates: {
        canonical: "https://pathfinderdefenceacademy.com/gallery/videos",
    },
    openGraph: {
        title: "Video Gallery | Pathfinder Defence Academy Lucknow",
        description: "Explore authentic defence training videos, GTO ground workouts, and student recommendation stories from PFDA Lucknow.",
        url: "https://pathfinderdefenceacademy.com/gallery/videos",
        type: "website",
        images: [{ url: "https://pathfinderdefenceacademy.com/images/nccSSB1.jpg", width: 1200, height: 630, alt: "PFDA Video Gallery" }],
    },
};

const videoCategories = [
    {
        title: "SSB GTO Obstacle Ground Training",
        desc: "Watch cadets tackle Progressive Group Tasks (PGT), Command Tasks, Individual Obstacles (IO), and Snake Race drills on our authentic outdoor ground in Alambagh.",
        tag: "SSB Training",
        image: "/images/nccSSB1.jpg",
        link: "https://youtube.com/@pathfinderdefenceacademy?si=iE6H0NJhcfWIbMME"
    },
    {
        title: "NDA & CDS Classroom Sessions",
        desc: "Expert mathematics shortcuts, General Studies concept breakdown, and English vocabulary workshops taught by senior ex-defence faculty.",
        tag: "Classroom",
        image: "/images/classroom-2.jpg",
        link: "https://youtube.com/@pathfinderdefenceacademy?si=iE6H0NJhcfWIbMME"
    },
    {
        title: "Officer Selections & Recommendation Stories",
        desc: "Inspiring interviews with candidates recommended for the Indian Army, Navy, and Air Force from NDA, CDS, and AFCAT entries.",
        tag: "Success Stories",
        image: "/images/gallery8.jpg",
        link: "https://youtube.com/@pathfinderdefenceacademy?si=iE6H0NJhcfWIbMME"
    },
    {
        title: "Physical Conditioning & Daily Drills",
        desc: "Daily morning PT, cross-country runs, stamina drills, and medical posture corrections under dedicated physical training instructors.",
        tag: "Physical Drills",
        image: "/images/1707393182_indian-army.jpg",
        link: "https://youtube.com/@pathfinderdefenceacademy?si=iE6H0NJhcfWIbMME"
    }
];

export default function VideosPage() {
    const videoGallerySchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Pathfinder Defence Academy Video Gallery",
        "description": "Video documentation of SSB GTO obstacle drills, classroom coaching, physical conditioning, and officer success stories at Pathfinder Defence Academy Lucknow.",
        "url": "https://pathfinderdefenceacademy.com/gallery/videos",
        "publisher": {
            "@type": "EducationalOrganization",
            "name": "Pathfinder Defence Academy",
            "url": "https://pathfinderdefenceacademy.com"
        }
    };

    return (
        <main className="bg-primary min-h-screen pb-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGallerySchema) }}
            />
            <PageHeader
                title="Video Gallery"
                subtitle="Life, Training & Officer Preparation at PFDA Lucknow"
                image="/images/bg.webp"
            />

            <section className="container mx-auto px-4 py-16">
                <div className="max-w-6xl mx-auto">
                    
                    {/* Header Banner */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4 border border-red-500/30">
                            <Youtube className="w-4 h-4 text-red-500" /> Official YouTube Channel
                        </div>
                        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
                            Experience Life as an Officer Cadet at PFDA
                        </h1>
                        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                            Watch our daily military training routines, outdoor GTO ground sessions, SSB mock interviews, and student recommendation stories. Subscribe to our official channel for daily updates.
                        </p>
                        <div className="mt-6">
                            <a
                                href="https://youtube.com/@pathfinderdefenceacademy?si=iE6H0NJhcfWIbMME"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-[#FF0000] text-white font-bold px-6 py-3 rounded-xl hover:bg-white hover:text-black transition-all text-sm uppercase tracking-wider shadow-lg"
                            >
                                <Youtube className="w-5 h-5" /> Subscribe on YouTube <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Video Category Showcase */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {videoCategories.map((cat, idx) => (
                            <div key={idx} className="bg-[#1B2620] border border-white/5 hover:border-gold/30 rounded-2xl overflow-hidden shadow-xl transition-all group flex flex-col">
                                <div className="h-60 bg-gray-900 relative overflow-hidden">
                                    <Image
                                        src={cat.image}
                                        alt={cat.title}
                                        fill
                                        className="object-cover transform group-hover:scale-105 transition-transform"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                                        <div className="w-16 h-16 rounded-full bg-gold/90 text-black flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform">
                                            <Play className="w-8 h-8 fill-black translate-x-0.5" />
                                        </div>
                                    </div>
                                    <div className="absolute top-4 left-4 bg-gold text-black text-xs font-bold px-3 py-1 rounded">
                                        {cat.tag}
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors">
                                        {cat.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                        {cat.desc}
                                    </p>
                                    <a
                                        href={cat.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-gold text-sm font-bold hover:text-white transition-colors"
                                    >
                                        Watch Channel Playlist <ExternalLink className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Quick Cross-Links to Key Sections */}
                    <div className="bg-[#24332B] border border-gold/20 rounded-2xl p-8 text-center max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-white mb-4">Want to Train With Us in Lucknow?</h3>
                        <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto mb-6">
                            Experience the same disciplined environment in person. Visit our Alambagh or Indira Nagar campus to attend a live class and see our outdoor GTO grounds.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold uppercase tracking-wider">
                            <Link href="/gallery/photos" className="bg-[#1B2620] hover:bg-gold hover:text-black text-white px-5 py-3 rounded-lg border border-gold/30 transition-all">
                                📸 View Photo Gallery
                            </Link>
                            <Link href="/study-material" className="bg-[#1B2620] hover:bg-gold hover:text-black text-white px-5 py-3 rounded-lg border border-gold/30 transition-all">
                                📚 Download Study Material PDF
                            </Link>
                            <Link href="/courses/ssb-interview-coaching-lucknow" className="bg-[#1B2620] hover:bg-gold hover:text-black text-white px-5 py-3 rounded-lg border border-gold/30 transition-all">
                                🎖️ SSB 14-Day GTO Course
                            </Link>
                            <Link href="/contact" className="bg-gold text-black hover:bg-white px-6 py-3 rounded-lg transition-all">
                                Book Free Demo Visit
                            </Link>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}
