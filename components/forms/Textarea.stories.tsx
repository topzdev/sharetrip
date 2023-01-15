// Textarea.stories.ts|tsx

import React from "react";
import "@mdi/font/css/materialdesignicons.css"; //@ts-ignore;

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Textarea from "./Textarea";
import Icon from "@mdi/react";
import { mdiLock } from "@mdi/js";

export default {
  title: "Inputs/Textarea",
  component: Textarea,
} as ComponentMeta<typeof Textarea>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Textarea> = (args) => (
  <Textarea {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  id: "default",
  label: "Title",
  required: true,
  placeholder: "Name you travel creatively and meaningful",
};
