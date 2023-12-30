import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import RootLayout from "../layout";
import "../globals.css";

export default function MyApp({ Component, pageProps }: any) {
  return (
    <NextUIProvider>
      <ThemeProvider attribute="class" enableSystem={true} defaultTheme="dark">
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </ThemeProvider>
    </NextUIProvider>
  );
}
