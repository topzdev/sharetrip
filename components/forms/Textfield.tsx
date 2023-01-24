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
        disabled,
        value,
        label,
        finalRegister,
      }) => (
        <input
          required={required}
          className={inputClassname}
          type={type}
          placeholder={placeholder}
          {...finalRegister}
        />
      )}
    </InputWrapper>
  );
};

export default Textfield;
