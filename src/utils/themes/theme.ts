import { extendTheme } from "@mui/joy/styles";

export const theme = extendTheme({
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
