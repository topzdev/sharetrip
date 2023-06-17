"use client";

import React from "react";
import InputWrapper, { InputProps } from "./InputWrapper";

type TextareaProps = Omit<InputProps, "prependIcon" | "appendIcon"> & {
  cols?: number;
  rows?: number;
};

const Textarea: React.FC<TextareaProps> = ({ rows = 10, cols, ...props }) => {
  return (
    <InputWrapper {...props}>
      {({ inputClassname, placeholder, finalRegister }) => (
        <textarea
          className={inputClassname}
          placeholder={placeholder}
          cols={cols}
          rows={rows}
          {...finalRegister}
        />
      )}
    </InputWrapper>
  );
};

export default Textarea;
