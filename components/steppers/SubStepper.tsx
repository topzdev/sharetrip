import React, { ReactElement, useEffect, useState } from "react";
import { Icon } from "@mdi/react";
import { mdiLock, mdiCheckBold, mdiMenuRight } from "@mdi/js";
import useStepperType from "hooks/useStepperType";

type Props = {
  active: boolean;
  done: boolean;
  locked: boolean;
  error?: boolean;
  title: string | ReactElement;
  className?: string;
};

function SubStepper({
  title,
  className,
  done,
  error = false,
  locked,
  active,
}: Props) {
  const [style, setStyle] = useState({
    text: "text-slate-500",
    parent: "",
  });

  const [type] = useStepperType({ done, locked, active, error });

  console.log(title);

  useEffect(() => {
    switch (type) {
      case "default":
        setStyle({
          text: "text-slate-500",
          parent: "",
        });
        break;

      case "current":
        setStyle({
          text: "text-primary-500",
          parent: "",
        });
        break;

      case "done":
        setStyle({
          text: "text-primary-500",
          parent: "",
        });
        break;

      case "error":
        setStyle({
          text: "text-red-500",
          parent: "",
        });
        break;

      case "lock":
        setStyle({
          text: "text-slate-400",
          parent: "cursor-not-allowed",
        });
        break;
    }
  }, [type]);

  const LockStatus = () => {
    return type === "lock" ? (
      <span className="flex justify-center items-center h-[18px] w-[18px] bg-slate-400 text-white rounded-full ml-1">
        <Icon className="h-[12px]" path={mdiLock}></Icon>
      </span>
    ) : (
      <></>
    );
  };

  const CheckMark = () => {
    return type === "done" ? (
      <span className="flex items-center justify-center min-h-[18px] min-w-[18px] rounded-full bg-primary-500 text-white ml-1">
        <Icon className="h-[16px]" path={mdiCheckBold}></Icon>
      </span>
    ) : (
      <></>
    );
  };

  const MenuRight = () =>
    type === "current" ? (
      <Icon className="h-[16px] fill-primary-500" path={mdiMenuRight}></Icon>
    ) : (
      <></>
    );

  return (
    <div className={`flex items-center ${style.parent} ${className}`}>
      <MenuRight />
      <span className={`font-normal ${style.text}`}>{title}</span>
      <CheckMark />
      <LockStatus />
    </div>
  );
}

export default SubStepper;
