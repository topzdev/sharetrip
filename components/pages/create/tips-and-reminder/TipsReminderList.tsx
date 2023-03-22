import Button from "@/components/buttons/Button";
import Textfield from "@/components/forms/Textfield";
import { informationSchema } from "@/configs/fieldSchema/createItinerary";
import createItineraryStore from "@/stores/createItinerary";
import { CreateItineraryForm } from "@/types/createItinerary";
import { yupResolver } from "@hookform/resolvers/yup";
import { mdiTrashCan } from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";
import { useForm } from "react-hook-form";

type Props = {};

const TipsReminderList = (props: Props) => {
  const {
    handleSubmit,
    formState: { errors },
    register,
    control,
    watch,
  } = useForm<CreateItineraryForm>({
    defaultValues: {
      tipsAndReminders: createItineraryStore.form.tipsAndReminders,
    },
    resolver: yupResolver(informationSchema),
  });

  const tipsAndReminders = watch("tipsAndReminders");

  return (
    <div className="flex flex-col">
      <div className="flex justify-center">
        <Button variant="outlined" rounded>
          Add Reminders and Tips
        </Button>
      </div>

      <div className="flex mt-4">
        {tipsAndReminders.map((item) => (
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-2">
              <Textfield
                label={"Emoji"}
                name="emoji"
                value={item.emoji}></Textfield>
            </div>
            <div className="col-span-8">
              <Textfield
                label={"Tips And Reminder"}
                name="tipsAndReminder"
                value={item.text}></Textfield>
            </div>
            <div className="col-span-2 flex items-center">
              <Button color="error" size="xl" icon variant="tonal">
                <Icon path={mdiTrashCan}></Icon>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TipsReminderList;
