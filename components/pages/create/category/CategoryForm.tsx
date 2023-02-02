import Alert from "@/components/alerts/Alert";
import BoxSelect from "@/components/forms/BoxSelect";
import { MAX_SELECT_CATEGORIES } from "@/configs/createConfigs";
import { categoriesSchema } from "@/configs/fieldSchema/createItinerary";
import categoriesItems from "@/data/categories";
import { CreateItineraryForm } from "@/types/createItinerary";
import { yupResolver } from "@hookform/resolvers/yup";
import Icon from "@mdi/react";
import { error } from "console";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import createItineraryStore from "stores/createItinerary";

const CategoryList = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<CreateItineraryForm>({
    defaultValues: {
      categories: createItineraryStore.form.categories,
    },
    resolver: yupResolver(categoriesSchema),
  });

  const [alert, setAlert] = useState({
    show: false,
    timeout: 10000,
    message: "",
  });

  useEffect(() => {
    if (errors.categories && errors.categories.message) {
      setAlert({
        message: errors.categories.message,
        timeout: 10000,
        show: true,
      });
    }
  }, [errors.categories]);

  const onSubmit = handleSubmit((data) => {
    createItineraryStore.setLoading(true);

    // mock api request
    setTimeout(() => {
      createItineraryStore.setLoading(false);
      createItineraryStore.setCategories(data.categories);
      createItineraryStore.next();
    }, 1000);
  });

  const selected = watch("categories");

  const setActive = (id: number) => {
    const curIndex = selected.findIndex((item) => item === id);
    if (curIndex !== -1) {
      setValue(
        "categories",
        selected.filter((item) => item !== id)
      );
    } else {
      if (selected.length < MAX_SELECT_CATEGORIES) {
        setValue("categories", [...selected, id]);
      }
    }
  };

  return (
    <form id="createItineraryForm" onSubmit={onSubmit}>
      {alert.show && (
        <Alert
          type="error"
          label={alert.message}
          timeout={alert.timeout}
          show={true}
          className="mb-3"
          variant="outlined"
          onClose={() => setAlert((_alert) => ({ ...alert, show: false }))}
        />
      )}

      <div className="grid grid-cols-6 gap-x-2 gap-y-5">
        {categoriesItems.map((item) => {
          const active =
            selected.findIndex((selectedItem) => selectedItem === item.id) !==
            -1;

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
      </div>
    </form>
  );
};

export default observer(CategoryList);