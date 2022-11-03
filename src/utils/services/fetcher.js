import axios from "axios";

export const fetcher = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_BASEURL,
});
