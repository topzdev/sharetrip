// Textfield.stories.ts|tsx

import React from "react";
import "@mdi/font/css/materialdesignicons.css"; //@ts-ignore;

import { ComponentStory, ComponentMeta } from "@storybook/react";

import DatePicker from "./DateRangePicker";
import Icon from "@mdi/react";
import { mdiLock } from "@mdi/js";

export default {
  title: "Inputs/DatePicker",
  component: DatePicker,
} as ComponentMeta<typeof DatePicker>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof DatePicker> = (args) => (
  <DatePicker {...args} />
);

export const Default = Template.bind({});
Default.args = {
  id: "default",
  label: "Title",
  required: true,
  placeholder: "Name you travel creatively and meaningful",
  appendIcon: <Icon path={mdiLock}></Icon>,
  startDate: new Date(),
  endDate: new Date("1/25/2023"),
};
