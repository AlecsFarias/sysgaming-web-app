import { CssBaseline, CssVarsProvider } from "@mui/joy";
import { theme } from "../../utils/themes/theme";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { SnackbarProvider } from "notistack";
import { variables } from "../../utils/variables";

type ProvidersProps = {
  children: React.ReactNode;
};

const queryClient = new QueryClient();

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
        {children}
      </CssVarsProvider>
    </QueryClientProvider>
  );
};