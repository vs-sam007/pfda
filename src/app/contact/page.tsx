"use client";

import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/Button";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="bg-primary min-h-screen pb-20">
            <PageHeader
                title="Contact Us"
                subtitle="Get In Touch"
                image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            />

            <section className="container mx-auto px-4 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Contact Information */}
                    <div>
                        <SectionHeading title="Reach Out To Us" alignment="left" />
                        <p className="text-gray-300 mb-12">
                            Have questions about our courses or admission process? Feel free to contact us. Our team is here to guide you.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="bg-[#10172a] p-4 rounded-lg text-gold border border-gold/20">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg mb-1">Head Office</h4>
                                    <p className="text-gray-400">Uma Krishna Complex, 628/ 52B, Murari Nagar, Shakti Nagar, Indira Nagar, Lucknow, Uttar Pradesh 226016</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-[#10172a] p-4 rounded-lg text-gold border border-gold/20">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg mb-1">Phone</h4>
                                    <p className="text-gray-400">+91 75051 88009</p>
                                    <p className="text-gray-400">+91 83184 49559</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-[#10172a] p-4 rounded-lg text-gold border border-gold/20">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg mb-1">Email</h4>
                                    <p className="text-gray-400">info@pfda.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-[#10172a] p-8 rounded-2xl border border-white/5 shadow-2xl">
                        <h3 className="text-2xl font-bold text-white mb-6">Send Us A Message</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                    <input type="text" className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold" placeholder="Your Name" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Phone</label>
                                    <input type="tel" className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold" placeholder="Your Number" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input type="email" className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold" placeholder="Your Email" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Course Interested In</label>
                                <select className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold">
                                    <option>NDA</option>
                                    <option>CDS</option>
                                    <option>AFCAT</option>
                                    <option>SSB Interview</option>
                                    <option>Foundation</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea rows={4} className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold" placeholder="How can we help you?"></textarea>
                            </div>
                            <Button className="w-full bg-gold hover:bg-gold-light text-black font-bold py-4 text-lg">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}
