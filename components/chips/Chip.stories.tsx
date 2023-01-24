import React from "react";
import "@mdi/font/css/materialdesignicons.css"; //@ts-ignore;

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Chip from "./Chip";
import Icon from "@mdi/react";
import { mdiLock } from "@mdi/js";

export default {
  title: "Chip",
  component: Chip,
} as ComponentMeta<typeof Chip>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

export const Default = Template.bind({});
export const WithLeftIcon = Template.bind({});
export const WithRightIcon = Template.bind({});

Default.args = {
  color: "primary",
  size: "base",
  variant: "filled",
  label: "Chip",
  // appendIcon: ,
  prependIcon: <Icon path={mdiLock}></Icon>,
};

WithLeftIcon.args = {
  color: "primary",
  size: "base",
  variant: "filled",
  label: "Chip",
  prependIcon: <Icon path={mdiLock}></Icon>,
};

WithRightIcon.args = {
  color: "primary",
  size: "base",
  variant: "filled",
  label: "Chip",
  appendIcon: <Icon path={mdiLock}></Icon>,
};
