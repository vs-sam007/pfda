import CourseDetail from "@/components/CourseDetail";

export default function NDAPage() {
    return (
        <CourseDetail
            title="NDA Coaching"
            subtitle="National Defence Academy"
            image="/images/nda.jpeg"
            description="The National Defence Academy (NDA) is the joint defence service training institute of the Indian Armed Forces, where cadets of the three services, the Army, the Navy and the Air Force train together before they go on to their respective service academy for further pre-commission training. PFDA provides the best NDA coaching in Lucknow with a focus on written exams and SSB interviews."
            eligibility={[
                "Age Limit: 16.5 to 19.5 years",
                "Qualification: 12th Class Pass of the 10+2 pattern of School Education or equivalent examination conducted by a State Education Board or a University.",
                "Gender: Unmarried Male & Female Candidates",
                "Physical Standards: Candidates must be physically fit according to the physical standards for admission to National Defence Academy and Naval Academy Examination."
            ]}
            syllabus={[
                "Mathematics (Algebra, Matrices, Trigonometry, Calculus, etc.)",
                "General Ability Test (English, Physics, Chemistry, General Science, History, Geography, Current Events)"
            ]}
            duration="6 Months / 1 Year / Foundation (2 Years)"
            batchTiming="Morning (8 AM - 1 PM) / Evening (3 PM - 7 PM)"
        />
    );
}
