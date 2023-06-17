"use client";
import DateRangePicker from "@/components/forms/DateRangePicker";
import Textarea from "@/components/forms/Textarea";
import Textfield from "@/components/forms/Textfield";
import { informationSchema } from "@/configs/fieldSchema/createItinerary";
import createItineraryStore from "@/stores/createItinerary";
import { CreateItineraryForm } from "@/types/createItinerary";
import { yupResolver } from "@hookform/resolvers/yup";
import { observer } from "mobx-react-lite";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import CreateItineraryFormWrapper from "../CreateItineraryFormWrapper";

type Props = {};

type InformationForm = {
  information: CreateItineraryForm["information"];
};

const InformationForm: React.FC<Props> = ({}) => {
  const {
    handleSubmit,
    formState: { errors },
    register,
    control,
  } = useForm<CreateItineraryForm["information"]>({
    defaultValues: createItineraryStore.form.information,
    resolver: yupResolver(informationSchema),
  });

  const onSubmit = handleSubmit((data) => {
    createItineraryStore.setLoading(true);

    // mock api request
    setTimeout(() => {
      createItineraryStore.setLoading(false);
      createItineraryStore.setInformation(data);
      createItineraryStore.next();
    }, 1000);
  });

  return (
    <CreateItineraryFormWrapper onSubmit={onSubmit}>
      <div className="grid grid-cols-1 gap-3">
        <Textfield
          id="title"
          name="title"
          label={"Title"}
          placeholder={"Name your travel creatively and meaningful"}
          register={register}
          error={errors?.title?.message}
        />

        <Textarea
          id="introduction"
          name="introduction"
          label={"Introduction"}
          rows={5}
          placeholder={"Describe your experience in few words"}
          register={register}
          error={errors?.introduction?.message}
        />

        <Controller
          name="travelPeriod"
          control={control}
          render={({ field, formState }) => (
            <DateRangePicker
              id="travelPeriod"
              name="travelPeriod"
              placeholder="When this travel occur?"
              label="Travel Period"
              startDate={field.value.startDate}
              endDate={field.value.endDate}
              error={
                formState.errors?.travelPeriod?.startDate?.message ||
                formState.errors?.travelPeriod?.endDate?.message
              }
              onChange={(date) => {
                const [start, end] = date;
                field.onChange({
                  ...field.value,
                  endDate: end,
                  startDate: start,
                });
              }}
            />
          )}
        />
      </div>
    </CreateItineraryFormWrapper>
  );
};

export default observer(InformationForm);
