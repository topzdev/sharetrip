"use client";

import Button from "@/components/buttons/Button";
import SideDialog from "@/components/dialogs/SideDialog";
import Textarea from "@/components/forms/Textarea";
import Textfield from "@/components/forms/Textfield";
import Toggle from "@/components/forms/Toggle";
import { photoDefault } from "@/configs/defaultValues";
import { mainCoverIdx, postCoverIdx } from "@/contexts/CreatePhotoContext";
import { CreatePhoto } from "@/types/createItinerary";
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { Controller } from "swiper";

type Props = {
  show: boolean;
  info: CreatePhoto;
  closeModal: () => void;
  onDelete: () => void;
  setInfo: (info: CreatePhoto) => void;
  photoIndex: number | null;
  setMainCover: (photoId: string | number | undefined) => void;
  setPostCover: (photoId: string | number | undefined) => void;
};

const UpdatePhotoInfo: React.FC<Props> = ({
  show,
  closeModal,
  info,
  onDelete,
  setInfo,
  photoIndex,
  setMainCover,
  setPostCover,
}) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<CreatePhoto>();

  const onSubmit = handleSubmit((data) => {
    setInfo(data);
    reset();
  });

  useEffect(() => {
    reset(info);
  }, [info && info.id]);

  return (
    <SideDialog
      title={"Photo Information"}
      description={"Add title and description for this photo."}
      isOpen={show}
      closeModal={closeModal}
      actions={() => {
        return (
          <div className="flex">
            <Button
              color="secondary"
              variant="tonal"
              label="Back"
              onClick={closeModal}
            />
            <Button
              color="primary"
              className="ml-auto"
              label="Update"
              onClick={onSubmit}
            />
          </div>
        );
      }}
    >
      <form>
        <div className="flex flex-col gap-3">
          <Textfield
            id="title"
            name="title"
            label={"Title"}
            register={register}
            placeholder={"Name your photo creatively and meaningful"}
          />

          <Textarea
            id="description"
            name="description"
            label={"Description"}
            rows={5}
            register={register}
            placeholder={"Describe your photo in few words"}
          />

          <hr />
          <Toggle
            disabled={photoIndex === mainCoverIdx}
            checked={photoIndex === mainCoverIdx}
            onChange={(value) => value && setMainCover(info.id)}
            name="setCoverPhoto"
            label={"Set Main Cover"}
            id="setCoverPhoto"
          />

          <Toggle
            disabled={photoIndex === postCoverIdx}
            checked={photoIndex === postCoverIdx}
            onChange={(value) => value && setPostCover(info.id)}
            name="setCoverPhoto"
            label={"Set Post Cover"}
            id="setCoverPhoto"
          />

          <Button
            className="col-span-auto self-start"
            label="Delete"
            color="error"
            onClick={onDelete}
          ></Button>
        </div>
      </form>
    </SideDialog>
  );
};

export default UpdatePhotoInfo;
