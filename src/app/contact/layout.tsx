import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Path Finder Defence Academy | Lucknow Office Address & Helpline",
    description: "Get in touch with Path Finder Defence Academy (PFDA) in Lucknow. Visit our Alambagh or Indira Nagar branches. Call +91-7505188009 for NDA, CDS, AFCAT & SSB coaching inquiries.",
    keywords: ["PFDA contact number", "Path Finder Defence Academy address", "NDA coaching contact Lucknow", "defence academy Alambagh phone number", "Indira Nagar defence institute contact"],
    alternates: { canonical: "https://pathfinderdefenceacademy.com/contact/" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return children;
}
