import { useColorScheme } from "@mui/joy";
import { useEffect, useState } from "react";

export const useThemeButton = () => {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggle = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return {
    mode,
    mounted,
    toggle,
  };
};
