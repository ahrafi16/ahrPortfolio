import Image from "next/image";
import SectionHeading from "../ui/SectionHeading";


const TechStackSection = () => {
    const languages = [
        { name: "HTML5", icon: "/html-5.png" },
        { name: "CSS3", icon: "/css-3.png" },
        { name: "Tailwind CSS", icon: "/tailwind.svg" },
        { name: "JavaScript", icon: "/js.png" },
        { name: "React", icon: "/physics.png" },
        { name: "Next.js", icon: "/nextjs.svg" },
        { name: "Python", icon: "/python.png" },
        { name: "Laravel", icon: "/laravel.png" },
        { name: "MySQL", icon: "/mysql.svg" },
    ];
    return (
        <div className='flex flex-col gap-5 my-20 items-center'>
            <SectionHeading
                badge="Skills"
                title="Tech Stack"
                description="A collection of technologies I work with to build web applications and solve complex problems."
            />
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-6 mt-6">
                {languages.map((lang, index) =>
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center p-5 md:p-6 bg-white/20 border border-prim/70 rounded-full shadow-md hover:scale-105 cursor-grabbing transition duration-300">
                        <Image
                            src={lang.icon}
                            width={500}
                            height={500}
                            alt="Picture of the author"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default TechStackSection;