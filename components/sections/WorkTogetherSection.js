import { Star, ChevronRight } from 'lucide-react';
import Button from '../ui/Button';

const WorkTogetherSection = () => {
    return (
        <div className='bg-[#27293a] flex flex-col items-center gap-7 p-7 border border-gray-600 rounded-xl'>
            <span className='flex  p-3 rounded-lg text-purple-400 bg-purple-400/10'>
                <Star />
            </span>

            <h2 className='text-xl font-semibold'>Let&apos;s Work Together</h2>
            <p className='text-second max-w-3xl text-center'>I&apos;m currently open to exciting opportunities and collaborations. If you have a project or idea in mind, let&apos;s connect and create something impactful together!</p>
            <Button className='flex items-center gap-1'>Get in Touch<ChevronRight /></Button>
        </div>
    );
};

export default WorkTogetherSection;