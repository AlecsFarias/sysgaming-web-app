import { Box } from "@mui/joy";
import { Outlet } from "react-router-dom";
import { Header, Sidebar } from "./components";
import { useBalanceSocket } from "../../utils";

export const AuthenticatedLayout = () => {
  useBalanceSocket();

  return (
    <Box sx={{ display: "flex", minHeight: "100dvh" }}>
      <Header />
      <Sidebar />
      <Box
        component="main"
        className="MainContent"
        sx={{
          overflowY: "scroll",
          px: { xs: 2, md: 6 },
          pt: {
            xs: "calc(12px + var(--Header-height))",
            sm: "calc(12px + var(--Header-height))",
            md: 3,
          },
          pb: { xs: 2, sm: 2, md: 3 },
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
          height: "100dvh",
          gap: 1,
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};
