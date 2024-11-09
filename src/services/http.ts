import axios from "axios";
import { useAuthStore } from "../store";

export const http = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 1000 * 5, //5 seconds,
});

http.interceptors.request.use(
  async (config) => {
    const { token } = useAuthStore.getState();
    config.headers.set("Authorization", `Bearer ${token}`);
    return config;
  },
  (error) => Promise.reject(error)
);
