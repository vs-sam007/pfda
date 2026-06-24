import CourseDetail from "@/components/CourseDetail";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "NDA Coaching in Lucknow | Best NDA Exam Preparation | Path Finder Defence Academy",
    description: "Join the best NDA coaching in Lucknow at Path Finder Defence Academy. Expert NDA written exam coaching covering NDA Maths, GAT, NDA syllabus, exam pattern, previous year questions & cutoff analysis. 1000+ selections. Book free demo.",
    keywords: ["NDA coaching in Lucknow", "best NDA coaching in Lucknow", "NDA written exam coaching", "NDA syllabus", "NDA exam pattern", "NDA maths preparation", "NDA GAT preparation", "NDA previous year questions", "NDA cutoff marks"],
    alternates: { canonical: "https://pathfinderdefenceacademy.com/courses/nda" },
};

export default function NDAPage() {
    return (
        <CourseDetail
            title="NDA Coaching in Lucknow"
            subtitle="National Defence Academy — UPSC Conducted"
            image="/images/nda.jpeg"
            description="The National Defence Academy (NDA) exam is conducted by the Union Public Service Commission (UPSC) twice a year for recruitment into the Indian Army, Navy, and Air Force. It is the premier entry point for 12th-pass candidates aspiring to become commissioned officers. Path Finder Defence Academy provides the best NDA coaching in Lucknow with a comprehensive approach covering the NDA written exam (Mathematics — 300 marks and General Ability Test — 600 marks) along with dedicated SSB interview preparation. Our NDA Maths preparation covers Algebra, Matrices, Determinants, Trigonometry, Analytical Geometry, Differential Calculus, Integral Calculus, and Statistics. The NDA GAT preparation includes English, Physics, Chemistry, General Science, Indian History, Geography, and Current Affairs. We also provide NDA previous year question paper analysis and NDA cutoff marks trend study to give our students a competitive edge."
            eligibility={[
                "Age Limit: 16.5 to 19.5 years (as per UPSC notification)",
                "Qualification: 12th Class Pass or Appearing (10+2 pattern) from any recognized board",
                "For Army Wing: Any stream (Arts, Commerce, Science)",
                "For Air Force & Naval Wings: Physics and Mathematics mandatory at 10+2 level",
                "Gender: Unmarried Male & Female Candidates",
                "Physical Standards: Must meet NDA physical fitness criteria"
            ]}
            syllabus={[
                "Mathematics (300 marks) — Algebra, Matrices, Trigonometry, Analytical Geometry, Calculus, Statistics, Probability",
                "General Ability Test — English (200 marks)",
                "GAT — Physics, Chemistry, General Science",
                "GAT — Indian History, Freedom Movement",
                "GAT — Geography (Physical & Indian)",
                "GAT — Current Events, GK & Defence Awareness"
            ]}
            duration="6 Months / 1 Year / Foundation (2 Years)"
            batchTiming="Morning (8 AM - 1 PM) / Evening (3 PM - 7 PM)"
        />
    );
}
