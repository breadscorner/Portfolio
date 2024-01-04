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
      <div className="projects-container">
        {projectsData.map((project: any, index: any) => (
          <section
            key={index}
            className={`project-section mb-5 pb-5 ${
              index < projectsData.length - 1
                ? "border-b-2 border-gray-300"
                : ""
            }`}
          >
            <Link href="https://vercel-prospective-three.vercel.app/">
              <h2 className="project-title">
                <strong>{project.title}</strong>
              </h2>
            </Link>
            {project.overview && (
              <p className="project-overview">{project.overview}</p>
            )}
            {project.background && (
              <p className="project-background">{project.background}</p>
            )}

            {project.features && (
              <ul className="project-features">
                {project.features.map((feature: any, featureIndex: any) => (
                  <li key={featureIndex}>{makeTextBeforeColonBold(feature)}</li>
                ))}
              </ul>
            )}

            {project.technologies && (
              <ul className="project-technologies">
                {project.technologies.map((tech: any, techIndex: any) => (
                  <li key={techIndex}>{makeTextBeforeColonBold(tech)}</li>
                ))}
              </ul>
            )}

            {project.getStarted && (
              <ul className="project-get-started">
                {project.getStarted.map((step: any, stepIndex: any) => (
                  <li key={stepIndex}>{makeTextBeforeColonBold(step)}</li>
                ))}
              </ul>
            )}

            {project.note && <p className="project-note">{project.note}</p>}
          </section>
        ))}
      </div>
    </div>
  );
}
