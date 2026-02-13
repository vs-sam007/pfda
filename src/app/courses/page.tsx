import PageHeader from "@/components/PageHeader";
import CoursesGrid from "@/components/home/CoursesGrid";

export default function CoursesPage() {
    return (
        <main className="bg-primary min-h-screen">
            <PageHeader
                title="Our Courses"
                subtitle="Shape Your Career In Defence"
                image="https://images.unsplash.com/photo-1453491945771-a1e904948959?q=80&w=2070&auto=format&fit=crop"
            />
            <CoursesGrid />
        </main>
    );
}
