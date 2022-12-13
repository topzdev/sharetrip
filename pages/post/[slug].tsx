import DefautlLayout from "@/components/layout/layout";
import PostHeading from "@/components/pages/post/PostHeading";
import PostIntroduction from "@/components/pages/post/PostIntroduction";
import PostTravelTimeline from "@/components/pages/post/PostTravelTimeline";
import { DetailedPost } from "@/types/data";
import { getPost } from "api/post";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { ReactElement } from "react";
import { dehydrate, QueryClient, useQuery } from "react-query";

export const getServerSideProps: GetServerSideProps<{
  slug: string;
}> = async (context) => {
  const queryClient = new QueryClient();
  const slug = context.query.slug as string;
  await queryClient.prefetchQuery(["post"], () => getPost(slug));

  return {
    props: {
      slug,
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const PostPage = ({
  slug,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { data, isLoading, error } = useQuery<DetailedPost>(["post"], () =>
    getPost(slug)
  );

  return (
    <>
      <Head>
        <title>{data?.title}</title>
        <meta name="description" content={data?.intro} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostHeading />

      <div className="w-[1000px] mx-auto">
        <PostIntroduction />
        <PostTravelTimeline />
      </div>
    </>
  );
};

PostPage.getLayout = function getLayout(page: ReactElement) {
  return <DefautlLayout>{page}</DefautlLayout>;
};

export default PostPage;
