import Hero from "@/components/Hero";
import Mission from "@/components/home/Mission";
import CoursesGrid from "@/components/home/CoursesGrid";
import Mentors from "@/components/home/Mentors";
import ResultsWall from "@/components/home/ResultsWall";
import Testimonials from "@/components/home/Testimonials";
import Updates from "@/components/home/Updates";
import BranchesPreview from "@/components/home/BranchesPreview";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-primary">
      <Hero />
      <Mission />
      <CoursesGrid />
      <Mentors />
      <ResultsWall />
      <Testimonials />
      <Updates />
      <BranchesPreview />
      <CTA />
    </main>
  );
}
