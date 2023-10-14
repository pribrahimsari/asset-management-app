import axios from "axios";
import { GetAssetsQueryResult } from "src/types/ApiTypes.ts";

const BASE_URL = import.meta.env.VITE_API_URL;
const API_VERSION = import.meta.env.VITE_API_VERSION;

export const getAssets = async ({ pageParam = 1 }): Promise<GetAssetsQueryResult> => {
  // build the url to this format: http://....../v1/assets?page=1
  const url = new URL(`${API_VERSION}/assets`, BASE_URL);
  url.searchParams.append("page", pageParam.toString());
  const { href: requestUrl } = url;

  return axios.get(requestUrl).then((res) => res.data);
};

export const createAsset = async () => {
  const url = new URL(`${API_VERSION}/assets`, BASE_URL);
  const { href: requestUrl } = url;

  // todo: move this to the param
  const assetData = {
    name: "Hey, I'm new",
    description: "This desc is new",
    type_id: 21,
    priority: "Medium",
    addition_time: "2023-12-15 23:59:59",
  };

  return axios.post(requestUrl, assetData).then((res) => res.data);
};

export const deleteAsset = async ({ assetId }: { assetId: string }) => {
  const url = new URL(`${API_VERSION}/assets/${assetId}`, BASE_URL);
  const { href: requestUrl } = url;

  return axios.delete(requestUrl).then((res) => res.data);
};
