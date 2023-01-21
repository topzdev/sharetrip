import { makeAutoObservable } from "mobx";

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

type CreateStepForm = {
  categories: number[];
};

class CreateItineraryStore {
  id: number = 1;
  currentStep: number = 0;
  categories: CreateStepForm["categories"] = [];
  steps: CreateStep[] = [
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
          to: "/travel-details/photos",
        },
        {
          parent: 1,
          no: 4,
          title: "Itinerary",
          active: false,
          done: false,
          locked: true,
          to: "/travel-details/itinerary",
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
          title: "Review",
          active: false,
          done: false,
          locked: true,
          to: "/submission/review",
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
  ];

  constructor() {
    makeAutoObservable(this);
  }

  get current() {
    let prev = null,
      next = null,
      cur = null,
      parent = null;
    const mergeSteps = this.mergeSteps;

    prev = mergeSteps[this.currentStep - 1];
    cur = mergeSteps[this.currentStep];
    next = mergeSteps[this.currentStep + 1];

    if (cur && cur.parent) {
      parent = JSON.parse(JSON.stringify(this.steps[cur.parent - 1]));
      delete parent.subSteps;
    }

    return {
      prev,
      ...cur,
      next,
      parent,
    };
  }

  get mergeSteps() {
    return this.steps.reduce<CreateStep[]>((prev, cur) => {
      if (cur.subSteps) {
        return [...prev, ...cur.subSteps];
      }
      return [...prev];
    }, []);
  }

  next() {
    const { currentStep } = this;

    if (currentStep >= this.mergeSteps.length) return;

    this.currentStep++;
  }

  back() {
    const { currentStep } = this;
    if (currentStep < 0) return;
    this.currentStep--;
  }
}

const createItineraryStore = new CreateItineraryStore();

export default createItineraryStore;
