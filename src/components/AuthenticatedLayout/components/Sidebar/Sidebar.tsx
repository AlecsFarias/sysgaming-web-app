import React from "react";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  Typography,
  Sheet,
} from "@mui/joy";

import { listItemButtonClasses } from "@mui/joy/ListItemButton";

import { HomeRounded, Flag, Money } from "@mui/icons-material";
import { ThemeButton } from "../../../ThemeButton";

import logo from "../../../../assets/logo.webp";
import { Item, ItemProps, Profile } from "./components";
import { closeSidebar, useTranslation } from "../../../../utils";
import { LanguageSwitch } from "../../../LanguageSwitch";

export const Sidebar: React.FC = () => {
  const { translate } = useTranslation();

  const routes: Array<ItemProps & { key: string }> = [
    {
      key: "home",
      name: translate("authenticated.layout.items.home"),
      route: "/home",
      icon: <HomeRounded />,
    },
    {
      key: "transactions",
      name: translate("authenticated.layout.items.transactions"),
      route: "/transactions",
      icon: <Money />,
    },
  ];

  return (
    <Sheet
      className="Sidebar"
      sx={{
        position: { xs: "fixed", md: "sticky" },
        transform: {
          xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))",
          md: "none",
        },
        transition: "transform 0.4s, width 0.4s",
        zIndex: 10000,
        height: "100dvh",
        width: "var(--Sidebar-width)",
        top: 0,
        p: 2,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        borderRight: "1px solid",
        borderColor: "divider",
      }}
    >
      <Box
        className="Sidebar-overlay"
        sx={{
          position: "fixed",
          zIndex: 9998,
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          opacity: "var(--SideNavigation-slideIn)",
          backgroundColor: "var(--joy-palette-background-backdrop)",
          transition: "opacity 0.4s",
          transform: {
            xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))",
            lg: "translateX(-100%)",
          },
        }}
        onClick={() => closeSidebar()}
      />
      <Box
        sx={{
          display: "flex",
          gap: 1,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box display={"flex"} alignItems={"center"} gap={1}>
          <img src={logo} alt="SysGaming" style={{ height: 25 }} />
          <Typography level="title-lg">SysGaming</Typography>
        </Box>
        <ThemeButton />
      </Box>

      <Box
        sx={{
          minHeight: 0,
          mt: 2,
          overflow: "hidden auto",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          [`& .${listItemButtonClasses.root}`]: {
            gap: 1.5,
          },
        }}
      >
        <List
          size="sm"
          sx={{
            gap: 1,
            "--List-nestedInsetStart": "30px",
            "--ListItem-radius": (theme) => theme.vars.radius.sm,
          }}
        >
          {routes.map((route) => (
            <Item {...route} />
          ))}
        </List>

        <List
          size="sm"
          sx={{
            mt: "auto",
            flexGrow: 0,
            "--ListItem-radius": (theme) => theme.vars.radius.sm,
            mb: 0,
          }}
        >
          <ListItem>
            <LanguageSwitch />
          </ListItem>
        </List>
      </Box>

      <Divider />

      <Profile />
    </Sheet>
  );
};
