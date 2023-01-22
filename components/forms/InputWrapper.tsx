import React, { useEffect, useState } from "react";
import classnames from "classnames";
import { error } from "console";

type ChildrenWithProps = Pick<
  InputProps,
  | "required"
  | "type"
  | "placeholder"
  | "id"
  | "name"
  | "onChange"
  | "value"
  | "disabled"
> & {
  inputClassname?: string;
};

export type InputProps = {
  id?: string;
  name: string;
  label: string | React.ReactElement;
  placeholder?: string;
  type?: "text" | "number";
  value?: any;
  required?: boolean;
  preprendIcon?: React.ReactElement;
  appendIcon?: React.ReactElement;
  disabled?: boolean;
  error?: boolean | string | string[];
  onChange?: (value: any) => void;
  children?: (
    props: ChildrenWithProps
  ) => React.ReactElement | React.ReactElement[] | "";
};

const InputIcon: React.FC<{
  classList?: string[] | string;
  position: "left" | "right";
  icon?: React.ReactElement;
}> = ({ classList, position, icon }) => {
  const myClass = classnames(
    classList,
    position === "left" ? "mr-2" : "ml-2",
    "child:h-[18px]",
    "child:transition child:ease-in"
  );

  return icon ? <span className={myClass}>{icon}</span> : <></>;
};

const inputType = {
  default: {
    parent: [
      "text-slate-500 border-slate-500",
      "hover:border-slate-700 hover:text-slate-700",
      "focus-within:!border-primary-500 focus-within:text-primary-500  focus-within:!text-primary-500",
    ],
    label: [""],
    inputWrapper: [
      "text-slate-500 border-slate-500",
      "group-focus-within:!border-primary-500 group-focus-within:text-primary-500  focus-within:!text-primary-500",
    ],
    input: [
      "!placeholder:text-slate-400 group-hover:placeholder:text-slate-500 !text-slate-900 transition ease-in",
    ],
  },
  disabled: {
    parent: ["text-slate-300 border-slate-100"],
    label: ["text-slate-300"],
    inputWrapper: ["text-slate-300"],
    input: ["!text-slate-300 placeholder:text-slate-300"],
  },
  error: {
    parent: ["border-red-500"],
    label: ["text-red-500"],
    inputWrapper: ["text-red-500"],
    input: ["placeholder:text-red-500 text-red-500"],
  },
};

const defualtclassNames = {
  parent: [
    "flex flex-col align-start border-2 rounded-md py-[5px] px-2 transition ease-in group",
  ],
  label: ["text-sm font-bold"],
  inputWrapper: ["w-full transition ease-in flex items-center py-[3px]"],
  input: ["outline-0 w-full text-base"],
};

const InputWrapper: React.FC<InputProps> = ({
  id,
  name,
  label,
  placeholder,
  type = "text",
  onChange,
  value,
  disabled,
  required,
  appendIcon,
  preprendIcon,
  error = false,
  children,
}) => {
  let [errorMessage, setErrorMessage] = useState("");

  let overideClassnames = inputType["default"];

  if (disabled) {
    overideClassnames = inputType["disabled"];
  } else {
    if (error) {
      overideClassnames = inputType["error"];
    }
  }
  useEffect(() => {
    if (typeof error === "string") {
      setErrorMessage(error);
    } else if (Array.isArray(error)) {
      setErrorMessage(error[0]);
    }
  }, [typeof error !== "boolean"]);

  const parentClassname = classnames(
    defualtclassNames.parent,
    overideClassnames.parent
  );
  const inputClassname = classnames(
    defualtclassNames.input,
    overideClassnames.input
  );
  const inputWrapperClassname = classnames(
    defualtclassNames.inputWrapper,
    overideClassnames.inputWrapper
  );
  const labelClassname = classnames(
    defualtclassNames.label,
    overideClassnames.label
  );

  return (
    <div>
      <div className={parentClassname}>
        {label && (
          <label className={labelClassname} htmlFor={id}>
            {label}

            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <div className={inputWrapperClassname}>
          {preprendIcon && (
            <InputIcon position="left" icon={preprendIcon} classList={""} />
          )}

          {children &&
            children({
              required,
              inputClassname,
              type,
              placeholder,
              id,
              name,
              onChange,
              value,
              disabled,
            })}

          {appendIcon && <InputIcon position="left" icon={appendIcon} />}
        </div>
      </div>
      {errorMessage && (
        <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
      )}
    </div>
  );
};

export default InputWrapper;
