import React from "react";
import DRRS from "../assets/project-thumbnails/DRRS.png";
import DAR from "../assets/project-thumbnails/DAR.png";
import FVS from "../assets/project-thumbnails/FVS.png";
import BHMS from "../assets/project-thumbnails/BHMS.png";
import YK from "../assets/project-thumbnails/YK.png";
import { motion } from "framer-motion";

export default function Projects(){
    const projects = [
        {
            title: "Daily Accomplishment Report System",
            thumbnail: DAR,
            description: "This is the first project I made. It's a requirement for my OJT training. It is a tool designed to help you track, manage, and celebrate your daily accomplishments.",
            technologies: ["HTML", "CSS", "PHP", "JAVASCRIPT", "BOOTSTRAP", "MYSQL"]
        },
        {
            title: "Boardinghouse Management System",
            thumbnail: BHMS,
            description: "The Boardinghouse Management System is designed to simplify the administration and operation of boardinghouses. This system offers a comprehensive platform for managing tenants, tracking payments, and ensuring the smooth running of day-to-day operations.",
            technologies: ["HTML", "CSS", "PHP", "JAVASCRIPT", "REACT", "LARAVEL", "BOOTSTRAP", "MYSQL"]
        },
        {
            title: "Fingerprint Voting System",
            thumbnail: FVS,
            description: "The system is designed to modernize the voting process through biometric technology. By utilizing fingerprint recognition, this system ensures the integrity of elections, eliminates the risk of voter fraud, and simplifies the voting experience for both voters and administrators.",
            technologies: ["HTML", "CSS", "PHP", "JAVASCRIPT", "C#", "REACT", "LARAVEL", "BOOTSTRAP", "MYSQL"]
        },
        {
            title: "Scholastic Document Request and Retreival System",
            thumbnail: DRRS,
            description: "This was my thesis project. It's designed to simplify the process of requesting, processing, and retrieving academic documents for students, alumni, and educational institutions. This system simplifies administrative workflows, ensuring that document requests are handled efficiently and securely.",
            technologies: ["HTML", "CSS", "JAVASCRIPT", "REACT", "PHP", "LARAVEL", "BOOTSTRAP", "MYSQL"]
        },
        {
            title: "YouTube Karaoke",
            thumbnail: YK,
            description: "I created a karaoke system that plays karaoke videos from youtube. I designed it just like a traditional karaoke machine. The difference is that you can control the system using your phone. It's also easier to reserve a song because of the search capability.",
            technologies: ["HTML", "CSS", "PHP", "JAVASCRIPT", "REACT", "LARAVEL", "BOOTSTRAP", "MYSQL"]
        }
    ]

    const renderProjects = projects.map( (item, index) => {
        return (
            <div className="flex flex-wrap items-center" key={index}>
                <motion.div
                    className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 p-3"
                    initial={{x: -100, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    transition={{duration: .8, ease: "easeOut"}}
                >
                    <img className="rounded" src={item.thumbnail} alt={`thumbnail${index}`} />
                </motion.div>
                <motion.div
                    className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 p-3"
                    initial={{x: 100, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    transition={{duration: 1, ease: "easeOut"}}
                >
                    <span className="font-bold text-xl">{item.title}</span>
                    <p className="mt-5 tracking-normal leading-snug text-sm text-white/50">{item.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                        {item.technologies.map( (tech, index) => {
                            return (
                                <div key={index} className="px-2 py-1 bg-neutral-700/50 rounded text-xs">{tech}</div>
                            )
                        })}
                    </div>
                </motion.div>
            </div>
        )
    })

    return (
        <div id="projects" className="small-section lg:section">
            <div className="flex flex-col pt-24 pb-0 lg:py-24">
                <motion.span
                    className="text-3xl md:text-4xl lg:text-4xl text-center font-bold flex flex-col items-center"
                    initial={{y: -100, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    transition={{duration: .6, ease: "easeOut"}}
                >
                    Projects
                    <div className="mt-4 rounded-md self-center bg-pink-600" style={{height: "5px", width: "40px"}}></div>  
                </motion.span>
                <div className="flex flex-col-reverse flex-wrap gap-10 mt-10">
                    {renderProjects}
                </div>
            </div>
        </div>
    )
}