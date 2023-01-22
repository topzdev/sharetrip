import Button from "@/components/buttons/Button";
import React from "react";
import { observer } from "mobx-react-lite";
import createItineraryStore from "stores/createItinerary";

type Props = {};

const CreatePageBar = (props: Props) => {
  const current = createItineraryStore.current;

  return (
    <div className="flex py-4 px-5 items-center">
      {current.parent && (
        <h3 className="text-lg font-semibold text-slate-500">
          {current.parent.title}
        </h3>
      )}
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

export default observer(CreatePageBar);
