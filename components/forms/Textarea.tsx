import React from "react";
import InputWrapper, { InputProps } from "./InputWrapper";

type TextareaProps = Omit<InputProps, "prependIcon" | "appendIcon">;

const Textarea: React.FC<TextareaProps> = ({ ...props }) => {
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
