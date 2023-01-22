import * as yup from "yup";

export const categoriesSchema = yup.object({
  categories: yup.array().max(5).min(1),
});
