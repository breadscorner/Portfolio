import { ThemeProvider } from 'next-themes';
import RootLayout from '../layout';
import '../globals.css';

export default function MyApp({ Component, pageProps }: any) {
  return (
    <ThemeProvider attribute="class" enableSystem={true} defaultTheme="system">
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </ThemeProvider>
  );
}
