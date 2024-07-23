"use client";

import { FaHtml5, FaCss3, FaJs ,FaReact, FaFigma, FaNodeJs, FaGithub, FaDatabase} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiExpress, SiHeroku , SiMongodb , SiMysql } from "react-icons/si";

const about ={
    title: "About Me",
    description: "In this section, you'll find how you can contact me and some information related to me.",
    info: [
        {
            fieldName: "Name:",
            fieldValue: "Muhammad Abdullah"
        },
        {
            fieldName: "Email:",
            fieldValue: "m.a.butt.2k@gmail.com"
        },
        {
            fieldName: "Phone:",
            fieldValue: "(+92) 333 2581968"
        },
        {
            fieldName: "Nationality:",
            fieldValue: "Pakistani"
        },
        {
            fieldName: "Languages:",
            fieldValue: "English , Urdu "
        },
    ]
};

const experience = {
    icon: "",
    title: "My Experience",
    description: "In this section, you'll find an overview of my experience in industry.",
    items: [
        {
            company: "USquare Solutions",
            position: "Web Developer",
            location: "Islamabad",
            duration: "Jun 2023 - Aug 2023"
        }
    ]
};

const education = {
    icon: "",
    title: "My Education",
    description: "In this section, you'll find an overview of my education.",
    items: [
        {
            institute: "Comsat's University Islamabad",
            degree: "Bachelor's Of Science in Computer Science",
            duration: "2020 - 2024"
        },
        {
            institute: "Army Public School & College Sarai Alamagir",
            degree: "ICS",
            duration: "2017 - 2019"
        },
        {
            institute: "Army Public School Sarai Alamagir",
            degree: "Matriculation",
            duration: "2015 - 2017"
        },
    ]
};

const skills = {
    title: "My Skills",
    description: "In this section, you'll find an overview of my skills.",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "HTML 5"
        },
        {
            icon: <FaCss3 />,
            name: "CSS 3"
        },
        {
            icon: <FaJs />,
            name: "Javascript"
        },
        {
            icon: <FaReact />,
            name: "React.js"
        },
        {
            icon: <FaNodeJs />,
            name: "Node.js"
        },
        {
            icon: <SiExpress />,
            name: "Express.js"
        },
        {
            icon: <SiNextdotjs />,
            name: "Next.js"
        },
        {
            icon: <SiTailwindcss />,
            name: "Tailwind.css"
        },
        {
            icon: <SiMongodb />,
            name: "MongoDB"
        },
        {
            icon: <SiMysql />,
            name: "MySQL"
        },
        {
            icon: <FaFigma />,
            name: "Figma"
        },
        {
            icon: <FaGithub />,
            name: "Git"
        },
        {
            icon: <SiHeroku />,
            name: "Heroku"
        },

    ]
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
    return (
        <motion.div
        initial={{
            opacity: 0
        }}
        animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
        <div className="container mx-auto">
            <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]"> 
                <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                    <TabsTrigger value="experience" >Experience</TabsTrigger>
                    <TabsTrigger value="education" >Education</TabsTrigger>
                    <TabsTrigger value="skills" >Skills</TabsTrigger>
                    <TabsTrigger value="about" >About Me</TabsTrigger>
                </TabsList>

                <div className="min-h-[70vh] w-full">
                        <TabsContent value="experience" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">
                                {experience.title}
                            </h3>
                            <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">
                                {experience.description}
                            </p>
                            <ScrollArea className="h-[400px]">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {experience.items.map((item, index) => {
                                        return (
                                            <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                            <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">{item.company}</p>
                                                </div>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                <span className="text-accent">{item.duration}</span>
                                            
                                            </li>
                                        )
                                    })}
                                </ul>
                            </ScrollArea>
                        </div>
                        </TabsContent>
                        <TabsContent value="education" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">
                                {education.title}
                            </h3>
                            <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">
                                {education.description}
                            </p>
                            <ScrollArea className="h-[400px]">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {education.items.map((item, index) => {
                                        return (
                                            <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                            <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">{item.institute}</p>
                                                </div>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                                <span className="text-accent">{item.duration}</span>
                                            
                                            </li>
                                        )
                                    })}
                                </ul>
                            </ScrollArea>
                        </div>
                        </TabsContent>
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]"> 
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{skills.title}</h3>
                            <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                            </div>
                            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                {skills.skillList.map((skill, index) => {
                                    return (
                                        <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className="w-full bg-[#232329] h-[150px] rounded-xl flex justify-center items-center group"> 
                                                        <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p className="capitialize">{skill.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>
                                    )
                                })} 
                            </ul>
                            </div>
                        </TabsContent>
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px] ">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return (
                                            <li key={index} className="flex items-center xl:justify-start gap-4">
                                                <span className="text-white/60">{item.fieldName}</span>
                                                <span className="text-white/60">{item.fieldValue}</span>

                                            </li>

                                        )
                                    })}
                                </ul>
                                </div> 
                        </TabsContent>
                </div>
            </Tabs>
        </div>
    </motion.div>)
};
export default Resume;