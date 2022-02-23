import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Layout from '../src/components/Layout/Layout';
import Header from '../src/components/Layout/Header/Header';
import Footer from '../src/components/Layout/Footer/Footer';
import { Fragment } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
