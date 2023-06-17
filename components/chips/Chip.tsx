"use client";

import {
  Colors,
  colorsVariants,
  colorsVariantWithState,
  Variants,
} from "@/configs/styleColors";
import classnames from "classnames";
import React, { ReactElement } from "react";

type Props = {
  className?: string;
  disabled?: boolean;
  variant?: Variants;
  color?: Colors;
  size?: "xs" | "sm" | "base" | "lg" | "xl";
  prependIcon?: React.ReactElement;
  appendIcon?: React.ReactElement;
  children?: React.ReactElement;
  label: string;
  rounded?: boolean;
  onClick?: () => void;
};

const sizes = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};

const iconSizes = {
  xs: "child:h-[10px]",
  sm: "child:h-[12px]",
  base: "child:h-[14px]",
  lg: "child:h-[16px]",
  xl: "child:h-[28px]",
};

const ChipIcon: React.FC<{
  classList: string[] | string;
  position: "left" | "right";
  icon?: ReactElement;
  size?: Props["size"];
}> = ({ classList, position, icon, size = "base" }) => {
  const myClass = classnames(
    classList,
    position === "left" ? "mr-1" : "ml-1",
    iconSizes[size]
  );

  return icon ? <span className={myClass}>{icon}</span> : <></>;
};

const Chip: React.FC<Props> = ({
  variant = "filled",
  color = "primary",
  label = "Chip",
  size = "base",
  rounded = false,
  className,
  prependIcon,
  appendIcon,
  disabled,
  children,
  onClick,
}) => {
  let typeStyle = {
    parent: [
      "inline-flex items-center border-2 transition ease-in select-none",
    ],
    icon: [""],
  };

  typeStyle.parent.push(colorsVariants[disabled ? "disabled" : color][variant]);
  typeStyle.parent.push(rounded ? "rounded-full px-3" : "rounded-md px-2");
  typeStyle.parent.push(sizes[size]);
  typeStyle.icon.push(iconSizes[size]);

  const parentClass = classnames(typeStyle.parent, className);

  const PrependIcon = () => {
    const prependIconClass = typeStyle.icon;
    let iconToRender = prependIcon;
    return (
      <ChipIcon
        icon={iconToRender}
        position="left"
        size={size}
        classList={prependIconClass}
      />
    );
  };

  const AppendIcon = () => {
    return (
      <ChipIcon
        icon={appendIcon}
        position="right"
        size={size}
        classList={typeStyle.icon}
      />
    );
  };

  return (
    <div className={parentClass} onClick={onClick}>
      <PrependIcon />
      {label ? label : children}
      <AppendIcon />
    </div>
  );
};

export default Chip;
