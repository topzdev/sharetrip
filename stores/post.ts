import { DetailedPost } from "@/types/data";
import create from "zustand";
import { devtools, persist } from "zustand/middleware";

interface PostState {
  post: DetailedPost | null;
  setPost: (data: DetailedPost) => void;
}

export const usePostStore = create<PostState>()(
  devtools((set) => ({
    post: null,
    setPost: (data) => {
      set({
        post: data,
      });
    },
  }))
);
