"use client";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const AboutSectioin = () => {
    return (
        <div>
            <p>About Me</p>
            <h2>Who I Am</h2>
            <p>A Computer Science student with a strong focus on both Frontend and Backend development. I&apos;m passionate about turning ideas into modern, dynamic, and user-focused web applications</p>
            <div className="grid grid-cols-1 md:grid-cols-3">
                <div className='bg-[#27293a] flex flex-col items-center gap-5 p-7 border border-gray-600 rounded-xl'>
                    <span className='flex  p-3 rounded-lg text-purple-400 bg-purple-400/10'>
                        <ChevronLeft />
                        <ChevronRight />
                    </span>

                    <h2 className='text-xl font-semibold'>Web Development</h2>
                    <p className='text-second'>Experienced in creating fast, modern, and responsive web applications using React.js, Next.js, and Laravel.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutSectioin;