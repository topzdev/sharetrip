import AppLogo from "@/components/layout/common/AppLogo";
import Stepper from "@/components/steppers/Stepper";
import SubStepper from "@/components/steppers/SubStepper";
import useCreateItineraryPageInfo from "@/hooks/useCreateItineraryPageInfo";
import useStepperType from "hooks/useStepperType";
import { observer } from "mobx-react-lite";
import createItineraryStore from "stores/createItinerary";

type Props = {};

const TopDashedCorner = observer(() => {
  const color = createItineraryStore.steps[0].active
    ? "border-primary"
    : "border-slate-500";

  return (
    <div
      className={`border-dashed border-t-[3px] border-r-[3px] ${color} rounded-tr-[38px] h-[119px] w-[52px] absolute left-0`}></div>
  );
});

const BottomDashedStraight = observer(() => {
  const lastIndex = createItineraryStore.steps.length - 1;
  const active = createItineraryStore.checkActive(lastIndex);
  const done = createItineraryStore.checkCompleted(lastIndex);
  const locked = createItineraryStore.checkLocked(lastIndex);

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
});

const Sidebar = (props: Props) => {
  const steps = createItineraryStore.steps;
  const { generateBaseLink } = useCreateItineraryPageInfo();

  return (
    <div className="min-w-[300px] w-[300px] bg-slate-50 h-screen border-r-slate-100 overflow-hidden">
      <div className="p-8">
        <AppLogo />
      </div>

      <div className="flex flex-col pl-20 h-[100%] items-start">
        <p className="text-2xl font-semibold pt-7">Share Your Itinerary</p>

        <TopDashedCorner />

        <div className="flex flex-col mt-6 -ml-[50px]">
          {steps.map((item, idx) => (
            <Stepper
              key={item.no}
              number={item.no}
              active={createItineraryStore.checkActive(idx)}
              done={createItineraryStore.checkCompleted(idx)}
              locked={createItineraryStore.checkLocked(idx)}
              title={item.title}
              to={generateBaseLink(item.to)}>
              <>
                {item.subSteps &&
                  item.subSteps.map((subItem) => (
                    <SubStepper
                      key={subItem.no}
                      active={createItineraryStore.checkSubItemActive(
                        subItem.to
                      )}
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
