import SectionHeading from "@/components/ui/SectionHeading";
import Image from "next/image";
import { Github, SquareArrowOutUpRight } from 'lucide-react';
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";


const page = () => {
    
    return (
        <div className="min-h-screen pt-40">
            <SectionHeading
                badge="Portfolio"
                title="My Projects"
                description="Discover my recent projects showcasing diverse technologies."
            />
            <div className="grid grid-cols-1 my-20 md:grid-cols-3 gap-10">
                {projects.map((p, i) => <ProjectCard key={i} project={p} />)}

            </div>
        </div>
    );
};

export default page;