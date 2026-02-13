import CourseDetail from "@/components/CourseDetail";

export default function AFCATPage() {
    return (
        <CourseDetail
            title="AFCAT Coaching"
            subtitle="Air Force Common Admission Test"
            image="https://images.unsplash.com/photo-1453491945771-a1e904948959?q=80&w=2070&auto=format&fit=crop"
            description="AFCAT stands for Air Force Common Admission Test. It is conducted by the Indian Air Force to select officers for all its branches, except for the medical and dental branches. Our specialized AFCAT coaching ensures you master the specific pattern and syllabus of this examination to secure your place in the glory of the skies."
            eligibility={[
                "Age Limit: 20 to 24 years (Flying Branch), 20 to 26 years (Ground Duty)",
                "Qualification: Graduation (min 60%)",
                "Flying Branch: Maths & Physics at 10+2 level",
                "Ground Duty (Technical): Engineering Degree"
            ]}
            syllabus={[
                "General Awareness",
                "Verbal Ability in English",
                "Numerical Ability",
                "Reasoning and Military Aptitude Test"
            ]}
            duration="3 Months / 6 Months"
            batchTiming="Morning (9 AM - 1 PM) / Evening (3 PM - 7 PM)"
        />
    );
}
