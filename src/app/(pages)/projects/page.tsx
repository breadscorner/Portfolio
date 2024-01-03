import { Metadata } from "next";
import projectsData from "../../../projectData/projectData.json";

export const metadata: Metadata = {
  title: "Brett Gill | Projects",
  description: "Recent projects.",
};

export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      {projectsData.map((project: any, index: any) => (
        <section key={index}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          {project.technologies && (
            <ul>
              {project.technologies.map((tech: any, techIndex: any) => (
                <li key={techIndex}>{tech}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  );
}
