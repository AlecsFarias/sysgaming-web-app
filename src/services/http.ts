import axios from "axios";
import { useAuthStore } from "../store";
import { variables } from "../utils";

export const http = axios.create({
  baseURL: variables.backendUrl,
  timeout: variables.backendTimeout,
});

http.interceptors.request.use(
  async (config) => {
    const { token } = useAuthStore.getState();
    config.headers.set("Authorization", `Bearer ${token}`);
    return config;
  },
  (error) => Promise.reject(error)
);
