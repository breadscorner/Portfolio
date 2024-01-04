'use client'

// Import necessary modules
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeButton from "./themeButton";
import { useTheme } from "next-themes";

// Define menu items
export const menuItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

// NavBar component
export default function NavBar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { resolvedTheme } = useTheme();
  const [logoSrc, setLogoSrc] = useState('');

  useEffect(() => {
    // Update logoSrc when the theme is resolved
    setLogoSrc(resolvedTheme === 'dark' ? '/brett-logo-dark.png' : '/brett-logo-light.png');
  }, [resolvedTheme]);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (href: any) => {
    if (window.location.pathname === href) {
      toggleMenu();
    } else {
      window.location.href = href;
    }
  };

  return (
    <div className="mt-[0.5rem]">
      <div className="flex justify-between items-center w-full">
        <div className="md:hidden flex items-center space-x-4 w-full">
          {/* Hamburger menu icon for small screens */}
          <button onClick={toggleMenu}>
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>

          {/* Image centered for small screens */}
          <div className="flex items-center justify-center w-full">
            <Link href="/">
              <Image
                src={logoSrc}
                alt="Brett Logo"
                width={75}
                height={75}
              />
            </Link>
          </div>

          {/* ThemeButton for smaller screens */}
          <ThemeButton />
        </div>

        <div className="hidden md:flex items-center space-x-4 w-full">
          {/* Image for larger screens */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src={logoSrc}
                alt="Brett Logo"
                width={100}
                height={100}
              />
            </Link>
          </div>

          {/* Navigation links for larger screens */}
          {menuItems.map((item, index) => (
            <Link key={index} href={item.href} onClick={() => handleLinkClick(item.href)}>
              {item.label}
            </Link>
          ))}

          {/* Spacer to push ThemeButton to the right */}
          <div className="flex-grow"></div>

          {/* ThemeButton for larger screens */}
          <ThemeButton />
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 flex items-center justify-center">
            {/* Mobile menu */}
            <div className="flex bg-white justify-center rounded-lg shadow-md w-full h-full items-center">
              {/* Close button */}
              <button className="absolute top-2 right-2 p-2" onClick={toggleMenu}>
                <svg
                  className="w-8 h-8 text-gray-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.35 5.64a1 1 0 011.42 1.42L6.41 15.9a1 1 0 01-1.42-1.42l8.36-8.36a1 1 0 011.42 0z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fillRule="evenodd"
                    d="M15.78 15.9a1 1 0 000-1.42l-8.36-8.36a1 1 0 00-1.42 1.42l8.36 8.36a1 1 0 001.42 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>

              {/* Navigation links */}
              <div className="flex flex-col items-center space-y-10">
                {menuItems.map((item, index) => (
                  <Link key={index} href={item.href} onClick={() => handleLinkClick(item.href)}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
