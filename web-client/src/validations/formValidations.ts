import * as Yup from "yup";

export const createAssetFormSchema = Yup.object().shape({
  name: Yup.string().required(),
  description: Yup.string().notRequired(),
  type_id: Yup.string().required(),
  addition_time: Yup.date().notRequired(),
  priority: Yup.mixed().oneOf(["Low", "Medium", "High"]).required(),
});
