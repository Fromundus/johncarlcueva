import React from "react";
import { FaHome, FaUser, FaPhone, FaBriefcase } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Navbar(){
    return (
        <div className="fixed bottom-0 w-3/4 max-w-[250px] lg:max-w-[300px] bg-black/50 m-5 p-2 rounded-full flex justify-around">
            <Link
                className="cursor-pointer p-3 rounded-full"
                to="home"
                smooth={true}
                spy={true}
                activeClass="active"
            >
                <FaHome />
            </Link>
            <Link
                className="cursor-pointer p-3 rounded-full"
                to="about"
                smooth={true}
                spy={true}
                activeClass="active"
            >
                <FaUser />
            </Link>
            <Link
                className="cursor-pointer p-3 rounded-full"
                to="projects"
                smooth={true}
                spy={true}
                activeClass="active"
            >
                <FaBriefcase />
            </Link>
            <Link
                className="cursor-pointer p-3 rounded-full"
                to="contact"
                smooth={true}
                spy={true}
                activeClass="active"
            >
                <FaPhone />
            </Link>
        </div>
    )
}