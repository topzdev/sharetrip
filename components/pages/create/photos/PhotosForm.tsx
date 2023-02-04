import createItineraryStore from "@/stores/createItinerary";
import { CreatePhoto } from "@/types/createItinerary";
import { ChildrenProps } from "@/types/default";
import { observer } from "mobx-react-lite";
import React, { useCallback, useState } from "react";
import PhotoAdd from "./PhotoAdd";
import PhotoPreview from "./PhotoPreview";
import PhotoPreviewWrapper from "./PhotoPreviewWrapper";
import {
  DndContext,
  closestCenter,
  DragEndEvent,
  DragStartEvent,
  DragOverlay,
  useSensors,
  PointerSensor,
  useSensor,
} from "@dnd-kit/core";
import { nanoid } from "nanoid";

import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
  rectSwappingStrategy,
} from "@dnd-kit/sortable";
import UpdatePhotoInfo from "./UpdatePhotoInfo";

type Props = {};

const defaultPhoto: CreatePhoto = {
  src: null,
  width: 0,
  height: 0,
  title: "",
  description: "",
  deletable: false,
};

const photoPreviewType = (idx: number) =>
  idx === 0 ? "main" : idx === 1 ? "post" : "default";

const PhotosForm: React.FC<Props> = ({}) => {
  const [photos, setPhotos] = useState<CreatePhoto[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const photoAddType = photos.length ? "default" : "full";
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (!files) {
      return;
    }

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const image = new Image();
        image.src = e.target?.result as string;

        image.onload = () => {
          setPhotos((prevPhotos) => [
            ...prevPhotos,
            {
              ...defaultPhoto,
              height: image.height,
              width: image.width,
              src: image.src,
              id: nanoid(),
            },
          ]);
        };
      };
      reader.readAsDataURL(files[i]);
    }
  };

  const handleDragStart = useCallback((event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  }, []);

  const handleDragCancel = useCallback(() => {
    setActiveId(null);
  }, []);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setPhotos((items) => {
        const activeIndex = items.findIndex((x) => x.id === active.id);
        const overIndex = items.findIndex((x) => x.id === over.id);

        return arrayMove(items, activeIndex, overIndex);
      });
    }
  };

  return (
    <div className="flex flex-col ">
      <DndContext
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
        onDragStart={handleDragStart}
        onDragCancel={handleDragCancel}
        sensors={sensors}
        id="photoForm">
        <div className="grid grid-cols-6 gap-3">
          <SortableContext
            items={photos.map((item) => item.id as string)}
            strategy={rectSortingStrategy}>
            {photos.map((item, idx) => {
              const type = photoPreviewType(idx);
              return (
                <PhotoPreviewWrapper key={idx} id={item.id} type={type}>
                  {({ isDragging, isSorting }) => (
                    <PhotoPreview
                      isDragging={isDragging}
                      isSorting={isSorting}
                      key={item.id}
                      photo={item}
                      type={type}
                    />
                  )}
                </PhotoPreviewWrapper>
              );
            })}
            <PhotoPreviewWrapper disabled type={photoAddType}>
              {() => (
                <PhotoAdd
                  type={photoAddType}
                  handleFileChange={handleFileChange}
                />
              )}
            </PhotoPreviewWrapper>
            <DragOverlay style={{ transformOrigin: "0 0 " }}>
              {activeId
                ? (() => {
                    const index = photos.findIndex(
                      (item) => item.id === activeId
                    );
                    const photo = photos.find((item) => item.id === activeId);

                    const type = photoPreviewType(index);
                    return (
                      photo && (
                        <PhotoPreviewWrapper
                          key={index}
                          disabled
                          id="overlay"
                          type={type}>
                          {({ isDragging, isSorting }) => (
                            <PhotoPreview
                              isDragging={true}
                              isSorting={true}
                              photo={photo}
                              type={type}
                            />
                          )}
                        </PhotoPreviewWrapper>
                      )
                    );
                  })()
                : null}
            </DragOverlay>
          </SortableContext>
        </div>
      </DndContext>

      <UpdatePhotoInfo />
    </div>
  );
};

export default observer(PhotosForm);
