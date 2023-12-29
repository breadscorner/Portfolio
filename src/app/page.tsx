import { Metadata } from "next";

export const metadata: Metadata = {  
  title: 'Home',
  description: 'This is the home page',
};

export default function HomePage() {

  return (
      <div>
        <h1>Home Page</h1>
      </div>
  );
};
