// Import necessary libraries and components
import { Metadata } from "next";
import projectsData from "../../../projectData/projectData.json";
import Link from "next/link";

const makeTextBeforeColonBold = (text: any) => {
  const [beforeColon, afterColon] = text.split(":");
  return (
    <>
      <strong>{beforeColon}</strong>: {afterColon}
    </>
  );
};

export const metadata: Metadata = {
  title: "Brett Gill | Projects",
  description: "Recent projects.",
};

export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <div className="projects-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project: any, index: any) => (
          <div key={index} className="project-wrapper">
            <section
              className="project-cont"
              style={
                project.image
                  ? {
                      backgroundImage: `url('/${project.image}')`,
                      backgroundSize: "cover",
                    }
                  : {}
              }
            >
            </section>
            <Link href={project.url} target="_blank" rel="noopener noreferrer">
              <h2 className="project-title mb-2">
                <strong>{project.title}</strong>
              </h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
