// Textfield.stories.ts|tsx

import React from "react";
import "@mdi/font/css/materialdesignicons.css"; //@ts-ignore;

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Textfield from "./Textfield";
import Icon from "@mdi/react";
import { mdiLock } from "@mdi/js";

export default {
  title: "Inputs/Textfield",
  component: Textfield,
} as ComponentMeta<typeof Textfield>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Textfield> = (args) => (
  <Textfield {...args} />
);

export const Default = Template.bind({});
Default.args = {
  id: "default",
  label: "Title",
  required: true,
  placeholder: "Name you travel creatively and meaningful",
  appendIcon: <Icon path={mdiLock}></Icon>,
};
