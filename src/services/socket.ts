import io from "socket.io-client"; // Import the socket.io client library
import { variables } from "../utils";
import { useAuthStore } from "../store";

export const socket = io(variables.backendSocketUrl, {
  reconnectionDelayMax: 1000,
  auth: {
    token: useAuthStore.getState().token,
  },
});
