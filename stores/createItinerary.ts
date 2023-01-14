import { DetailedPost } from "@/types/data";
import pageRoutes from "configs/pageRoutes";
import { stat } from "fs";
import { useRouter } from "next/router";
import create from "zustand";
import { devtools, persist } from "zustand/middleware";

type CreateStep = {
  no: number;
  parent?: number;
  title: string;
  active: boolean;
  done: boolean;
  locked: boolean;
  to: string;
  subSteps?: CreateStep[] | null;
};

interface CreateItineraryState {
  id: number;
  steps: CreateStep[];
  computed: {
    mergeSteps: CreateStep[];
    currentStep: CreateStep & {
      prev?: CreateStep | null;
      next?: CreateStep | null;
    };
  };
  actions: {
    next: () => void;
    back: () => void;
  };
}

export const useCreateItinerary = create<CreateItineraryState>()(
  (set, get) => ({
    id: 1,
    steps: [
      {
        no: 1,
        title: "Travel Details",
        active: true,
        done: false,
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
          {
            parent: 1,
            no: 3,
            title: "Photos",
            active: false,
            done: false,
            locked: false,
            to: "/photos",
          },
          {
            parent: 1,
            no: 4,
            title: "Itinerary",
            active: false,
            done: false,
            locked: true,
            to: "/itinerary",
          },
        ],
      },

      {
        no: 2,
        title: "Additional",
        active: false,
        done: false,
        locked: true,
        to: "/additional/tips-and-reminder",
        subSteps: [
          {
            parent: 2,
            no: 1,
            title: "Tips and Reminders",
            active: false,
            done: false,
            locked: true,
            to: "/additional/tips-and-reminder",
          },
          {
            parent: 2,
            no: 2,
            title: "Expenses",
            active: false,
            done: false,
            locked: true,
            to: "/additional/expenses",
          },
          {
            parent: 2,
            no: 3,
            title: "Tools and Apps",
            active: false,
            done: false,
            locked: true,
            to: "/additional/tools-and-apps",
          },
          {
            parent: 2,
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
        no: 3,
        title: "Submission",
        active: false,
        done: false,
        locked: true,
        to: "/additional/submission",

        subSteps: [
          {
            parent: 3,
            no: 1,
            title: "Preview",
            active: false,
            done: false,
            locked: true,
            to: "/submission/preview",
          },
          {
            parent: 3,
            no: 2,
            title: "Final",
            active: false,
            done: false,
            locked: true,
            to: "/submission/final",
          },
        ],
      },
    ],

    computed: {
      get currentStep() {
        let prev = null;
        let next = null;
        let cur = null;
        const mergeSteps = get().computed.mergeSteps;

        let i = 0;
        while (mergeSteps[i].done) {
          i++;
        }

        prev = mergeSteps[i - 1];
        cur = mergeSteps[i];
        next = mergeSteps[i + 1];

        return {
          ...cur,
          next,
          prev,
        };
      },

      get mergeSteps() {
        return get().steps.reduce<CreateStep[]>((prev, cur) => {
          if (cur.subSteps) {
            return [...prev, ...cur.subSteps];
          }
          return [...prev];
        }, []);
      },
    },

    actions: {
      next: () =>
        set((state) => {
          const cur = state.computed.currentStep;
          const next = cur.next;

          if (cur.parent) {
            const parent = state.steps[cur.parent - 1];
            const parentNext = state.steps[cur.parent];

            if (parent?.subSteps) {
              parent.subSteps[cur.no - 1].done = true;
              parent.subSteps[cur.no - 1].locked = false;

              if (next) {
                parent.subSteps[next.no - 1].active = true;
                parent.subSteps[next.no - 1].locked = false;
              }
            }

            if (next?.parent != cur?.parent) {
              parent.done = true;
              parent.locked = false;
              parentNext.active = true;
              parentNext.locked = false;

              if (parentNext.subSteps && parentNext.subSteps.length) {
                parentNext.subSteps[0].active = true;
                parentNext.subSteps[0].locked = false;
              }
            }

            return {
              steps: state.steps.map((item) => {
                if (item.no === parent.no) {
                  return parent;
                }

                if (parentNext && parentNext.no === item.no) {
                  return parentNext;
                }
                return item;
              }),
            };
          }

          return state;
        }),
      back: () =>
        set((state) => {
          const cur = state.computed.currentStep;
          const prev = cur.prev;

          if (cur.parent) {
            const parent = state.steps[cur.parent - 1];
            const parentPrev = state.steps[cur.parent];

            if (parent.subSteps) {
              parent.subSteps[cur.no - 1].active = false;

              if (prev) {
                parent.subSteps[prev.no - 1].active = true;
              }
            }

            return {
              steps: state.steps.map((item) => {
                if (item.no === parent.no) {
                  return parent;
                }

                if (parentPrev && parentPrev.no === item.no) {
                  return parentPrev;
                }
                return item;
              }),
            };
          }

          return state;
        }),
    },
  })
);
