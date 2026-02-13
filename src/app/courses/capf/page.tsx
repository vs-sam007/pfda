import CourseDetail from "@/components/CourseDetail";

export default function CAPFPage() {
    return (
        <CourseDetail
            title="CAPF AC Coaching"
            subtitle="Central Armed Police Forces"
            image="https://images.unsplash.com/photo-1626081077884-245842817448?q=80&w=2070&auto=format&fit=crop"
            description="The CAPF Assistant Commandant exam is conducted by UPSC to recruit officers for BSF, CRPF, CISF, ITBP, and SSB. It is a prestigious career offering authorized power and the honor of serving the nation's internal security. PFDA provides specialized coaching for CAPF AC focused on both Paper I and Paper II."
            eligibility={[
                "Age Limit: 20 to 25 years",
                "Qualification: Bachelor's degree from a recognized university",
                "Nationality: Indian",
                "Both Male and Female candidates are eligible"
            ]}
            syllabus={[
                "General Ability and Intelligence",
                "General Studies, Essay and Comprehension"
            ]}
            duration="6 Months"
            batchTiming="Morning (8 AM - 12 PM) / Evening (4 PM - 8 PM)"
        />
    );
}
