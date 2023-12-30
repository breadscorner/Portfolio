import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brett Gill | Projects",
  description: "This page demonstrates my projects",
};

export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <section>
        <h2>Hark | Twitter Clone</h2>
        <p>Project 1 description</p>
      </section>
      <section>
        <h2>ProspectiveAI | Scholarship Navigator</h2>
        <p>Project 2 description</p>
        <ul>
          <li>React</li>
          <li>Next.js</li>
          <li>Langchain</li>
          <li>OpenAi</li>
          <li>SerpApi</li>
          <li>NeonDb</li>
          <li>DrizzleOrm</li>
          <li>NextAuth</li>
        </ul>  
      </section>
      <section>
        <h2>Crabby&apos;s | Banking Application</h2>
        <p>Project 3 description</p>
        <ul>
          <li>C#(Asp.net)</li>
          <li>CSS</li>
          <li>DB Browser</li>
          <li>Visual Studio</li>
          <li>Microsoft Azure</li>
        </ul>
      </section>
      <section>
        <h2>TravelMeet | Social Media</h2>
        <p>Project 4 description</p>
        <ul>
          <li>Express.js</li>
          <li>Node.js</li>
          <li>TailwindCSS</li>
        </ul>
      </section>
    </div>
  );
}
