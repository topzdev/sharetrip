import { DetailedPost } from "@/types/data";
import { getPost } from "api/post";
import { useRouter } from "next/router";
import React from "react";
import { useQuery } from "react-query";
import TravelTimelineCard from "./cards/TravelTimelineCard";
import PostSection from "./parts/PostSection";

type Props = {};

const PostTravelTimeline: React.FC<Props> = ({}) => {
  const router = useRouter();
  const slug = router.query.slug as string;
  const { data, error, isLoading } = useQuery<DetailedPost>(["post"]);

  if (isLoading) return <>loading...</>;
  if (error) return <>error</>;
  if (!data) return <>data not found</>;

  const travelTimeline = data.travel_timeline;

  return (
    <PostSection title="Travel Timeline" id="travelTimeline">
      <ul>
        {travelTimeline.map((item, idx) => (
          <li>
            <TravelTimelineCard
              slug={data.slug}
              data={item}
              idx={idx}></TravelTimelineCard>
          </li>
        ))}
      </ul>
    </PostSection>
  );
};

export default PostTravelTimeline;
