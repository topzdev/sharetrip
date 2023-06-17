"use client";

import classnames from "classnames";
import { type } from "os";
import React, { ReactElement, useState } from "react";
import {
  Colors,
  colorsVariantWithState,
  Variants,
} from "../../configs/styleColors";

type Props = {
  className?: string;
  disabled?: boolean;
  variant?: Variants;
  color?: Colors;
  type?: "submit" | "button" | "reset";
  size?: "xs" | "sm" | "base" | "lg" | "xl";
  icon?: boolean;
  prependIcon?: React.ReactNode;
  appendIcon?: React.ReactNode;
  loading?: boolean;
  children?: React.ReactNode;
  label?: React.ReactNode;
  form?: string;
  rounded?: boolean;
  onClick?: () => void;
};

const sizes = {
  xs: "py-[3px] px-2 text-xs",
  sm: "py-[5px] px-3 text-sm",
  base: "py-[6px] px-4 text-base",
  lg: "py-[7px] px-5 text-lg",
  xl: "py-[8px] px-6 text-xl",
};

const buttonIcon = {
  xs: "min-h-[24px] min-w-[24px]",
  sm: "min-h-[26px] min-w-[26px]",
  base: "min-h-[30px] min-w-[30px]",
  lg: "min-h-[34px] min-w-[34px]",
  xl: "min-h-[38px] min-w-[38px]",
};

const iconSizes = {
  xs: "child:h-[12px]",
  sm: "child:h-[14px]",
  base: "child:h-[16px]",
  lg: "child:h-[18px]",
  xl: "child:h-[20px]",
};

const ButtonIcon: React.FC<{
  classList: string[] | string;
  position?: "left" | "right";
  icon?: React.ReactNode;
  size?: Props["size"];
}> = ({ classList, position, icon, size = "base" }) => {
  const myClass = classnames(
    classList,
    position === "left" ? "mr-2" : position === "right" ? "ml-2" : "",
    iconSizes[size]
  );

  return icon ? <span className={myClass}>{icon}</span> : <></>;
};

const ButtonLoading = () => {
  return (
    <svg
      className="animate-spin h-5 w-5"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
};

const Button: React.FC<Props> = ({
  variant = "filled",
  color = "primary",
  label = "",
  size = "base",
  type = "button",
  icon = false,
  form,
  className,
  prependIcon,
  appendIcon,
  loading,
  disabled,
  children,
  onClick,
  rounded = false,
}) => {
  let typeStyle = {
    parent: [
      "flex items-center rounded-md border-2 font-bold transition ease-in select-none",
    ],
    icon: [""],
  };

  typeStyle.parent.push(
    colorsVariantWithState[disabled ? "disabled" : color][variant]
  );
  typeStyle.icon.push(iconSizes[size]);

  if (icon) {
    typeStyle.parent.push(buttonIcon[size], "rounded-full justify-center");
  } else {
    typeStyle.parent.push(sizes[size]);
    typeStyle.parent.push(rounded ? "rounded-full" : "");
  }

  const parentClass = classnames(typeStyle.parent, className);

  const PrependIcon = () => {
    const prependIconClass = typeStyle.icon;
    let iconToRender = prependIcon;
    if (loading) {
      iconToRender = <ButtonLoading />;
    }

    return (
      <ButtonIcon
        icon={iconToRender}
        position="left"
        size={size}
        classList={prependIconClass}
      />
    );
  };

  const AppendIcon = () => {
    return (
      <ButtonIcon
        icon={appendIcon}
        position="right"
        size={size}
        classList={typeStyle.icon}
      />
    );
  };

  const ButtonText = () => {
    const content = label ? label : children;
    const renderChildren = icon ? (
      <ButtonIcon classList={typeStyle.icon} icon={content}></ButtonIcon>
    ) : (
      content
    );

    return <>{renderChildren}</>;
  };

  return (
    <button type={type} form={form} className={parentClass} onClick={onClick}>
      <PrependIcon />
      <ButtonText />
      <AppendIcon />
    </button>
  );
};

export default Button;
