import {
  Box,
  CircularProgress,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/joy";

import { Delete, FilterList } from "@mui/icons-material";

interface EnhancedTableToolbarProps {
  title: string;
  numSelected: number;
  onDeleteMany?: () => void;
  loading?: boolean;
}

export const EnhancedTableToolbar = ({
  title,
  numSelected,
  onDeleteMany,
  loading,
}: EnhancedTableToolbarProps) => {
  return (
    <Box
      sx={[
        {
          display: "flex",
          alignItems: "center",
          py: 1,
          gap: 2,
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          borderTopLeftRadius: "var(--unstable_actionRadius)",
          borderTopRightRadius: "var(--unstable_actionRadius)",
        },
        numSelected > 0 && {
          bgcolor: "background.level1",
        },
      ]}
    >
      {loading ? <CircularProgress size="sm" /> : null}

      {numSelected > 0 ? (
        <Typography sx={{ flex: "1 1 100%" }} component="div">
          {numSelected} selecionados
        </Typography>
      ) : (
        <Typography
          level="body-lg"
          sx={{ flex: "1 1 100%", fontWeight: "bold" }}
          id="tableTitle"
          component="div"
          color="primary"
        >
          {title}
        </Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton
            size="sm"
            color="danger"
            variant="solid"
            onClick={onDeleteMany}
          >
            <Delete />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton size="sm" variant="outlined" color="neutral">
            <FilterList />
          </IconButton>
        </Tooltip>
      )}
    </Box>
  );
};
