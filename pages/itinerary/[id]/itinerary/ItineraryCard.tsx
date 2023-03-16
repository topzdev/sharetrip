import { ItineraryInfo } from "@/types/createItinerary";
import React from "react";
import Image from "next/image";
import monenyFormatter from "@/utils/monenyFormatter";
type Props = {
  data: ItineraryInfo;
  index: number;
};

const ItineraryCard = ({ data, index }: Props) => {
  return (
    <div className="flex w-100">
      <div>
        <p>Day</p>
        <p>{index + 1}</p>
      </div>
      <div className="flex p-4 bg-slate-100 rounded-lg ml-4 flex-grow border-slate-200">
        <div className="d-block relative min-h-[160px] max-h-[160px] min-w-[160px] max-w-[160px] overflow-hidden rounded-md">
          <Image
            className="h-full w-full object-cover object-center select-none"
            src={data.image as string}
            alt={data.title || "Photo"}
            width={200}
            height={200}
            draggable={false}
          />
        </div>

        <div className="ml-4">
          <p className="text-primary-500 font-serif text-sm">
            {data.locations}
          </p>
          <h2 className="font-sans font-extrabold text-2xl">{data.title}</h2>
          <p className="text-sm mt-2 text-slate-600 font-sans">
            {data.description}
          </p>

          <div className="flex mt-2">
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
        </div>
      </div>
    </div>
  );
};

export default ItineraryCard;
