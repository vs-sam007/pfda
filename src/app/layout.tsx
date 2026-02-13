import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadPopup from "@/components/LeadPopup";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Path Finder Defence Academy (PFDA) | Best Defence Coaching in Lucknow",
  description: "Join India's best defence coaching in Lucknow. Expert training for NDA, CDS, AFCAT, SSB, Agniveer Army, Navy & Airforce by Ex-Defence Mentors.",
  keywords: ["defence coaching Lucknow", "NDA coaching Lucknow", "CDS coaching", "AFCAT coaching", "SSB interview preparation", "Path Finder Defence Academy"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable} suppressHydrationWarning>
        <Navbar />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
        <LeadPopup />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
