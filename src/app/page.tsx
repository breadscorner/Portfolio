// @ts-nocheck

// React Imports
import React from "react";
import ThreeDComponent from "./(pages)/home/three-d";

// Next Imports
import Image from "next/image";

export const metadata: Metadata = {
  title: "Brett Gill | Home",
  description: "Full Stack Web Developer",
};

export default function HomePage(): React.FC {

  return (
    <div>
      <div>
        <div>
          <h1>Brett Gill</h1>
          <h2>Full Stack Web Developer</h2>
        </div>
        <ThreeDComponent>
          <div className="flex justify-center items-center">
            <Image src="/brett-logo-light.png" alt="Brett Logo" width={175} height={175} />
          </div>
        </ThreeDComponent>
      </div>
    </div>
  );
};
