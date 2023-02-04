import Button from "@/components/buttons/Button";
import SideDialog from "@/components/dialogs/SideDialog";
import Textarea from "@/components/forms/Textarea";
import Textfield from "@/components/forms/Textfield";
import Toggle from "@/components/forms/Toggle";
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";

type Props = {};

const UpdatePhotoInfo: React.FC<Props> = ({}) => {
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <SideDialog
      title={"Photo Information"}
      description={"Add title and description for this photo."}
      isOpen={isOpen}
      closeModal={closeModal}
      actions={() => {
        return (
          <div className="flex">
            <Button color="secondary" variant="tonal" label="Back"></Button>
            <Button color="primary" className="ml-auto" label="Update"></Button>
          </div>
        );
      }}>
      <div className="grid grid-cols-1 gap-3">
        <Textfield
          id="title"
          name="title"
          label={"Title"}
          placeholder={"Name your photo creatively and meaningful"}
        />

        <Textarea
          id="description"
          name="introduction"
          label={"Description"}
          rows={5}
          placeholder={"Describe your photo in few words"}
        />

        <Toggle
          checked={true}
          name="setCoverPhoto"
          label={"Set Cover Photo"}
          id="setCoverPhoto"
        />
      </div>
    </SideDialog>
  );
};

export default UpdatePhotoInfo;
