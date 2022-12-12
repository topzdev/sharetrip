import React, { useState } from "react";
import PostHeadingGallery from "./heading/PostHeadingGallery";

const PostHeading = () => {
  const [appbarHeight, setAppbarHeight] = useState(91);

  return (
    <div
      className={`bg-neutral-900 text-white h-screen pt-[${appbarHeight}px]`}>
      <PostHeadingGallery />
    </div>
  );
};

export default PostHeading;
