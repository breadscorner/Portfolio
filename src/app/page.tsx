// @ts-nocheck

"use client";

import { useState, useCallback } from "react";
import Head from "next/head";
import Image from "next/image";

export default function HomePage() {
  const [style3d, setStyle3d] = useState({
    transform: "",
    transformStyle: "preserve-3d" as React.CSSProperties["transformStyle"],
  });

  const handleMouseMove = useCallback((ev) => {
    if (!ev.target) return;

    const rect = ev.currentTarget.getBoundingClientRect();
    const offsetX = ev.clientX - rect.left;
    const offsetY = ev.clientY - rect.top;

    // Check if the screen width is below a certain threshold (e.g., 600px)
    const isMobile = window.innerWidth <= 600;

    // Adjust the rotation values based on the device type
    const rotX = isMobile ? 0 : 90 - (offsetX / rect.width) * 180;
    const rotY = isMobile ? 0 : 90 - (offsetY / rect.height) * 180;

    setStyle3d({
      transform: `rotateX(${rotY}deg) rotateY(${rotX}deg)`,
      transformStyle: "preserve-3d",
    });
  }, []);

  return (
    <div>
      <Head>
        <title>Brett Gill | Home</title>
        <meta name="description" content="Welcome to my portfolio" />
      </Head>
      <div>
        <div>
          <h1 className="">Brett Gill</h1>
          <h2 className="">Full Stack Web Developer</h2>
        </div>
        <div className="hidden md:block" onMouseMove={handleMouseMove}>
          <div className="item-3d" style={style3d as React.CSSProperties}>
            <div className="flex justify-center items-center">
              <Image
                src="/brett-logo.png"
                alt="Brett Logo"
                width={175}
                height={175}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
