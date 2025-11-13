"use client";
import { Code, GraduationCap, Briefcase, ChevronRight } from 'lucide-react';
import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';
import Link from 'next/link';

const AboutSectioin = () => {
    return (
        <div className='flex flex-col gap-5 items-center'>
            <SectionHeading
                badge="About Me"
                title="Who I Am"
                description="A Computer Science student with a strong focus on both Frontend and Backend development. I&apos;m passionate about turning ideas into modern, dynamic, and user-focused web applications"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-5">
                <div className='bg-[#27293a] flex flex-col items-center gap-5 p-7 border border-gray-600 rounded-xl'>
                    <span className='flex  p-3 rounded-lg text-purple-400 bg-purple-400/10'>
                        <Code />
                    </span>

                    <h2 className='text-xl font-semibold'>Web Development</h2>
                    <p className='text-second'>Experienced in creating fast, modern, and responsive web applications using React.js, Next.js, and Laravel.</p>
                </div>
                <div className='bg-[#27293a] flex flex-col items-center gap-5 p-7 border border-gray-600 rounded-xl'>
                    <span className='flex  p-3 rounded-lg text-purple-400 bg-purple-400/10'>
                        <GraduationCap />
                    </span>

                    <h2 className='text-xl font-semibold'>Computer Science</h2>
                    <p className='text-second'>Strong foundation in algorithms, data structures, and core programming principles.</p>
                </div>
                <div className='bg-[#27293a] flex flex-col items-center gap-5 p-7 border border-gray-600 rounded-xl'>
                    <span className='flex  p-3 rounded-lg text-purple-400 bg-purple-400/10'>
                        <Briefcase />

                    </span>

                    <h2 className='text-xl font-semibold'>Professional Experience</h2>
                    <p className='text-second'>Experienced in building fast, modern, and responsive web applications using React.js, Next.js, and Laravel.</p>
                </div>
            </div>
            <Link href="/about">
                <Button className='flex items-center gap-1 my-5'>More About Me <ChevronRight /></Button>
            </Link>

        </div>
    );
};

export default AboutSectioin;