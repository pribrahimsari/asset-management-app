import axios from "axios";
import { GetAssetsQueryResult, GetAssetTypesQueryResult } from "src/types/ApiTypes.ts";
import { CreateAssetFormValues } from "src/types/CustomTypes.tsx";

const BASE_URL = import.meta.env.VITE_API_URL;
const API_VERSION = import.meta.env.VITE_API_VERSION;

export const getAssets = async ({ pageParam = 1, sortBy = "id-desc" }): Promise<GetAssetsQueryResult> => {
  // build the url to this format: http://....../v1/assets?page=1
  const url = new URL(`${API_VERSION}/assets`, BASE_URL);
  url.searchParams.append("page", pageParam.toString());
  url.searchParams.append("sortBy", sortBy);

  const { href: requestUrl } = url;

  return axios.get(requestUrl).then((res) => res.data);
};

export const createAsset = async ({ values }: { values: CreateAssetFormValues }) => {
  const url = new URL(`${API_VERSION}/assets`, BASE_URL);
  const { href: requestUrl } = url;

  return axios.post(requestUrl, values).then((res) => res.data);
};

export const deleteAsset = async ({ assetId }: { assetId: string }) => {
  const url = new URL(`${API_VERSION}/assets/${assetId}`, BASE_URL);
  const { href: requestUrl } = url;

  return axios.delete(requestUrl).then((res) => res.data);
};

//--------------------------

export const getAssetTypes = async (): Promise<GetAssetTypesQueryResult> => {
  // build the url to this format: http://....../v1/types
  const url = new URL(`${API_VERSION}/types`, BASE_URL);
  const { href: requestUrl } = url;

  return axios.get(requestUrl).then((res) => res.data);
};
