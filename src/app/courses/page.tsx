import PageHeader from "@/components/PageHeader";
import CoursesGrid from "@/components/home/CoursesGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Best Defence Exam Coaching Courses in Lucknow | NDA, CDS, AFCAT, SSB | PFDA",
    description: "Explore premier defence exam coaching courses in Lucknow at Path Finder Defence Academy. Expert training for NDA, CDS, AFCAT, SSB Interview, CAPF, Agniveer & Sainik School.",
    keywords: ["defence coaching courses Lucknow", "NDA coaching classes", "CDS exam coaching", "AFCAT coaching Lucknow", "SSB training institute", "CAPF preparation", "Sainik School coaching"],
    alternates: { canonical: "https://pathfinderdefenceacademy.com/courses/" },
};

export default function CoursesPage() {
    return (
        <main className="bg-primary min-h-screen">
            <PageHeader
                title="Our Courses"
                subtitle="Shape Your Career In Defence"
                image="/images/gallery8.jpg"
            />
            <CoursesGrid />
        </main>
    );
}
