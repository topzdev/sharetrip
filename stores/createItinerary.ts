import { DetailedPost } from "@/types/data";
import create from "zustand";
import { devtools, persist } from "zustand/middleware";

type CreateStep = {
  no: number;
  title: string;
  active: boolean;
  done: boolean;
  locked: boolean;
  subSteps?:
    | (CreateStep & {
        parent: number;
      })[]
    | null;
};

interface CreateItineraryState {
  steps: CreateStep[];
}

export const useCreateItinerary = create<CreateItineraryState>()(
  devtools((set) => ({
    steps: [
      {
        no: 1,
        title: "Travel Details",
        active: true,
        done: true,
        locked: false,
        subSteps: [
          {
            parent: 1,
            no: 1,
            title: "Categories",
            active: true,
            done: false,
            locked: false,
          },
          {
            parent: 1,
            no: 2,
            title: "Information",
            active: false,
            done: false,
            locked: false,
          },
        ],
      },
      {
        no: 2,
        title: "Photos",
        active: true,
        done: false,
        locked: false,
        subSteps: null,
      },
      {
        no: 3,
        title: "Itinerary",
        active: false,
        done: false,
        locked: true,
        subSteps: null,
      },
      {
        no: 4,
        title: "Additional",
        active: false,
        done: false,
        locked: true,
        subSteps: [
          {
            parent: 4,
            no: 1,
            title: "Tips and Reminders",
            active: true,
            done: false,
            locked: true,
          },
          {
            parent: 4,
            no: 2,
            title: "Expenses",
            active: true,
            done: false,
            locked: true,
          },
          {
            parent: 4,
            no: 3,
            title: "Tools and Apps",
            active: false,
            done: false,
            locked: true,
          },
          {
            parent: 4,
            no: 4,
            title: "Difficulty",
            active: false,
            done: false,
            locked: true,
          },
        ],
      },
      {
        no: 5,
        title: "Submission",
        active: false,
        done: true,
        locked: true,
      },
    ],
  }))
);
