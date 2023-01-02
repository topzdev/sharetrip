import React, { ReactElement, useEffect, useState } from "react";
import { Icon } from "@mdi/react";
import { mdiLock, mdiCheckBold, mdiMenuRight } from "@mdi/js";

type Props = {
  type?: "default" | "current" | "done" | "error" | "lock";
  title: string | ReactElement;
};

function SubStepper({ type = "default", title }: Props) {
  const [style, setStyle] = useState({
    text: "text-slate-500",
    parent: "",
  });

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
      <Icon
        className="h-[16px] fill-primary-500"
        color={""}
        path={mdiMenuRight}></Icon>
    ) : (
      <></>
    );

  return (
    <div className={`flex items-center ${style.parent} `}>
      <MenuRight />
      <span className={`font-medium ${style.text}`}>{title}</span>
      <CheckMark />
      <LockStatus />
    </div>
  );
}

export default SubStepper;
