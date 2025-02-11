import { Breadcrumb } from "@/components/ui/custom-breadcrumb";
import ProjectCard from "@/components/ui/project-card";

export default function Projects() {
  return (
    <main className="flex justify-center items-center w-full h-full text-white ">
      <div className="container mx-auto p-4">
        <Breadcrumb items={[{ label: "Projects", href: "/projetos" }]} />
        <div className="space-y-8">
          {/* <ProjectCard
            title="Projeto Individual"
            description="Um exemplo de um único projeto"
            projects={[
              {
                title: "Website Pessoal",
                description:
                  "Desenvolvimento do meu portfólio online usando Next.js e Tailwind CSS.",
                tags: ["Next.js", "React", "Tailwind CSS"],
                url: "/projetos/website-pessoal",
              },
            ]}
          /> */}

          <ProjectCard
            title="Freelance Projects"
            description="A collection of some my freelances."
            projects={[
              {
                title: "Burguer Restaurant",
                description: "A burguer restaurante template.",
                tags: ["React", "Node.js"],
                url: "projects/masterburguer",
              },
              {
                title: "...",
                description: "...",
                tags: ["...", "...", "..."],
                url: "/",
              },
            ]}
          />
        </div>
      </div>
    </main>
  );
}
