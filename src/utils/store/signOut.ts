import { useUserStore } from "../../store";
import { useAuthStore } from "../../store/auth.store";

export const signOut = () => {
  useAuthStore.getState().signOut();
  useUserStore.getState().signOut();

  window.location.replace("/signIn");
};
