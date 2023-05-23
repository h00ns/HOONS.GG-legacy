import React from 'react';
import '../styles/globals.css';
import type { AppContext, AppInitialProps, AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { NextComponentType } from 'next';
import { ReactQueryDevtools } from 'react-query/devtools';

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
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      {/* dev tools */}
      <ReactQueryDevtools />
      {/* dev tools end */}
    </QueryClientProvider>
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
