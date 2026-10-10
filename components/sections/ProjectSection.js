import React from 'react';
import SectionHeading from "@/components/ui/SectionHeading";
import { getProjects } from '@/app/lib/getProjects';
import ProjectCard from '../ui/ProjectCard';
import Button from '../ui/Button';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import FadeUp from '../fadeup/FadeUp';

const ProjectSection = async () => {
    const projects = await getProjects();
    const featuredProjects = projects.slice(0, 3);
    return (
        <div className='flex flex-col gap-5 items-center'>
            <SectionHeading
                badge="Portfolio"
                title="Featured Projects"
                description="A selection of my recent web development and programming projects."
            />
            <FadeUp>
                <div className='grid grid-cols-1 my-20 md:grid-cols-3 gap-10'>
                    {featuredProjects.map((p, i) => <ProjectCard key={p._id ?? i} project={p} />)}
                </div>
            </FadeUp>
            <Link href="/projects">
                <Button className='flex items-center gap-1'>View All Projects <ChevronRight /></Button>
            </Link>

        </div>
    );
};

export default ProjectSection;