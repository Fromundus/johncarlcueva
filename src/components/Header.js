import React from "react";
import logo from "../assets/logo-white.png";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

export default function Header(){
    const [isOn, setIsOn] = React.useState(false);

    function toggle(){
        setIsOn(prev => !prev);
    }

    return (
        <section className="fixed w-full bg-slate-950 z-50">
            <nav className="flex justify-between px-10 py-3 lg:px-32 lg:py-4">
                <a href="/" className="hover:text-pink-600 text-2xl"><img className="w-12" src={logo} alt="" /></a>
                <Link to="contact" className="bg-gradient-to-r py-2 px-4 font-bold rounded-full from-pink-600 to-purple-700 cursor-pointer" smooth={true} >Work with me</Link>
            </nav>
        </section>
    )
}