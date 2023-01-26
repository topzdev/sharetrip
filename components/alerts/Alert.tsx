import { colorsVariantWithState } from "@/configs/styleColors";
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
  variant?: "outlined" | "filled" | "tonal" | "text";
  type?: "error" | "info" | "success" | "warning";
  dense?: boolean;
  icon?: boolean | React.ReactElement;
  label: string | React.ReactElement | ReactElement[];
  dismissable?: boolean;
  children?: string | React.ReactElement | ReactElement[];
  show: boolean;
  timeout?: number;
};

const alertIcon = {
  success: <Icon path={mdiCheckCircle}></Icon>,
  error: <Icon path={mdiCloseOctagon}></Icon>,
  info: <Icon path={mdiInformation}></Icon>,
  warning: <Icon path={mdiAlert}></Icon>,
};

const Alert: React.FC<Props> = ({
  className,
  variant = "filled",
  type = "success",
  label,
  children,
  dismissable,
  timeout,
  show = true,
}) => {
  const [_show, _setShow] = useState(show);

  useEffect(() => {
    if (timeout && timeout > 0) {
      setTimeout(() => {
        _setShow(false);
      }, timeout);
    }
  }, [timeout && timeout > 0]);

  let classList = {
    parent: [
      "flex items-center rounded-md border-2 font-bold transition ease-in select-none",
    ],
  };

  classList.parent.push(colorsVariantWithState[type][variant]);

  const AlertIcon = () => {
    return <div className={""}>{alertIcon[type]}</div>;
  };

  const AlertLabel = () => {
    return <> {label ? label : children} </>;
  };

  const AlertDismissable = () => {
    return (
      <>
        {dismissable && (
          <Button
            color={type}
            label="Close"
            onClick={() => _setShow(false)}></Button>
        )}
      </>
    );
  };

  const parentClass = classNames(classList.parent, className);

  return (
    <>
      {_show && (
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
