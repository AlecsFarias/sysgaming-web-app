import { create } from "zustand";
import { persist } from "zustand/middleware";
import { variables } from "../utils/variables";

interface AuthStore {
  id?: string;
  authenticate: (id: string) => void;
  isAuthenticated: () => boolean;
  signOut: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      id: undefined,
      authenticate: (id: string) => set({ id }),
      isAuthenticated: () => !!get().id,
      signOut: () => set({ id: undefined }),
    }),
    {
      name: variables.stores.auth,
    }
  )
);
