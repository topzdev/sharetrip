import MainLayout from "@/components/layout/main";
import Stepper from "@/components/steppers/Stepper";
import SubStepper from "@/components/steppers/SubStepper";
import React, { ReactElement } from "react";

type Props = {};

const StepperPage = (props: Props) => {
  return (
    <div className="container mx-auto">
      <div className="d-flex grid grid-cols-5">
        <div>
          <p>default</p>
          <Stepper number={1} title={"Travel Details"} />
        </div>

        <div>
          <p>Current</p>
          <Stepper number={1} title={"Travel Details"} type="current" />
        </div>
        <div>
          <p>Done</p>
          <Stepper number={1} title={"Travel Details"} type="done" />
        </div>
        <div>
          <p>Error</p>
          <Stepper number={1} title={"Travel Details"} type="error" />
        </div>
        <div>
          <p>Locked</p>
          <Stepper number={1} title={"Travel Details"} type="lock" />
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-lg font-bold">With Sub Stepper</h2>

        <Stepper number={1} title={"Travel Details"}>
          <>
            <SubStepper title={"Default"} />
            <SubStepper title={"Current"} type="current" />
            <SubStepper title={"Done"} type="done" />
            <SubStepper title={"Error"} type="error" />
            <SubStepper title={"Lock"} type="lock" />
          </>
        </Stepper>
      </div>
    </div>
  );
};

StepperPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout navbarFixed={false}>{page}</MainLayout>;
};

export default StepperPage;
