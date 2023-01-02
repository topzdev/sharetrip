import React, { ReactElement, useEffect, useState } from "react";
import { Icon } from "@mdi/react";
import { mdiLock, mdiCheckBold } from "@mdi/js";

type Props = {
  number: number;
  type?: "default" | "current" | "done" | "error" | "lock";
  title: string | ReactElement;
  children?: ReactElement;
};

function Stepper({ number = 1, type = "default", title, children }: Props) {
  const [style, setStyle] = useState({
    circle: "border-slate-500 text-slate-500",
    text: "text-slate-500",
    parent: "",
  });

  useEffect(() => {
    switch (type) {
      case "default":
        setStyle({
          circle: "border-slate-500 text-slate-500",
          text: "text-slate-500",
          parent: "",
        });
        break;

      case "current":
        setStyle({
          circle: "border-primary-500 text-primary-500",
          text: "text-primary-500",
          parent: "",
        });
        break;

      case "done":
        setStyle({
          circle: "border-primary-500 text-white bg-primary-500",
          text: "text-primary-500",
          parent: "",
        });
        break;

      case "error":
        setStyle({
          circle: "border-red-500 text-red-500",
          text: "text-red-500",
          parent: "",
        });
        break;

      case "lock":
        setStyle({
          circle: "border-slate-400 text-slate-400",
          text: "text-slate-400",
          parent: "cursor-not-allowed",
        });
        break;
    }
  }, [type]);

  const LockStatus = () => {
    return type === "lock" ? (
      <span className="flex justify-center items-center h-[17px] w-[17px] absolute right-[-5px] top-[-5px] bg-slate-400 text-white rounded-full">
        <Icon className="h-[12px]" path={mdiLock}></Icon>
      </span>
    ) : (
      <></>
    );
  };

  const CircleTextIcon = () =>
    type === "done" ? (
      <Icon className="h-[22px]" path={mdiCheckBold}></Icon>
    ) : (
      <>{number}</>
    );

  return (
    <div className={`flex flex-col`}>
      <div className={`flex items-center ${style.parent}`}>
        <div
          className={`flex h-[40px] w-[40px] justify-center items-center font-bold text-2xl mr-2 rounded-full border-4 relative ${style.circle}`}>
          <CircleTextIcon></CircleTextIcon>
          <LockStatus></LockStatus>
        </div>

        <div className="flex flex-col">
          <p className={`text-lg font-bold ${style.text}`}>{title}</p>
        </div>
      </div>

      {children && <div className="pl-[50px]">{children}</div>}
    </div>
  );
}

export default Stepper;
