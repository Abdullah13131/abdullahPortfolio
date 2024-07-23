"use client";

import { motion } from "framer-motion";
import React, {useState} from "react";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

import  { BsArrowUpRight, BsGithub} from "react-icons/bs";

import { Tooltip, TooltipProvider, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "DevOps",
    title: "Project 01",
    description:
      "This is my DevOps Project, a Clothing Site, we used DevOps tools like Jenkins and Kubernetes to improve our development and deployment process. Jenkins helped automate tasks like testing and integrating new code changes, making sure everything works smoothly. Kubernetes managed our applications in containers, allowing them to run efficiently on different servers. Together, these tools helped us quickly deliver new features and keep the site running reliably for users.",
    stack: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Javascript" },
      { name: "Kubernetes" },
      { name: "Jenkins" },
    ],
    image: "/assets/12.jpg",
    live: "",
    github: "https://github.com/Abdullah13131/DevopsProject",
  },
  {
    num: "02",
    category: "Web Development",
    title: "Project 02",
    description:
      "This is my Web development project made in HTML, CSS and Javascript, and Php, Laravel. Its a railway reservation website. From where user can book online tickets easily.",
    stack: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Javascript" },
      { name: "PHP" },
      { name: "Laravel" },
    ],
    image: "/assets/004.jfif",
    live: "",
    github: "https://github.com/Abdullah13131/Railway_Reservation",
  },
  {
    num: "03",
    category: "Frontend Development",
    title: "Project 03",
    description:
      "Frontend mobile application for a PharmAssist App using React Native, specifically designed for medicine shops. The app provides an intuitive interface for shop owners to manage inventory, track sales, and process orders efficiently. React Native enabled us to create a cross-platform application, ensuring a seamless user experience on both iOS and Android devices. With features like real-time notifications and easy search functionality, the app significantly enhances the operational efficiency of medicine shops.",
    stack: [{ name: "React Native" }, { name: "Javascript" }, { name: "FireBase" }],
    image: "/assets/001.jfif",
    live: "",
    github: "https://github.com/Abdullah13131/PharmAssist",
  },
  {
    num: "04",
    category: "Backend Development",
    title: "Project 04",
    description:
      "For my Final Year Project, I developed an Intelligent Marketing Agent (IMA) using the MERN stack (MongoDB, Express.js, React, Node.js). This application is designed to help businesses efficiently market their products and services. This project aims to enhance marketing efficiency and effectiveness for businesses, driving better customer engagement and sales.",
    stack: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "React.js" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Javascript" },
    ],
    image: "/assets/111.jfif",
    live: "",
    github: "https://github.com/Abdullah13131/",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[88vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl font-extrabold text-outline text-transparent leading-none">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold text-white leading-none group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} Project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4 flex-wrap">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] rounded-full flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Work;