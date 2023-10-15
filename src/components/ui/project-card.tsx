
import { Eye } from "lucide-react";
import { Button } from "./button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "./card";
import { Separator } from "./separator";

interface IRequest {
    title: string,
    url: string,
    content: string
}

export default function ProjectCard({ title , url, content } : IRequest) {

    return (
        <Card className="grid grid-rows-[min-content_1fr_min-content] w-[20vw] min-h-[32vh] gap-2 flex-col p-1 mb-5  bg-neutral-700 border-none max-md:w-[72vw]">
            <CardHeader className="pb-0">
                <CardTitle className="text-zinc-50">
                    {title}
                </CardTitle>
                <Separator />
            </CardHeader>
            <CardContent className="w-full flex flex-col text-justify text-zinc-50 min-h-[5rem] text-lg leading-snug justify-start items-start relative">
                {content}
            </CardContent>
            <CardFooter className="flex justify-center">
                <Button onClick={() => window.open(url, '_blank')} className="w-[100px] bg-metaColor-100 hover:bg-metaColor-200 text-zinc-50 gap-2">
                    View <Eye />
                </Button>
            </CardFooter>
        </Card>
    )
}