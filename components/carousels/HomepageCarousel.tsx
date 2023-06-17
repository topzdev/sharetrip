"use client";

import dayjs from "dayjs";
import Image from "next/image";
import { FunctionComponent, useRef, useState } from "react";
import { Autoplay, Pagination, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperMain } from "swiper/types";
import data from "../../data/featured.json";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

type CarouselItemProps = {
  data: typeof data[0];
  idx: number;
};

type CarouselInformtionProps = {
  data: typeof data[0];
};

const CarouselItem: FunctionComponent<CarouselItemProps> = ({ idx, data }) => {
  return (
    <Image
      className="object-cover object-center h-full w-full"
      priority={idx === 1}
      src={`/images/locations/${data.image}`}
      width={1920}
      height={1080}
      loading={idx !== 1 ? "lazy" : "eager"}
      alt={data.title}
    ></Image>
  );
};

const CarouselInformtion: FunctionComponent<CarouselInformtionProps> = ({
  data,
}) => {
  const user = data.user;

  return (
    <div className="container mx-auto relative h-screen flex items-end py-[100px] z-20 bg-red text-white">
      <div className="w-3/4">
        <p className="flex items-center text-lg font-sans">
          <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="stroke-primary w-8 h-8 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>

          {data.location}
        </p>

        <h1 className="font-sans font-bold text-[75px] leading-tight tracking-tight">
          {data.title}
        </h1>

        <div className="flex items-center mt-3">
          <div className="rounded-full overflow-hidden h-[45px] w-[45px] mr-3">
            <Image
              src={`/images/profiles/${user.profile}`}
              alt={`${user.firstname} ${user.lastname}`}
              width={50}
              height={50}
            />
          </div>
          <p className="leading-tight">
            <span>
              {user.firstname} {user.lastname}
            </span>
            <br />
            <span className="opacity-70">
              <small>{dayjs(data.created_at).format("MMMM DD, YYYY")}</small>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

const CarouselBackdrop = () => {
  return (
    <div className="absolute h-full w-full bg-gradient-to-t from-black to-transparent opacity-40 z-10"></div>
  );
};

const HomepageCarousel = () => {
  const [current, setCurrent] = useState(data[0]);
  const modules = [Autoplay, Pagination, EffectFade];
  const autoplayOpt = {
    delay: 10000,
  };

  const slidesPerView = 1;

  const onSlideChange = (e: SwiperMain) => {
    setCurrent(data[e.realIndex]);
  };

  return (
    <div
      className="homepage-carousel h-screen w-full overflow-hidden relative"
      id="homepageCarousel"
    >
      <Swiper
        className="h-full w-full !absolute z-10"
        loop
        pagination={{
          el: ".homepage-carousel-pagination",
          type: "bullets",

          clickable: true,
        }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        modules={modules}
        autoplay={autoplayOpt}
        slidesPerView={slidesPerView}
        onSlideChange={onSlideChange}
      >
        {data.map((item, idx) => (
          <SwiperSlide className="h-full w-full relative" key={item.id}>
            <CarouselItem data={item} idx={idx}></CarouselItem>
          </SwiperSlide>
        ))}
      </Swiper>
      <CarouselBackdrop />
      <CarouselInformtion data={current} />
      <div className="homepage-carousel-pagination"></div>
    </div>
  );
};

export default HomepageCarousel;
