// Button.stories.ts|tsx

import React from "react";
import "@mdi/font/css/materialdesignicons.css"; //@ts-ignore;

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";
import Icon from "@mdi/react";
import { mdiLock } from "@mdi/js";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  color: "primary",
  size: "base",
  variant: "filled",
  // appendIcon: ,
  prependIcon: <Icon path={mdiLock}></Icon>,
};
