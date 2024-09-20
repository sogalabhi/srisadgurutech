"use client";

import { cn } from "../../lib/utils.ts";
import AnimatedGridPattern from "./magicui/animated-grid-pattern.tsx";
import ShimmerButton from "./magicui/shimmer-button.tsx";

const HeroSection = ({ isDark }: any) => {
    const fillColor = isDark ? "#fff" : "#000"
    return (
        <div className=" relative flex flex-col h-[100vh] w-full items-center justify-center overflow-hidden bg-background p-20 md:shadow-xl">
            <p className="z-10 whitespace-pre-wrap text-center text-6xl lg:text-8xl tracking-tighter dark:text-white poppins-black mb-5">
                SriSadguru tech
            </p>
            <p className="z-10 whitespace-pre-wrap text-center text-xl lg:text-3xl tracking-tighter dark:text-white poppins-regular">
                Empowering Digital Interactions
            </p>
            <ShimmerButton className="shadow-2xl mt-3">
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight dark:text-white dark:from-white lg:text-lg">
                    Learn more
                </span>
            </ShimmerButton>
            <AnimatedGridPattern
                fillColor = {fillColor}
                numSquares={100}
                maxOpacity={0.5}
                duration={3}
                repeatDelay={1}
                className={cn(
                    "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
                    "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
                )}
            />
        </div>
    );
};

export default HeroSection;
