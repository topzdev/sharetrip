import Head from "next/head";
import Image from "next/image";
import React, { ReactElement } from "react";
import HomepageCarousel from "@/components/carousels/HomepageCarousel";
import DefautlLayout from "@/components/layout/main";
import PostsSection from "@/components/sections/PostsSection";
import posts from "@/data/posts.json";
import SignUpBanners from "@/components/banners/SignUpBanners";

export default function Home() {
  return (
    <>
      <Head>
        <title>ShareTrip</title>
        <meta name="description" content="ShareTrip" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomepageCarousel />
      <div className="container mx-auto">
        <PostsSection title="Popular" items={posts} />
      </div>

      <SignUpBanners />

      <div className="container mx-auto">
        <PostsSection title="Recently Added" items={posts} />
      </div>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefautlLayout>{page}</DefautlLayout>;
};
