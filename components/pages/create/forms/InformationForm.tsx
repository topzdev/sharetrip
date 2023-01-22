import DateRangePicker from "@/components/forms/DateRangePicker";
import Textarea from "@/components/forms/Textarea";
import Textfield from "@/components/forms/Textfield";
import ReactLog from "@/components/utility/ReactLog";
import React, { useState } from "react";

type Props = {};

const InformationForm: React.FC<Props> = ({}) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  return (
    <form>
      <ReactLog value={{ startDate, endDate }} />

      <div className="grid grid-cols-1 gap-3">
        <Textfield
          label={"Title"}
          id="title"
          placeholder={"Name your travel creatively and meaningful"}
          name="title"
        />

        <Textarea
          label={"Introduction"}
          id="introduction"
          rows={5}
          placeholder={"Describe your experience in few words"}
          name="introduction"
        />

        <DateRangePicker
          id="travelPeriod"
          name="travelPeriod"
          placeholder="When this travel occur?"
          label="Travel Period"
          startDate={startDate}
          endDate={endDate}
          onChange={(date) => {
            const [start, end] = date;

            setStartDate(start);
            setEndDate(end);
          }}
        />
      </div>
    </form>
  );
};

export default InformationForm;
