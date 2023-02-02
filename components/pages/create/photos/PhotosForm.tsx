import createItineraryStore from "@/stores/createItinerary";
import { observer } from "mobx-react-lite";
import React from "react";
import PhotoPreview from "./PhotoPreview";

type Props = {};

const PhotosForm: React.FC<Props> = ({}) => {
  const photos = createItineraryStore.form.photos;

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-6 gap-4">
        {photos.map((item, idx) => (
          <div
            className={
              idx === 0 ? "col-span-4" : idx === 1 ? "col-span-2" : "col-span-2"
            }>
            <PhotoPreview key={item.id} photo={item} others={idx + 1 > 2} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default observer(PhotosForm);
