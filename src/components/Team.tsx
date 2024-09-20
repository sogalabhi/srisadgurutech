
import { motion } from "framer-motion";
import { Meteors } from "./magicui/meteors";

export default function TeamSection() {
    return (
        <div className="min-h-96 " id="team">
            <motion.h1
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="pt-10 dark:bg-gradient-to-br dark:from-slate-300 dark:to-slate-500 py-4 dark:bg-clip-text text-center text-4xl font-medium tracking-tight dark:text-transparent md:text-7xl"
            >
                Our Team
            </motion.h1>
            <motion.section
                className='grid grid-cols-1 lg:grid-cols-3 gap-20 px-20 pb-20 pt-5'>
                {dummyContent.map((item) => (
                    <motion.div
                        initial={{ opacity: 0.5, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.1,
                            duration: 0.8,
                            ease: "easeInOut",
                        }}
                        className=" w-full relative min-h-[300px]">
                        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                        <div className="relative shadow-xl dark:bg-gray-900 border dark:border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-center">
                            <div className="w-40 h-40 bg-white">
                                {item.image}
                            </div>
                            <h1 className="font-bold text-xl text-slate-950 dark:text-white pt-2 relative">
                                {item.title}
                            </h1>
                            <p className="font-normal text-base text-slate-950 dark:text-slate-500 mb-4 relative text-center">{item.position}</p>
                            {/* Meaty part - Meteor effect */}
                            <Meteors number={20} />
                        </div>
                    </motion.div>
                ))}

            </motion.section>
        </div>
    )
}

const dummyContent = [
    {
        title: "Person 1",
        position: "Position 1",
        image:
            "Photo 1",
    },
    {
        title: "Person 2",
        position: "Position 2",
        image:
            "Photo 2",
    },
    {
        title: "Person 3",
        position: "Position 3",
        image:
            "Photo 3",
    },
    {
        title: "Person 4",
        position: "Position 4",
        image:
            "Photo 4",
    },
    {
        title: "Person 5",
        position: "Position 5",
        image:
            "Photo 5",
    },
    {
        title: "Person 6",
        position: "Position 6",
        image:
            "Photo 6",
    },
];