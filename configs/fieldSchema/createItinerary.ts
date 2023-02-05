import * as yup from "yup";

// const createItineraryFieldSchema = {
//   categories: {
//     label: "Categories",
//     placeholder: "When this travel occur",
//     id: "title",
//     name: "title",
//     defaultValue: "",
//     validator: yup.array().max(5).min(1),
//   },

//   title: {
//     label: "Title",
//     placeholder: "Name your travel creatively and meaningful",
//     id: "title",
//     name: "title",
//     defaultValue: "",
//     validator: yup.string().required().max(60).label("Title"),
//   },

//   introduction: {
//     label: "Introduction",
//     placeholder: "Describe your experience in few words",
//     id: "introduction",
//     name: "introduction",
//     defaultValue: "",
//     validator: yup.string().required().max(1000).label("Introduction"),
//   },

//   travelPeriod: {
//     label: "Travel Period",
//     placeholder: "When this travel occur?",
//     id: "travelPeriod",
//     name: "travelPeriod",
//     defaultValue: "",
//     validator: yup.object({
//       endDate: yup.date().required().label("End Date"),
//       startDate: yup.date().required().label("Start Date"),
//     }),
//   },
// };

export const photosSchema = yup.object({
  photos: yup.array().max(20).min(5),
});

export const categoriesSchema = yup.object({
  categories: yup.array().max(5).min(1),
});

export const informationSchema = yup.object({
  travelPeriod: yup.object({
    endDate: yup.date().required().label("End Date"),
    startDate: yup.date().required().label("Start Date"),
  }),
  title: yup.string().required().max(60).label("Title"),
  introduction: yup.string().required().max(1000).label("Introduction"),
});
