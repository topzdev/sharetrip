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
  onSetCurrentPhoto?: () => void;
  active?: boolean | null;
  onClick?: () => void;
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

const PhotoBottomTag: React.FC<{
  hasInfo: boolean;
  onSetCurrentPhoto: Props["onSetCurrentPhoto"];
}> = ({ hasInfo, onSetCurrentPhoto }) => {
  return (
    <>
      <Button
        className={`absolute bottom-3 right-3 ${hasInfo && " uppercase"}`}
        size="xs"
        color="secondary"
        label={!hasInfo ? "Add Info" : "Info"}
        onClick={onSetCurrentPhoto}
      />
    </>
  );
};

const PhotoPreview: React.FC<Props> = ({
  photo,
  type,
  isDragging,
  isSorting,
  onSetCurrentPhoto,
  active = false,
  onClick,
}) => {
  const defualtClassNames = [
    "relative rounded-md overflow-hidden h-full cursor-pointer  shadow-none hover:shadow-lg transition-all ease-in hover:border-primary border-2 border-slate-100 opacity-100",
  ];

  if (isDragging) {
    defualtClassNames.push("opacity-50");
  }

  if (active) {
    defualtClassNames.push("!border-primary !border-4");
  }

  const height = photoPreviewSize(type);
  const finalClassNames = classNames(defualtClassNames);
  return (
    <div
      onClick={onClick}
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
        <PhotoBottomTag
          onSetCurrentPhoto={onSetCurrentPhoto}
          hasInfo={!!(photo.title && photo.description)}
        />
      )}
    </div>
  );
};

export default PhotoPreview;
