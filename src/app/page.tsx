'use client'

import React, { useEffect, useState } from 'react';
import ContainerBlock from './components/containerBlock';

// Define the type for your fetched data
type SEOData = {
  title: string;
  description: string;
  image?: string;
};

export default function HomePage() {
  const [seo, setSeo] = useState<SEOData>({
    title: "Loading...",
    description: "",
    image: "",
  });

  useEffect(() => {

    const fetchData = async () => {
      const seoData: SEOData = {
        title: "Home | Brett Gill's Portfolio",
        description: "Welcome to my portfolio",
        image: "/images/portfolio-cover.jpg",
      };
      setSeo(seoData);
    };

    fetchData();
  }, []);

  return (
    <ContainerBlock
      title={seo.title}
      description={seo.description}
      image={seo.image}
    >
      {/* Page content here */}
      <div className='bg-slate-900'>
        <h1>Home Page</h1>
      </div>
    </ContainerBlock>
  );
};
