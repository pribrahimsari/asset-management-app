import { assetSortOptions } from "src/data/constants.ts";

export type CreateAssetFormValues = {
  name: string;
  description?: string;
  type_id: string | number;
  addition_time?: string;
  priority: "" | "Low" | "Medium" | "High";
};

export type AssetSortOptionsTypes = keyof typeof assetSortOptions;
