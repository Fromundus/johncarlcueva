import React from "react"
import Info from "./components/Info"
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

export default function App() {
    return (
        <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
            <div className="fixed top-0 -z-10 w-full h-screen">
                <div className="relative h-full w-full bg-gradient-to-b from-slate-950 via-slate-950 to-purple-950"><div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div></div>
            </div>
            
            <div className="flex flex-col items-center px-10 lg:px-32">
                <Header />
                <Info />
                <About />
                <Projects />
                <Contact />
                <Navbar />
            </div>
        </div>
    )
}