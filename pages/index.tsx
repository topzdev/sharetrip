import Head from "next/head";
import Image from "next/image";
import React, { ReactElement } from "react";
import HomepageCarousel from "../components/homepage/HomepageCarousel";
import DefautlLayout from "../components/layout/layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>ShareTrip</title>
        <meta name="description" content="ShareTrip" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomepageCarousel />
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefautlLayout>{page}</DefautlLayout>;
};
