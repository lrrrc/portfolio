"use client"
import Header from "../components/header";
import ProjectCard from "@/components/ui/project-card";

export default function Projects() {
    return (
        <main>
            <Header />
            <div className="grid grid-cols-3 ml-[23rem] mr-[20rem] mt-36 max-md:ml-[15%] max-md:mr-0 max-md:grid-cols-1">
                <ProjectCard
                    title="Shortener URL"
                    content="This software is a URL shortener that facilitates the LGPD system for some documentation that I need to use on a daily basis. In this project, only JavaScript is used."
                    url="https://github.com/leozvx/encurtador-tinyurl"
                />
            </div>
        </main>
    )
}