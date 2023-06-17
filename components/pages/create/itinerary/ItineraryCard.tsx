"use client";

import { ItineraryInfo } from "@/types/createItinerary";
import React from "react";
import Image from "next/image";
import monenyFormatter from "@/utils/monenyFormatter";
import Chip from "@/components/chips/Chip";
import Button from "@/components/buttons/Button";
type Props = {
  data: ItineraryInfo;
  index: number;
};

const ItineraryCard = ({ data, index }: Props) => {
  const imageCountText = (count: number) => {
    if (count > 10) {
      return "10+ more";
    }

    return count.toString();
  };

  return (
    <div className="flex w-100">
      <div className="text-center">
        <p className="uppercase text-slate-500 font-medium">Day</p>
        <p className="text-4xl font-bold">{index + 1}</p>
      </div>
      <div className="flex p-4 bg-slate-100 rounded-lg ml-4 flex-grow border-slate-200">
        <div className="d-block relative min-h-[190px] max-h-[190px] min-w-[200px] max-w-[200px] overflow-hidden rounded-md">
          <Image
            className="h-full w-full object-cover object-center select-none"
            src={data.image as string}
            alt={data.title || "Photo"}
            width={200}
            height={200}
            draggable={false}
          />

          <Chip
            className="absolute bottom-2 right-2 font-medium"
            size="sm"
            variant="tonal"
            color="white"
            label={imageCountText(data.imageCount)}
          ></Chip>
        </div>

        <div className="flex flex-col ml-4">
          <p className="text-primary-500 font-serif text-sm">
            {data.locations}
          </p>
          <h2 className="font-sans font-bold text-2xl">{data.title}</h2>
          <p className="text-sm mt-1 text-slate-600 font-sans">
            {data.description}
          </p>

          <div className="flex mt-2 text-slate-600">
            <p>
              <span className="font-bold">{data.stopsCount}</span>
              <span className="ml-1">Stops</span>
            </p>

            <p>
              <span className="mx-2">⸱</span>
              <span className="font-bold">{data.tipsCount}</span>
              <span className="ml-1">Tips</span>
            </p>

            <p>
              <span className="mx-2">⸱</span>
              <span className="font-bold text-serif">
                {monenyFormatter().format(data.spentAmount)}
              </span>
              <span className="ml-1">Spent</span>
            </p>
          </div>

          <div className="flex justify-end mt-auto">
            <Button variant="text" color="primary" className="!p-0">
              Edit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItineraryCard;
