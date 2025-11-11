import React from 'react';
import SectionHeading from "@/components/ui/SectionHeading";

const ProjectSection = () => {
    return (
        <div className='flex flex-col gap-5 items-center'>
            <SectionHeading
                badge="Portfolio"
                title="Featured Projects"
                description="A selection of my recent web development and programming projects."
            />
        </div>
    );
};

export default ProjectSection;