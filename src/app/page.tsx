import Hero from "@/components/Hero";
import Mission from "@/components/home/Mission";
import CoursesGrid from "@/components/home/CoursesGrid";
import Mentors from "@/components/home/Mentors";
import Testimonials from "@/components/home/Testimonials";
import Updates from "@/components/home/Updates";
import BranchesPreview from "@/components/home/BranchesPreview";
import CTA from "@/components/home/CTA";
import FAQ from "@/components/home/FAQ";
import HallOfFame from "@/components/HallOfFame";
import MainTeachers from "@/components/home/MainTeachers";

export default function Home() {
  return (
    <main className="min-h-screen bg-primary">
      <Hero />
      <Mission />
      <HallOfFame />
      <CoursesGrid />
      <Mentors />
      <MainTeachers />
      <Testimonials />
      <Updates />
      <FAQ />
      <BranchesPreview />
      <CTA />
    </main>
  );
}
