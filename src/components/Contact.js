import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Contact(){
    return (
        <div id="contact" className="w-full h-svh flex flex-col items-center justify-center p-10 lg:p-32">
            <span className="text-3xl md:text-4xl lg:text-4xl text-center font-bold">CONTACT</span>
            <div className="mt-4 rounded-md self-center bg-pink-600" style={{height: "5px", width: "40px"}}></div>

            <p className="mt-10 text-xl">Feel free to contact me.</p>
             <div className="flex items-center gap-5 lg:gap-12 text-4xl mt-10 mx-10">
                 <a className="hover:text-blue-500" href="https://www.facebook.com/johncarlcastrocueva" target="_blank"><FaFacebook /></a>
                 <a className="hover:text-slate-700" href="https://www.x.com/johncarlcueva_" target="_blank"><FaXTwitter /></a>
                 <a className="hover:text-pink-500" href="https://www.instagram.com/johncarl.cueva" target="_blank"><FaInstagram /></a>
                 <a className="hover:text-blue-400" href="https://www.linkedin.com/in/john-carl-cueva-8190172b2/" target="_blank"><FaLinkedin /></a>
                 <a className="hover:text-purple-500" href=""><FaGithub /></a>
            </div>
        </div>
    )
}