import PageHeader from "@/components/PageHeader";
import CoursesGrid from "@/components/home/CoursesGrid";

export default function CoursesPage() {
    return (
        <main className="bg-primary min-h-screen">
            <PageHeader
                title="Our Courses"
                subtitle="Shape Your Career In Defence"
                image="/images/gallery8.jpg"
            />
            <CoursesGrid />
        </main>
    );
}
