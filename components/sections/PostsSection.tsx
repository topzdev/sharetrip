"use client";

import React, { FunctionComponent } from "react";
import PostCard from "@/components/cards/PostCard";
import { Post } from "@/types/data";

type PostsSectionProps = {
  items: Post[];
  title?: string;
};

const PostsSection: FunctionComponent<PostsSectionProps> = ({
  items,
  title,
}) => {
  return (
    <div className="py-10">
      {title && (
        <h2 className="text-3xl !font-black mb-5 font-sans">{title}</h2>
      )}

      <div className="grid grid-cols-6 gap-y-10">
        {items.map((item) => (
          <PostCard key={item.slug} data={item}></PostCard>
        ))}
      </div>
    </div>
  );
};

export default PostsSection;
