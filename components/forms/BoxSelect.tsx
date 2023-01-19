import classNames from "classnames";
import React from "react";

type Props = {
  icon?: React.ReactElement;
  label: string;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

const color = {
  default:
    "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:text-slate-900",
  active:
    "border-slate-900 bg-slate-50 text-slate-900 hover:border-slate-600 hover:bg-transparent",
  disabled: "border-slate-200 bg-slate-50 text-slate-300",
};

const BoxSelect: React.FC<Props> = ({
  label,
  icon,
  active = false,
  disabled = false,
  onClick,
}) => {
  const defaultStyle =
    "h-[130px] w-[100px] flex items-center justify-center rounded-lg flex-col transition ease-in cursor-pointer border-2 px-4 py-2 select-none";
  const styleClass =
    color[disabled ? "disabled" : active ? "active" : "default"];

  const parentClass = classNames(defaultStyle, styleClass);
  return (
    <div className={parentClass} onClick={onClick}>
      <span hidden></span>
      <span className="child:h-[35px]">{icon}</span>
      <span className="mt-3 text-center text-xs">{label}</span>
    </div>
  );
};

export default BoxSelect;
