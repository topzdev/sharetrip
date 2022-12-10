import React, { FunctionComponent } from "react";
import posts from "../../data/post.json";

type Post = {
  title: string;
  location: string | string[];
  rating_count: number;
  like_count: number;
  image: string;
  user: {
    id: string;
    firstname: string;
    lastname: string;
    profile: string;
  };
  created_at: string;
};

type PostCardProps = {
  data: Post;
};

const PostCard: FunctionComponent<PostCardProps> = ({ data }) => {
  return <div></div>;
};

export default PostCard;
