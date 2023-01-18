import CreateLayout from "@/components/layout/create";
import ReactLog from "@/components/utility/ReactLog";
import React, { ReactElement } from "react";
import { useCreateItinerary } from "stores/createItinerary";
import shallow from "zustand/shallow";

type Props = {};

const TravelDetailInformation = ({}) => {
  const { steps, current } = useCreateItinerary(
    (state) => ({
      steps: state.steps,
      current: state.getters.current,
    }),
    shallow
  );
  return (
    <div>
      <ReactLog value={current} />
    </div>
  );
};

TravelDetailInformation.PageLayout = CreateLayout;

export default TravelDetailInformation;
