import React from "react";
import DRRS from "../assets/project-thumbnails/DRRS.png";
import DAR from "../assets/project-thumbnails/DAR.png";
import FVS from "../assets/project-thumbnails/FVS.png";
import BHMS from "../assets/project-thumbnails/BHMS.png";
import YK from "../assets/project-thumbnails/YK.png";

export default function Projects(){
    const projects = [
        {
            title: "DAILY ACCOMPLISHMENT MANAGEMENT SYSTEM",
            thumbnail: DAR,
            description: "This is the first project I made. It's a requirement for my OJT training. It is a tool designed to help you track, manage, and celebrate your daily accomplishments.",
            technologies: ["HTML", "CSS", "PHP", "JAVASCRIPT", "BOOTSTRAP", "MYSQL"]
        },
        {
            title: "BOARDINGHOUSE MANAGEMENT SYSTEM",
            thumbnail: BHMS,
            description: "The Boardinghouse Management System is an all-in-one solution designed to simplify the administration and operation of boardinghouses, hostels, and shared accommodations. This system offers a comprehensive platform for managing tenants, tracking payments, and ensuring the smooth running of day-to-day operations.",
            technologies: ["HTML", "CSS", "PHP", "JAVASCRIPT", "REACT", "LARAVEL", "BOOTSTRAP", "MYSQL"]
        },
        {
            title: "FINGERPRINT VOTING SYSTEM",
            thumbnail: FVS,
            description: "The system is designed to modernize the voting process through biometric technology. By utilizing fingerprint recognition, this system ensures the integrity of elections, eliminates the risk of voter fraud, and simplifies the voting experience for both voters and administrators.",
            technologies: ["HTML", "CSS", "PHP", "JAVASCRIPT", "C#", "REACT", "LARAVEL", "BOOTSTRAP", "MYSQL"]
        },
        {
            title: "SCHOLASTIC DOCUMENT REQUEST AND RETRIEVAL SYSTEM",
            thumbnail: DRRS,
            description: "It's designed to simplify the process of requesting, processing, and retrieving academic documents for students, alumni, and educational institutions. This system streamlines administrative workflows, ensuring that document requests are handled efficiently and securely.",
            technologies: ["HTML", "CSS", "JAVASCRIPT", "REACT", "PHP", "LARAVEL", "BOOTSTRAP", "MYSQL"]
        },
        {
            title: "YOUTUBE KARAOKE",
            thumbnail: YK,
            description: "I created a karaoke system that plays karaoke videos from youtube. I designed it just like a traditional karaoke machine. The difference is that you can control the system using your phone. It's also easier to reserve a song because of the search capability.",
            technologies: ["HTML", "CSS", "PHP", "JAVASCRIPT", "REACT", "LARAVEL", "BOOTSTRAP", "MYSQL"]
        }
    ]

    const renderProjects = projects.map( (item, index) => {
        return (
            <div className="flex flex-wrap gap-y-5" key={index}>
                <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 p-3">
                    <img className="rounded" src={item.thumbnail} alt={`thumbnail${index}`} />
                </div>
                <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 p-3">
                    <span className="font-bold text-xl">{item.title}</span>
                    <p className="mt-5 tracking-widest leading-loose text-sm text-white/50">{item.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                        {item.technologies.map( (tech, index) => {
                            return (
                                <div key={index} className="px-2 py-1 bg-neutral-700/50 rounded text-sm">{tech}</div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div id="projects" className="w-full min-h-screen flex flex-col justify-center p-10 lg:p-32">
            <span className="text-3xl md:text-4xl lg:text-4xl text-center font-bold">PROJECTS</span>
            <div className="mt-4 rounded-md self-center bg-pink-600" style={{height: "5px", width: "40px"}}></div>
            <div className="flex flex-col-reverse flex-wrap gap-10 mt-10">
                {renderProjects}
            </div>
        </div>
    )
}