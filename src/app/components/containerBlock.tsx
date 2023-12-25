"use client";

import React, { ReactNode } from "react";
import Head from "next/head";
import Navbar from "./navBar";
import Footer from "./footer";

type ContainerBlockProps = {
  children: ReactNode;
  title: string;
  description: string;
  image?: string;
};

export const ContainerBlock: React.FC<ContainerBlockProps> = ({
  children,
  title,
  description,
  image = "/avatar.png",
}) => {
  const meta = {
    title,
    description,
    image,
    type: "website",
    url: "https://brettgill.io",
  };

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />

        {/* Standard SEO */}
        <meta name="robots" content="follow, index" />
        <link rel="canonical" href={meta.url} />

        {/* Open Graph / Facebook / LinkedIn */}
        <meta property="og:type" content={meta.type} />
        <meta property="og:url" content={meta.url} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={meta.url} />
        <meta property="twitter:title" content={meta.title} />
        <meta property="twitter:description" content={meta.description} />
        <meta property="twitter:image" content={meta.image} />
      </Head>

      <main className="dark:bg-gray-800 w-full">
        <Navbar />
        <div>
          {children}
        </div>
      </main>
    </div>
  );
};
