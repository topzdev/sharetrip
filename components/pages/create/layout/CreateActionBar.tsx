import Button from "@/components/buttons/Button";
import { observer } from "mobx-react-lite";
import createItineraryStore from "stores/createItinerary";

type Props = {};

const CreateActionBar = (props: Props) => {
  const current = createItineraryStore.current;
  const loading = createItineraryStore.loading;
  const progress = createItineraryStore.progress;
  return (
    <div className="fixed bottom-0 right-0 flex flex-col bg-white w-[calc(100%-300px)]">
      <div className="h-[5px] w-full bg-slate-100 flex">
        <div
          className="block bg-primary transition-all ease-in"
          style={{ width: `${progress}%` }}></div>
      </div>

      <div className="flex w-full py-4 px-5">
        {current.prev && (
          <Button
            color="primary"
            variant="tonal"
            label={"Back"}
            onClick={() => createItineraryStore.back()}
          />
        )}

        {current.next && (
          <Button
            type="submit"
            className="ml-auto"
            color="primary"
            variant="filled"
            label={"Next"}
            loading={loading}
            disabled={loading}
            form="createItineraryForm"
            // onClick={() => createItineraryStore.next()}
          />
        )}
      </div>
    </div>
  );
};

export default observer(CreateActionBar);
