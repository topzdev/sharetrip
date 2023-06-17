"use client";

import { GlobeAsiaAustraliaIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";

const SignUpBanners = () => {
  return (
    <div className="h-[500px] w-full overflow-hidden relative">
      <div className="relative h-full w-full z-10 before:block before:absolute before:left-0 before:top-0 before:w-full before:h-full before:z-1 before:bg-primary before:opacity-30">
        <div className="flex items-center justify-center flex-col h-full relative z-10">
          <GlobeAsiaAustraliaIcon className="mx-auto h-[50px] w-[50px] text-white mb-5" />

          <h2 className="text-5xl font-extrabold text-white text-center mx-2">
            Share your travel experience to us!
          </h2>
          <p className="text-white mt-3 mb-5 font-normal text-lg">
            Don’t keep your travel experience to few people share it to the
            world
          </p>

          <button className="bg-primary py-3 rounded-full px-10 text-xl text-white hover:bg-white hover:text-primary hover:font-semibold transition-all font-sans">
            Sign Up For Free
          </button>
        </div>
      </div>
      <Image
        className="top-0 left-0 !absolute object-cover object-center w-full h-full"
        src={"/images/banners/signup-banner.jpg"}
        alt="Sign up to us Wanderers"
        height={500}
        width={1920}
      ></Image>
    </div>
  );
};

export default SignUpBanners;
