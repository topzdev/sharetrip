import React from "react";
import InputWrapper, { InputProps } from "./InputWrapper";

const Textfield: React.FC<InputProps> = ({ ...props }) => {
  return (
    <InputWrapper {...props}>
      {({
        required,
        inputClassname,
        type,
        placeholder,
        id,
        name,
        onChange,
        disabled,
        value,
      }) => (
        <input
          required={required}
          className={inputClassname}
          type={type}
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

export default Textfield;
