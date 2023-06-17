import QueryProvider from "@/components/utility/QueryProvider";
import "@/styles/react-datepicker.css";
import { Merriweather, Work_Sans } from "@next/font/google";
import type { AppProps } from "next/app";
import { Hydrate } from "react-query";
import "../styles/globals.css";

const merriweather = Merriweather({
  variable: "--font-merriweather",
  weight: "400",
  subsets: ["latin"],
});
const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

type ComponentWithPageLayout = AppProps & {
  children: React.ReactNode;
  Component: AppProps["Component"] & {
    PageLayout?: any;
  };
};

export default function RootLayout({
  children,
  pageProps,
}: ComponentWithPageLayout) {
  return (
    <html lang="en">
      <body
        className={`${merriweather.variable} ${workSans.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
