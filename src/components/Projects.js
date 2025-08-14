import React from "react";
import DRRS from "../assets/project-thumbnails/DRRS.png";
import DAR from "../assets/project-thumbnails/DAR.png";
import FVS from "../assets/project-thumbnails/FVS.png";
import BHMS from "../assets/project-thumbnails/BHMS.png";
import YK from "../assets/project-thumbnails/YK.png";
import ADZL from "../assets/project-thumbnails/ADZL.png";
import ADZ from "../assets/project-thumbnails/ADZ.png";
import FCLO from "../assets/project-thumbnails/FCLO.png";
import SP from "../assets/project-thumbnails/SP.png";
import SIB from "../assets/project-thumbnails/SIB.png";
import YTK2 from "../assets/project-thumbnails/YTK2.png";
import KEGG from "../assets/project-thumbnails/KEGG.png";
import FH from "../assets/project-thumbnails/FH.png";

import { motion } from "framer-motion";

export default function Projects(){
const projects = [
    {
        title: "Daily Accomplishment Report System",
        thumbnail: DAR,
        description: "A web-based system designed to record and monitor daily work accomplishments—developed as part of my OJT training. The tool allows users to document tasks, review past entries, and generate summaries for performance evaluation. I built the entire system from scratch, handling both front-end and back-end development, including database design and report generation.",
        technologies: ["HTML", "CSS", "PHP", "JAVASCRIPT", "BOOTSTRAP", "MYSQL"],
        isDeployed: false,
    },
    {
        title: "Boardinghouse Management System",
        thumbnail: BHMS,
        description: "An all-in-one solution for managing boardinghouses—covering tenant registration, rent tracking, billing, and maintenance requests. This project aimed to digitize manual operations and improve management efficiency.",
        technologies: ["HTML", "CSS", "PHP", "JAVASCRIPT", "REACT.JS", "LARAVEL", "BOOTSTRAP", "MYSQL"],
        isDeployed: false,
    },
    {
        title: "Fingerprint Voting System",
        thumbnail: FVS,
        description: "A secure voting system using fingerprint biometrics to ensure voter authenticity and eliminate fraud. Designed to enhance the integrity of elections through biometric verification and real-time results processing. I worked on both the biometric integration (using C#) and full-stack development for the admin and voting modules.",
        technologies: ["HTML", "CSS", "PHP", "JAVASCRIPT", "C#", "REACT.JS", "LARAVEL", "BOOTSTRAP", "MYSQL"],
        isDeployed: false,
    },
    {
        title: "Scholastic Document Request and Retrieval System",
        thumbnail: DRRS,
        description: "My thesis project—a platform that automates the academic document request process for students and alumni. Users can request, pay, and track documents online while the admin can manage workflows, approvals, and delivery.",
        technologies: ["HTML", "CSS", "JAVASCRIPT", "REACT.JS", "PHP", "LARAVEL", "BOOTSTRAP", "MYSQL"],
        isDeployed: false,
    },
    {
        title: "YouTube Karaoke",
        thumbnail: YK,
        description: "A web-based karaoke system that streams YouTube videos and mimics the experience of a traditional karaoke machine. It includes a mobile remote feature and smart song reservation system with real-time search.",
        technologies: ["HTML", "CSS", "PHP", "JAVASCRIPT", "REACT.JS", "LARAVEL", "BOOTSTRAP", "MYSQL"],
        isDeployed: false,
    },
    {
        title: "Shoppayo",
        thumbnail: SP,
        description: "A local e-commerce platform connecting buyers with products from small and medium businesses. Shoppayo provides a user-friendly shopping experience with product discovery, order tracking, and vendor management.",
        technologies: ["HTML", "CSS", "PHP", "JAVASCRIPT", "REACT.JS", "LARAVEL", "TAILWIND", "MYSQL"],
        isDeployed: false,
    },
    {
        title: "Adzeela",
        thumbnail: ADZ,
        description: "An advertising platform that displays digital ads on any TV screen worldwide. Users can manage multiple screens, schedule content, and track campaigns. As a DevOps Engineer and Full-stack Developer, I handled deployment pipelines, version control (Git), infrastructure (Hostinger/Vercel), and full system implementation.",
        technologies: ["HTML", "CSS", "PHP", "TYPESCRIPT", "REACT.JS", "NEXT.JS", "LARAVEL", "TAILWIND", "MYSQL", "GIT", "HOSTINGER", "VERCEL"],
        isDeployed: true,
        link: "https://app.adzeela.com",
    },
    {
        title: "Adzeela Lite",
        thumbnail: ADZL,
        description: "A mobile advertising extension of Adzeela that allows users to register TV screens mounted on vehicles, turning them into roaming ad displays. Advertisers can remotely book ad slots and track display times. I was responsible for building the core platform and managing DevOps using Git, Hostinger, and Vercel.",
        technologies: ["HTML", "CSS", "PHP", "TYPESCRIPT", "REACT.JS", "NEXT.JS", "LARAVEL", "TAILWIND", "MYSQL", "GIT", "HOSTINGER", "VERCEL"],
        isDeployed: true,
        link: "https://adzeela-lite.vercel.app/",
    },
    {
        title: "Streamer Leaderboard",
        thumbnail: SIB,
        description: "A real-time leaderboard web app for tracking top referred users participating in the gambling platform CSGOEmpire. It features rank updates and live tracking. I developed the system using Laravel for the backend and React with Tailwind for the front-end UI, including API integrations and automated data refresh.",
        technologies: ["HTML", "CSS", "PHP", "REACT.JS", "LARAVEL", "TAILWIND", "MYSQL"],
        isDeployed: true,
        link: "https://sibrio.vercel.app/",
    },
    {
        title: "Youtube Karaoke V2",
        thumbnail: YTK2,
        description: "An upgraded version of my YouTube Karaoke system featuring real-time remote control using PUSHER, multi-user support, and multiple concurrent karaoke sessions. I revamped the architecture, implemented real-time communication, improved performance, and enhanced the UI/UX for a smoother and more scalable experience.",
        technologies: ["HTML", "CSS", "PHP", "REACT.JS", "LARAVEL", "TAILWIND", "MYSQL", "PUSHER"],
        isDeployed: true,
        link: "https://ytkaraoke.vercel.app/",
    },
    {
        title: "K-Egg Website",
        thumbnail: KEGG, // Replace with actual thumbnail variable or image
        description: "A sample website designed for a K-Egg franchise, showcasing menu items, store locations, promotions, and brand story. Built with a clean, modern design and responsive layout to give potential franchisees a realistic view of how their online presence could look.",
        technologies: ["HTML", "CSS", "TYPESCRIPT", "REACT.JS", "TAILWIND", "SHADCN"],
        isDeployed: true,
        link: "https://k-egg.vercel.app/", // Replace with actual deployment link
    },
    {
    title: "Foodhub Website",
    thumbnail: FH, // Replace with actual thumbnail variable or image
    description: "A sample website for a fictional single-shop restaurant called Foodhub. Showcases menu items, ordering flow, and responsive design to demonstrate how a modern food ordering platform could look.",
    technologies: ["HTML", "CSS", "TYPESCRIPT", "REACT.JS", "TAILWIND", "SHADCN"],
    isDeployed: true,
    link: "https://foodhubsample.vercel.app/", // Replace with actual deployment link
}
];


    const renderProjects = projects.map( (item, index) => {
        return (
            <a href={item.link && item.link} target="_blank" className="flex flex-wrap items-center cursor-pointer" key={index}>
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
                    <div className="flex flex-col md:flex-row lg:flex-row md:items-center lg:items-center gap-2">
                        <span className="font-bold text-xl hover:underline">{item.title}</span>
                        {item.isDeployed === true && <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-white bg-green-600 rounded-full shadow-sm w-fit">
                            <svg
                            className="w-3 h-3 animate-pulse text-white"
                            fill="currentColor"
                            viewBox="0 0 8 8"
                            >
                            <circle cx="4" cy="4" r="3" />
                            </svg>
                            Deployed
                        </span>}
                    </div>
                    <p className="mt-5 tracking-normal leading-snug text-sm text-white/50">{item.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                        {item.technologies.map( (tech, index) => {
                            return (
                                <div key={index} className="px-2 py-1 bg-neutral-700/50 rounded text-xs">{tech}</div>
                            )
                        })}
                    </div>
                </motion.div>
            </a>
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