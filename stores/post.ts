import create from "zustand";
import { devtools, persist } from "zustand/middleware";

interface PostState {
  post: number;
}

export const usePostStore = create<PostState>()(
  devtools((set) => ({
    post: 0,
    setPost() {},
  }))
);
