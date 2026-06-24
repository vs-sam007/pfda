import CourseDetail from "@/components/CourseDetail";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "AFCAT Coaching in Lucknow | Air Force Coaching | Path Finder Defence Academy",
    description: "Best AFCAT coaching in Lucknow at PFDA. Air Force Common Admission Test preparation for Flying Branch, Ground Duty & Technical Branch. How to become an Air Force officer — expert coaching & SSB training.",
    keywords: ["AFCAT coaching in Lucknow", "Air Force coaching in Lucknow", "How to become Air Force officer", "AFCAT exam preparation", "Air Force career after graduation"],
    alternates: { canonical: "https://pathfinderdefenceacademy.com/courses/afcat" },
};

export default function AFCATPage() {
    return (
        <CourseDetail
            title="AFCAT Coaching in Lucknow"
            subtitle="Air Force Common Admission Test"
            image="/images/1707393182_indian-army.jpg"
            description="AFCAT (Air Force Common Admission Test) is conducted by the Indian Air Force twice a year for recruitment of officers into all branches — Flying, Ground Duty (Technical), and Ground Duty (Non-Technical). It is the primary entry for graduates aspiring to become Indian Air Force officers. Path Finder Defence Academy offers specialized AFCAT coaching in Lucknow covering General Awareness, Verbal Ability, Numerical Ability, Reasoning, and Military Aptitude Test. Our Air Force coaching programme also includes dedicated AFSB (Air Force Selection Board) interview preparation to ensure complete readiness for the selection process."
            eligibility={[
                "Age Limit: 20 to 24 years (Flying Branch), 20 to 26 years (Ground Duty)",
                "Qualification: Graduation with minimum 60% marks",
                "Flying Branch: Maths & Physics at 10+2 level mandatory",
                "Ground Duty (Technical): Engineering Degree required",
                "Ground Duty (Non-Technical): Any graduation degree"
            ]}
            syllabus={[
                "General Awareness — History, Geography, Polity, Defence, Sports, Current Affairs",
                "Verbal Ability in English — Comprehension, Error Detection, Sentence Completion, Synonyms, Antonyms",
                "Numerical Ability — Decimal Fractions, Ratio & Proportion, Profit & Loss, Time & Work, Percentage",
                "Reasoning and Military Aptitude Test — Verbal & Non-verbal Reasoning, Spatial Ability"
            ]}
            duration="3 Months / 6 Months"
            batchTiming="Morning (9 AM - 1 PM) / Evening (3 PM - 7 PM)"
        />
    );
}
