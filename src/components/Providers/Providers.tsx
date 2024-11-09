import { CssBaseline, CssVarsProvider, GlobalStyles } from "@mui/joy";
import { theme } from "../../utils/themes/theme";
import React from "react";
import { QueryClientProvider } from "react-query";
import { SnackbarProvider } from "notistack";
import { variables } from "../../utils/variables";
import { queryClient } from "../../utils";

type ProvidersProps = {
  children: React.ReactNode;
};

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <CssVarsProvider theme={theme}>
        <SnackbarProvider
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          maxSnack={variables.maxSnackbars}
          autoHideDuration={variables.snackbarTimeout}
        />
        <CssBaseline />
        <GlobalStyles
          styles={(theme) => ({
            ":root": {
              "--Sidebar-width": "220px",
              [theme.breakpoints.up("lg")]: {
                "--Sidebar-width": "240px",
              },
            },
          })}
        />
        {children}
      </CssVarsProvider>
    </QueryClientProvider>
  );
};
