import DefautlLayout from "@/components/layout/layout";
import PostHeading from "@/components/pages/post/PostHeading";
import { DetailedPost } from "@/types/data";
import { getPost } from "api/post";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { ReactElement } from "react";
import { dehydrate, QueryClient, useQuery } from "react-query";

export const getServerSideProps: GetServerSideProps<{
  slug: string;
}> = async (context) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("post", () => getPost(slug));
  // const res = await fetch("https://.../data");
  const slug = context.query.slug as string;

  return {
    props: {
      slug,
      dehydatedState: dehydrate(queryClient),
    },
  };
};

const PostPage = ({
  slug,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { data, isLoading } = useQuery<DetailedPost>("post", () =>
    getPost(slug)
  );

  return (
    <>
      <PostHeading />
    </>
  );
};

PostPage.getLayout = function getLayout(page: ReactElement) {
  return <DefautlLayout>{page}</DefautlLayout>;
};

export default PostPage;
