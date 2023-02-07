import { PhotoPreviewType } from "@/types/createItinerary";
import { mdiImagePlusOutline, mdiPlus } from "@mdi/js";
import Icon from "@mdi/react";
import React, { RefObject, useRef } from "react";
import { photoPreviewSize } from "./PhotoPreview";

type PhotoAddProps = {
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: PhotoPreviewType;
};

const PhotoAdd: React.FC<PhotoAddProps> = ({ handleFileChange, type }) => {
  const fileRef: RefObject<HTMLInputElement> = useRef(null);

  const height = photoPreviewSize(type);

  return (
    <div
      className="relative p-4 border-2 border-dashed border-slate-200 hover:border-primary-500 transition-colors ease-in rounded-md overflow-hidden h-full cursor-pointer flex flex-col items-center justify-center text-center bg-slate-100 hover:bg-primary-50/10 "
      style={{ minHeight: height, maxHeight: height, height }}>
      <input
        title="Drag here or Browse to upload photo"
        ref={fileRef}
        id="photoUploader"
        type={"file"}
        className="absolute w-full h-full top-0 left-0 opacity-0 cursor-pointer"
        multiple
        accept="image/*"
        onChange={(event) => {
          handleFileChange(event);
          fileRef.current!.value = "";
        }}
      />

      <Icon className="h-9 mb-2 text-slate-600" path={mdiImagePlusOutline} />
      <p className="text-sm text-slate-500">
        Drag here or Browse to Upload Photo{" "}
      </p>
    </div>
  );
};

export default PhotoAdd;
