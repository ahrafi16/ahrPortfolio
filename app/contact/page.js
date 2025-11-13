import SectionHeading from "@/components/ui/SectionHeading";
import { Github, GraduationCap, Instagram, Linkedin, Mail, MapPin, Facebook } from "lucide-react";


const page = () => {
    return (
        <div className="min-h-screen pt-40">
            <SectionHeading
                badge="Get in Touch"
                title="Let&apos;s Connect"
                description="Feel free to reach out for collaborations or just a friendly hello."
            />

            <div className="flex">
                <div className="space-y-5">
                    <div className="bg-[#27293a] p-5 border space-y-3 border-gray-600 rounded-xl">
                        <h2 className="text-xl text-prim font-semibold">Contact Information</h2>
                        <div>
                            <div className="flex gap-2 bg-second/10 p-3 rounded-lg mt-4 items-center">
                                <span className='flex  p-3 rounded-lg text-purple-400 bg-purple-400/10'>
                                    <Mail />
                                </span>
                                <span>
                                    <p className="font-semibold">Email</p>
                                    <p className="text-sm text-second">anjumhossainrafi16@gmail.com</p>
                                </span>
                            </div>
                            <div className="flex gap-2 bg-second/10 p-3 rounded-lg mt-4 items-center">
                                <span className='flex  p-3 rounded-lg text-purple-400 bg-purple-400/10'>
                                    <MapPin />
                                </span>
                                <span>
                                    <p className="font-semibold">Location</p>
                                    <p className="text-sm text-second">Savar, Dhaka, Bangladesh</p>
                                </span>
                            </div>
                            <div className="mt-6">
                                <p className="text-prim font-semibold">Social Media</p>
                                <div className='flex items-center gap-4 mt-2 text-gray-400'>
                                    <a className='bg-second/10 p-2 rounded-full hover:text-prim transition-colors' href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
                                        <Github />
                                    </a>
                                    <a className='bg-second/10 p-2 rounded-full hover:text-prim transition-colors' href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                                        <Linkedin />
                                    </a>
                                    <a className='bg-second/10 p-2 rounded-full hover:text-prim transition-colors' href="https://instagram.com/your-username" target="_blank" rel="noopener noreferrer">
                                        <Instagram />
                                    </a>
                                    <a className='bg-second/10 p-2 rounded-full hover:text-prim transition-colors' href="mailto:your-email@example.com">
                                        <Facebook />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#27293a] p-5 border space-y-3 border-gray-600 rounded-xl">
                        <p className="text-prim font-semibold">Response Time</p>
                        <p className="text-second">I am available at any time</p>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default page;