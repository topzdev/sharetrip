import Button from "@/components/buttons/Button";
import Chip from "@/components/chips/Chip";
import { CreatePhoto, PhotoPreviewType } from "@/types/createItinerary";
import classNames from "classnames";
import Image from "next/image";
import React from "react";

type Props = {
  photo: CreatePhoto;
  type: PhotoPreviewType;
  isDragging?: boolean;
  isSorting?: boolean;
};

export const photoPreviewSize = (type: PhotoPreviewType) =>
  type === "default" ? 230 : 290;

const PhotoTopTag: React.FC<{ type: PhotoPreviewType }> = ({ type }) => {
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
      {title && (
        <Chip
          className="absolute top-3 left-3 font-semibold"
          label={title}
          color="default"
        />
      )}
    </>
  );
};

const PhotoBottomTag: React.FC<{ hasInfo: boolean }> = ({ hasInfo }) => {
  return (
    <>
      {hasInfo ? (
        <Chip
          className="absolute bottom-3 right-3 bg-slate-800/50 border-transparent uppercase border-none font-bold"
          color="secondary"
          label="Info"
        />
      ) : (
        <Button
          className="absolute bottom-3 right-3"
          size="xs"
          color="secondary"
          label="Add Info"
        />
      )}
    </>
  );
};

const PhotoPreview: React.FC<Props> = ({
  photo,
  type,
  isDragging,
  isSorting,
}) => {
  const defualtclassNames = [
    "relative rounded-md overflow-hidden h-full cursor-pointer  shadow-none hover:shadow-lg transition-all ease-in hover:border-primary border-2 border- border-slate-100 opacity-100",
  ];

  if (isDragging) {
    defualtclassNames.push("opacity-50");
  }

  const height = photoPreviewSize(type);
  const finalClassNames = classNames(defualtclassNames);
  return (
    <div
      style={{
        minHeight: height,
        maxHeight: height,
        height,
        transformOrigin: "0 0",
      }}
      className={finalClassNames}>
      {!isDragging && <PhotoTopTag type={type} />}

      {photo.src && (
        <Image
          className="h-full w-full object-cover object-center select-none"
          src={photo.src as string}
          alt={photo.title || "Photo"}
          width={photo.width}
          height={photo.height}
          draggable={false}
        />
      )}

      {!isDragging && (
        <PhotoBottomTag hasInfo={!!(photo.title && photo.description)} />
      )}
    </div>
  );
};

export default PhotoPreview;
