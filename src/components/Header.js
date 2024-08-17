import React from "react";
import logo from "../assets/logo-white.png";

export default function Header(){
    const [isOn, setIsOn] = React.useState(false);

    function toggle(){
        setIsOn(prev => !prev);
    }

    return (
        <nav className="px-8 lg:px-32 flex items-center justify-between py-3 lg:py-4 w-full bg-slate-950">
            <div className="flex flex-shrink-0 items-center">
                <a href="/" className="font-bold ms-3 hover:text-pink-600 text-2xl"><img className="w-12" src={logo} alt="" /></a>
            </div>
            <button className="bg-gradient-to-r py-2 px-4 font-bold rounded-full from-pink-600 to-purple-700">Work with me</button>
        </nav>
    )
}