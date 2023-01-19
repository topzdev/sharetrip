import CreateLayout from "@/components/layout/create";
import CreatePageContainer from "@/components/pages/create/CreatePageContainer";
import React, { ReactElement, useCallback, useMemo, useState } from "react";
import categoriesItems from "@/data/categories";
import BoxSelect from "@/components/forms/BoxSelect";
import Icon from "@mdi/react";
import ReactLog from "@/components/utility/ReactLog";
import { MAX_SELECT_CATEGORIES } from "@/configs/createConfigs";
import { useCreateItinerary } from "stores/createItinerary";
import shallow from "zustand/shallow";
type Props = {};

const TravelDetailsCategoryPage = ({}) => {
  // const { selected, setSelected } = useCreateItinerary(
  //   (state) => ({
  //     selected: state.categories,
  //     setSelected: state.setCategories,
  //   }),
  //   shallow
  // );

  const selected = useCreateItinerary((state) => state.categories, shallow);
  const setSelected = useCreateItinerary(
    (state) => state.setCategories,
    shallow
  );

  const [categories, setCategories] = useState(
    categoriesItems.map((item) => ({
      ...item,
      active: false,
    }))
  );

  const selectedItem = useMemo(
    () => categories.filter((item) => (item.active ? item : false)),
    [categories]
  );

  const setActive = (id: number) => {
    setCategories((cur) =>
      cur.map((item) =>
        item.id === id
          ? {
              ...item,
              active:
                selectedItem.length < MAX_SELECT_CATEGORIES
                  ? !item.active
                  : false,
            }
          : item
      )
    );

    console.log(selected.find((item) => item === id));

    if (selected.find((item) => item === id)) {
      console.log("Removed");
      setSelected(selected.filter((item) => item !== id));
    } else {
      console.log("Added");
      if (selected.length < MAX_SELECT_CATEGORIES) {
        setSelected([...selected, id]);
      }
    }
  };

  return (
    <CreatePageContainer>
      <h2 className="text-2xl font-bold">Categories</h2>
      <p className="text-slate-500 mt-1">
        Select at least 1 and up to 5 travel category for this itinerary.
      </p>

      <div className="grid grid-cols-6 gap-x-2 gap-y-5 mt-10">
        {categories.map((item) => (
          <BoxSelect
            key={item.id}
            icon={<Icon path={item.icon} />}
            label={item.title}
            active={item.active}
            disabled={
              !item.active && selectedItem.length >= MAX_SELECT_CATEGORIES
            }
            onClick={() => setActive(item.id)}
          />
        ))}
      </div>
    </CreatePageContainer>
  );
};

TravelDetailsCategoryPage.PageLayout = CreateLayout;

export default TravelDetailsCategoryPage;
