import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode, useState } from "react";
import { NextPage } from "next";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";

import { Merriweather, Open_Sans, Work_Sans } from "@next/font/google";

const merriweather = Merriweather({
  variable: "--font-merriweather",
  weight: ["300", "400"],
});

const workSans = Open_Sans({
  variable: "--font-work-sans",
  weight: ["400", "500", "600", "700"],
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  const [queryClient] = useState(() => new QueryClient());

  return (
    <main className={`${merriweather.variable} ${workSans.variable} font-sans`}>
      {getLayout(
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />
          </Hydrate>
        </QueryClientProvider>
      )}
    </main>
  );
}
