"use client";

import Link from "next/link";
import ThemeButton from "./themeButton";

export default function NavBar() {

  return (
    <div>
      <div className="flex items-center justify-between w-full h-16 px-6 bg-white dark:bg-gray-800 border-b dark:border-gray-700">
        <div className="flex items-center">
          <Link
            href="/"
            className="text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300 px-4"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300 px-4"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300 px-4"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300 px-4"
          >
            Contact
          </Link>
        </div>
        <div className="bg-slate-900">
          <ThemeButton />
        </div>
      </div>
    </div>
  );
}
