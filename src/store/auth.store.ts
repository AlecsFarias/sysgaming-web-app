import { create } from "zustand";
import { persist } from "zustand/middleware";
import { variables } from "../utils/variables";

interface AuthStore {
  token?: string;
  authenticate: (id: string) => void;
  isAuthenticated: () => boolean;
  signOut: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      token: undefined,
      authenticate: (token: string) => set({ token }),
      isAuthenticated: () => !!get().token,
      signOut: () => set({ token: undefined }),
    }),
    {
      name: variables.stores.auth,
    }
  )
);
