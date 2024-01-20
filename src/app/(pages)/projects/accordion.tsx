//@ts-nocheck

'use client';

import React, { useState, useEffect } from 'react';

interface AccordionProps {
  title: string;
  content: string;
  icon?: string
  backgroundImage: string;
  isInitiallyOpen: boolean;
  onToggle: (index: number) => void;
  index: number;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  content,
  icon,
  backgroundImage,
  isInitiallyOpen,
  onToggle,
  index
}) => {
  const [isOpen, setIsOpen] = useState(isInitiallyOpen);

  useEffect(() => {
    setIsOpen(isInitiallyOpen);
  }, [isInitiallyOpen]);

  const toggleAccordion = () => {
    onToggle(index);
    setIsOpen(!isOpen);
  };

  // Function to create markup from SVG string
  const createMarkup = (svgString: string) => {
    return { __html: svgString };
  };

  return (
    <div
      className={`transition-all duration-300 ease-in-out flex flex-col rounded-xl ${isOpen ? 'flex-grow' : 'flex-none'} mx-2 my-4`}
      style={{
        height: '80vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        flexBasis: isOpen ? '0' : '10%',
        flexGrow: isOpen ? 1 : 0,
        maxWidth: isOpen ? '90%' : '10%',
        borderRadius: '20px',
        overflow: 'hidden',
      }}
    >
      <div
        className="p-4 cursor-pointer flex justify-between items-center text-white"
        style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        onClick={toggleAccordion}
      >
        {
          isOpen
            ? <h2 className="text-xl">{title}</h2> // Display title if accordion is open
            : <div className="svg-icon w-8 h-8 text-white" dangerouslySetInnerHTML={createMarkup(icon)} /> // Display SVG icon if accordion is closed
        }
        <div className="text-xl">{isOpen ? '-' : '+'}</div>
      </div>

      {isOpen && (
        <div className="p-4 overflow-auto bg-white">
          {content}
        </div>
      )}
    </div>
  );
};

export default Accordion;