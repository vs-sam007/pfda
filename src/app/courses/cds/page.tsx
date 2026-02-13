import CourseDetail from "@/components/CourseDetail";

export default function CDSPage() {
    return (
        <CourseDetail
            title="CDS Coaching"
            subtitle="Combined Defence Services"
            image="https://images.unsplash.com/photo-1599478473238-662885918735?q=80&w=1974&auto=format&fit=crop"
            description="The Combined Defence Services Examination (CDS) is conducted by the Union Public Service Commission (UPSC) for recruitment into the Indian Military Academy, Officers Training Academy, Indian Naval Academy and Indian Air Force Academy. Our comprehensive CDS coaching program covers all aspects of the written examination and prepares you for the challenges ahead."
            eligibility={[
                "Age Limit: 19 to 25 years (varies by academy)",
                "Qualification: Graduation from a recognized university.",
                "IMA/OTA: Degree of a recognized University or equivalent",
                "INA: Degree in Engineering from a recognized University/Institution",
                "AFA: Degree of a recognized University (with Physics and Mathematics at 10+2 level) or Bachelor of Engineering"
            ]}
            syllabus={[
                "English",
                "General Knowledge",
                "Elementary Mathematics"
            ]}
            duration="4 Months / 6 Months"
            batchTiming="Morning (7 AM - 11 AM) / Evening (4 PM - 8 PM)"
        />
    );
}
