import React from 'react';
import Head from 'next/head';

interface ContainerBlockProps {
  children: React.ReactNode;
  title: string;
  description: string;
  image?: string;
}

const ContainerBlock: React.FC<ContainerBlockProps> = ({
  children,
  title,
  description,
  image = 'defaultImage.jpg', // Provide a default image path
}) => {
  const baseURL = 'https://brettgill.io';

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${baseURL}/${image}`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={baseURL} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${baseURL}/${image}`} />
        {/* More SEO tags as needed */}
      </Head>
      {children}
    </div>
  );
};

export default ContainerBlock;