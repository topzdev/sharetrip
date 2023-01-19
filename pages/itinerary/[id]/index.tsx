import CreateLayout from "@/components/layout/create";
import ReactLog from "@/components/utility/ReactLog";
import React, { ReactElement } from "react";
import { useCreateItinerary } from "stores/createItinerary";
import shallow from "zustand/shallow";

type Props = {};

const ItineraryBySlug = ({}) => {
  const current = useCreateItinerary((state) => state.getters.current, shallow);

  return (
    <div>
      <ReactLog value={current} />
    </div>
  );
};

ItineraryBySlug.PageLayout = CreateLayout;

export default ItineraryBySlug;
