import pageRoutes from "@/configs/pageRoutes";
import { CreateStep, CreateItineraryForm } from "@/types/createItinerary";
import { reverse } from "dns";
import { makeAutoObservable } from "mobx";

class CreateItineraryStore {
  currentStep: number = 0;
  categories: CreateItineraryForm["categories"] = [];
  loading: boolean = false;
  steps: CreateStep[] = [
    (() => {
      const currentPage = pageRoutes.create().subpages.travelDetails;
      const { categories, information, photos, itinerary } =
        currentPage.subPages;

      return {
        no: 1,
        title: currentPage.title,
        active: true,
        done: false,
        locked: false,
        to: categories.raw,
        subSteps: [
          {
            parent: 1,
            no: 1,
            title: categories.title,
            active: true,
            done: false,
            locked: false,
            to: categories.raw,
          },
          {
            parent: 1,
            no: 2,
            title: information.title,
            active: false,
            done: false,
            locked: false,
            to: information.raw,
          },
          {
            parent: 1,
            no: 3,
            title: photos.title,
            active: false,
            done: false,
            locked: false,
            to: photos.raw,
          },
          {
            parent: 1,
            no: 4,
            title: itinerary.title,
            active: false,
            done: false,
            locked: true,
            to: itinerary.raw,
          },
        ],
      };
    })(),

    (() => {
      const currentPage = pageRoutes.create().subpages.additional;
      const { difficulty, expenses, tipsReminder, toolsApps } =
        currentPage.subPages;

      return {
        no: 2,
        title: currentPage.title,
        active: false,
        done: false,
        locked: true,
        to: tipsReminder.raw,
        subSteps: [
          {
            parent: 2,
            no: 1,
            title: tipsReminder.title,
            active: false,
            done: false,
            locked: true,
            to: tipsReminder.raw,
          },
          {
            parent: 2,
            no: 2,
            title: expenses.title,
            active: false,
            done: false,
            locked: true,
            to: expenses.raw,
          },
          {
            parent: 2,
            no: 3,
            title: toolsApps.title,
            active: false,
            done: false,
            locked: true,
            to: toolsApps.raw,
          },
          {
            parent: 2,
            no: 4,
            title: difficulty.title,
            active: false,
            done: false,
            locked: true,
            to: difficulty.raw,
          },
        ],
      };
    })(),
    (() => {
      const currentPage = pageRoutes.create().subpages.submission;
      const { final, review } = currentPage.subPages;

      return {
        no: 3,
        title: currentPage.title,
        active: false,
        done: false,
        locked: true,
        to: review.raw,

        subSteps: [
          {
            parent: 3,
            no: 1,
            title: review.title,
            active: false,
            done: false,
            locked: true,
            to: review.raw,
          },
          {
            parent: 3,
            no: 2,
            title: final.title,
            active: false,
            done: false,
            locked: true,
            to: final.raw,
          },
        ],
      };
    })(),
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
      parent = Object.assign({}, this.steps[cur.parent - 1]);
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

  get progress() {
    return ((this.currentStep + 1) / this.mergeSteps.length) * 100;
  }

  setLoading(load: boolean) {
    this.loading = load;
  }

  setCurrentStep(stepIdx: number) {
    if (!this.mergeSteps[stepIdx].locked) {
      this.currentStep = stepIdx;
    } else {
      this.currentStep = 0;
    }
  }

  next() {
    if (this.currentStep >= this.mergeSteps.length) return;

    this.mergeSteps[this.currentStep].done = true;
    this.currentStep++;
    this.mergeSteps[this.currentStep].locked = false;
  }

  back() {
    if (this.currentStep < 0) return;
    this.currentStep--;
  }

  checkSubItemActive(to: string) {
    return this.current.to === to;
  }

  checkActive(index: number) {
    return this.steps[index].no === this.current.parent?.no;
  }

  checkCompleted(index: number) {
    return this.steps[index].subSteps?.every((item) => item.done) || false;
  }

  checkLocked(index: number) {
    return this.steps[index].subSteps?.every((item) => item.locked) || false;
  }

  setCategories(categories: CreateItineraryForm["categories"]) {
    this.categories = categories;
  }
}

const createItineraryStore = new CreateItineraryStore();

export default createItineraryStore;
