import post from "@/data/post.json";
import { DetailedPost } from "@/types/data";

export const getPost = async (slug: string): Promise<DetailedPost> => {
  return post;
};
