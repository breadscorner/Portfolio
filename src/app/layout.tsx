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
    <>
      <Head>
        <title>Brett Gill&apos;s Portfolio</title>
        <meta name="description" content="Brett Gill's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <NavBar />
        <div>{children}</div>
        <Footer />
      </div>
    </>
  );
}
