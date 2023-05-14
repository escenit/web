import SectionTitle from "../Common/SectionTitle";
import SingleProject from "./SingleProject";
import projectsData from "@/components/Project/projectsData";

const Project = () => {
    return (
        <section id="project" className="bg-primary/5 py-16 md:py-20 lg:py-28">
            <div className="container">
                <SectionTitle
                    title="Casos de éxito"
                    paragraph="Nos enorgullece compartir alguno de los éxitos que hemos logrado en colaboración con nuestros clientes. "
                    center
                />

                <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
                    {projectsData.map((project) => (
                        <div key={project.id} className="w-full h-full">
                            <SingleProject project={project}/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Project;
