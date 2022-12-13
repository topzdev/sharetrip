import PostsSection from "./parts/PostSection";
import { DetailedPost } from "@/types/data";
import { getPost } from "api/post";
import { useRouter } from "next/router";
import React from "react";
import { useQuery } from "react-query";

type Props = {};

export default function PostIntroduction({}: Props) {
  const router = useRouter();
  const slug = router.query.slug as string;

  const { data, isLoading } = useQuery<DetailedPost>("post", () =>
    getPost(slug)
  );

  return (
    <PostsSection id="introduction" title="Introduction">
      {data?.intro}
    </PostsSection>
  );
}
