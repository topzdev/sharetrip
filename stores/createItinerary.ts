import { DetailedPost } from "@/types/data";
import pageRoutes from "configs/pageRoutes";
import create from "zustand";
import { devtools, persist } from "zustand/middleware";

type CreateStep = {
  no: number;
  title: string;
  active: boolean;
  done: boolean;
  locked: boolean;
  to?: string;
  subSteps?:
    | (CreateStep & {
        parent: number;
      })[]
    | null;
};

interface CreateItineraryState {
  id: number;
  steps: CreateStep[];
}

export const useCreateItinerary = create<CreateItineraryState>()(
  devtools((set, get) => ({
    id: 1,
    steps: [
      {
        no: 1,
        title: "Travel Details",
        active: true,
        done: true,
        locked: false,
        to: "/travel-details/information",
        subSteps: [
          {
            parent: 1,
            no: 1,
            title: "Categories",
            active: true,
            done: false,
            locked: false,
            to: "/travel-details/categories",
          },
          {
            parent: 1,
            no: 2,
            title: "Information",
            active: false,
            done: false,
            locked: false,
            to: "/travel-details/information",
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
        to: "/photos",
      },
      {
        no: 3,
        title: "Itinerary",
        active: false,
        done: false,
        locked: true,
        subSteps: null,
        to: "/itinerary",
      },
      {
        no: 4,
        title: "Additional",
        active: false,
        done: false,
        locked: true,
        to: "/additional/tips-and-reminder",
        subSteps: [
          {
            parent: 4,
            no: 1,
            title: "Tips and Reminders",
            active: true,
            done: false,
            locked: true,
            to: "/additional/tips-and-reminder",
          },
          {
            parent: 4,
            no: 2,
            title: "Expenses",
            active: true,
            done: false,
            locked: true,
            to: "/additional/expenses",
          },
          {
            parent: 4,
            no: 3,
            title: "Tools and Apps",
            active: false,
            done: false,
            locked: true,
            to: "/additional/tools-and-apps",
          },
          {
            parent: 4,
            no: 4,
            title: "Difficulty",
            active: false,
            done: false,
            locked: true,
            to: "/additional/difficulty",
          },
        ],
      },
      {
        no: 5,
        title: "Submission",
        active: false,
        done: true,
        locked: true,
        to: "/additional/submission",
      },
    ],
  }))
);
