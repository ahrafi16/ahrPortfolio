import SectionHeading from "@/components/ui/SectionHeading";
import Image from "next/image";


const page = () => {
    return (
        <div className="min-h-screen pt-40     ">
            <SectionHeading
                badge="About Me"
                title="Know About Me"
                description="A Computer Science student with a strong focus on both Frontend and Backend development. I&apos;m passionate about turning ideas into modern, dynamic, and user-focused web applications"
            />
            <div>
                <div>
                    <Image
                        src="/physics.png"
                        width={500}
                        height={500}
                        alt="ANJUM HOSSAIN RAFI"
                    />
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default page;