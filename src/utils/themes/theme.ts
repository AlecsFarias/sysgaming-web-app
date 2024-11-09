import { extendTheme } from "@mui/joy/styles";

export const theme = extendTheme({
  components: {
    JoyChip: {
      styleOverrides: {
        root: {
          borderRadius: "4px",
        },
      },
    },
  },
});
