import Button from "@/components/buttons/Button";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useCreateItinerary } from "stores/createItinerary";
import shallow from "zustand/shallow";

type Props = {};

const CreateActionBar = (props: Props) => {
  const { next, back, current } = useCreateItinerary(
    (state) => ({
      next: state.actions.next,
      back: state.actions.back,
      current: state.getters.current,
    }),
    shallow
  );

  return (
    <div className="fixed bottom-0 right-0 flex flex-col bg-white w-[calc(100%-300px)]">
      <div className="h-[5px] w-full bg-slate-100 flex">
        <div className="w-[80%] block bg-primary"></div>
      </div>

      <div className="flex w-full py-4 px-5">
        {current.prev && (
          <Button
            color="primary"
            variant="tonal"
            label={"Back"}
            onClick={() => back()}
          />
        )}

        {current.next && (
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
