import Button from "@/components/buttons/Button";
import React from "react";
import { useCreateItinerary } from "stores/createItinerary";
import shallow from "zustand/shallow";

type Props = {};

const CreatePageBar = (props: Props) => {
  const { current } = useCreateItinerary(
    (state) => ({
      current: state.getters.current,
    }),
    shallow
  );

  return (
    <div className="flex py-4 px-5 items-center">
      <h3 className="text-lg font-semibold text-slate-500">{current.title}</h3>
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
