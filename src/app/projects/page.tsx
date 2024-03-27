"use client"
import Header from "../components/header";
import ProjectCard from "@/components/ui/project-card";

export default function Projects() {
    return (
        <main>
            <Header />
            <div className="grid gap-4 grid-rows-2 mt-8 justify-center content-center grid-flow-col">
               <ProjectCard
                title="My personal AI"
                content="This AI is designed to provide daily assistance. It's powered by the ChatGPT 4 Turbo API."
                url="https://ai.leonardocardoso.dev"     
               />
            </div>
        </main>
    )
}