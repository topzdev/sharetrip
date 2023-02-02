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

export type CreatePhoto = {
  id: number;
  is_main_cover: boolean;
  is_post_cover: boolean;
  src: string;
  width: number;
  height: number;
  title: string;
  description: string;
  deletable: boolean;
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
  photos: CreatePhoto[];
};
