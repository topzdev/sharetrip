import Alert from "@/components/alerts/Alert";
import { AlertDefault } from "@/types/default";
import React, { BaseSyntheticEvent } from "react";

type Props = {
  alert?: AlertDefault;
  closeAlert?: () => void;
  children: React.ReactNode;
  onSubmit: (
    e?: BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>;
};

const CreateItineraryFormWrapper: React.FC<Props> = ({
  children,
  onSubmit,
  closeAlert,
  alert,
}) => {
  return (
    <form id="createItineraryForm" onSubmit={onSubmit}>
      {alert && alert.show && (
        <Alert
          type="error"
          label={alert.message}
          timeout={alert.timeout}
          show={alert.show}
          className="mb-3"
          variant="outlined"
          onClose={closeAlert}
        />
      )}

      {children}
    </form>
  );
};

export default CreateItineraryFormWrapper;
