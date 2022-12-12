import { DetailedPost } from "@/types/data";
import Image from "next/image";
import React from "react";

interface PostHeadingGalleryProps {
  images: DetailedPost["images"];
}

const PostHeadingGallery: React.FC<PostHeadingGalleryProps> = ({ images }) => {
  const styledImages = [
    {
      image: images[0],
      height: 700,
      width: 700,
      alt: "Image 1",
      class: "col-span-2 row-span-2",
    },
    {
      image: images[1],
      height: 300,
      width: 300,
      alt: "Image 2",
      class: "auto-rows-fr",
    },
    {
      image: images[2],
      height: 300,
      width: 300,
      alt: "Image 3",
      class: "auto-rows-fr",
    },
    {
      image: images[3],
      height: 300,
      width: 300,
      alt: "Image 3",
      class: "auto-rows-fr",
    },
    {
      image: images[4],
      height: 300,
      width: 300,
      alt: "Image 4",
      class: "auto-rows-fr",
    },
    {
      image: images[5],
      height: 300,
      width: 300,
      alt: "Image 4",
      class: "col-span-2",
    },
  ];

  return (
    <div className="grid grid-cols-5 grid-rows-2 gap-4 max-h-[550px] w-full px-4">
      {styledImages.map((item) => (
        <Image
          className={`object-cover w-full h-full select-none ${item.class}`}
          src={`/images/post/${item.image}`}
          height={item.height}
          width={item.width}
          draggable={false}
          alt={item.alt}
          placeholder="empty"></Image>
      ))}
    </div>
  );
};

export default PostHeadingGallery;
