import CreateLayout from "@/components/layout/create";
import ReactLog from "@/components/utility/ReactLog";
import React, { ReactElement } from "react";
import { useCreateItinerary } from "stores/createItinerary.zustand";
import shallow from "zustand/shallow";

type Props = {};

const TravelDetailInformation = ({}) => {
  // const { current } = useCreateItinerary(
  //   (state) => ({
  //     current: state.getters.current,
  //   }),
  //   shallow
  // );
  // const current = useCreateItinerary((state) => state.getters.current, shallow);
  return (
    <div>
      {/* <ReactLog value={current} /> */}
      <button>ReRendered</button>
    </div>
  );
};

TravelDetailInformation.PageLayout = CreateLayout;

export default TravelDetailInformation;
