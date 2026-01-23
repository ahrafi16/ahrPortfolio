import Image from "next/image";
import SectionHeading from "../ui/SectionHeading";


const TechStackSection = () => {
    const languages = [
        { name: "HTML5", icon: "/html.svg" },
        { name: "CSS3", icon: "/css.svg" },
        { name: "Tailwind CSS", icon: "/tailwindCss.svg" },
        { name: "JavaScript", icon: "/javascript.png" },
        { name: "React", icon: "/react.svg" },
        { name: "Next.js", icon: "/next.svg" },
        { name: "Node,js", icon: "/js.svg" },
        { name: "Express", icon: "/ex.png" },
        { name: "MongoDB", icon: "/MongoDB.svg" },
        { name: "MySQL", icon: "/sql.svg" },
        { name: "Python", icon: "/python.svg" },
        { name: "Postman", icon: "/postman.svg" },
        { name: "github", icon: "/github.svg" },
        { name: "Firebase", icon: "/firebase.svg" },
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
                        className="flex flex-col items-center justify-center p-4 md:p-6 bg-second rounded-3xl shadow-md hover:scale-105 cursor-grabbing transition duration-300">
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