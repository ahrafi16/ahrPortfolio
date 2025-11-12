import SectionHeading from "@/components/ui/SectionHeading";
import Image from "next/image";


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
                        <div key={index} className="bg-[#27293a] p-9 border border-gray-600 rounded-xl">
                            <div className="flex gap-5 items-center">
                                <Image
                                    className="rounded-lg"
                                    src={project.photo[0]}
                                    width={500}
                                    height={500}
                                    alt="ANJUM HOSSAIN RAFI"
                                />
                                <Image
                                    className="rounded-lg"
                                    src={project.photo[1]}
                                    width={80}
                                    height={80}
                                    alt="ANJUM HOSSAIN RAFI"
                                />
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold">{project.title}</h2>
                                <p className="text-second">{project.description}</p>
                                <div>
                                    {
                                        project.technologies.map((tech)) => (
                                    <span key={tech}>{tech}</span>
                                    ))
                                    }
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