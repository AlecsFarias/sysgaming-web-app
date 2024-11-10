import { Option, Select } from "@mui/joy";
import { useTranslation } from "react-i18next";
import { useTranslationStore } from "../../store";
import { useEffect } from "react";

const lngs = {
  en: "English",
  pt: "Português",
  es: "Espanhol",
};

export const LanguageSwitch = () => {
  const { i18n } = useTranslation();
  const { lng, setLng } = useTranslationStore();

  const changeTranslation = (_: any, value: any) => {
    setLng(value);
  };

  useEffect(() => {
    setTimeout(() => i18n.changeLanguage(lng));
  }, [i18n, lng]);

  return (
    <Select
      onChange={changeTranslation}
      defaultValue={lng}
      sx={{
        width: "100%",
      }}
    >
      {Object.entries(lngs).map(([value, label]) => (
        <Option value={value}>{label}</Option>
      ))}
    </Select>
  );
};
