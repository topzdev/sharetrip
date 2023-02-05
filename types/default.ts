import React from "react";

export type ChildrenProps = React.ReactElement | React.ReactElement[] | string;

export type AlertDefault = {
  show: boolean;
  timeout: number;
  message: string;
};
