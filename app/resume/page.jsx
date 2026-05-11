"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaJava,
  
 
 
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs, SiPostman,SiTypescript, SiSpringboot, SiSpringsecurity, SiMongodb, SiMysql, SiDocker, SiStripe } from "react-icons/si";

const JakartaEEIcon = () => (
  <svg viewBox="0 0 128 128" width="1em" height="1em" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <polygon points="64,4 120,34 120,94 64,124 8,94 8,34" fill="none" stroke="currentColor" strokeWidth="8" />
    <text x="64" y="58" textAnchor="middle" fontSize="22" fontWeight="bold" fill="currentColor">JEE</text>
    <text x="64" y="82" textAnchor="middle" fontSize="13" fill="currentColor">Jakarta</text>
  </svg>
);
const Quarkus = () => (
  <svg viewBox="0 0 128 128" width="1em" height="1em" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <polygon points="64,4 120,34 120,94 64,124 8,94 8,34" fill="none" stroke="currentColor" strokeWidth="8" />
    <text x="64" y="58" textAnchor="middle" fontSize="22" fontWeight="bold" fill="currentColor">QU</text>
    <text x="64" y="82" textAnchor="middle" fontSize="13" fill="currentColor">Quarkus</text>
  </svg>
);

// about data
const about = {
  title: "About me",
  description:
    "I'm a Java developer student at Jönköping University with a passion for building clean and efficient applications. I enjoy working with both backend and frontend technologies, and I'm always looking to learn and grow as a developer.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Ashour Malik Ismail",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+46) 73 987 5774",
    },
    {
      fieldName: "Email",
      fieldValue: "book.ashour@gmail.com",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Assyrian/Swedish",
    },
   
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  items: [
    {
      company: "Fagerhult Belysning AB",
      position: "installation of lighting fixtures. ",
      duration: "2016 - Present",
    },
    {
      company: "Brooklyn Burgare",
      position: "Cashier and Customer Service",
      duration: "2022 - 2024",
    },
    {
      company: "Fagerhult Belysning AB",
      position: "Operator of plastic machinery",
      duration: "2022 - 2024",
    },
    {
      company: "PostNord AB",
      position: "Worker",
      duration: "2025",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  items: [
    {
      institution: "Folkuniversitetet",
      degree: "Programming 1 'java' ",
      duration: "2025",
    },
    {
      institution: "Jönköping University",
      degree: "Java developer",
      duration: "2025 - present",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <FaJava />,
      name: "java",
    },
    {
      icon: <SiPostman />,
      name: "postman",
    },
    {
      icon: <SiTypescript />,
      name: "typescript",
    },
    {
      icon: <SiSpringboot />,
      name: "spring boot",
    },
    {
      icon: <SiSpringsecurity />,
      name: "spring security",
    },
    {
      icon: <JakartaEEIcon />,
      name: "jakarta EE",
    },
    {
      icon: <SiMongodb />,
      name: "mongodb",
    },
    {
      icon: <SiMysql />,
      name: "mysql",
    },
    {
      icon: <SiDocker />,
      name: "docker",
    },
     {
      icon: <SiStripe />,
      name: "stripe",
    },
    {
      icon: <Quarkus />,
      name: "quarkus",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60 text-sm">{item.fieldName}</span>
                        <span className="text-base">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
