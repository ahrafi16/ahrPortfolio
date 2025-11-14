"use client";
// import Image from "next/image";
import Button from "../ui/Button";
import { ChevronRight } from 'lucide-react';
import Link from "next/link";
// import developerAnimation from "/developer.json";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";




const HeroSectioiin = () => {
    const [animationData, setAnimationData] = useState(null);
    useEffect(() => {
        fetch("/developer.json")
            .then((response) => response.json())
            .then((data) => setAnimationData(data))
            .catch((err) => console.error("Error loading Lottie JSON:", err));
    }, []);
    return (
        <div className="flex flex-col md:flex-row justify-between  pt-40 md:pt-0 min-h-screen items-center">

            <div className="flex flex-col gap-10 md:gap-5 flex-1">
                <p className="text-prim">Welcome to my portfolio</p>
                <h1 className="text-5xl font-bold">Hi, I&apos;m <br /> <span className="bg-linear-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Anjum Hossain</span>  </h1>
                <h3 className="text-2xl">Web Developer</h3>
                <p className="text-second">
                    Passionate software developer with expertise in Python, JavaScript, and C. Skilled in building modern, high-performance web applications using React.js, Next.js, and Laravel for the backend, with a strong focus on creating exceptional frontend experiences.
                </p>
                <div className="flex gap-5">
                    <Link href="/contact">
                        <Button className="flex items-center gap-1">Get in Touch <ChevronRight /></Button>
                    </Link>
                    <Link href="/projects">
                        <Button>View Projects</Button>
                    </Link>
                </div>
            </div>
            {/* <div className="flex justify-end
             flex-1 duration-300 filter-[drop-shadow(0_10px_20px_rgb(168_85_247_/0.5))]">
                <Image
                    className="drop-shadow-lg hover:drop-shadow-xl"
                    src="/pc.png"
                    width={500}
                    height={500}
                    alt="Computer"
                />
            </div> */}
            <div className="flex justify-end flex-1 duration-300">
                {animationData && (
                    <Lottie
                        animationData={animationData}
                        loop={true}
                        className="w-[500px] h-[500px] drop-shadow-lg hover:drop-shadow-xl hidden md:block"
                    />
                )}
            </div>
        </div>
    );
};

export default HeroSectioiin;