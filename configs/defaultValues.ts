import { CreatePhoto } from "@/types/createItinerary";

export const alertDefault = {
  show: false,
  timeout: 10000,
  message: "",
};

export const photoDefault: CreatePhoto = {
  src: null,
  width: 0,
  height: 0,
  title: "",
  description: "",
  deletable: false,
};
