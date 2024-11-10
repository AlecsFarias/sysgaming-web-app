import { useTranslation as useT } from "react-i18next";
import { TranslationKeys } from "../i18n/translations";

export const useTranslation = () => {
  const { t } = useT();

  const translate = (key: TranslationKeys) => {
    return t(key);
  };

  return {
    translate,
  };
};
