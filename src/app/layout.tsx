import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadPopup from "@/components/LeadPopup";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FloatingCTA from "@/components/FloatingCTA";
import MobileBottomNav from "@/components/MobileBottomNav";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: "Pathfinder Defence Academy | Best NDA Coaching in Lucknow",
  description: "PFDA is the best NDA coaching institute in Lucknow. Expert preparation for NDA, CDS, AFCAT, SSB & Sainik School by Ex-Defence Mentors with hostel facility.",
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
    "Pathfinder Defence Academy",
  ],
  openGraph: {
    title: "Pathfinder Defence Academy | Best NDA & Defence Coaching in Lucknow",
    description: "Join Lucknow's top-rated defence coaching institute. Expert NDA, CDS, AFCAT, SSB & CAPF preparation with 1000+ selections. Book a free demo class today.",
    url: "https://pathfinderdefenceacademy.com",
    siteName: "Pathfinder Defence Academy",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pathfinder Defence Academy | Best NDA Coaching in Lucknow",
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
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export const viewport = {
  themeColor: "#1B2620",
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Pathfinder Defence Academy",
  "alternateName": "PFDA",
  "url": "https://pathfinderdefenceacademy.com",
  "logo": "https://pathfinderdefenceacademy.com/images/logo.png",
  "image": "https://pathfinderdefenceacademy.com/images/classroom-2.jpg",
  "description": "Pathfinder Defence Academy is the best NDA and defence coaching institute in Lucknow, offering premier preparation for NDA, CDS, AFCAT, SSB Interview, CAPF, Sainik School, and Agniveer exams with residential hostel facilities and dedicated GTO obstacle ground.",
  "telephone": "+91-7505188009",
  "email": "info@pathfinderdefenceacademy.co.in",
  "foundingDate": "2010",
  "numberOfEmployees": "40+",
  "areaServed": [
    { "@type": "City", "name": "Lucknow" },
    { "@type": "AdministrativeArea", "name": "Alambagh" },
    { "@type": "AdministrativeArea", "name": "Singar Nagar" },
    { "@type": "AdministrativeArea", "name": "Indira Nagar" },
    { "@type": "AdministrativeArea", "name": "Krishna Nagar" },
    { "@type": "AdministrativeArea", "name": "Charbagh" },
    { "@type": "AdministrativeArea", "name": "Aminabad" },
    { "@type": "AdministrativeArea", "name": "Thakurganj" },
    { "@type": "AdministrativeArea", "name": "Mawaiya" },
    { "@type": "AdministrativeArea", "name": "Rajajipuram" },
    { "@type": "AdministrativeArea", "name": "Uttar Pradesh" }
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Metro Station, 3rd Floor, KSM Plaza, 826-Sneh Nagar Mod, Singar Nagar",
    "addressLocality": "Alambagh, Lucknow",
    "addressRegion": "Uttar Pradesh",
    "postalCode": "226005",
    "addressCountry": "IN"
  },
  "department": [
    {
      "@type": "EducationalOrganization",
      "name": "Pathfinder Defence Academy - Alambagh Campus (Head Office)",
      "url": "https://pathfinderdefenceacademy.com/branches/alambagh",
      "telephone": "+91-7505188009",
      "areaServed": [
        { "@type": "AdministrativeArea", "name": "Alambagh" },
        { "@type": "AdministrativeArea", "name": "Singar Nagar" },
        { "@type": "AdministrativeArea", "name": "Krishna Nagar" },
        { "@type": "AdministrativeArea", "name": "Charbagh" },
        { "@type": "AdministrativeArea", "name": "Aminabad" },
        { "@type": "AdministrativeArea", "name": "Thakurganj" },
        { "@type": "AdministrativeArea", "name": "Mawaiya" },
        { "@type": "AdministrativeArea", "name": "Rajajipuram" },
        { "@type": "City", "name": "Lucknow" }
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Metro Station, 3rd Floor, KSM Plaza, 826-Sneh Nagar Mod, Singar Nagar",
        "addressLocality": "Alambagh, Lucknow",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "226005",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "26.8188",
        "longitude": "80.9087"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "140",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    {
      "@type": "EducationalOrganization",
      "name": "Pathfinder Defence Academy - Indira Nagar Campus",
      "url": "https://pathfinderdefenceacademy.com/branches/indiranagar",
      "telephone": "+91-8115011771",
      "areaServed": [
        { "@type": "AdministrativeArea", "name": "Indira Nagar" },
        { "@type": "City", "name": "Lucknow" }
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Uma Krishna Complex, Murari Nagar, Sector 8",
        "addressLocality": "Indira Nagar, Lucknow",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "226016",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "26.8833",
        "longitude": "80.9933"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.7",
        "reviewCount": "474",
        "bestRating": "5",
        "worstRating": "1"
      }
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "614",
    "bestRating": "5",
    "worstRating": "1"
  },
  "sameAs": [
    "https://maps.app.goo.gl/EBqtfWVp8Akaeeki7",
    "https://maps.app.goo.gl/hpaLiDeWJZzRhmVy6",
    "https://youtube.com/@pathfinderdefenceacademy?si=iE6H0NJhcfWIbMME",
    "https://www.instagram.com/pathfinder_defence_academy?igsh=dmhrd245dWJ1bHdu"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Defence Coaching Courses",
    "itemListElement": [
      { "@type": "Course", "name": "NDA Coaching", "description": "National Defence Academy written and SSB interview preparation" },
      { "@type": "Course", "name": "CDS Coaching", "description": "Combined Defence Services exam preparation for IMA, OTA, INA, and AFA" },
      { "@type": "Course", "name": "AFCAT Coaching", "description": "Air Force Common Admission Test preparation and AFSB guidance" },
      { "@type": "Course", "name": "SSB Interview Coaching", "description": "5-day Service Selection Board interview preparation with GTO ground" },
      { "@type": "Course", "name": "CAPF AC Coaching", "description": "UPSC Central Armed Police Forces Assistant Commandant preparation" },
      { "@type": "Course", "name": "NDA Foundation Course", "description": "Class 11 & 12 integrated schooling with NDA and SSB training" }
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
        <link rel="preload" as="image" href="/images/bg-mobile.webp" media="(max-width: 768px)" type="image/webp" fetchPriority="high" />
        <link rel="preload" as="image" href="/images/bg.webp" media="(min-width: 769px)" type="image/webp" fetchPriority="high" />
        <Script
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-GK60V0X9Y7"
        />
        <Script
          id="google-analytics"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-GK60V0X9Y7');
            `,
          }}
        />
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
