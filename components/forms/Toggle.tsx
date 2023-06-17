"use client";

import React, { useState } from "react";
import { Switch } from "@headlessui/react";
import { InputProps } from "./InputWrapper";
import classnames from "classnames";

type Props = Pick<
  InputProps,
  "label" | "id" | "name" | "disabled" | "onChange"
> & {
  checked: boolean;
  onText?: string;
  offText?: string;
};

const style = {
  default: {
    label: "text-slate-500",
    extraLabel: "text-slate-600",
    checkedSwitch: "bg-primary-500",
    uncheckSwitch: "bg-slate-200",
  },
  disabled: {
    label: "text-primary/30",
    extraLabel: "text-primary/30",
    checkedSwitch: "bg-primary/30",
    uncheckSwitch: "bg-primary/30",
  },
};

function Toggle({
  onChange,
  checked,
  id,
  label,
  offText,
  onText,
  disabled,
}: Props) {
  let overideClassnames = style["default"];

  if (disabled) {
    overideClassnames = style["disabled"];
  }

  const labelClassnames = classnames(overideClassnames.label);
  const extralLabelClassnames = classnames(overideClassnames.extraLabel);
  const checkSwitchClassnames = classnames(overideClassnames.checkedSwitch);
  const unCheckSwitchClassnames = classnames(overideClassnames.uncheckSwitch);

  return (
    <div className="flex flex-col">
      {label && (
        <label className={labelClassnames} htmlFor={id}>
          {label}
        </label>
      )}
      <div className="flex items-center mt-1">
        {offText && (
          <span className={`mr-2 text-sm ${extralLabelClassnames}`}>
            {offText}
          </span>
        )}
        <Switch
          id={id}
          disabled={disabled}
          checked={checked}
          onChange={onChange}
          className={`${
            checked ? checkSwitchClassnames : unCheckSwitchClassnames
          } relative inline-flex h-6 w-11 items-center rounded-full`}
        >
          <span
            className={`${
              checked ? "translate-x-6" : "translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
          />
        </Switch>

        {onText && (
          <span className={`ml-2 text-sm ${extralLabelClassnames}`}>
            {onText}
          </span>
        )}
      </div>
    </div>
  );
}

export default Toggle;
