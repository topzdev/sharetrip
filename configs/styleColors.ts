import classNames from "classnames";

export type Colors =
  | "black"
  | "white"
  | "primary"
  | "secondary"
  | "error"
  | "info"
  | "success"
  | "warning";

export type Variants = "filled" | "outlined" | "tonal" | "text";

export const colorsVarianState = {
  black: {
    outlined: "hover:bg-white active:bg-white hover:bg-black",
    filled: "hover:bg-white active:bg-white hover:bg-white active:bg-white",
    tonal: "hover:bg-white/[8%] active:bg-white/[12%] hover:bg-black",
    text: "",
  },

  white: {
    outlined: "hover:bg-lblack active:bg-black hover:bg-white",
    filled: "hover:bg-black active:bg-black hover:bg-black active:bg-black",
    tonal: "hover:bg-black/[8%] active:bg-black/[12%] hover:bg-white",
    text: "",
  },

  primary: {
    outlined:
      "hover:border-primary-400 active:border-primary-500 hover:text-primary-400",
    filled:
      "hover:bg-primary-400 active:bg-primary-500 hover:border-primary-400 active:border-primary-500",
    tonal:
      "hover:bg-primary-500/[8%] active:bg-primary-500/[12%] hover:text-primary-400",
    text: "hover:text-primary-400",
  },

  secondary: {
    outlined:
      "hover:border-slate-600 active:border-slate-800 hover:text-slate-600 ",
    filled:
      "hover:bg-slate-600 active:bg-slate-800 hover:border-slate-600 active:border-slate-800",
    tonal:
      "hover:bg-slate-600/[8%] active:bg-slate-800/[12%] hover:text-primary-600 ",
    text: "hover:text-primary-600 ",
  },
  error: {
    outlined: "hover:border-red-400 active:border-red-500 hover:text-red-400",
    filled:
      "hover:bg-red-400 active:bg-red-500 hover:border-red-400 active:border-red-500",
    tonal: "hover:bg-red-500/[8%] active:bg-red-500/[12%] hover:text-red-400",
    text: "hover:text-red-400",
  },
  info: {
    outlined:
      "hover:border-blue-400 active:border-blue-500 hover:text-blue-400",
    filled:
      "hover:bg-blue-400 active:bg-blue-500 hover:border-blue-400 active:border-blue-500",
    tonal:
      "hover:bg-blue-500/[8%] active:bg-blue-500/[12%] hover:text-blue-400",
    text: "hover:text-blue-400",
  },
  success: {
    outlined:
      "hover:border-green-500 active:border-green-500 hover:text-green-500",
    filled:
      "hover:bg-green-500 active:bg-green-500 hover:border-green-500 active:border-green-500",
    tonal:
      "hover:bg-green-600/[8%] active:bg-green-600/[12%] hover:text-green-500",
    text: "hover:text-green-500",
  },
  warning: {
    outlined:
      "hover:border-amber-400 active:border-amber-500 hover:text-amber-400",
    filled:
      "hover:bg-amber-400 active:bg-amber-500 hover:border-amber-400 active:border-amber-500",
    tonal:
      "hover:bg-amber-500/[8%] active:bg-amber-500/[12%] hover:text-amber-400",
    text: "hover:text-amber-400",
  },
  disabled: {
    outlined: "",
    filled: "",
    tonal: "",
    text: "",
  },
};

export const colorsVariants = {
  black: {
    outlined: "bg-white text-black",
    filled: "text-black border-white bg-white",
    tonal: "border-transparent bg-blac/10 text-black",
    text: "border-transparent text-black",
  },
  white: {
    outlined: "bg-black text-white",
    filled: "text-white border-white bg-white",
    tonal: "border-transparent bg-black/10 text-white",
    text: "border-transparent text-white",
  },
  primary: {
    outlined: "border-primary-500 text-primary-500",
    filled: "text-white bg-primary border-primary-500",
    tonal: "border-transparent bg-primary-500/10 text-primary-500",
    text: "border-transparent text-primary-500",
  },
  secondary: {
    outlined: "border-slate-800 text-slate-800",
    filled: "text-white bg-slate-800 border-slate-800",
    tonal: "border-transparent bg-slate-800/10 text-slate-800",
    text: "border-transparent text-slate-800",
  },
  error: {
    outlined: "border-red-500 text-red-500",
    filled: "text-white bg-red-500 border-red-500",
    tonal: "border-transparent bg-red-500/10 text-red-500",
    text: "border-transparent text-red-500",
  },
  info: {
    outlined: "border-blue-500 text-blue-500",
    filled: "text-white bg-blue-500 border-blue-500",
    tonal: "border-transparent bg-blue-500/10 text-blue-500",
    text: "border-transparent text-blue-500",
  },
  success: {
    outlined: "border-green-600 text-green-600",
    filled: "text-white bg-green-600 border-green-600",
    tonal: "border-transparent bg-green-600/10 text-green-600",
    text: "border-transparent text-green-600",
  },
  warning: {
    outlined: "border-amber-500 text-amber-500",
    filled: "text-white bg-amber-500 border-amber-500",
    tonal: "border-transparent bg-amber-500/10 text-amber-500",
    text: "border-transparent text-amber-500",
  },
  disabled: {
    outlined: "border-slate-100 text-slate-300",
    filled: "text-white bg-slate-100 border-slate-100",
    tonal: "border-transparent bg-slate-100/10 text-slate-300",
    text: "border-transparent text-slate-300",
  },
};

type ColorsVariants = {
  black: Record<Variants, string>;
  white: Record<Variants, string>;
  disabled: Record<Variants, string>;
  primary: Record<Variants, string>;
  secondary: Record<Variants, string>;
  error: Record<Variants, string>;
  info: Record<Variants, string>;
  success: Record<Variants, string>;
  warning: Record<Variants, string>;
};

const merger = () => {
  let temp = {
    black: {},
    white: {},
    disabled: {},
    primary: {},
    secondary: {},
    error: {},
    info: {},
    success: {},
    warning: {},
  };

  Object.keys(colorsVariants).forEach((item) => {
    temp[item as Colors] = {
      outlined: classNames(
        colorsVariants[item as Colors].outlined,
        colorsVarianState[item as Colors].outlined
      ),
      filled: classNames(
        colorsVariants[item as Colors].filled,
        colorsVarianState[item as Colors].filled
      ),
      tonal: classNames(
        colorsVariants[item as Colors].tonal,
        colorsVarianState[item as Colors].tonal
      ),
      text: classNames(
        colorsVariants[item as Colors].text,
        colorsVarianState[item as Colors].text
      ),
    };
  });

  return temp;
};

export const colorsVariantWithState = merger() as ColorsVariants;
