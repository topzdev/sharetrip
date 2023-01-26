import classnames from "classnames";
import React, { ReactElement, useState } from "react";
import { colorsVariantWithState } from "../../configs/styleColors";

type Props = {
  className?: string;
  disabled?: boolean;
  variant?: "outlined" | "filled" | "tonal" | "text";
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  size?: "xs" | "sm" | "base" | "lg" | "xl";
  prependIcon?: React.ReactElement;
  appendIcon?: React.ReactElement;
  loading?: boolean;
  children?: React.ReactElement;
  label: string;
  form?: string;
  onClick?: () => void;
};

const sizes = {
  xs: "py-[3px] px-2 text-xs",
  sm: "py-[5px] px-3 text-sm",
  base: "py-[6px] px-4 text-base",
  lg: "py-[7px] px-5 text-lg",
  xl: "py-[8px] px-6 text-xl",
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
  position: "left" | "right";
  icon?: ReactElement;
  size?: Props["size"];
}> = ({ classList, position, icon, size = "base" }) => {
  const myClass = classnames(
    classList,
    position === "left" ? "mr-2" : "ml-2",
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
      viewBox="0 0 24 24">
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  );
};

const Button: React.FC<Props> = ({
  variant = "filled",
  color = "primary",
  label = "Button",
  size = "base",
  form,
  className,
  prependIcon,
  appendIcon,
  loading,
  disabled,
  children,
  onClick,
}) => {
  let typeStyle = {
    parent: [
      "flex items-center rounded-md border-2 font-bold transition ease-in select-none",
    ],
    icon: [""],
  };

  colorsVariantWithState["disabled"];

  typeStyle.parent.push(
    colorsVariantWithState[disabled ? "disabled" : color][variant]
  );
  typeStyle.parent.push(sizes[size]);
  typeStyle.icon.push(iconSizes[size]);

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

  return (
    <button form={form} className={parentClass} onClick={onClick}>
      <PrependIcon />
      {label ? label : children}
      <AppendIcon />
    </button>
  );
};

export default Button;
