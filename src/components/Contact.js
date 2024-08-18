import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { motion } from "framer-motion";

export default function Contact(){
    return (
        <section id="contact" className="section">
            <div className="flex flex-col items-center justify-center py-32">
                <motion.span
                    className="text-3xl md:text-4xl lg:text-4xl text-center font-bold flex flex-col items-center"
                    initial={{y: -100, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    transition={{duration: .6, ease: "easeOut"}}
                >
                    Contact
                    <div className="mt-4 rounded-md self-center bg-pink-600" style={{height: "5px", width: "40px"}}></div>
                </motion.span>

                <motion.p
                    className="mt-10 text-xl"
                    initial={{x: -100, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    transition={{duration: 1, ease: "easeOut"}}
                >Feel free to contact me.</motion.p>
                <motion.div
                    className="flex items-center gap-3 lg:gap-12 text-3xl lg:text-4xl mt-10 mx-10"
                    initial={{x: 100, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    transition={{duration: 1, ease: "easeOut"}}
                    >
                    <motion.a
                        whileHover={{scale: 1.3}}
                        className="hover:text-blue-500" href="https://www.facebook.com/johncarlcastrocueva" target="_blank"><FaFacebook /></motion.a>
                    <motion.a
                        whileHover={{scale: 1.3}}
                        className="hover:text-slate-700" href="https://www.x.com/johncarlcueva_" target="_blank"><FaXTwitter /></motion.a>
                    <motion.a
                        whileHover={{scale: 1.3}}
                        className="hover:text-pink-500" href="https://www.instagram.com/johncarl.cueva" target="_blank"><FaInstagram /></motion.a>
                    <motion.a
                        whileHover={{scale: 1.3}}
                        className="hover:text-blue-400" href="https://www.linkedin.com/in/john-carl-cueva-8190172b2/" target="_blank"><FaLinkedin /></motion.a>
                    <motion.a
                        whileHover={{scale: 1.3}}
                        className="hover:text-purple-500" href=""><FaGithub /></motion.a>
                    <motion.a
                        whileHover={{scale: 1.3}}
                        className="hover:text-red-400" href="mailto:johncarlcastrocueva@gmail.com" target="_blank"><SiGmail /></motion.a>
                </motion.div>
            </div>
        </section>
    )
}