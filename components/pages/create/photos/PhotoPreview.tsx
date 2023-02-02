import Chip from "@/components/chips/Chip";
import { CreatePhoto } from "@/types/createItinerary";
import Image from "next/image";
import React from "react";

type Props = { photo: CreatePhoto; others?: boolean };

const PhotoTopTag: React.FC<{ type: "main" | "post" | false }> = ({ type }) => {
  let title = "";

  switch (type) {
    case "main":
      title = "Main Cover";
      break;
    case "post":
      title = "Post Cover";
  }

  return (
    <>
      {type && (
        <Chip
          className="absolute top-3 left-3 font-semibold"
          label={title}
          color="default"
        />
      )}
    </>
  );
};

const PhotoPreview: React.FC<Props> = ({ photo, others }) => {
  const height = others ? "250px" : "330px";
  return (
    <div
      style={{ minHeight: height, maxHeight: height, height }}
      className={`relative rounded-lg overflow-hidden h-full cursor-pointer  shadow-none hover:shadow-lg transition-all ease-in`}>
      <PhotoTopTag
        type={
          photo.is_main_cover ? "main" : photo.is_post_cover ? "post" : false
        }
      />

      <Image
        className="h-full w-full object-cover object-center select-none"
        src={photo.src}
        alt={photo.title || "Photo"}
        width={photo.width}
        height={photo.height}
        draggable={false}
      />

      {photo.title && photo.description && (
        <Chip
          // size="lg"
          className="absolute bottom-3 right-3 bg-slate-800/40 border-transparent uppercase"
          color="secondary"
          label="Info"
        />
      )}
    </div>
  );
};

export default PhotoPreview;
