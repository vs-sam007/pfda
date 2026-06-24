import CourseDetail from "@/components/CourseDetail";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Agniveer Coaching in Lucknow | Agnipath Scheme Preparation | Path Finder Defence Academy",
    description: "Best Agniveer coaching in Lucknow at PFDA. Complete Agnipath scheme preparation for Indian Army, Navy & Air Force. Physical fitness training, written exam coaching & mock tests for Agniveer recruitment.",
    keywords: ["Agniveer coaching Lucknow", "Agnipath scheme coaching", "Indian Army Agniveer preparation", "How to join Indian Army after 12th", "Agniveer exam preparation"],
    alternates: { canonical: "https://pathfinderdefenceacademy.com/courses/agniveer" },
};

export default function AgniveerPage() {
    return (
        <CourseDetail
            title="Agniveer Coaching in Lucknow"
            subtitle="Agnipath Scheme — Indian Armed Forces"
            image="/images/1707393182_indian-army.jpg"
            description="The Agnipath Scheme (Agniveer) is the Indian government's transformative recruitment pathway for soldiers into the Indian Army, Indian Navy, and Indian Air Force. Agniveers are enrolled for a period of 4 years, after which up to 25% are absorbed into the regular cadre based on performance. This is an excellent opportunity for 10th and 12th pass youth who want to join the Indian Army, Navy, or Air Force and serve the nation. Path Finder Defence Academy provides comprehensive Agniveer coaching in Lucknow covering the written exam (General Knowledge, Mathematics, Reasoning, English/Hindi) along with intensive physical fitness training to meet the strict physical standards required for Agniveer recruitment."
            eligibility={[
                "Age Limit: 17.5 to 23 years",
                "Qualification: 10th Pass (Agniveer General Duty), 12th Pass (Agniveer Technical, Clerk/SKT)",
                "For Navy & Air Force: 12th Pass with Physics & Maths (varies by trade)",
                "Physical Standards: Height, Weight, Chest measurements as per Indian Army standards",
                "Must be Indian citizen; unmarried candidates preferred"
            ]}
            syllabus={[
                "General Knowledge — History, Geography, Polity, Current Affairs, Defence Knowledge",
                "Mathematics — Arithmetic, Algebra, Geometry, Mensuration, Number System",
                "Reasoning — Verbal & Non-verbal Reasoning, Analogies, Coding-Decoding",
                "English / Hindi — Grammar, Comprehension, Vocabulary, Sentence Correction",
                "Physical Fitness — 1.6 km run, Pull-ups, Balance, 9-feet ditch jump"
            ]}
            duration="3 Months / 6 Months"
            batchTiming="Morning (6 AM - 10 AM) / Evening (3 PM - 7 PM)"
        />
    );
}
