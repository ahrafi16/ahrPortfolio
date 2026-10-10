import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import { getProjects } from "@/app/lib/getProjects";

const page = async () => {
    const projects = await getProjects();

    return (
        <div className="min-h-screen pt-40">
            <SectionHeading
                badge="Portfolio"
                title="My Projects"
                description="Discover my recent projects showcasing diverse technologies."
            />
            <div className="grid grid-cols-1 my-20 md:grid-cols-3 gap-10">
                {projects.map((p, i) => (
                    <ProjectCard key={p._id ?? i} project={p} />
                ))}
            </div>
        </div>
    );
};

export default page;