import { stat } from "fs";
import React, { useCallback } from "react";
import { useCreateItinerary } from "stores/createItinerary";
import AppLogo from "../AppLogo";
import shallow from "zustand/shallow";
import Stepper from "@/components/steppers/Stepper";
import SubStepper from "@/components/steppers/SubStepper";
import useStepperType from "hooks/useStepperType";

type Props = {};

const Sidebar = (props: Props) => {
  const { steps } = useCreateItinerary(
    (state) => ({ steps: state.steps }),
    shallow
  );

  const TopDashedCorner = () => {
    const color = steps[0].active ? "border-primary" : "border-slate-500";

    return (
      <div
        className={`border-dashed border-t-[3px] border-r-[3px] ${color} rounded-tr-[38px] h-[130px] w-[52px] absolute left-0`}></div>
    );
  };

  const BottomDashedStraight = () => {
    const { done, active, locked } = steps[steps.length - 1];
    const [type] = useStepperType({ done, active, locked });

    let color = "border-slate-200";

    switch (type) {
      case "default":
        color = "border-slate-200";
        break;

      case "current":
        color = "border-slate-500";
        break;

      case "done":
        color = "border-primary";
        break;

      case "error":
        color = "border-slate-200";
        break;
    }
    console.log(type);

    return (
      <div
        className={`border-dashed border-r-[3px] ${color} h-full w-[52px]  -ml-[80px]`}></div>
    );
  };

  return (
    <div className="min-w-[300px] w-[300px] bg-slate-50 h-screen border-r-slate-100 overflow-hidden">
      <div className="p-8">
        <AppLogo />
      </div>

      <div className="flex flex-col pl-20 h-[100%] items-start">
        <p className="text-2xl font-semibold pt-7">Share Your Itinerary</p>

        <TopDashedCorner />

        <div className="flex flex-col mt-6 -ml-[50px]">
          {steps.map((item) => (
            <Stepper
              key={item.no}
              number={item.no}
              active={item.active}
              done={item.done}
              locked={item.locked}
              title={item.title}>
              <>
                {item.subSteps &&
                  item.subSteps.map((subItem) => (
                    <SubStepper
                      key={subItem.no}
                      active={subItem.active}
                      done={subItem.done}
                      locked={subItem.locked}
                      className="mb-1"
                      title={subItem.title}></SubStepper>
                  ))}
              </>
            </Stepper>
          ))}
        </div>

        <BottomDashedStraight />
      </div>
    </div>
  );
};

export default Sidebar;
