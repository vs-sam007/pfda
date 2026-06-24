import CourseDetail from "@/components/CourseDetail";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "CAPF Coaching in Lucknow | CAPF AC Exam Preparation | Path Finder Defence Academy",
    description: "Best CAPF AC coaching in Lucknow at PFDA. Prepare for UPSC CAPF Assistant Commandant exam for BSF, CRPF, CISF, ITBP & SSB. Complete Paper I, Paper II & interview preparation.",
    keywords: ["CAPF coaching in Lucknow", "CAPF AC exam preparation", "CAPF assistant commandant coaching", "BSF CRPF CISF ITBP coaching", "defence exam preparation institute"],
    alternates: { canonical: "https://pathfinderdefenceacademy.com/courses/capf" },
};

export default function CAPFPage() {
    return (
        <CourseDetail
            title="CAPF AC Coaching in Lucknow"
            subtitle="Central Armed Police Forces — UPSC Conducted"
            image="/images/bg.jpg"
            description="The CAPF Assistant Commandant (AC) examination is conducted by the Union Public Service Commission (UPSC) annually for recruitment of officers into the Central Armed Police Forces — BSF, CRPF, CISF, ITBP, and SSB. It is a prestigious career option for graduates offering the honour of serving the nation's internal security as a Group A gazetted officer. Path Finder Defence Academy provides specialized CAPF AC coaching in Lucknow covering both Paper I (General Ability and Intelligence) and Paper II (General Studies, Essay, and Comprehension) along with Physical Efficiency Test and interview preparation."
            eligibility={[
                "Age Limit: 20 to 25 years (relaxation for reserved categories as per UPSC rules)",
                "Qualification: Bachelor's degree from a recognized university",
                "Nationality: Indian citizen",
                "Both male and female candidates are eligible",
                "Physical Standards: Must meet CAPF physical fitness requirements"
            ]}
            syllabus={[
                "Paper I — General Ability and Intelligence (250 marks, Objective)",
                "Paper II — General Studies, Essay and Comprehension (200 marks, Descriptive)",
                "Physical Efficiency Test — 100m dash, 800m run, Long Jump, Shot Put",
                "Interview / Personality Test"
            ]}
            duration="6 Months"
            batchTiming="Morning (8 AM - 12 PM) / Evening (4 PM - 8 PM)"
        />
    );
}
