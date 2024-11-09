import { useAuthStore } from "../../store/auth.store";

export const signOut = () => {
  useAuthStore.getState().signOut();
};
