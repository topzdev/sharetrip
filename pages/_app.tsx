import "../styles/globals.css";
import type { AppProps } from "next/app";
import React, { useState } from "react";
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

type ComponentWithPageLayout = AppProps & {
  Component: AppProps["Component"] & {
    PageLayout?: any;
  };
};

export default function App({ Component, pageProps }: ComponentWithPageLayout) {
  const PageContent = () => (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
  const [queryClient] = useState(() => new QueryClient());

  return (
    <main className={`${merriweather.variable} ${workSans.variable} font-sans`}>
      {Component.PageLayout ? (
        <Component.PageLayout>
          <PageContent />
        </Component.PageLayout>
      ) : (
        <PageContent />
      )}
    </main>
  );
}
