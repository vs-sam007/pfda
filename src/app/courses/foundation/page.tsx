import type { Metadata } from "next";
import FoundationCourseContent from "./FoundationCourseContent";

export const metadata: Metadata = {
    title: "NDA Foundation Coaching in Lucknow | Class 11 & 12 + NDA Preparation | PFDA",
    description: "Best NDA Foundation coaching in Lucknow for class 11 & 12 students. Integrated schooling + NDA exam preparation at Path Finder Defence Academy. Start your defence career early with the best NDA coaching for beginners.",
    keywords: ["NDA foundation coaching in Lucknow", "NDA coaching for class 11 and 12 students", "best NDA coaching institute for beginners", "NDA preparation after 12th", "best age to start NDA preparation"],
    alternates: { canonical: "https://pathfinderdefenceacademy.com/courses/foundation" },
};

export default function FoundationCoursePage() {
    return <FoundationCourseContent />;
}
