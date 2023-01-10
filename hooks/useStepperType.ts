import { useState, useMemo } from "react";

type StepType = "default" | "current" | "done" | "error" | "lock";

type UseStepperType = {
  done: boolean;
  locked: boolean;
  active: boolean;
  error?: boolean;
};

const useStepperType = ({ done, locked, active, error }: UseStepperType) => {
  const [type, setType] = useState<StepType>("default");

  useMemo(() => {
    if (error) {
      return setType("error");
    } else {
      if (locked) {
        return setType("lock");
      } else {
        if (done) {
          return setType("done");
        }
        if (active) {
          return setType("current");
        }
      }
    }

    return setType("default");
  }, [done, locked, active, error]);

  return [type];
};

export default useStepperType;
