import React from 'react';
import '../styles/globals.css';
import Head from 'next/head';
import type { AppContext, AppInitialProps, AppProps } from 'next/app';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { NextComponentType } from 'next';
import { ReactQueryDevtools } from 'react-query/devtools';
import { appWithTranslation } from 'next-i18next';
import { RecoilRoot } from 'recoil';
import DataManager from '@utils/DataManager';

const MyApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({ Component, pageProps }) => {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // staleTime: Infinity,
            cacheTime: Infinity,
            retry: 0,
            refetchOnWindowFocus: false,
          },
        },
      }),
  );

  return (
    <>
      <Head>
        <title>HOONS.GG</title>
        <meta name="title" content="HOONS.GG" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="HOONS.GG" />
        <meta property="og:description" content="HOONS.GG - League Of Legend Search Platform" />
        <meta property="og:image" content="https://hoons.site/assets/images/lol-og.jpeg" />
        {/* Open Graph end */}
      </Head>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <DataManager>
              <Component {...pageProps} />
            </DataManager>
          </Hydrate>

          {/* dev tools only local */}
          <ReactQueryDevtools />
          {/* dev tools end */}
        </QueryClientProvider>
      </RecoilRoot>
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

export default appWithTranslation(MyApp);
