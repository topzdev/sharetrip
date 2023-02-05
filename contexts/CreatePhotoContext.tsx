import React, { createContext, useEffect, useState } from "react";
import { CreateItineraryForm, CreatePhoto } from "@/types/createItinerary";
import { AlertDefault, ChildrenProps } from "@/types/default";
import { useForm } from "react-hook-form";
import createItineraryStore from "stores/createItinerary";
import { yupResolver } from "@hookform/resolvers/yup";
import { photosSchema } from "@/configs/fieldSchema/createItinerary";
import { alertDefault } from "@/configs/defaultValues";

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
});

const CreatePhotoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const {
    handleSubmit,
    formState: { errors },
    setValue,
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

  const setPhotos = (photos: CreatePhoto[]) => {
    setValue("photos", photos);
  };

  const [activeId, setActiveId] = useState<string | null>(null);
  const [currentPhoto, setCurrentPhoto] = useState<CreatePhoto | null>(null);

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
    console.log(photo);
    window.alert("Hello Update: " + photo.id);
    setPhotos(photos.map((item) => (item.id === photo.id ? photo : item)));
    onClearCurrentPhoto();
  };

  const onSetCurrentPhoto = (photo: CreatePhoto) => {
    setCurrentPhoto(photo);
  };

  const onDeletePhoto = () => {
    if (currentPhoto) {
      setPhotos(photos.filter((item) => item.id === currentPhoto.id));
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
    setAlert({ ...alert, show: false });
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
      }}>
      {children}
    </CreatePhotoContext.Provider>
  );
};

export { CreatePhotoContext, CreatePhotoProvider };
