import CourseDetail from "@/components/CourseDetail";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sainik School Coaching in Lucknow | Sainik School Entrance Exam Preparation | PFDA",
    description: "Best Sainik School entrance coaching in Lucknow at Path Finder Defence Academy. Prepare for AISSEE for Class 6th & 9th admission. Expert coaching with mock tests and physical training.",
    keywords: ["Sainik School coaching Lucknow", "AISSEE preparation", "Sainik School entrance exam coaching", "defence coaching for young students"],
    alternates: { canonical: "https://pathfinderdefenceacademy.com/courses/sainik-school" },
};

export default function SainikSchoolPage() {
    return (
        <CourseDetail
            title="Sainik School Coaching"
            subtitle="All India Sainik School Entrance Exam (AISSEE)"
            image="/images/sainic-1.jpg"
            description="Sainik Schools are a system of schools in India established and managed by the Ministry of Defence. They were conceived as a way to prepare students for entry into the National Defence Academy (NDA) and to provide quality public school education with a military environment. The All India Sainik School Entrance Examination (AISSEE) is conducted annually for admission to Class 6th and Class 9th. Path Finder Defence Academy provides dedicated Sainik School entrance exam coaching in Lucknow with a focus on Mathematics, Language, Intelligence, and General Knowledge. Our coaching builds a strong foundation for young defence aspirants, preparing them not only for the entrance exam but for the disciplined life ahead at Sainik School."
            eligibility={[
                "Class 6th Entry: Student must be between 10–12 years of age",
                "Class 9th Entry: Student must be between 13–15 years of age",
                "Must have passed the preceding class from a recognized school",
                "Open for boys and girls (co-education available at select Sainik Schools)",
                "Domicile certificate of the respective state required"
            ]}
            syllabus={[
                "Mathematics — Arithmetic, Number System, Geometry, Data Handling",
                "Intelligence Test — Verbal & Non-verbal Reasoning, Pattern Recognition",
                "Language Test — English & Hindi Comprehension, Grammar, Vocabulary",
                "General Knowledge — Science, Social Studies, Current Affairs, Defence Awareness"
            ]}
            duration="6 Months / 1 Year"
            batchTiming="Morning (9 AM - 1 PM) / Weekend Batches Available"
        />
    );
}
