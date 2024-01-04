import React from "react";

import Footer from "./components/footer";
import NavBar from "./components/navigation/navBar";
import { menuItems } from "./components/navigation/navBar";

// Without this import, the Tailwind styles will not be applied
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col container mx-auto mt-1 h-[100dvh]">
      <NavBar />
        <div className="flex-1">
          {children}
        </div>
        <div className="mt-auto">
          <Footer />
        </div>
      </body>
    </html>
  );
}
