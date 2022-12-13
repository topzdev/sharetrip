import { DetailedPost } from "@/types/data";
import { PostTravelTimeline } from "@/types/travelTimeline";
import pageRoutes from "configs/pageRoutes";
import Image from "next/image";
import React from "react";

type Props = {
  slug: DetailedPost["slug"];
  data: PostTravelTimeline;
  idx: number;
};

const TravelTimelineCard: React.FC<Props> = ({ slug, data, idx }) => {
  const { content, image, location, position, short_description, title, id } =
    data;
  const imagePath = `/images/post/${image}`;
  const timelineLink = pageRoutes.post(slug).subpages.timeline(id).to;
  const linkTitle = `View more about ${title}`;

  return (
    <div className="relative flex mb-10">
      <div className="h-[60px] w-[60px] absolute bg-primary -top-[20px] -left-[20px] rounded-full flex items-center justify-center text-white text-2xl font-bold font-serif">
        {position}
      </div>

      <a
        href={timelineLink}
        className="h-[180px] min-w-[260px] rounded-xl overflow-hidden select-none">
        <Image
          src={imagePath}
          width={350}
          height={180}
          className="object-cover object-center w-full h-full aspect-auto"
          alt={title}></Image>
      </a>

      <div className="d-flex flex-col items-start justify-start px-4">
        <p className="text-primary">{location}</p>
        <h3 className="text-3xl font-bold font-sans">{title}</h3>

        <p className="text-gray-800 mt-2">{short_description}</p>

        <a
          href={timelineLink}
          title={linkTitle}
          className="inline-flex font-bold !ml-auto text-primary mt-5 underline decoration-primary underline-offset-1 decoration-2 hover:decoration-4 transition-all">
          View More
        </a>
      </div>
    </div>
  );
};

export default TravelTimelineCard;
