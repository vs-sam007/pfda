import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadPopup from "@/components/LeadPopup";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FloatingCTA from "@/components/FloatingCTA";
import MobileBottomNav from "@/components/MobileBottomNav";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Path Finder Defence Academy | Best NDA Coaching in Lucknow | Defence Coaching Institute",
  description: "Path Finder Defence Academy (PFDA) is the best NDA coaching in Lucknow. Expert training for NDA, CDS, AFCAT, SSB, CAPF, Agniveer & Sainik School by Ex-Defence Mentors. Top defence coaching institute in Uttar Pradesh with hostel facility & physical training.",
  keywords: [
    "NDA coaching in Lucknow",
    "best NDA coaching in Lucknow",
    "NDA foundation coaching in Lucknow",
    "defence coaching institute in Lucknow",
    "best defence academy in Lucknow",
    "NDA written exam coaching",
    "NDA SSB coaching in Lucknow",
    "Air Force coaching in Lucknow",
    "Navy coaching in Lucknow",
    "CDS coaching in Lucknow",
    "AFCAT coaching in Lucknow",
    "CAPF coaching in Lucknow",
    "defence exam preparation institute",
    "SSB interview preparation",
    "top defence coaching institute in Uttar Pradesh",
    "NDA coaching near Alambagh Lucknow",
    "NDA coaching near Indiranagar",
    "defence academy near me",
    "Path Finder Defence Academy",
  ],
  openGraph: {
    title: "Path Finder Defence Academy | Best NDA & Defence Coaching in Lucknow",
    description: "Join Lucknow's top-rated defence coaching institute. Expert NDA, CDS, AFCAT, SSB & CAPF preparation with 1000+ selections. Book a free demo class today.",
    url: "https://pathfinderdefenceacademy.com",
    siteName: "Path Finder Defence Academy",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Path Finder Defence Academy | Best NDA Coaching in Lucknow",
    description: "Lucknow's premier defence coaching institute with 1000+ selections. Expert training for NDA, CDS, AFCAT, SSB by Ex-Defence Mentors.",
  },
  alternates: {
    canonical: "https://pathfinderdefenceacademy.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  themeColor: "#1B2620",
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Path Finder Defence Academy",
  "alternateName": "PFDA",
  "url": "https://pathfinderdefenceacademy.com",
  "logo": "https://pathfinderdefenceacademy.com/images/logo.png",
  "description": "Path Finder Defence Academy is the best NDA coaching institute in Lucknow, offering expert training for NDA, CDS, AFCAT, SSB, CAPF, Sainik School and Agniveer exams.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Uma Krishna Complex, 628/52B, Murari Nagar, Shakti Nagar, Indira Nagar",
    "addressLocality": "Lucknow",
    "addressRegion": "Uttar Pradesh",
    "postalCode": "226016",
    "addressCountry": "IN"
  },
  "telephone": "+91-7505188009",
  "email": "info@pathfinderdefenceacademy.co.in",
  "foundingDate": "2010",
  "numberOfEmployees": "40+",
  "areaServed": {
    "@type": "City",
    "name": "Lucknow"
  },
  "sameAs": [],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Defence Coaching Courses",
    "itemListElement": [
      { "@type": "Course", "name": "NDA Coaching", "description": "National Defence Academy exam preparation" },
      { "@type": "Course", "name": "CDS Coaching", "description": "Combined Defence Services exam preparation" },
      { "@type": "Course", "name": "AFCAT Coaching", "description": "Air Force Common Admission Test preparation" },
      { "@type": "Course", "name": "SSB Interview Coaching", "description": "Service Selection Board interview preparation" },
      { "@type": "Course", "name": "CAPF Coaching", "description": "Central Armed Police Forces AC exam preparation" },
      { "@type": "Course", "name": "NDA Foundation", "description": "Class 11 & 12 integrated NDA preparation" }
    ]
  }
};

import { DemoModalProvider } from "@/components/DemoModalProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-primary" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} bg-primary antialiased`} suppressHydrationWarning>
        <DemoModalProvider>
          <Navbar />
          <main className="min-h-screen pt-0 md:pt-16">
            {children}
          </main>
          <Footer />
          <LeadPopup />
          <FloatingWhatsApp />
          <FloatingCTA />
          <MobileBottomNav />
        </DemoModalProvider>
      </body>
    </html>
  );
}
