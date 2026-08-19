import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Free Defence Exam Study Material & Notes PDF | NDA, CDS Books | PFDA",
    description: "Download free defence exam study material, solved question papers, CDS books notes & NDA preparation guides curated by Ex-Defence Mentors at Path Finder Defence Academy.",
    keywords: ["NDA study material PDF", "CDS solved question papers", "free defence exam notes", "NDA preparation books Lucknow", "AFCAT study material download"],
    alternates: { canonical: "https://pathfinderdefenceacademy.com/study-material" },
};

export default function StudyMaterialLayout({ children }: { children: React.ReactNode }) {
    return children;
}
