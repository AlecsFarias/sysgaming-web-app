import { Avatar, Box, IconButton, Typography } from "@mui/joy";

import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { signOut } from "../../../../../../utils/store";
import { useUserStore } from "../../../../../../store";

export const Profile = () => {
  const name = useUserStore((state) => state.user?.name);

  return (
    <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
      <Avatar variant="outlined" size="sm" />
      <Box sx={{ minWidth: 0, flex: 1, overflow: "hidden" }}>
        <Typography level="title-sm">{name}</Typography>
      </Box>
      <IconButton size="sm" variant="plain" color="neutral" onClick={signOut}>
        <LogoutRoundedIcon />
      </IconButton>
    </Box>
  );
};
