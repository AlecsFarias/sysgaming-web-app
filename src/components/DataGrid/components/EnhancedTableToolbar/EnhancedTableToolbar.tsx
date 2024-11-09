import { Box, CircularProgress, Grid, Typography } from "@mui/joy";

interface EnhancedTableToolbarProps {
  title: string;
  numSelected: number;
  onDeleteMany?: () => void;
  loading?: boolean;
  Actions?: React.ReactNode;
}

export const EnhancedTableToolbar = ({
  title,
  loading,
  Actions,
}: EnhancedTableToolbarProps) => {
  return (
    <Box
      sx={[
        {
          borderTopLeftRadius: "var(--unstable_actionRadius)",
          borderTopRightRadius: "var(--unstable_actionRadius)",
          p: 2,
          pb: 0,
        },
      ]}
    >
      <Grid container spacing={2} justifyContent="space-between">
        <Grid xs={12} md>
          <Box display={"flex"} alignItems={"center"} gap={2}>
            {loading ? <CircularProgress size="sm" /> : null}
            <Typography
              level="body-lg"
              sx={{ fontWeight: "bold" }}
              id="tableTitle"
              component="div"
              color="primary"
            >
              {title}
            </Typography>
          </Box>
        </Grid>

        {Actions ? (
          <Grid xs={12} md>
            {Actions}
          </Grid>
        ) : null}
      </Grid>
    </Box>
  );
};
