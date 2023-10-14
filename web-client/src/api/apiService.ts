import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;
const API_VERSION = import.meta.env.VITE_API_VERSION;

export const getAssets = async ({ pageParam = 1 }) => {
  // build the url to this format: http://....../v1/assets?page=1
  const url = new URL(`${API_VERSION}/assets`, BASE_URL);
  url.searchParams.append("page", pageParam.toString());
  const { href: requestUrl } = url;

  return axios.get(requestUrl).then((res) => res.data);
};
