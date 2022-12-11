import React from "react";
import posts from "../../data/post.json";
import PostCard from "@/components/cards/PostCard";

const PostsSection = () => {
  return (
    <div className="grid grid-cols-6 gap-y-10 py-20">
      {posts.map((item) => (
        <PostCard key={item.slug} data={item}></PostCard>
      ))}
    </div>
  );
};

export default PostsSection;
