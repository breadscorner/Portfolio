import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import Layout from "../layout";
import "../globals.css";

export default function MyApp({ Component, pageProps }: any) {
  return (
    <NextUIProvider>
      <ThemeProvider attribute="class" enableSystem={true} defaultTheme="dark">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </NextUIProvider>
  );
}
