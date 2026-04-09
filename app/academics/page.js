import FadeUp from "@/components/fadeup/FadeUp";
import SectionHeading from "@/components/ui/SectionHeading";
import { GraduationCap, MapPin } from 'lucide-react';



const page = () => {
    const educations = [
        {
            "institution": "BSc. in CSE",
            "name": "Daffodil International University",
            "department": "Computer Science and Engineering",
            "start_year": 2021,
            "end_year": 2025,
            "location": "Daffodil Smart City (DSC), Birulia, Savar, Dhaka-1216.",
            "cgpa": '3.83'
        },
        {
            "institution": "H.S.C.",
            "name": "Savar Model College",
            "stream": "Science",
            "start_year": 2019,
            "end_year": 2020,
            "location": "30/23 - Shahibag, Savar, Dhaka, Bangladesh",
            "cgpa": '5.00'
        },
        {
            "institution": "S.S.C.",
            "name": "Savar Cantonement Board Boys' High School",
            "stream": "Science",
            "board": "State Board of Karnataka",
            "end_year": 2018,
            "location": "Savar Cantonment, Savar, Dhaka",
            "cgpa": '5.00'
        },

    ]
    return (
        <div className="min-h-screen pt-40">
            <SectionHeading
                badge="Academics"
                title="Educational Background"
                description="My academic journey, courses, and educational achievements that have shaped my technical expertise."
            />
            <h1 className="text-2xl font-bold text-center my-5">Education</h1>
            <FadeUp>
                <div className="grid grid-cols-1 my-20 gap-8 md:grid-cols-3">
                    {
                        educations.map((section, index) => (
                            <div className="bg-[#27293a] p-5 border space-y-3 border-gray-600 rounded-xl transition duration-300 hover:scale-105" key={index}>
                                <div className="flex justify-between items-center">
                                    <div className="flex gap-5 items-center">
                                        <span className='flex  p-3 rounded-lg text-purple-400 bg-purple-400/10'>
                                            <GraduationCap />
                                        </span>
                                        <h2 className="text-xl font-semibold">{section.institution}</h2>
                                    </div>
                                    <p> {section.end_year}</p>
                                </div>
                                <p className="text-xl font-semibold">{section.name}</p>
                                <p className="text-second"> ➤ {section.location}</p>
                                <p className="flex text-second justify-between items-center">{section.stream ? section.stream : section.department} <span>{section.cgpa}</span>
                                </p>
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