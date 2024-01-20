import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brett Gill | Contact",
  description: "Contact me",
};

export default function ContactPage() {

  return (
    <div>
      <h1>Contact</h1>
      <div>
        <p>
          <a href="mailto: hello@brettgill.io">
          <strong>Email</strong>
            </a>
        </p>
        <p>
          <a href="https://github.com/breadscorner">
          <strong>GitHub</strong>
            </a>
        </p>
        <p>
          <a href="https://www.linkedin.com/in/thebrettgill/">
          <strong>LinkedIn</strong>
            </a>
        </p>
        <p>
          <a href="https://www.instagram.com/bstevieg/">
          <strong>Instagram</strong>
            </a>
        </p>
      </div>
    </div>
  );
}
