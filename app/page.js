import ProjectSection from "@/components/sections/ProjectSection"
import HeroSectioiin from "@/components/sections/HeroSection"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <HeroSectioiin />
      <ProjectSection />
    </div>
  );
}