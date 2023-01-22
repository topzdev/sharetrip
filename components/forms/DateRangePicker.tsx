import React, { useState } from "react";
import InputWrapper, { InputProps } from "./InputWrapper";
import CustomDatepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type DateRagePickerProps = Omit<InputProps, "onChange"> & {
  onChange: (
    date: [Date | null, Date | null],
    event: React.SyntheticEvent<any, Event> | undefined
  ) => void;
  startDate: Date | null;
  endDate: Date | null;
};

const DateRangePicker: React.FC<DateRagePickerProps> = ({
  onChange,
  startDate,
  endDate,
  ...props
}) => {
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
      }) => (
        <CustomDatepicker
          id={id}
          name={name}
          placeholderText={placeholder}
          selected={startDate}
          className={inputClassname + " react-datepicker"}
          disabled={disabled}
          startDate={startDate}
          maxDate={new Date()}
          endDate={endDate}
          onChange={onChange}
          selectsRange
        />
      )}
    </InputWrapper>
  );
};

export default DateRangePicker;
