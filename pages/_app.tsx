import "../styles/globals.css";
import "@/styles/react-datepicker.css";
import type { AppProps } from "next/app";
import React, { useState } from "react";
import { NextPage } from "next";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";

import { Merriweather, Open_Sans, Work_Sans } from "@next/font/google";

const merriweather = Merriweather({
  variable: "--font-merriweather",
  weight: "400",
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
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

      <div id="headlessui-portal-root">
        {/* It needs at least one child, so that HeadlessUI doesn't remove this portal root workaround
        ( https://github.com/tailwindlabs/headlessui/blob/main/packages/@headlessui-react/src/components/portal/portal.tsx#L84 ) */}
        <div />
      </div>
    </main>
  );
}
