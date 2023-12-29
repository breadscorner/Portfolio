import Head from "next/head";
import React from "react";
import Footer from "./components/footer";
import NavBar from "./components/navigation/navBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
