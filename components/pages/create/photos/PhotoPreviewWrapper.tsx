import { CreatePhoto, PhotoPreviewType } from "@/types/createItinerary";
import { ChildrenProps } from "@/types/default";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React from "react";

type Props = {
  children?: (props: Partial<ReturnType<typeof useSortable>>) => ChildrenProps;
  type: PhotoPreviewType;
  id?: CreatePhoto["id"];
  disabled?: boolean;
};

const PhotoPreviewWrapper: React.FC<Props> = ({
  children,
  type = "default",
  id,
  disabled = false,
}) => {
  let layout = "col-span-2";

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
    isOver,
    isSorting,
  } = useSortable({
    id: disabled || !id ? "disabled" : id,
    disabled,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const draggableAttributes = {
    ...attributes,
    ...listeners,
    ref: setNodeRef,
    style,
  };

  switch (type) {
    case "full":
      layout = "col-span-6";
      break;
    case "main":
      layout = "col-span-4";
      break;
    case "post":
    case "default":
      layout = "col-span-2";
      break;
  }

  return (
    <div {...draggableAttributes} className={layout}>
      {children && children({ isDragging, isOver, isSorting })}
    </div>
  );
};

export default PhotoPreviewWrapper;
