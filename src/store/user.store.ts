import { create } from "zustand";
import { persist } from "zustand/middleware";
import { variables } from "../utils/variables";
import { User } from "../utils/@types/User";

interface UserStore {
  user?: User;
  setUser: (user: User) => void;
  updateBalance: (balance: number) => void;
  signOut: () => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      user: undefined,
      setUser: (user: User) => set({ user }),
      updateBalance: (balance: number) => {
        const user = get().user;

        set({
          user: user ? { ...user, balance } : undefined,
        });
      },
      signOut: () => set({ user: undefined }),
    }),
    {
      name: variables.stores.user,
    }
  )
);
