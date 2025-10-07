import ProjectCard from "../projectCard/ProjectCard";

const Projects = () => {
    return (
    <>
        <section id="projects" className="flex flex-col items-center w-full min-h-lvh mt-12 p-4 pt-14 gap-6 relative max-w-[1920px]">
            <h2 className="text-3xl mb-4 font-semibold">Projects</h2>

            <div className="flex flex-col justify-center gap-12">
                <ProjectCard title="HeicTo" description="Conversor de arquivos .heic para arquivo JPG/HEIC. Tudo rodando no front." imageUrl="/heicTo.webp" tags={[{ label: "CSS", color: "#00005F" }, { label: "Next.js", color: "#000" }]} projectUrl="https://github.com/Lucas-Santos00/heicto?tab=readme-ov-file" />
                <ProjectCard title="Páginas que vendem" description="Landing Page simples para captar e vender paginas HTML/CSS para pessoas que precisam de presença na web." imageUrl="/paginas-que-vendem.webp" tags={[{ label: "CSS", color: "#00005F" }, { label: "HTML", color: "#FFA500" }]} projectUrl="https://github.com/Lucas-Santos00/Paginas-que-vendem" />
                <ProjectCard title="MicroAB" description="MicroAB é um sistema voltado para análise e otimização de produtos digitais. Ele permite criar experimentos A/B." imageUrl="/microAb.webp" tags={[{ label: "Redis", color: "#BD5F13" }, { label: "Node", color: "#1D6622" }, { label: "Drizzle", color: "#003D03"}, { label: "NextJs", color: "#000D03" }]} projectUrl="https://github.com/Lucas-Santos00/SDK" />
            </div>

        </section>
    </>
    );
}

export default Projects;