import { stat } from "fs";
import React, { useCallback, useEffect } from "react";
import AppLogo from "../AppLogo";
import Stepper from "@/components/steppers/Stepper";
import SubStepper from "@/components/steppers/SubStepper";
import useStepperType from "hooks/useStepperType";
import pageRoutes from "configs/pageRoutes";
import { useRouter } from "next/router";
import { observer } from "mobx-react-lite";
import createItineraryStore from "stores/createItinerary";

type Props = {};

const Sidebar = (props: Props) => {
  const router = useRouter();
  const steps = createItineraryStore.steps;
  const itineraryId = createItineraryStore.id;
  const current = createItineraryStore.current;

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

    return (
      <div
        className={`border-dashed border-r-[3px] ${color} h-full w-[52px]  -ml-[80px]`}></div>
    );
  };

  const generateBaseLink = (to?: string) => {
    return to ? pageRoutes.create(itineraryId).to + to : undefined;
  };

  useEffect(() => {
    if (current.to) {
      const link = generateBaseLink(current.to);
      if (link) router.push(link);
    }
  }, [current.to]);

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
              title={item.title}
              to={generateBaseLink(item.to)}>
              <>
                {item.subSteps &&
                  item.subSteps.map((subItem) => (
                    <SubStepper
                      key={subItem.no}
                      active={subItem.active}
                      done={subItem.done}
                      locked={subItem.locked}
                      className="mb-1"
                      to={generateBaseLink(subItem.to)}
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

export default observer(Sidebar);
