import React from "react";
import { FaCss3Alt, FaHtml5, FaReact, FaPhp, FaLaravel, FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { motion } from "framer-motion";

export default function About(){
    return (
        <section id="about" className="small-section lg:section">
            <div className="flex flex-col items-center justify-center pt-24 pb-0 lg:py-24">

                <motion.span
                    className="text-3xl md:text-4xl lg:text-4xl font-bold flex flex-col items-center"
                    initial={{y: -100, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    transition={{duration: .6, ease: "easeOut"}}
                >About Me
                <div className="mt-4 rounded-md self-center bg-pink-600" style={{height: "5px", width: "40px"}}></div>
                </motion.span>

                <motion.p
                    className="mt-10 tracking-widest leading-loose"
                    initial={{x: -100, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    transition={{duration: .8, ease: "easeOut"}}
                >I’m a web developer with a strong foundation in HTML, CSS, JavaScript, PHP, and MySQL. During my studies and internships, I've built dynamic, responsive, and user-friendly websites, I make sure to deliver high-quality solutions. Whether you're looking for a modern front-end interface or a secure back-end system, I have the expertise to bring your vision to life.
                </motion.p>
                
                <motion.div
                    className="mt-14 flex flex-col items-center justify-center"
                    initial={{x: 100, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    transition={{duration: 1, ease: "easeOut"}}
                >
                    <span className="text-3xl font-bold">My Skills</span>
                    <div className="flex mt-10 gap-5 flex-wrap items-center justify-center text-4xl">
                        <div className="p-3 border border-neutral-800 rounded bg-neutral-700 text-orange-500"><FaHtml5 /></div>
                        <div className="p-3 border border-neutral-800 rounded bg-neutral-700 text-blue-500"><FaCss3Alt /></div>
                        <div className="p-3 border border-neutral-800 rounded bg-neutral-700 text-yellow-300"><IoLogoJavascript /></div>
                        <div className="p-3 border border-neutral-800 rounded bg-neutral-700 text-sky-400"><FaReact /></div>
                        <div className="p-3 border border-neutral-800 rounded bg-neutral-700 text-indigo-500"><FaPhp /></div>
                        <div className="p-3 border border-neutral-800 rounded bg-neutral-700 text-red-600"><FaLaravel /></div>
                        <div className="p-3 border border-neutral-800 rounded bg-neutral-700 text-purple-500"><FaBootstrap /></div>
                        <div className="p-3 border border-neutral-800 rounded bg-neutral-700 text-cyan-400"><RiTailwindCssFill /></div>
                        <div className="p-3 border border-neutral-800 rounded bg-neutral-700 text-blue-400"><SiMysql /></div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}