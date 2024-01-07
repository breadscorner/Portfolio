import { AppProps } from 'next/app';
import CustomErrorComponent from '../components/error/error';
import LoadingSpinner from '../components/error/loadingSpinner';
import { Suspense } from 'react';
import Layout from "../layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CustomErrorComponent>
      <Suspense fallback={<LoadingSpinner />}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Suspense>
    </CustomErrorComponent>
  );
}
