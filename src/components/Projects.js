import React from "react";

export default function Projects(){
    const projects = [
        {
            title: "DAILY ACCOMPLISHMENT MANAGEMENT SYSTEM",
            thumbnail: "",
            description: "",
            technologies: ["HTML", "CSS", "PHP", "JAVASCRIPT", "BOOTSTRAP", "MYSQL"]
        },
        {
            title: "SCHOLASTIC DOCUMENT REQUEST AND RETRIEVAL SYSTEM",
            thumbnail: "",
            description: "",
            technologies: ["HTML", "CSS", "JAVASCRIPT", "REACT", "PHP", "LARAVEL", "BOOTSTRAP", "MYSQL"]
        },
        {
            title: "VOTING MANAGEMENT SYSTEM",
            thumbnail: "",
            description: "",
            technologies: ["HTML", "CSS", "PHP", "JAVASCRIPT", "C#", "REACT", "LARAVEL", "BOOTSTRAP", "MYSQL"]
        },
        {
            title: "BOARDINGHOUSE MANAGEMENT SYSTEM",
            thumbnail: "",
            description: "",
            technologies: ["HTML", "CSS", "PHP", "JAVASCRIPT", "REACT", "LARAVEL", "BOOTSTRAP", "MYSQL"]
        },
        {
            title: "YOUTUBE KARAOKE SYSTEM",
            thumbnail: "",
            description: "",
            technologies: ["HTML", "CSS", "PHP", "JAVASCRIPT", "REACT", "LARAVEL", "BOOTSTRAP", "MSQL"]
        }
    ]

    const renderProjects = projects.map( (item, index) => {
        return (
            <div className="flex p-5" key={index}>
                <div>
                    <img src={item.thumbnail} alt={`thumbnail${index}`} />
                </div>
                <div>
                    <span className="font-bold">{item.title}</span>
                    <p className="mt-5">{item.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                        {item.technologies.map( (tech, index) => {
                            return (
                                <div key={index} className="px-3 py-1 bg-neutral-700 rounded">{tech}</div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div id="projects" className="w-full min-h-screen flex flex-col justify-center p-10 lg:p-32">
            <span className="text-3xl md:text-4xl lg:text-4xl text-center font-bold">PROJECTS</span>
            <div className="mt-4 rounded-md self-center bg-pink-600" style={{height: "5px", width: "40px"}}></div>
            <div className="flex flex-col-reverse flex-wrap gap-10 mt-10">
                {renderProjects}
            </div>
        </div>
    )
}