import SectionHeading from "@/components/ui/SectionHeading";
import Image from "next/image";
import { User, GraduationCap, Code, BookOpen } from 'lucide-react';
import FadeUp from "@/components/fadeup/FadeUp";


const page = () => {
    const aboutData = [
        {
            key: "personalInterests",
            title: "Personal Interests",
            icon: <User />,
            items: [
                "Web development projects",
                "Exploring new technologies",
                "Solving algorithmic challenges",
                "Open-source contributions"
            ]
        },
        {
            key: "codingPhilosophy",
            title: "Coding Philosophy",
            icon: <Code />,
            items: [
                "Clean and maintainable code",
                "Focus on user experience",
                "Continuous learning and improvement",
                "Building with scalability in mind"
            ]
        },
        {
            key: "educationJourney",
            title: "Education Journey",
            icon: <GraduationCap />,
            items: [
                "Computer Science fundamentals",
                "Data structures and algorithms",
                "Machine learning and AI",
                "Self-taught web development"
            ]
        },
        {
            key: "futureGoals",
            title: "Future Goals",
            icon: <BookOpen />,
            items: [
                "Mastering advanced AI techniques",
                "Building impactful web applications",
                "Contributing to open-source projects",
                "Hunting a challenging role in tech industry"
            ]
        }
    ];

    return (
        <div className="min-h-screen pt-40">
            <SectionHeading
                badge="About Me"
                title="Know About Me"
                description="Computer Science graduate specializing in full-stack web development, focused on creating responsive, high-performance applications using modern web technologies."
            />
            <div className="flex flex-col md:flex-row items-center my-20 gap-10">
                <FadeUp direction="right">
                    <div className="bg-[#27293a] flex-1 flex items-center justify-center p-9 border border-gray-600 rounded-xl">
                        <Image
                            className="rounded-lg"
                            src="/anjum_portfolio.jpeg"
                            width={500}
                            height={500}
                            alt="ANJUM HOSSAIN RAFI"
                        />
                    </div>
                </FadeUp>
                <div className="flex-1">
                    <h2 className="text-2xl font-semibold">Who am I?</h2>
                    <p className="text-justify leading-7 mt-5 text-second">
                        I&apos;m <span className="text-prim">Anjum Hossain</span>, a Computer Science graduate and Full Stack Web Developer with a passion for building modern, responsive, and user-focused web applications.

                        <br /><br />

                        My journey into software development began with a curiosity for solving real-world problems through technology. Since then, I&apos;ve gained hands-on experience developing full-stack applications using React, Next.js, Node.js, Express.js, MongoDB, and Tailwind CSS, while continuously expanding my knowledge of modern development practices.

                        <br /><br />

                        I enjoy transforming ideas into scalable digital solutions and writing clean, maintainable code that delivers meaningful user experiences. As a lifelong learner, I&apos;m always exploring new technologies and improving my skills to grow as a software engineer.

                        <br /><br />

                        Outside of coding, I enjoy exploring new AI tools and technologies, playing cricket, watching movies, and spending time with video games.
                    </p>
                </div>
            </div>



            <SectionHeading
                title="More About Me"
            />
            <FadeUp>
                <div className="grid grid-cols-1 my-20 gap-8 md:grid-cols-2">
                    {
                        aboutData.map((section, index) => (
                            <div className="bg-[#27293a] p-5 border border-gray-600 rounded-xl transition duration-300 hover:scale-105" key={index}>
                                <div className="flex gap-5 items-center">
                                    <span className='flex  p-3 rounded-lg text-purple-400 bg-purple-400/10'>
                                        {section.icon}
                                    </span>

                                    <h2 className="text-xl font-semibold">{section.title}</h2>
                                </div>
                                <ul className="list-disc list-inside mt-4 text-second">
                                    {section.items.map((item, idx) => (
                                        <li key={idx} className="mb-2">{item}</li>
                                    ))}
                                </ul>
                            </div>
                        )
                        )
                    }
                </div>
            </FadeUp>
        </div>
    );
};

export default page;