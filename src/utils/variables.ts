export const variables = {
  backendUrl: import.meta.env.VITE_BACKEND_REST_URL,
  backendSocketUrl: import.meta.env.VITE_BACKEND_WS_URL,
  backendTimeout: 1000 * 5, //5 seconds
  snackbarTimeout: 1000 * 3, // 3 seconds
  maxSnackbars: 3,
  stores: {
    auth: "sysgaming-auth",
    user: "sysgaming-user",
    tranlation: "sysgaming-tranlation",
  },
};
