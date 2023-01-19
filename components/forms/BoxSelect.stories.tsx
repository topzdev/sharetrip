// Textarea.stories.ts|tsx

import React from "react";
import "@mdi/font/css/materialdesignicons.css"; //@ts-ignore;

import { ComponentStory, ComponentMeta } from "@storybook/react";

import BoxSelect from "./BoxSelect";
import Icon from "@mdi/react";
import { mdiLock } from "@mdi/js";

export default {
  title: "Inputs/BoxSelect",
  component: BoxSelect,
} as ComponentMeta<typeof BoxSelect>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof BoxSelect> = (args) => (
  <BoxSelect {...args} />
);

export const Default = Template.bind({});

Default.args = {
  label: "Title",
  icon: <Icon path={mdiLock}></Icon>,
};
