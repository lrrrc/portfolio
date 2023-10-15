"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "../components/header";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Eye } from "lucide-react";
import ProjectCard from "@/components/ui/project-card";

export default function Projects() {
    return (
        <main>
            <Header />
            <div className="grid grid-cols-3 ml-[23rem] mr-[20rem] mt-36">
                <ProjectCard
                    title="Shortener URL"
                    content="This software is a URL shortener that facilitates the LGPD system for some documentation that I need to use on a daily basis. In this project, only JavaScript is used."
                    url="https://github.com/leozvx/encurtador-tinyurl"
                />
            </div>
        </main>
    )
}