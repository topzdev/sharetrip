import React, { ReactElement, useEffect, useMemo, useState } from "react";
import { Icon } from "@mdi/react";
import { mdiLock, mdiCheckBold } from "@mdi/js";
import useStepperType from "hooks/useStepperType";

type Props = {
  number: number;
  active: boolean;
  done: boolean;
  locked: boolean;
  error?: boolean;
  title: string | ReactElement;
  children?: ReactElement;
  className?: string;
};

function Stepper({
  number = 1,
  title,
  children,
  className,
  done,
  error = false,
  locked,
  active,
}: Props) {
  const [style, setStyle] = useState({
    circle: "border-slate-500 text-slate-500",
    text: "text-slate-500",
    dash: "border-slate-200",
    parent: "",
  });

  const [type] = useStepperType({ done, locked, active, error });

  useMemo(() => {
    switch (type) {
      case "default":
        setStyle({
          circle: "border-slate-500 text-slate-500",
          text: "text-slate-500",
          dash: "border-slate-200",
          parent: "",
        });
        break;

      case "current":
        setStyle({
          circle: "border-primary-500 text-primary-500",
          text: "text-primary-500",
          dash: "border-slate-500",
          parent: "",
        });
        break;

      case "done":
        setStyle({
          circle: "border-primary-500 text-white bg-primary-500",
          text: "text-primary-500",
          dash: "border-primary",
          parent: "",
        });
        break;

      case "error":
        setStyle({
          circle: "border-red-500 text-red-500",
          text: "text-red-500",
          dash: "",
          parent: "",
        });
        break;

      case "lock":
        setStyle({
          circle: "border-slate-400 text-slate-400",
          text: "text-slate-400",
          dash: "",
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
      <Icon className="h-[20px]" path={mdiCheckBold}></Icon>
    ) : (
      <>{number}</>
    );

  const DashedPath = () => {
    return (
      <div className="flex justify-center min-h-[50px] w-[40px]">
        <div
          className={`h-full border-l-[3px] border-dashed ${style.dash}`}></div>
      </div>
    );
  };

  return (
    <div className={`flex flex-col ${className}`}>
      <div className={`flex items-center ${style.parent}`}>
        <div
          className={`flex h-[40px] w-[40px] justify-center items-center font-bold text-1xl mr-2 rounded-full border-[3px] relative ${style.circle}`}>
          <CircleTextIcon></CircleTextIcon>
          <LockStatus></LockStatus>
        </div>

        <div className="flex flex-col">
          <p className={`text-lg font-bold font-sans ${style.text}`}>{title}</p>
        </div>
      </div>

      <div className="flex">
        <DashedPath />
        {children && <div className="pl-[10px] pb-5 mt-1">{children}</div>}
      </div>
    </div>
  );
}

export default Stepper;
