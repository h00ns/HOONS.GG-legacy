import React from 'react';
import '../styles/globals.css';
import type { AppContext, AppInitialProps, AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { NextComponentType } from 'next';
import { ReactQueryDevtools } from 'react-query/devtools';
import Head from 'next/head';

const MyApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({ Component, pageProps }) => {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // staleTime: Infinity,
            cacheTime: Infinity,
          },
        },
      }),
  );

  return (
    <>
      <Head>
        <title>Hoon.gg</title>
        <meta name="title" content="Hoon.gg" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hoon.gg" />
        <meta property="og:description" content="Hoon.gg" />
        {/* Open Graph end */}
      </Head>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />

        {/* dev tools only local */}
        <ReactQueryDevtools />
        {/* dev tools end */}
      </QueryClientProvider>
    </>
  );
};

MyApp.getInitialProps = async ({ Component, ctx }: AppContext): Promise<AppInitialProps> => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};

export default MyApp;
