import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

type PhotoSortableItemProps = {
  id: number;
};

const PhotoSortableItem: React.FC<PhotoSortableItemProps> = ({ id }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return <div style={style} {...attributes} {...listeners}></div>;
};

export default PhotoSortableItem;
