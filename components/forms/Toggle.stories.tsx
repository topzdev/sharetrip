// Textfield.stories.ts|tsx

import React from "react";
import "@mdi/font/css/materialdesignicons.css"; //@ts-ignore;

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Toggle from "./Toggle";
import Icon from "@mdi/react";
import { mdiLock } from "@mdi/js";

export default {
  title: "Inputs/Toggle",
  component: Toggle,
} as ComponentMeta<typeof Toggle>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />;

export const Defualt = Template.bind({});

Defualt.args = {
  label: "Hello",
  offText: "Hide",
  onText: "Show",
  id: "hello",
  checked: true,
};
