import Button from "@/components/buttons/Button";
import React from "react";
import { useCreateItinerary } from "stores/createItinerary";
import shallow from "zustand/shallow";

type Props = {};

const CreatePageBar = (props: Props) => {
  const { currentStep } = useCreateItinerary(
    (state) => ({
      currentStep: state.computed.currentStep,
    }),
    shallow
  );

  return (
    <div className="flex py-4 px-5 items-center">
      <h3 className="text-lg font-semibold text-slate-500">
        {currentStep.title}
      </h3>
      <Button
        className="ml-auto"
        color="secondary"
        label="Save and Exit"
        variant="outlined"
        onClick={() => alert("Hell World")}
      />
    </div>
  );
};

export default CreatePageBar;
