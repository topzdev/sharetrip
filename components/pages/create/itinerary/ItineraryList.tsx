import { observer } from "mobx-react-lite";
import React from "react";
import ItineraryCard from "./ItineraryCard";
import createItineraryStore from "stores/createItinerary";

type Props = {};

const ItineraryList = (props: Props) => {
  return (
    <div className="grid grid-cols-1 gap-2">
      {createItineraryStore.form.itineraries.map((item, idx) => (
        <ItineraryCard data={item} index={idx} key={item.id}></ItineraryCard>
      ))}
    </div>
  );
};

export default observer(ItineraryList);
