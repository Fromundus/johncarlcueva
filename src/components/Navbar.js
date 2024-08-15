import React from "react";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import profile from "../assets/profile.jpg";

export default function Navbar(){
    const [isOn, setIsOn] = React.useState(false);

    function toggle(){
        setIsOn(prev => !prev);
    }

    return (
        <div>
            <nav className="fixed px-8 lg:px-32 flex items-center justify-between py-3 lg:py-4 w-full bg-slate-950">
                <div className="flex flex-shrink-0 items-center">
                    <a href="/" className="font-bold ms-3 hover:text-pink-600 text-2xl">JCC</a>
                </div>

                <div className="justify-self-end text-xl block sm:hidden md:hidden lg:hidden" onClick={toggle}>{isOn ? <FaTimes /> : <FaBars />}</div>

                <div className="hidden sm:block md:block lg:block">
                    <div className="font-semibold flex gap-8 md:gap-14 lg:gap-16 text-xs lg:text-sm items-center justify-center">
                        <a className="hover:text-pink-600" href="">HOME</a>
                        <a className="hover:text-pink-600" href="#about">ABOUT</a>
                        <a className="hover:text-pink-600" href="#projects">PROJECTS</a>
                        <a className="hover:text-pink-600" href="#contact">CONTACT</a>
                    </div>
                </div>
            </nav>

            <div className={`fixed w-full mt-12 bg-slate-950 pt-5 pb-10 z-50 ${isOn ? "block" : "hidden"}`}>
                <div className="font-semibold flex flex-col text-sm items-center justify-center">
                    <a className="hover:text-pink-600 w-full text-end active:bg-cyan-200 p-6 transition-all duration-300 ease-in-out" href="">HOME</a>
                    <a className="hover:text-pink-600 w-full text-end active:bg-cyan-200 p-6 transition-all duration-300 ease-in-out" href="#about" onClick={() => setIsOn(false)}>ABOUT</a>
                    <a className="hover:text-pink-600 w-full text-end active:bg-cyan-200 p-6 transition-all duration-300 ease-in-out" href="#projects" onClick={() => setIsOn(false)}>PROJECTS</a>
                    <a className="hover:text-pink-600 w-full text-end active:bg-cyan-200 p-6 transition-all duration-300 ease-in-out" href="#contact" onClick={() => setIsOn(false)}>CONTACT</a>
                </div>
            </div>
        </div>


    )
}