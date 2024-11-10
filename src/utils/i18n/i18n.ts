import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { pt, en, es } from "./translations";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "pt",
  resources: {
    en: {
      translation: en,
    },
    pt: {
      translation: pt,
    },
    es: {
      translation: es,
    },
  },
});

export default i18n;
