// Import necessary libraries and components
import { Metadata } from "next";
import Accordion from "./accordion";
import projectsData from "../../../projectData/projectData.json";
import ProjectServerSide from "./project";

export const metadata: Metadata = {
  title: "Brett Gill | Projects",
  description: "Recent projects.",
};

export default function Projects() {

  return (
<div>
  <ProjectServerSide />
</div>
  );
}
