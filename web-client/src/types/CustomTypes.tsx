export type CreateAssetFormValues = {
  name: string;
  description?: string;
  type_id: string | number;
  addition_time?: string;
  priority: "" | "Low" | "Medium" | "High";
};
