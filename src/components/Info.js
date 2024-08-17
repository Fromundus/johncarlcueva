import React from "react";
import profile from "../assets/profile1.png"
import { Link } from "react-scroll";

export default function Info(){
    return (
        <div id="home" className="flex flex-wrap p-8 lg:px-24 min-h-screen">
            <div className="w-full lg:w-1/2 flex flex-col items-start md:items-center lg:items-start justify-center p-5 lg:p-10">
                <span className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-8">JOHN CARL CUEVA</span>
                <div className="w-full sm:w-3/4 md:w-3/4">
                    <p className="lg:text-lg tracking-widest leading-loose">Dedicated Full Stack Web Developer specializing in creating and managing websites and web applications that propel product success.</p>
                </div>
                <Link to="projects" smooth="true" className="cursor-pointer mt-10 bg-gradient-to-r from-pink-600 to-purple-700 px-6 py-2 rounded-xl font-semibold">Projects</Link>
            </div>
            <div className="w-full lg:w-1/2 flex items-center justify-center">
                <img className="w-full sm:w-1/2 md:w-1/2 lg:w-3/4" src={profile} alt="" />
            </div>
        </div>
    )
}