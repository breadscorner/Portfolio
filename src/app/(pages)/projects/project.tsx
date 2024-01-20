'use client';

import React, { useState } from 'react';
import Accordion from './accordion';
import projectsData from '../../../projectData/projectData.json';

export default function ProjectServerSide() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-wrap">
      {projectsData.map((project, index) => {
        // Ensure that project.icon exists and has properties name and svg
        const iconSvg = project.icon && project.icon
          ? project.icon
          : ''; // Provide a default value or handle the undefined case as needed
        return (
          <Accordion
            key={index}
            title={project.title}
            content={project.overview}
            icon={project.icon ?? ''}            
            backgroundImage={project.image}
            isInitiallyOpen={index === openIndex}
            onToggle={() => handleToggle(index)}
            index={index} // Passing the index to Accordion
          />
        );
      })}
    </div>
  );
}