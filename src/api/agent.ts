// Axios agent infrastructure. Ported (trimmed to the auth surface) from the
// reference repo's src/utils/api/agent.ts. Only the userApiClient is wired here
// because authStore is the only store copied into core-web (see CLAUDE.md).
import axios, { AxiosResponse, AxiosError } from "axios";
import { PaginatedResult } from "../models/common";
import { getSupabase } from "../supabase";
import { getConfig } from "../config";
import { userApiClient } from "./userApiClient";
import { locationApiClient } from "./locationApiClient";
import { notificationApiClient } from "./notificationApiClient";
import { messageApiClient } from "./messageApiClient";
import { subscriptionApiClient } from "./subscriptionApiClient";
import { exploreApiClient } from "./exploreApiClient";
import { productApiClient } from "./productApiClient";

export const axiosResponseBody = (res: AxiosResponse) => res.data;

export const axiosRequests = {
  get: <T>(url: string) => axios.get<T>(url).then(axiosResponseBody),
  post: <T>(url: string, body: {}, options?: {}) =>
    axios.post<T>(url, body, options).then(axiosResponseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(axiosResponseBody),
  patch: <T>(url: string, body: {}) => axios.patch<T>(url, body).then(axiosResponseBody),
  del: <T>(url: string) => axios.delete<T>(url).then(axiosResponseBody),
};

// Set baseURL from runtime config + attach jwt from supabase, per request.
axios.interceptors.request.use(async (config) => {
  config.baseURL = getConfig().apiBaseUrl;

  const { data } = await getSupabase().auth.getSession();
  const token = data.session?.access_token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

axios.interceptors.response.use(
  async (response) => {
    const pagination = response.headers["pagination"];
    if (pagination) {
      response.data = new PaginatedResult(response.data, JSON.parse(pagination));
      return response as AxiosResponse<PaginatedResult<any>>;
    }
    return response;
  },
  (error: AxiosError) => {
    const myResponse = error.response as AxiosResponse;
    if (!myResponse?.status) {
      return Promise.reject("Error");
    }

    switch (myResponse.status) {
      case 400:
        console.log("Bad request");
        break;
      case 401:
        console.log("Authorization Error");
        break;
      case 403:
        console.log("Forbidden");
        break;
      case 404:
        console.log("Not found");
        break;
      case 500:
        console.log("Server error");
        break;
      default:
        console.log("A unique issue.");
        break;
    }

    return Promise.reject(error);
  }
);

const agent = {
  userApiClient,
  subscriptionApiClient,
  productApiClient,
  notificationApiClient,
  messageApiClient,
  locationApiClient,
  exploreApiClient
};

export default agent;
