import SectionHeading from "../ui/SectionHeading";


const TechStackSection = () => {
    return (
        <div className='flex flex-col gap-5 items-center'>
            <SectionHeading
                badge="Skills"
                title="Tech Stack"
                description="A collection of technologies I work with to build web applications and solve complex problems."
            />
        </div>
    );
};

export default TechStackSection;