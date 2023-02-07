import React, { createContext, useEffect, useState } from "react";
import { CreateItineraryForm, CreatePhoto } from "@/types/createItinerary";
import { AlertDefault, ChildrenProps } from "@/types/default";
import { useForm } from "react-hook-form";
import createItineraryStore from "stores/createItinerary";
import { yupResolver } from "@hookform/resolvers/yup";
import { photosSchema } from "@/configs/fieldSchema/createItinerary";
import { alertDefault } from "@/configs/defaultValues";
import { arrayMove } from "@dnd-kit/sortable";

interface ContextProps {
  photos: CreatePhoto[];
  setPhotos: (photos: CreatePhoto[]) => void;
  activeId: string | null;
  setActiveId: React.Dispatch<React.SetStateAction<string | null>>;
  currentPhoto: CreatePhoto | null;
  alert: AlertDefault;
  onSubmit: (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
  closeAlert: () => void;
  onUpdateCurrentPhoto: (photo: CreatePhoto) => void;
  onClearCurrentPhoto: () => void;
  onSetCurrentPhoto: (photo: CreatePhoto) => void;
  onDeletePhoto: () => void;
  setPostCover: (photoId: CreatePhoto["id"]) => void;
  setMainCover: (photoId: CreatePhoto["id"]) => void;
  currentIndex: number | null;
}

const CreatePhotoContext = createContext<ContextProps>({
  photos: [],
  setPhotos: () => {},
  activeId: null,
  setActiveId: () => {},
  currentPhoto: null,
  onSubmit: (e) => Promise.resolve(),
  alert: alertDefault,
  closeAlert: () => {},
  onUpdateCurrentPhoto: () => {},
  onClearCurrentPhoto: () => {},
  onSetCurrentPhoto: () => {},
  onDeletePhoto: () => {},
  setMainCover: () => {},
  setPostCover: () => {},
  currentIndex: null,
});

export const mainCoverIdx = 0;
export const postCoverIdx = 1;

const CreatePhotoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const {
    handleSubmit,
    formState: { errors },
    setValue,
    clearErrors,
    watch,
  } = useForm<CreateItineraryForm>({
    defaultValues: {
      photos: createItineraryStore.form.photos,
    },
    resolver: yupResolver(photosSchema),
  });
  // const [photos, setPhotos] = useState<CreatePhoto[]>([]);
  const photos = watch("photos");
  const [alert, setAlert] = useState<AlertDefault>(alertDefault);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [currentPhoto, setCurrentPhoto] = useState<CreatePhoto | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const setPhotos = (photos: CreatePhoto[]) => {
    setValue("photos", photos);
  };

  const onSubmit = handleSubmit((data) => {
    createItineraryStore.setLoading(true);

    setTimeout(() => {
      createItineraryStore.setLoading(false);
      createItineraryStore.setPhotos(data.photos);
      createItineraryStore.next();
    });
  });

  const onClearCurrentPhoto = () => {
    setCurrentPhoto(null);
  };

  const onUpdateCurrentPhoto = (photo: CreatePhoto) => {
    setPhotos(photos.map((item) => (item.id === photo.id ? photo : item)));
    onClearCurrentPhoto();
  };

  const onSetCurrentPhoto = (photo: CreatePhoto) => {
    setCurrentPhoto(photo);
    setCurrentIndex(photos.findIndex((item) => item.id === photo.id));
  };

  const setMainCover = (photoId: CreatePhoto["id"]) => {
    if (!photoId) return;
    const selectedPhotoIdx = photos.findIndex((item) => item.id === photoId);
    setPhotos(arrayMove(photos, selectedPhotoIdx, mainCoverIdx));
    onClearCurrentPhoto();
  };

  const setPostCover = (photoId: CreatePhoto["id"]) => {
    if (!photoId) return;
    const selectedPhotoIndex = photos.findIndex((item) => item.id === photoId);
    setPhotos(arrayMove(photos, selectedPhotoIndex, postCoverIdx));
    onClearCurrentPhoto();
  };

  const onDeletePhoto = () => {
    if (currentPhoto) {
      setPhotos(photos.filter((item) => item.id !== currentPhoto.id));
      onClearCurrentPhoto();
    }
  };

  useEffect(() => {
    if (errors.photos?.message) {
      setAlert({
        message: errors.photos.message,
        timeout: 10000,
        show: true,
      });
    }
  }, [errors.photos?.message]);

  const closeAlert = () => {
    clearErrors();
    setAlert(alertDefault);
  };

  return (
    <CreatePhotoContext.Provider
      value={{
        alert,
        closeAlert,
        photos,
        setPhotos,
        activeId,
        setActiveId,
        currentPhoto,
        onSubmit,
        onUpdateCurrentPhoto,
        onClearCurrentPhoto,
        onSetCurrentPhoto,
        onDeletePhoto,
        setMainCover,
        setPostCover,
        currentIndex,
      }}>
      {children}
    </CreatePhotoContext.Provider>
  );
};

export { CreatePhotoContext, CreatePhotoProvider };
