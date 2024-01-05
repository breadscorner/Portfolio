import { AppProps } from 'next/app';
import CustomErrorComponent from '../components/error';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CustomErrorComponent>
      {/* Your layout components or providers */}
      <Component {...pageProps} />
    </CustomErrorComponent>
  );
}
