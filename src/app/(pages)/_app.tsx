import { AppProps } from 'next/app';
import CustomErrorComponent from '../components/error';
import LoadingSpinner from '../components/loadingSpinner';
import { Suspense } from 'react';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CustomErrorComponent>
      <Suspense fallback={<LoadingSpinner />}>
        {/* Your layout components or providers */}
        <Component {...pageProps} />
      </Suspense>
    </CustomErrorComponent>
  );
}
