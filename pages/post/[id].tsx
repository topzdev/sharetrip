import { useRouter } from "next/router";
import React, { ReactElement } from "react";
import DefautlLayout from "@/components/layout/layout";
import PostHeading from "@/components/pages/post/PostHeading";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import posts from "@/data/post.json";

type Data = {
  id: number;
  slug: string;
  title: string;
  location: string[];
  statistics: {
    review: {
      rate: number;
      count: number;
    };
    itinerary: {
      days: number;
    };
    spent: {
      amount: number;
      currency: string;
    };
  };
  images: string[];
  intro: string;
  travel_timeline: {
    position: number;
    title: string;
    location: string;
    short_description: string;
    content: string;
    image: string;
  }[];
  keep_in_minds: {
    title: string;
    content: string;
  }[];
  user: {
    firstname: string;
    lastname: string;
    profile: string;
    joined_date: string;
    followers: number;
    introduction: string;
  };
  comments: {
    user: {
      firstname: string;
      lastname: string;
      profile: string;
    };
    title: string;
    content: string;
    statistics: {
      likes: number;
    };
    created_at: string;
  }[];
};

export const getServerSideProps: GetServerSideProps<{ data: Data }> = async (
  context
) => {
  // const res = await fetch("https://.../data");
  const data: Data = posts;

  return {
    props: {
      data,
    },
  };
};

const PostByIdPage = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <PostHeading></PostHeading>
    </>
  );
};

PostByIdPage.getLayout = function getLayout(page: ReactElement) {
  return <DefautlLayout>{page}</DefautlLayout>;
};

export default PostByIdPage;
