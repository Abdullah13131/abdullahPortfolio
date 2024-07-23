"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
    {
        num: "01",
        title: "UI/UX Designing",
        description: "Dedicated to creating intuitive and visually appealing interfaces that enhance user experience. Experienced in using modern design principles to develop seamless and responsive web and mobile applications, ensuring optimal usability and satisfaction.",
        href: ""
    },
    {
        num: "02",
        title: "Mobile Development",
        description: "Skilled in building high-performance, cross-platform mobile apps with smooth user experiences. Having experience in React Native with Expo as well as CLI to deliver efficient, scalable, and visually appealing mobile applications.",
        href: ""
    },
    {
        num: "03",
        title: "Web Development",
        description: "Experienced in building dynamic and responsive websites using modern technologies. Having experience in both front-end and back-end development, creating seamless user experiences and efficient web applications. Experienced in utilizing frameworks and libraries to deliver high-quality, scalable web solutions.",
        href: ""
    },
    {
        num: "04",
        title: "Full Stack Development",
        description: "Aspiring Full Stack Developer with a strong foundation in both front-end and back-end technologies. Passionate about learning frameworks like MERN stack to build comprehensive web applications. Eager to design intuitive user interfaces, manage databases, and ensure seamless integration for optimal performance and user experience.",
        href: ""
    },
];

const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 1, duration: 0.4, ease: "easeIn" },
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {services.map((service, index) => {
                        return (
                            <div key={index} className="flex-1 flex flex-col justify-center gap-6 group ">
                                <div className="w-full flex justify-between items-center">
                                    <div className="text-5xl font-extrabold text-outline text-transparent 
                            group-hover:text-outline-hover transition-all duration-500" >
                                        {service.num}
                                    </div>
                                    <Link
                                        href={service.href}
                                        className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent 
                            transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                                        <BsArrowDownRight className="text-primary text-3xl" />
                                    </Link>
                                </div>
                                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                                    {service.title}</h2>
                                <p className="text-white/60">{service.description}</p>
                                <div className="border-b border-white/20 w-full"></div>
                            </div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
};
export default Services;