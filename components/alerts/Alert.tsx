"use client";

import { colorsVariants, colorsVariantWithState } from "@/configs/styleColors";
import {
  mdiAlert,
  mdiCheckCircle,
  mdiCloseOctagon,
  mdiInformation,
} from "@mdi/js";
import Icon from "@mdi/react";
import classNames from "classnames";
import React, { ReactElement, useEffect, useState } from "react";
import Button from "../buttons/Button";

type Props = {
  className?: string;
  variant?: "outlined" | "filled" | "tonal";
  type?: "error" | "info" | "success" | "warning";
  dense?: boolean;
  icon?: boolean | React.ReactElement;
  showIcon?: boolean;
  label?: string | React.ReactElement | ReactElement[];
  // dismissable?: boolean;
  children?: string | React.ReactElement | ReactElement[];
  show: boolean;
  timeout?: number;
  onClose?: () => void;
};

const alertIcon = {
  success: <Icon path={mdiCheckCircle}></Icon>,
  error: <Icon path={mdiCloseOctagon}></Icon>,
  info: <Icon path={mdiInformation}></Icon>,
  warning: <Icon path={mdiAlert}></Icon>,
};

const alertDenseClass = {
  false: "py-3 px-3",
  true: "py-1 px-2 text-sm",
};

const Alert: React.FC<Props> = ({
  className,
  variant = "filled",
  type = "success",
  label,
  children,
  timeout,
  icon,
  show = true,
  dense = false,
  showIcon = true,
  onClose,
}) => {
  useEffect(() => {
    let currentTimeout: any = null;

    if (timeout && timeout > 0) {
      currentTimeout = setTimeout(() => {
        if (onClose) onClose();
      }, timeout);
    }

    return () => {
      if (currentTimeout) clearTimeout(currentTimeout);
    };
  }, [timeout && timeout > 0]);

  let classList = {
    parent: [
      "flex items-center rounded-md border-2 font-medium transition ease-in select-none",
    ],
  };

  classList.parent.push(
    colorsVariants[type][variant],
    alertDenseClass[dense ? "true" : "false"]
  );

  const AlertIcon = () => {
    return (
      <>
        {showIcon && (
          <div className={"child:h-[22px] mr-2"}>
            {icon ? icon : alertIcon[type]}
          </div>
        )}
      </>
    );
  };

  const AlertLabel = () => {
    return <> {label ? label : children} </>;
  };

  const AlertDismissable = () => {
    return (
      <>
        {onClose && (
          <Button
            className="ml-auto"
            variant={variant === "filled" ? "filled" : "text"}
            size="sm"
            color={type}
            label="Close"
            onClick={() => {
              // _setShow(false);
              onClose();
            }}
          ></Button>
        )}
      </>
    );
  };

  const parentClass = classNames(classList.parent, className);

  return (
    <>
      {show && (
        <div className={parentClass}>
          <AlertIcon />
          <AlertLabel />
          <AlertDismissable />
        </div>
      )}
    </>
  );
};

export default Alert;
