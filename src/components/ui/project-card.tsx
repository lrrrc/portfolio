import React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  tags?: string[];
  url: string;
}

const Project: React.FC<ProjectProps> = ({ title, description, tags, url }) => {
  const isExternal = url.startsWith("http");
  const LinkComponent = isExternal ? "a" : Link;

  return (
    <LinkComponent
      href={url}
      className="block mb-4 last:mb-0 p-4 rounded-lg transition-colors hover:bg-zinc-800"
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold">{title}</h3>
        {isExternal && (
          <ExternalLink className="w-4 h-4 text-muted-foreground" />
        )}
      </div>
      <p className="text-sm text-muted-foreground mt-1">{description}</p>
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      )}
    </LinkComponent>
  );
};

interface ProjectCardProps {
  title: string;
  description?: string;
  projects: ProjectProps[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  projects,
}) => {
  return (
    <Card className="w-full border-zinc-700 max-w-2xl mx-auto text-white bg-transparent">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        {projects.length === 1 ? (
          <Project {...projects[0]} />
        ) : (
          <div className="space-y-6">
            {projects.map((project, index) => (
              <React.Fragment key={index}>
                <Project {...project} />
                {index < projects.length - 1 && (
                  <hr className="my-4 border-t border-gray-200 dark:border-gray-700" />
                )}
              </React.Fragment>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
