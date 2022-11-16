import axios from "axios";

export const fetcher = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_BASEURL,
});

export const createFetcher = () => {
  return axios.create({
    baseURL: import.meta.env.VITE_BACKEND_BASEURL,
    headers: {
      authorization: "Bearer " + localStorage.getItem("accessToken"),
    },
  });
};
