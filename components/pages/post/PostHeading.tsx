import { DetailedPost } from "@/types/data";
import { getPost } from "api/post";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { usePostStore } from "stores/post";
import PostHeadingGallery from "./heading/PostHeadingGallery";
import PostHeadingInformation from "./heading/PostHeadingInformation";

type Props = {};

const PostHeading: React.FC<Props> = ({}) => {
  const router = useRouter();
  const slug = router.query.slug as string;
  const { data, error, isLoading } = useQuery<DetailedPost>("post", () =>
    getPost(slug)
  );
  const [appbarHeight, setAppbarHeight] = useState(91);

  if (isLoading) return <>loading...</>;
  if (error) return <>error</>;
  if (!data) return <>data not found</>;

  return (
    <div
      className={`bg-neutral-900 text-white h-screen`}
      style={{ paddingTop: `${appbarHeight}px` }}>
      <PostHeadingGallery images={data?.images} />
      <PostHeadingInformation info={data} />
    </div>
  );
};

export default PostHeading;
