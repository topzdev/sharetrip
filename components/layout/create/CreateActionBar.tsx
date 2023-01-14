import Button from "@/components/buttons/Button";
import React, { useEffect } from "react";
import { useCreateItinerary } from "stores/createItinerary";
import shallow from "zustand/shallow";

type Props = {};

const CreateActionBar = (props: Props) => {
  const { next, back, currentStep } = useCreateItinerary(
    (state) => ({
      next: state.actions.next,
      back: state.actions.back,
      currentStep: state.computed.currentStep,
    }),
    shallow
  );

  // useEffect(() => {
  //   console.log(currentStep);
  // }, [currentStep]);

  return (
    <div className="absolute bottom-0 left-0 w-full flex flex-col">
      <div className="h-[5px] w-full bg-slate-100 flex">
        <div className="w-[80%] block bg-primary"></div>
      </div>

      <div className="flex w-full py-4 px-5">
        {currentStep.prev && (
          <Button
            color="primary"
            variant="tonal"
            label={"Back"}
            onClick={() => back()}
          />
        )}

        {currentStep.next && (
          <Button
            className="ml-auto"
            color="primary"
            variant="filled"
            label={"Next"}
            onClick={() => next()}
          />
        )}
      </div>
    </div>
  );
};

export default CreateActionBar;
