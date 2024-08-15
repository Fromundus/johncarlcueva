import React from "react";
import { FaCss3Alt, FaHtml5, FaReact, FaPhp, FaLaravel, FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";

export default function About(){
    return (
        <div id="about" className="w-full min-h-screen flex flex-col items-center justify-center p-10 lg:p-32">
            <span className="text-3xl md:text-4xl lg:text-4xl font-bold mt-60 sm:mt-40 md:mt-44 lg:mt-0">ABOUT ME</span>
            <div className="mt-4 rounded-md self-center bg-pink-600" style={{height: "5px", width: "40px"}}></div>
            <p className="mt-10 tracking-widest">I’m a passionate and skilled web developer with a strong foundation in JavaScript, PHP, Tailwind, Bootstrap, MySQL, React.js, and Laravel. With experience in building dynamic, responsive, and user-friendly websites, I bring a keen eye for detail and a dedication to delivering high-quality solutions. Whether you're looking for a modern front-end interface or a robust back-end system, I have the expertise to bring your vision to life.</p>
            <span className="mt-14 text-3xl font-bold">SKILLS</span>
            <div className="flex mt-10 gap-5 flex-wrap text-4xl">
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
        </div>
    )
}