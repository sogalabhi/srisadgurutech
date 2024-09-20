"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils.ts";
import { Meteors } from "./magicui/meteors.tsx";

export function AboutSection() {
    return (
        <>
            <LampContainer className="bg-white dark:bg-slate-950">
                <motion.h1
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.1,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="mt-8 text-slate-950 dark:bg-gradient-to-br dark:from-slate-300 dark:to-slate-500 py-4 dark:bg-clip-text text-center text-4xl font-medium tracking-tight dark:text-transparent md:text-7xl"
                >
                    About the Company
                </motion.h1>
                <motion.h2
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.5,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="mx-20 text-slate-950 dark:bg-gradient-to-br from-slate-300 to-slate-500 py-4 dark:bg-clip-text text-center font-medium dark:tracking-tight dark:text-transparent md:text-xl">At SriSadguru, we specialize in crafting cutting-edge applications and dynamic websites that empower businesses and individuals to thrive in the digital age. Established with a passion for technology and a commitment to excellence, we bring together a team of skilled developers, designers, and strategists dedicated to transforming ideas into impactful digital experiences.</motion.h2>
                <button className="my-3 dark:bg-white bg-slate-950 hover:bg-slate-900 dark:text-black text-white hover:text-white border-neutral-200 hover:border-slate-800 py-3 px-5 rounded-full">
                    Contact Us
                </button>
            </LampContainer>

            <section className='flex gap-20 justify-center py-20 items-center flex-col lg:flex-row'>
                <div className=" w-full relative max-w-xs h-[300px]">
                    <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                    <div className="relative shadow-xl dark:bg-gray-900 border dark:border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-center">
                        <h1 className="font-bold text-xl text-slate-950 dark:text-white mb-4 relative">
                            Vision
                        </h1>

                        <p className="font-normal text-base text-slate-900 dark:text-slate-500 mb-4 relative text-center">
                            To be the leading innovator in software solutions, transforming businesses worldwide through cutting-edge technology and exceptional customer experiences.
                        </p>

                        {/* Meaty part - Meteor effect */}
                        <Meteors number={20} />
                    </div>
                </div>
                <div className=" w-full relative max-w-xs h-[300px]">
                    <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                    <div className="relative shadow-xl dark:bg-gray-900 border dark:border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-center">
                        <h1 className="font-bold text-xl text-slate-950 dark:text-white mb-4 relative ">
                            Mission
                        </h1>

                        <p className="font-normal text-base text-slate-900 dark:text-slate-500 mb-4 relative text-center">
                            Our mission is to empower businesses with bespoke software solutions that drive efficiency, growth, and customer satisfaction. Through collaborative partnerships and relentless innovation, we deliver high-quality, scalable software tailored to meet the unique needs of our clients.

                        </p>

                        {/* Meaty part - Meteor effect */}
                        <Meteors number={20} />
                    </div>
                </div>
            </section>
        </>
    );
}

export const LampContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div id="about"
            className={cn(
                "relative flex min-h-screen mb-[-300px] flex-col items-center justify-center overflow-hidden w-full rounded-md z-0",
                className
            )}
        >
            <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
                <motion.div
                    initial={{ opacity: 0.5, width: "15rem" }}
                    whileInView={{ opacity: 1, width: "30rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    style={{
                        backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                    }}
                    className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-orange-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
                >
                    <div className="absolute  w-[100%] left-0 bg-white dark:bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
                    <div className="absolute  w-40 h-[100%] left-0 bg-white dark:bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0.5, width: "15rem" }}
                    whileInView={{ opacity: 1, width: "30rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    style={{
                        backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                    }}
                    className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-orange-500 text-white [--conic-position:from_290deg_at_center_top]"
                >
                    <div className="absolute  w-40 h-[100%] right-0 bg-white dark:bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
                    <div className="absolute  w-[100%] right-0 bg-white dark:bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
                </motion.div>
                <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-white dark:bg-slate-950 blur-2xl"></div>
                <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
                <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-orange-500 opacity-50 blur-3xl"></div>
                <motion.div
                    initial={{ width: "8rem" }}
                    whileInView={{ width: "16rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-orange-400 blur-2xl"
                ></motion.div>
                <motion.div
                    initial={{ width: "15rem" }}
                    whileInView={{ width: "30rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-orange-400 "
                ></motion.div>

                <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-white dark:bg-slate-950 "></div>
            </div>

            <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
                {children}
            </div>

        </div>
    );
};
