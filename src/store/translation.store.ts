import { create } from "zustand";
import { persist } from "zustand/middleware";
import { variables } from "../utils/variables";

interface TranslationStore {
  lng: "pt" | "en" | "es";
  setLng: (lng: "pt" | "en" | "es") => void;
}

export const useTranslationStore = create<TranslationStore>()(
  persist(
    (set) => ({
      lng: "pt",
      setLng: (lng) => set({ lng }),
    }),
    {
      name: variables.stores.tranlation,
    }
  )
);
