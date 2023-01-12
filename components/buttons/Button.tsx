import { TailwindColors } from "@/types/configs";
import React, { Children } from "react";
import colorClasses from "tailwindcss/defaultConfig";

type Props = {
  disabled?: boolean;
  variant?: "outlined" | "filled" | "tonal" | "text";
  color: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  size: "xs" | "sm" | "base" | "lg" | "xl";
  prependIcon?: React.ReactElement;
  appendIcon?: React.ReactElement;
  loading?: boolean;
  children?: React.ReactElement;
  label: string;
  onClick: () => void;
};

const colors = {
  disabled: {
    border: "border-slate-100",
    background: "bg-slate-100",
    text: "text-slate-300",
    tonal: "bg-slate-100/10",
  },

  primary: {
    border: "border-primary hover:border-primary-400",
    background: "bg-primary hover:bg-primary-400",
    text: "text-primary-500 hover:text-primary-400",
    tonal: "bg-primary/10",
  },

  secondary: {
    border: "border-slate-900 hover:border-slate-800",
    background: "bg-slate-900 hover:bg-slate-800",
    text: "text-slate-900 hover:text-primary-800",
    tonal: "bg-slate-900/10",
  },

  error: {
    border: "border-red-500 hover:border-red-400",
    background: "bg-red-500 hover:bg-red-400",
    text: "text-red-500 hover:text-red-400",
    tonal: "bg-red-500/10",
  },

  info: {
    border: "border-blue-500 hover:border-blue-400",
    background: "bg-blue hover:bg-blue-800",
    text: "text-blue-500 hover:text-blue-400",
    tonal: "bg-blue-500/10",
  },

  success: {
    border: "border-green-600 hover:border-green-500",
    background: "bg-green-600 hover:bg-green-500",
    text: "text-green-600 hover:text-green-500",
    tonal: "bg-green-600/10",
  },

  warning: {
    border: "border-amber-500 hover:border-amber-400",
    background: "bg-amber-500 hover:bg-amber-400",
    text: "text-amber-500 hover:text-amber-400",
    tonal: "bg-amber-500/10",
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
  xs: "h-[12px]",
  sm: "h-[12px]",
  base: "h-[12px]",
  lg: "h-[12px]",
  xl: "h-[12px]",
};

const Button: React.FC<Props> = ({
  variant = "filled",
  color = "primary",
  label = "Button",
  size = "base",
  prependIcon,
  appendIcon,
  loading,
  disabled,
  children,
}) => {
  let typeStyle = {
    parent: ["flex items-center rounded-md border-2 font-bold"],
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
        typeStyle.parent.push(tonal, text);
        break;
      case "text":
        typeStyle.parent.push(text);
        break;
    }
  } else {
    typeStyle.parent.push(background, border, text);
  }

  typeStyle.parent.push(sizes[size]);

  const PrependIcon = () => {
    return prependIcon ? <span className="mr-1">{prependIcon}</span> : <></>;
  };

  const AppendIcon = () => {
    return appendIcon ? <span className="ml-1">{appendIcon}</span> : <></>;
  };

  const parentStyle = [...typeStyle.parent].join(" ");
  return (
    <button className={parentStyle}>
      <>
        <PrependIcon />

        {label ? label : children}

        {/* <AppendIcon /> */}
      </>
    </button>
  );
};

export default Button;
