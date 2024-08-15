import React from "react";
import profile from "../assets/profile1.png"

export default function Info(){
    return (
        // <div className="w-full h-svh flex flex-col items-center text-center justify-center p-10 lg:p-32">
        //     <span className="text-4xl md:text-5xl lg:text-5xl font-extrabold">HI, I'M JOHN CARL CUEVA</span>
            // <div className="w-full sm:w-3/4 md:w-3/4 lg:w-1/2">
            //     <p className="mt-10 lg:mt-14 lg:text-lg">Dedicated Full Stack Web Developer specializing in creating and managing websites and web applications that propel product success.</p>
            // </div>
        //     <a href="#projects" className="bg-cyan-500 py-4 px-20 mt-8 rounded-lg"><span className="font-extrabold">PROJECTS</span></a>
        // </div>
        
        <div className="flex flex-wrap p-8 pt-24 lg:p-24">
            <div className="w-full lg:w-1/2 flex flex-col items-start md:items-center lg:items-start justify-center p-5 lg:p-10">
                <span className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-8">JOHN CARL CUEVA</span>
                <div className="w-full sm:w-3/4 md:w-3/4">
                    <p className="lg:text-lg tracking-widest">Dedicated Full Stack Web Developer specializing in creating and managing websites and web applications that propel product success.</p>
                </div>
                <a href="#projects" className="mt-10 bg-gradient-to-r from-pink-600 to-purple-700 px-6 py-2 rounded-xl font-semibold">Projects</a>
            </div>
            <div className="w-full lg:w-1/2 flex items-center justify-center mt-5">
                <img className="w-full sm:w-1/2 md:w-1/2 lg:w-3/4" src={profile} alt="" />
            </div>
        </div>
    )
}