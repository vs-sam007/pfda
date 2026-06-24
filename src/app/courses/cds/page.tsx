import CourseDetail from "@/components/CourseDetail";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "CDS Coaching in Lucknow | Combined Defence Services Exam Preparation | PFDA",
    description: "Best CDS coaching in Lucknow at Path Finder Defence Academy. Complete Combined Defence Services exam preparation for IMA, OTA, INA & AFA. Expert faculty, mock tests & SSB training. UPSC CDS preparation.",
    keywords: ["CDS coaching in Lucknow", "CDS exam preparation", "Combined Defence Services coaching", "CDS maths preparation", "CDS English preparation", "defence exam after graduation"],
    alternates: { canonical: "https://pathfinderdefenceacademy.com/courses/cds" },
};

export default function CDSPage() {
    return (
        <CourseDetail
            title="CDS Coaching in Lucknow"
            subtitle="Combined Defence Services — UPSC Conducted"
            image="/images/gallery8.jpg"
            description="The Combined Defence Services Examination (CDS) is conducted by the Union Public Service Commission (UPSC) twice a year for recruitment of graduates into the Indian Military Academy (IMA), Officers Training Academy (OTA), Indian Naval Academy (INA), and Indian Air Force Academy (AFA). CDS is the best defence exam after graduation for aspiring officers. Path Finder Defence Academy offers comprehensive CDS coaching in Lucknow covering English, General Knowledge, and Elementary Mathematics with weekly mock tests based on the latest UPSC CDS exam pattern. Our CDS coaching programme includes dedicated SSB interview preparation to ensure complete readiness for the selection process."
            eligibility={[
                "Age Limit: 19 to 25 years (varies by academy — IMA, OTA, INA, AFA)",
                "Qualification: Graduation from a recognized university",
                "IMA & OTA: Degree from a recognized university or equivalent",
                "INA: Degree in Engineering from a recognized university",
                "AFA: Graduation with Physics & Mathematics at 10+2 level, or B.E./B.Tech",
                "Gender: Unmarried candidates (IMA/INA/AFA); Unmarried/Widowed/Divorced for OTA"
            ]}
            syllabus={[
                "English — Comprehension, Vocabulary, Grammar, Usage",
                "General Knowledge — Current Affairs, History, Geography, Polity, Economics, Science",
                "Elementary Mathematics — Number System, HCF/LCM, Algebra, Geometry, Trigonometry, Statistics, Mensuration"
            ]}
            duration="4 Months / 6 Months"
            batchTiming="Morning (7 AM - 11 AM) / Evening (4 PM - 8 PM)"
        />
    );
}
