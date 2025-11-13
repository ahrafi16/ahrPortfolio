import SectionHeading from "@/components/ui/SectionHeading";
import Image from "next/image";
import { Github, SquareArrowOutUpRight } from 'lucide-react';


const page = () => {
    const projects = [
        {
            "title": "Exclusive",
            "description": "A modern e-commerce front-end project built with React, Firebase, and Tailwind CSS to showcase my projects and skills.",
            "technologies": ["React", "Tailwind CSS", "Firebase"],
            "photo": ["/p1.png", "/p1_mobile.png"],
            "githubLink": "https://github.com/ahrafi16/Exclusive.git",
            "liveDemo": "https://vermillion-entremet-c7f3c5.netlify.app/"
        }
    ];
    return (
        <div className="min-h-screen pt-40">
            <SectionHeading
                badge="Portfolio"
                title="My Projects"
                description="Discover my recent projects showcasing diverse technologies."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {
                    projects.map((project, index) => (
                        <div key={index} className="bg-[#27293a] p-9 border border-gray-600 rounded-xl space-y-5 group hover:border-gray-400 transition-all duration-300">
                            <div className="flex justify-center items-center">
                                <Image
                                    className="rounded-lg group-hover:scale-105 transition-transform duration-300"
                                    src={project.photo[0]}
                                    width={500}
                                    height={500}
                                    alt="ANJUM HOSSAIN RAFI"
                                />
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold">{project.title}</h2>
                                <p className="text-second">{project.description}</p>
                                <div className="flex gap-2 items-center">
                                    {
                                        project.technologies.map((tech) => (
                                            <span className="bg-slate-900 py-1 px-2 rounded-4xl text-sm" key={tech}>{tech}</span>
                                        ))
                                    }
                                </div>
                                <div className="flex gap-2 mt-4">
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="liquid-glass flex items-center justify-center gap-2 px-5 py-2 text-white text-sm rounded-full border border-white/20 transition-all duration-300 ease-in-out hover:px-7"
                                    >
                                        <Github className="w-4 h-4" />
                                        <span>GitHub</span>
                                    </a>
                                    <a
                                        href={project.liveDemo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="liquid-glass flex items-center justify-center gap-2 px-5 py-2 text-white text-sm rounded-full border border-white/20 transition-all duration-300 ease-in-out hover:px-7"
                                    >
                                        <SquareArrowOutUpRight className="w-4 h-4" />
                                        <span>Demo</span>
                                    </a>

                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default page;