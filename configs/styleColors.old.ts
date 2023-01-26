import classNames from "classnames";

export const variantsColorsWithState = {
  disabled: {
    border: "",
    background: "",
    text: "",
    tonal: "",
  },

  primary: {
    border: "hover:border-primary-400 active:border-primary-500",
    background: "hover:bg-primary-400 active:bg-primary-500",
    text: "hover:text-primary-400",
    tonal: "hover:bg-primary-500/[8%] active:bg-primary-500/[12%]",
  },

  secondary: {
    border: "hover:border-slate-600 active:border-slate-800",
    background: "hover:bg-slate-600 active:bg-slate-800",
    text: "hover:text-primary-600 ",
    tonal: "hover:bg-slate-600/[8%] active:bg-slate-800/[12%]",
  },

  error: {
    border: "hover:border-red-400 active:border-red-500",
    background: "hover:bg-red-400 active:bg-red-500",
    text: "hover:text-red-400",
    tonal: "hover:bg-red-500/[8%] active:bg-red-500/[12%]",
  },

  info: {
    border: "hover:border-blue-400 active:border-blue-500",
    background: "hover:bg-blue-400 active:bg-blue-500",
    text: "hover:text-blue-400",
    tonal: "hover:bg-blue-500/[8%] active:bg-blue-500/[12%]",
  },

  success: {
    border: "hover:border-green-500 active:border-green-500",
    background: "hover:bg-green-500 active:bg-green-500",
    text: "hover:text-green-500",
    tonal: "hover:bg-green-600/[8%] active:bg-green-600/[12%]",
  },

  warning: {
    border: "hover:border-amber-400 active:border-amber-500",
    background: "hover:bg-amber-400 active:bg-amber-500",
    text: "hover:text-amber-400",
    tonal: "hover:bg-amber-500/[8%] active:bg-amber-500/[12%]",
  },
};

export const componentColors = {
  disabled: {
    border: "border-slate-100",
    background: "bg-slate-100",
    text: "text-slate-300",
    tonal: "bg-slate-100/10",
  },

  primary: {
    border: "border-primary-500",
    background: "bg-primary",
    text: "text-primary-500",
    tonal: "bg-primary-500/10",
  },

  secondary: {
    border: "border-slate-800",
    background: "bg-slate-800",
    text: "text-slate-800",
    tonal: "bg-slate-800/10",
  },

  error: {
    border: "border-red-500",
    background: "bg-red-500",
    text: "text-red-500",
    tonal: "bg-red-500/10",
  },

  info: {
    border: "border-blue-500",
    background: "bg-blue-500",
    text: "text-blue-500",
    tonal: "bg-blue-500/10",
  },

  success: {
    border: "border-green-600",
    background: "bg-green-600",
    text: "text-green-600",
    tonal: "bg-green-600/10",
  },

  warning: {
    border: "border-amber-500",
    background: "bg-amber-500",
    text: "text-amber-500",
    tonal: "bg-amber-500/10",
  },
};

type Variants =
  | "primary"
  | "secondary"
  | "error"
  | "info"
  | "success"
  | "warning";

export const automateVariantStyle = (type: "default" | "hover") => {
  let defaultStyle = {
    outlined: ["border-slate-100"],
    filled: ["text-white"],
    tonal: ["border-transparent"],
    text: ["border-transparent"],
  };

  let tempVariants = {
    primary: {},
    secondary: {},
    error: {},
    info: {},
    success: {},
    warning: {},
  };

  // console.log(Object.keys(componentColors));

  Object.keys(componentColors).forEach((item, index) => {
    const { border, text, tonal, background } =
      type === "default"
        ? componentColors[item as Variants]
        : variantsColorsWithState[item as Variants];

    tempVariants[item as Variants] = {
      outlined: classNames(defaultStyle.outlined, border, text),
      filled: classNames(defaultStyle.filled, background, border),
      tonal: classNames(defaultStyle.tonal, tonal, text),
      text: classNames(defaultStyle.text, text),
    };
  });

  return tempVariants;
};
const test = {
  primary: {
    outlined: "border-slate-100 border-primary-500 text-primary-500",
    filled: "text-white bg-primary border-primary-500",
    tonal: "border-transparent bg-primary-500/10 text-primary-500",
    text: "border-transparent text-primary-500",
  },
  secondary: {
    outlined: "border-slate-100 border-slate-800 text-slate-800",
    filled: "text-white bg-slate-800 border-slate-800",
    tonal: "border-transparent bg-slate-800/10 text-slate-800",
    text: "border-transparent text-slate-800",
  },
  error: {
    outlined: "border-slate-100 border-red-500 text-red-500",
    filled: "text-white bg-red-500 border-red-500",
    tonal: "border-transparent bg-red-500/10 text-red-500",
    text: "border-transparent text-red-500",
  },
  info: {
    outlined: "border-slate-100 border-blue-500 text-blue-500",
    filled: "text-white bg-blue-500 border-blue-500",
    tonal: "border-transparent bg-blue-500/10 text-blue-500",
    text: "border-transparent text-blue-500",
  },
  success: {
    outlined: "border-slate-100 border-green-600 text-green-600",
    filled: "text-white bg-green-600 border-green-600",
    tonal: "border-transparent bg-green-600/10 text-green-600",
    text: "border-transparent text-green-600",
  },
  warning: {
    outlined: "border-slate-100 border-amber-500 text-amber-500",
    filled: "text-white bg-amber-500 border-amber-500",
    tonal: "border-transparent bg-amber-500/10 text-amber-500",
    text: "border-transparent text-amber-500",
  },
  disabled: {
    outlined: "border-slate-100 border-slate-100 text-slate-300",
    filled: "text-white bg-slate-100 border-slate-100",
    tonal: "border-transparent bg-slate-100/10 text-slate-300",
    text: "border-transparent text-slate-300",
  },
};
