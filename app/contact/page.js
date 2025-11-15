"use client";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { Github, GraduationCap, Instagram, Linkedin, Mail, MapPin, Facebook, Send, MessageSquare, FileText, User } from "lucide-react";
import emailjs from '@emailjs/browser';


const page = () => {
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_7vunz6f', 'template_6e9274f', e.target, 'iA7fyh7grwsfZRLLw')
            .then((result) => {
                console.log(result.text);
                alert("Message sent successfully!");
            }).catch((error) => {
                alert("Failed to send message, please try again. Error: " + error.text);
            });
    }
    return (
        <div className="min-h-screen pt-40">
            <SectionHeading
                badge="Get in Touch"
                title="Let&apos;s Connect"
                description="Feel free to reach out for collaborations or just a friendly hello."
            />

            <div className="flex flex-col lg:flex-row gap-10 my-20">

                {/* LEFT SIDE: CONTACT INFO */}
                <div className="space-y-10 w-full">
                    <div className="bg-[#27293a] p-5 border space-y-3 border-gray-700 rounded-xl">
                        <h2 className="text-xl text-prim font-semibold">Contact Information</h2>

                        {/* Email */}
                        <div className="flex gap-3 bg-second/10 p-3 rounded-lg mt-4 items-center">
                            <span className="flex p-3 rounded-lg text-purple-400 bg-purple-400/10">
                                <Mail />
                            </span>
                            <span>
                                <p className="font-semibold">Email</p>
                                <p className="text-sm text-second break-all">anjumhossainrafi16@gmail.com</p>
                            </span>
                        </div>

                        {/* Location */}
                        <div className="flex gap-3 bg-second/10 p-3 rounded-lg mt-4 items-center">
                            <span className="flex p-3 rounded-lg text-purple-400 bg-purple-400/10">
                                <MapPin />
                            </span>
                            <span>
                                <p className="font-semibold">Location</p>
                                <p className="text-sm text-second">Savar, Dhaka, Bangladesh</p>
                            </span>
                        </div>

                        {/* Social Media */}
                        <div className="mt-6">
                            <p className="text-prim font-semibold">Social Media</p>
                            <div className="flex items-center gap-4 mt-2 text-gray-400">
                                <a className="bg-second/10 p-2 rounded-full hover:text-prim transition-colors" href="https://github.com/ahrafi16" target="_blank">
                                    <Github />
                                </a>
                                <a className="bg-second/10 p-2 rounded-full hover:text-prim transition-colors" href="https://www.linkedin.com/in/anjum-hossain-519a192b2/" target="_blank">
                                    <Linkedin />
                                </a>
                                <a className="bg-second/10 p-2 rounded-full hover:text-prim transition-colors" href="https://www.instagram.com/rafianjumhossain/" target="_blank">
                                    <Instagram />
                                </a>
                                <a className="bg-second/10 p-2 rounded-full hover:text-prim transition-colors" href="https://www.facebook.com/anjumhossain.rafi/" target="_blank">
                                    <Facebook />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#27293a] p-5 border space-y-3 border-gray-700 rounded-xl">
                        <p className="text-prim font-semibold">Response Time</p>
                        <p className="text-second">I am available at any time</p>
                    </div>
                </div>

                {/* RIGHT SIDE: CONTACT FORM */}
                <form
                    onSubmit={sendEmail}
                    className="w-full bg-[#27293a] p-8 border border-gray-700 rounded-xl space-y-5">

                    {/* Top Row - Name + Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-second">Your Name</label>
                            <div className="flex items-center bg-[#1e1f2a] border border-gray-700 rounded-lg px-3 py-2 gap-2">
                                <User className="text-gray-400" size={18} />
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full bg-transparent outline-none text-gray-300"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-second">Email</label>
                            <div className="flex items-center bg-[#1e1f2a] border border-gray-700 rounded-lg px-3 py-2 gap-2">
                                <Mail className="text-gray-400" size={18} />
                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                    className="w-full bg-transparent outline-none text-gray-300"
                                />
                            </div>
                        </div>

                    </div>

                    {/* Subject */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-second">Subject</label>
                        <div className="flex items-center bg-[#1e1f2a] border border-gray-700 rounded-lg px-3 py-2 gap-2">
                            <FileText className="text-gray-400" />
                            <input
                                type="text"
                                placeholder="Project inquiry / Job opportunity / Collaboration..."
                                className="w-full bg-transparent outline-none text-gray-300"
                            />
                        </div>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-second">Message</label>
                        <div className="flex items-start bg-[#1e1f2a] border border-gray-700 rounded-lg px-3 py-2 gap-2">
                            <MessageSquare className="text-gray-400" />
                            <textarea
                                rows="3"
                                placeholder="Tell me more about your project, timeline, and what you're looking to achieve..."
                                className="w-full bg-transparent outline-none text-gray-300 resize-none"
                            ></textarea>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <Button className="flex items-center gap-2 w-full justify-center">
                        <Send size={18} />
                        Send Message
                    </Button>

                    <p className="text-center text-sm text-gray-400 mt-2">
                        I value your privacy. Your information will never be shared with third parties.
                    </p>
                </form>
            </div>
        </div>
    );
};

export default page;