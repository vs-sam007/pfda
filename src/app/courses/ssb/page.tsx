import CourseDetail from "@/components/CourseDetail";

export default function SSBPage() {
    return (
        <CourseDetail
            title="SSB Interview"
            subtitle="Service Selection Board"
            image="https://images.unsplash.com/photo-1541961417166-3d6046e72ee8?q=80&w=2049&auto=format&fit=crop"
            description="The SSB Interview is a 5-day evaluation process that assesses a candidate's personality, intelligence, and compatibility for a career in the armed forces. It is not just a test of knowledge but a test of your personality. At PFDA, we have the best psychological and GTO ground training facilities in India to help you discover your inner officer."
            eligibility={[
                "Qualified in written exam (NDA, CDS, AFCAT, etc.)",
                "Or Direct Entry (TES, TGC, SSC Tech, NCC Special Entry)"
            ]}
            syllabus={[
                "Screening Test (OIR + PPDT)",
                "Psychological Tests (TAT, WAT, SRT, SD)",
                "GTO Tasks (Group Discussion, GPE, Snake Race, etc.)",
                "Personal Interview",
                "Conference"
            ]}
            duration="14 Days / 21 Days"
            batchTiming="Full Day Training (8 AM - 5 PM)"
        />
    );
}
