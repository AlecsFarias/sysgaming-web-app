import { extendTheme } from "@mui/joy/styles";

export const lightTheme = extendTheme({
  components: {
    JoyChip: {
      defaultProps: {
        size: "sm",
      },
      styleOverrides: {
        root: {
          borderRadius: "4px",
        },
      },
    },
  },
});
