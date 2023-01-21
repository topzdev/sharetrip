import Button from "@/components/buttons/Button";
import { observer } from "mobx-react-lite";
import createItineraryStore from "stores/createItinerary";

type Props = {};

const CreateActionBar = (props: Props) => {
  const next = createItineraryStore.next;
  const back = createItineraryStore.back;
  const current = createItineraryStore.current;

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

export default observer(CreateActionBar);
