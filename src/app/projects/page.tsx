"use client"
import Header from "../components/header";
import ProjectCard from "@/components/ui/project-card";

export default function Projects() {
    return (
        <main>
            <Header />
            <div className="grid grid-cols-3 ml-[23rem] mr-[20rem] mt-36 max-2xl:ml-[15%] max-2xl:mr-0 max-2xl:grid-cols-1">
                <ProjectCard
                    title="Shortener URL"
                    content="This software is a URL shortener that facilitates the LGPD system for some documentation that I need to use on a daily basis. In this project, only JavaScript is used."
                    url="https://github.com/leozvx/encurtador-tinyurl"
                />
                 <ProjectCard
                    title="Studying Guide"
                    content="A straightforward guide to enhance your coding skills. This guide covers various programming fundamentals with a particular focus on algorithms and Front-End tips."
                    url="https://leozvx.github.io/study-pages"
                />
                  <ProjectCard
                    title="scratchend"
                    content="A new CLI tool to save time in your back-end setup. The function of the CLI is to create all your dependencies and the basic architecture, so you can start your project with all the best practices."
                    url="https://github.com/scratchend/scratchend"
                />
            </div>
        </main>
    )
}