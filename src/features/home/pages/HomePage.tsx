import HeroSection from "@/features/home/components/HeroSection";
import AboutSection from "@/features/home/components/AboutSection";
import ExperienceSection from "@/features/home/components/ExperienceSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="max-w-6xl mx-auto px-6 pt-8">
        <AboutSection />
        <ExperienceSection />
      </div>
    </>
  );
}
