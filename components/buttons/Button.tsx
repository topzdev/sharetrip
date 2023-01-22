import { TailwindColors } from "@/types/configs";
import React, { Children, ReactElement } from "react";
import colorClasses from "tailwindcss/defaultConfig";
import { mdiLoading } from "@mdi/js";
import Icon from "@mdi/react";
import classnames from "classnames";

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

const colors = {
  disabled: {
    border: "border-slate-100",
    background: "bg-slate-100",
    text: "text-slate-300",
    tonal: "bg-slate-100/10",
  },

  primary: {
    border:
      "border-primary-500 hover:border-primary-400 active:border-primary-500",
    background: "bg-primary hover:bg-primary-400 active:bg-primary-500",
    text: "text-primary-500 hover:text-primary-400",
    tonal:
      "bg-primary-500/10 hover:bg-primary-500/[8%] active:bg-primary-500/[12%]",
  },

  secondary: {
    border: "border-slate-800 hover:border-slate-600 active:border-slate-800",
    background: "bg-slate-800 hover:bg-slate-600 active:bg-slate-800",
    text: "text-slate-800 hover:text-primary-600 ",
    tonal: "bg-slate-800/10 hover:bg-slate-600/[8%] active:bg-slate-800/[12%]",
  },

  error: {
    border: "border-red-500 hover:border-red-400 active:border-red-500",
    background: "bg-red-500 hover:bg-red-400 active:bg-red-500",
    text: "text-red-500 hover:text-red-400",
    tonal: "bg-red-500/10 hover:bg-red-500/[8%] active:bg-red-500/[12%]",
  },

  info: {
    border: "border-blue-500 hover:border-blue-400 active:border-blue-500",
    background: "bg-blue-500 hover:bg-blue-400 active:bg-blue-500",
    text: "text-blue-500 hover:text-blue-400",
    tonal: "bg-blue-500/10 hover:bg-blue-500/[8%] active:bg-blue-500/[12%]",
  },

  success: {
    border: "border-green-600 hover:border-green-500 active:border-green-500",
    background: "bg-green-600 hover:bg-green-500 active:bg-green-500",
    text: "text-green-600 hover:text-green-500",
    tonal: "bg-green-600/10 hover:bg-green-600/[8%] active:bg-green-600/[12%]",
  },

  warning: {
    border: "border-amber-500 hover:border-amber-400 active:border-amber-500",
    background: "bg-amber-500 hover:bg-amber-400 active:bg-amber-500",
    text: "text-amber-500 hover:text-amber-400",
    tonal: "bg-amber-500/10 hover:bg-amber-500/[8%] active:bg-amber-500/[12%]",
  },
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

  const { border, text, tonal, background } =
    colors[disabled ? "disabled" : color];
  if (!disabled) {
    switch (variant) {
      case "outlined":
        typeStyle.parent.push(border, text);
        break;
      case "filled":
        typeStyle.parent.push(background, "text-white", border);
        break;
      case "tonal":
        typeStyle.parent.push(tonal, text, "border-transparent");
        break;
      case "text":
        typeStyle.parent.push(text, "border-transparent");
        break;
    }
  } else {
    typeStyle.parent.push(background, border, text);
  }

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
