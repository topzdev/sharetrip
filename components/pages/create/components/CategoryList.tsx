import BoxSelect from "@/components/forms/BoxSelect";
import { MAX_SELECT_CATEGORIES } from "@/configs/createConfigs";
import categoriesItems from "@/data/categories";
import Icon from "@mdi/react";
import createItineraryStore from "stores/createItinerary";
import { observer } from "mobx-react-lite";

const CategoryList = () => {
  let selected = createItineraryStore.categories;

  const setActive = (id: number) => {
    const curIndex = selected.findIndex((item) => item === id);
    if (curIndex !== -1) {
      selected.splice(curIndex, 1);
    } else {
      console.log("Added");
      if (selected.length < MAX_SELECT_CATEGORIES) {
        selected.push(id);
      }
    }
  };
  return (
    <>
      {categoriesItems.map((item) => {
        const active =
          selected.findIndex((selectedItem) => selectedItem === item.id) !== -1;

        return (
          <BoxSelect
            key={item.id}
            icon={<Icon path={item.icon} />}
            label={item.title}
            active={active}
            disabled={!active && selected.length >= MAX_SELECT_CATEGORIES}
            onClick={() => setActive(item.id)}
          />
        );
      })}
    </>
  );
};

export default observer(CategoryList);
