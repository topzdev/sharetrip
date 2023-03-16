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
  id?: number | string;
  src: string | ArrayBuffer | null;
  width: number;
  height: number;
  title: string;
  description: string;
  deletable: boolean;
};

export type ItineraryInfo = {
  id: number;
  locations: string;
  title: string;
  description: string;
  stopsCount: number;
  tipsCount: number;
  spentAmount: number;
  imageCount: number;
  image: string;
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
  itineraries: ItineraryInfo[];
};

export type PhotoPreviewType = "full" | "main" | "post" | "default";
