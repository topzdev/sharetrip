"use client";

import { ChildrenProps } from "@/types/default";
import { Transition, Dialog } from "@headlessui/react";
import React, { Fragment } from "react";
import Button from "../buttons/Button";

type SideDialogProps = {
  isOpen: boolean;
  closeModal: () => void;
  actions?: () => ChildrenProps;
  title: ChildrenProps;
  description?: ChildrenProps;
  children?: ChildrenProps;
};

const SideDialog: React.FC<SideDialogProps> = ({
  isOpen,
  closeModal,
  actions,
  description,
  title,
  children,
}) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        open={isOpen}
        onClose={closeModal}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-end text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Panel className="w-full flex flex-col max-w-md transform overflow-hidden bg-white p-6 text-left align-middle shadow-xl transition-all h-screen">
                <Dialog.Title
                  as="h3"
                  className="text-xl font-bold text-slate-900"
                >
                  {title}
                </Dialog.Title>

                {description && (
                  <Dialog.Description className={"text-slate-500 mt-1"}>
                    Add title and description for this photo.
                  </Dialog.Description>
                )}

                <div className="mt-5">{children}</div>

                <div className="mt-auto">
                  {actions ? (
                    actions()
                  ) : (
                    <Button
                      label="Close"
                      color="secondary"
                      className="ml-auto"
                      onClick={closeModal}
                    ></Button>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default SideDialog;
