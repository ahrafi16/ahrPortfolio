import ProjectSection from "@/components/sections/ProjectSection"
import HeroSection from "@/components/sections/HeroSection"
import AboutSection from "@/components/sections/AboutSectioin"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <HeroSection />
      <AboutSection />
      <ProjectSection />
    </div>
  );
}