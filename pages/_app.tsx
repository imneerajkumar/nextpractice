/* eslint-disable @next/next/no-img-element */
import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"/>
    </>
  )
}
