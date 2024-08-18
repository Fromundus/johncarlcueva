import React from "react";
import profile from "../assets/profile1.png"
import { Link } from "react-scroll";
import { motion } from "framer-motion";

export default function Info(){
    return (
        <section id="home" className="small-section lg:section">
            <div className="flex flex-wrap items-center justify-center pt-24 pb-0 lg:py-24">

                <motion.div
                    className="w-full lg:w-1/2 flex flex-col items-start md:items-center lg:items-start justify-center"
                    initial={{x: -100, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    transition={{duration: .6, ease: "easeOut"}}
                >
                    <span className="text-2xl md:text-3xl lg:text-4xl mb-8">Hi, I'm <span className="text-pink-600 font-extrabold">John Carl Cueva</span></span>
                    <div className="w-full sm:w-3/4 md:w-3/4">
                        <p className="lg:text-lg tracking-widest leading-loose">I'm a Full Stack Web Developer specializing in creating and managing websites and web applications.</p>
                    </div>

                    <motion.div
                        className="mt-10"
                        whileHover={{scale: 1.1}}
                    >
                        <Link to="projects" smooth="true" className="cursor-pointer bg-gradient-to-r from-pink-600 to-purple-700 px-6 py-2 rounded-xl font-semibold">Projects</Link>
                    </motion.div>

                </motion.div>

                <motion.div
                    className="w-full lg:w-1/2 flex items-center justify-center"
                    initial={{x: 100, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    transition={{duration: .8, ease: "easeOut"}}
                >
                    <img className="w-full sm:w-1/2 md:w-1/2 lg:w-3/4" src={profile} alt="" />
                </motion.div>
            </div>
        </section>
    )
}