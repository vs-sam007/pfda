"use client";

import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/Button";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            phone: formData.get("phone"),
            email: formData.get("email"),
            course: formData.get("course"),
            message: formData.get("message"),
            formType: "contact",
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setStatus("success");
                e.currentTarget.reset();
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <main className="bg-primary min-h-screen pb-20">
            <PageHeader
                title="Contact Us"
                subtitle="Get In Touch"
                image="/images/nccSSB1.jpg"
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
                                <div className="bg-[#24332B] p-4 rounded-lg text-gold border border-gold/20 mt-1">
                                    <MapPin size={24} />
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="text-white font-bold text-lg mb-1">Alambagh Branch (Head Office)</h4>
                                    <a href="https://maps.app.goo.gl/EBqtfWVp8Akaeeki7" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold transition-colors block mb-2">
                                        Metro Station, 3rd Floor, KSM Plaza, 826-Sneh Nagar Mod, Opposite to Hero Showroom, Singar nagar, Alambagh - 226005
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-[#24332B] p-4 rounded-lg text-gold border border-gold/20 mt-1">
                                    <MapPin size={24} />
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="text-white font-bold text-lg mb-1">Indira Nagar Branch</h4>
                                    <a href="https://maps.app.goo.gl/hpaLiDeWJZzRhmVy6" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold transition-colors block mb-2">
                                        Uma Krishna Complex, Murari Nagar, Lucknow, UP 226016
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-[#24332B] p-4 rounded-lg text-gold border border-gold/20">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg mb-1">Phone</h4>
                                    <p className="text-gray-400">+91 75051 88009</p>
                                    <p className="text-gray-400">+91 83184 49559</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-[#24332B] p-4 rounded-lg text-gold border border-gold/20">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg mb-1">Email</h4>
                                    <p className="text-gray-400">director@pathfinderdefenceacademy.co.in</p>
                                    <p className="text-gray-400">info@pathfinderdefenceacademy.co.in</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-[#24332B] p-8 rounded-2xl border border-white/5 shadow-2xl relative">
                        <h3 className="text-2xl font-bold text-white mb-6">Send Us A Message</h3>
                        
                        {status === "success" ? (
                            <div className="bg-green-500/10 border border-green-500/30 text-green-400 p-8 rounded-lg text-center animate-in fade-in zoom-in duration-300">
                                <h3 className="font-bold text-xl mb-2">Message Sent Successfully!</h3>
                                <p>Thank you for reaching out. Our team will get back to you shortly.</p>
                                <Button 
                                    onClick={() => setStatus("idle")}
                                    className="mt-6 bg-transparent border border-green-500/50 hover:bg-green-500/20 text-green-400"
                                >
                                    Send Another Message
                                </Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-2">Name *</label>
                                        <input type="text" name="name" required className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold" placeholder="Your Name" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-2">Phone *</label>
                                        <input type="tel" name="phone" required className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold" placeholder="Your Number" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                    <input type="email" name="email" className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold" placeholder="Your Email" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Course Interested In</label>
                                    <select name="course" className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold">
                                        <option value="">Select a course (Optional)</option>
                                        <option value="NDA">NDA</option>
                                        <option value="CDS">CDS</option>
                                        <option value="AFCAT">AFCAT</option>
                                        <option value="SSB Interview">SSB Interview</option>
                                        <option value="CAPF">CAPF</option>
                                        <option value="Agniveer">Agniveer</option>
                                        <option value="Sainik School">Sainik School</option>
                                        <option value="Foundation">Foundation</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Message *</label>
                                    <textarea name="message" required rows={4} className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold" placeholder="How can we help you?"></textarea>
                                </div>

                                {status === "error" && (
                                    <p className="text-red-400 text-sm">Failed to send message. Please try again or call us directly.</p>
                                )}

                                <Button 
                                    disabled={status === "loading"}
                                    className="w-full bg-gold hover:bg-gold-light text-black font-bold py-4 text-lg disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {status === "loading" ? "Sending Message..." : "Send Message"}
                                </Button>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}
