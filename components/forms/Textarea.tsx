import React from "react";
import InputWrapper, { InputProps } from "./InputWrapper";

type TextareaProps = Omit<InputProps, "prependIcon" | "appendIcon"> & {
  cols?: number;
  rows?: number;
};

const Textarea: React.FC<TextareaProps> = ({ rows = 10, cols, ...props }) => {
  return (
    <InputWrapper {...props}>
      {({
        required,
        inputClassname,
        placeholder,
        id,
        name,
        onChange,
        disabled,
        value,
      }) => (
        <textarea
          required={required}
          className={inputClassname}
          placeholder={placeholder}
          id={id}
          cols={cols}
          rows={rows}
          name={name}
          onChange={onChange}
          value={value}
          disabled={disabled}
        />
      )}
    </InputWrapper>
  );
};

export default Textarea;
