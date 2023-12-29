"use client";

import Link from "next/link";
import ThemeButton from "./themeButton";

export default function NavBar() {
  return (
    <div>
      <div>
        <div>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div>
          <ThemeButton />
        </div>
      </div>
    </div>
  );
}
