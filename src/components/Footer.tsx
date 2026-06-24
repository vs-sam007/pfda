import Link from "next/link";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-[#050810] text-gray-300 pt-20 pb-40 md:pb-10 border-t border-gold/20 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none"></div>

            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">

                {/* Brand Column */}
                <div>
                    <div className="flex items-center gap-2 mb-6">
                        <div className="relative w-12 h-12">
                            <Image
                                src="/images/logo.png"
                                alt="PFDA Logo"
                                fill
                                className="object-contain mix-blend-screen"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-lg leading-none text-white">PATH FINDER</span>
                            <span className="text-xs font-bold tracking-[0.2em] text-gold">DEFENCE ACADEMY</span>
                        </div>
                    </div>
                    <p className="text-neutral-400 mb-8 leading-relaxed">
                        Turning Aspirants Into Officers. Join India's premier defence coaching institute
                        dedicated to training the next generation of military leaders with discipline and honor.
                    </p>
                    <div className="flex gap-4">
                        <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-black transition-all duration-300">
                            <Facebook size={20} />
                        </Link>
                        <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-black transition-all duration-300">
                            <Instagram size={20} />
                        </Link>
                        <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-black transition-all duration-300">
                            <Twitter size={20} />
                        </Link>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-bold mb-6 text-white border-l-4 border-gold pl-3">Quick Links</h3>
                    <ul className="space-y-3">
                        <li><Link href="/about" className="hover:text-gold transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gold rounded-full"></span>About Us</Link></li>
                        <li><Link href="/gallery" className="hover:text-gold transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gold rounded-full"></span>Gallery</Link></li>
                        <li><Link href="/results" className="hover:text-gold transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gold rounded-full"></span>Success Stories</Link></li>
                        <li><Link href="/branches" className="hover:text-gold transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gold rounded-full"></span>Our Branches</Link></li>
                        <li><Link href="/contact" className="hover:text-gold transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gold rounded-full"></span>Contact Us</Link></li>
                    </ul>
                </div>

                {/* Courses */}
                <div>
                    <h3 className="text-xl font-bold mb-6 text-white border-l-4 border-gold pl-3">Our Courses</h3>
                    <ul className="space-y-3">
                        <li><Link href="/courses/nda" className="hover:text-gold transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gold rounded-full"></span>NDA</Link></li>
                        <li><Link href="/courses/cds" className="hover:text-gold transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gold rounded-full"></span>CDS</Link></li>
                        <li><Link href="/courses/afcat" className="hover:text-gold transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gold rounded-full"></span>AFCAT</Link></li>
                        <li><Link href="/courses/ssb" className="hover:text-gold transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gold rounded-full"></span>SSB Interview</Link></li>
                        <li><Link href="/courses/agniveer" className="hover:text-gold transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gold rounded-full"></span>Agniveer</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-xl font-bold mb-6 text-white border-l-4 border-gold pl-3">Contact Us</h3>
                    <ul className="space-y-5">
                        <li className="flex items-start gap-4">
                            <div className="bg-[#24332B] p-2 rounded text-gold border border-gold/20">
                                <MapPin size={20} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-white font-bold text-sm mb-1">Alambagh Branch (Head Office)</span>
                                <a href="https://maps.app.goo.gl/EBqtfWVp8Akaeeki7" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors block text-neutral-400 text-sm">
                                    Metro Station, 3rd Floor, KSM Plaza, 826-Sneh Nagar Mod, Opposite to Hero Showroom, Singar nagar, Alambagh - 226005
                                </a>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <div className="bg-[#24332B] p-2 rounded text-gold border border-gold/20">
                                <MapPin size={20} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-white font-bold text-sm mb-1">Indira Nagar Branch</span>
                                <a href="https://maps.app.goo.gl/hpaLiDeWJZzRhmVy6" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-gold transition-colors block text-sm">
                                    Uma Krishna Complex, Murari Nagar, Lucknow, UP 226016
                                </a>
                            </div>
                        </li>
                        <li className="flex items-center gap-4">
                            <div className="bg-[#24332B] p-2 rounded text-gold border border-gold/20">
                                <Phone size={20} />
                            </div>
                            <a href="tel:+91 7505188009" className="hover:text-gold transition-colors">+91 75051 88009</a>
                        </li>
                        <li className="flex items-center gap-4">
                            <div className="bg-[#24332B] p-2 rounded text-gold border border-gold/20">
                                <Mail size={20} />
                            </div>
                            <div className="flex flex-col gap-1">
                                <a href="mailto:director@pathfinderdefenceacademy.co.in" className="hover:text-gold transition-colors break-all">director@pathfinderdefenceacademy.co.in</a>
                                <a href="mailto:info@pathfinderdefenceacademy.co.in" className="hover:text-gold transition-colors break-all">info@pathfinderdefenceacademy.co.in</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-neutral-500 text-sm">
                <div className="text-center md:text-left">
                    <p className="mb-2">&copy; {new Date().getFullYear()} Path Finder Defence Academy. All rights reserved.</p>
                    <p className="text-xs text-neutral-600">Defence Academy near Alambagh, Indiranagar, Lucknow, Uttar Pradesh</p>
                </div>
                <div className="flex flex-wrap justify-center gap-4 text-xs">
                    <Link href="/privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</Link>
                    <Link href="/terms-conditions" className="hover:text-gold transition-colors">Terms & Conditions</Link>
                    <Link href="/refund-policy" className="hover:text-gold transition-colors">Refund Policy</Link>
                </div>
            </div>
        </footer>
    );
}
