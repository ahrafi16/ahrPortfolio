import React from 'react';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className='py-10 flex flex-col gap-8 px-5 md:px-30 mx-auto bg-prim/5'>

            <div className='flex flex-col md:flex-row justify-between gap-5 items-center '>
                <div className='flex flex-col gap-5'>
                    <h1 className='text-prim text-2xl font-semibold'>AHR</h1>
                    <p className='text-second max-w-2xl'>Crafting innovative digital solutions that combine elegant, efficient code with seamless and unforgettable user experiences.</p>
                </div>
                <div className='flex flex-col items-center md:items-end gap-5'>
                    <p className='text-second'>Connect with me</p>
                    <div>
                        <div className='flex items-center gap-4 text-gray-400'>
                            <a className='bg-slate-900 p-2 rounded-full hover:text-prim transition-colors' href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
                                <Github />
                            </a>
                            <a className='bg-slate-900 p-2 rounded-full hover:text-prim transition-colors' href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                                <Linkedin />
                            </a>
                            <a className='bg-slate-900 p-2 rounded-full hover:text-prim transition-colors' href="https://instagram.com/your-username" target="_blank" rel="noopener noreferrer">
                                <Instagram />
                            </a>
                            <a className='bg-slate-900 p-2 rounded-full hover:text-prim transition-colors' href="mailto:your-email@example.com">
                                <Mail />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-second text-center'>
                © {currentYear} Anjum Hossain. All rights reserved.
            </div>
        </div>
    );
};

export default Footer;