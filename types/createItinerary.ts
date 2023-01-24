export type CreateStep = {
  no: number;
  parent?: number;
  title: string;
  active: boolean;
  done: boolean;
  locked: boolean;
  to: string;
  subSteps?: CreateStep[] | null;
};

export type CreateItineraryForm = {
  categories: number[];
  information: {
    travelPeriod: {
      startDate: Date | null;
      endDate: Date | null;
    };
    title: string;
    introduction: string;
  };
};
