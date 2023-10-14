import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "../components/header";

export default function Projects() {
    return (
        <main>
            <Header />
            <div>
                <Card className="">
                    <CardHeader>
                        <CardTitle>
                            Title
                        </CardTitle>
                        <CardDescription>
                            Description
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        Content
                    </CardContent>
                </Card>
            </div>
        </main>
    )
}