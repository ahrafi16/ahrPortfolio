import ProjectSection from "@/components/sections/ProjectSection"
import HeroSection from "@/components/sections/HeroSection"
import AboutSection from "@/components/sections/AboutSectioin"
import TechStackSection from "@/components/sections/TechStackSection";
import WorkTogetherSection from "@/components/sections/WorkTogetherSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[14px_24px]"></div> */}
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <ProjectSection />
      <WorkTogetherSection />
    </div>
  );
}