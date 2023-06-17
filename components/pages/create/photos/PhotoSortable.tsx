"use client";

import { photoDefault } from "@/configs/defaultValues";
import { CreatePhotoContext } from "@/contexts/CreatePhotoContext";
import photos from "@/pages/itinerary/[id]/travel-details/photos";
import { CreatePhoto } from "@/types/createItinerary";
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  rectSortingStrategy,
  SortableContext,
} from "@dnd-kit/sortable";
import { nanoid } from "nanoid";
import React, { useCallback, useContext, useEffect } from "react";
import PhotoAdd from "./PhotoAdd";
import PhotoPreview from "./PhotoPreview";
import PhotoPreviewWrapper from "./PhotoPreviewWrapper";

type PhotoSortableProps = {};

const photoPreviewType = (idx: number) =>
  idx === 0 ? "main" : idx === 1 ? "post" : "default";

const PhotoSortable: React.FC<PhotoSortableProps> = ({}) => {
  const {
    photos,
    setPhotos,
    activeId,
    setActiveId,
    onSetCurrentPhoto,
    currentPhoto,
  } = useContext(CreatePhotoContext);

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

    let tempPhotos: CreatePhoto[] = [];

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const image = new Image();
        image.src = e.target?.result as string;

        image.onload = () => {
          tempPhotos = [
            ...tempPhotos,
            {
              ...photoDefault,
              height: image.height,
              width: image.width,
              src: image.src,
              id: nanoid(),
            },
          ];
          setPhotos([...photos, ...tempPhotos]);
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
      const activeIndex = photos.findIndex((x) => x.id === active.id);
      const overIndex = photos.findIndex((x) => x.id === over.id);

      setPhotos(arrayMove(photos, activeIndex, overIndex));
    }
  };

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
      onDragCancel={handleDragCancel}
      sensors={sensors}
      id="photoForm"
    >
      <div className="grid grid-cols-6 gap-3">
        <SortableContext
          items={photos.map((item) => item.id as string)}
          strategy={rectSortingStrategy}
        >
          {photos.map((item, idx) => {
            const type = photoPreviewType(idx);
            return (
              <PhotoPreviewWrapper key={idx} id={item.id} type={type}>
                {({ isDragging, isSorting }) => (
                  <PhotoPreview
                    // onSetCurrentPhoto={() => onSetCurrentPhoto(item)}
                    isDragging={isDragging}
                    isSorting={isSorting}
                    key={item.id}
                    photo={item}
                    type={type}
                    active={currentPhoto && currentPhoto.id === item.id}
                    onClick={() => onSetCurrentPhoto(item)}
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
                        type={type}
                      >
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
  );
};

export default PhotoSortable;
