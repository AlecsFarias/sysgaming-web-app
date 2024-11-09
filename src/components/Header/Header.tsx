import { Box, Breadcrumbs, Link, Typography } from "@mui/joy";

import { ChevronRightRounded, HomeRounded } from "@mui/icons-material";

type HeaderProps = {
  routes: string[];
  title: string;
};

export const Header: React.FC<HeaderProps> = ({ routes, title }) => {
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Breadcrumbs
          size="sm"
          aria-label="breadcrumbs"
          separator={<ChevronRightRounded /* fontSize="sm"  */ />}
          sx={{ pl: 0 }}
        >
          <Link
            underline="none"
            color="neutral"
            href="#some-link"
            aria-label="Home"
          >
            <HomeRounded />
          </Link>

          {routes.map((route, index) => (
            <Link
              underline={index === routes.length - 1 ? "hover" : undefined}
              color={index === routes.length - 1 ? "primary" : "neutral"}
              href="#some-link"
              sx={{ fontSize: 12, fontWeight: 500 }}
            >
              {route}
            </Link>
          ))}
        </Breadcrumbs>
      </Box>

      <Box
        sx={{
          display: "flex",
          mb: 1,
          gap: 1,
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "start", sm: "center" },
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <Typography level="h2" component="h1">
          {title}
        </Typography>
      </Box>
    </>
  );
};
