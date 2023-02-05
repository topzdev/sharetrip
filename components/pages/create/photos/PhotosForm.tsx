import { CreatePhotoContext } from "@/contexts/CreatePhotoContext";
import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import CreateItineraryFormWrapper from "../CreateItineraryFormWrapper";

import PhotoSortable from "./PhotoSortable";
import UpdatePhotoInfo from "./UpdatePhotoInfo";

type Props = {};

const PhotosForm: React.FC<Props> = ({}) => {
  const {
    onSubmit,
    alert,
    closeAlert,
    currentPhoto,
    onClearCurrentPhoto,
    onDeletePhoto,
    onUpdateCurrentPhoto,
  } = useContext(CreatePhotoContext);

  return (
    <CreateItineraryFormWrapper
      onSubmit={onSubmit}
      alert={alert}
      closeAlert={closeAlert}>
      <PhotoSortable />
      <UpdatePhotoInfo
        info={currentPhoto}
        show={!!currentPhoto}
        onDelete={onDeletePhoto}
        closeModal={onClearCurrentPhoto}
        setInfo={onUpdateCurrentPhoto}
      />
    </CreateItineraryFormWrapper>
  );
};

export default observer(PhotosForm);
