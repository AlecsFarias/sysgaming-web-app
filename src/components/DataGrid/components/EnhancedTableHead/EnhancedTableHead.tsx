import { Box, Checkbox, Link } from "@mui/joy";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { visuallyHidden } from "@mui/utils";

export interface HeadCell {
  disablePadding: boolean;
  id: string;
  label: string;
  format?: (data: any) => React.ReactNode;
  minWidth?: number;
}

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (property: string) => void;
  onSelectAllClick?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: "asc" | "desc";
  orderBy: string;
  rowCount: number;
  columns: HeadCell[];
  canSelect?: boolean;
}

export const EnhancedTableHead: React.FC<EnhancedTableProps> = ({
  onSelectAllClick,
  order,
  orderBy,
  numSelected,
  rowCount,
  onRequestSort,
  columns,
  canSelect,
}) => {
  const createSortHandler = (property: string) => {
    onRequestSort(property);
  };

  return (
    <thead>
      <tr>
        {onSelectAllClick || canSelect ? (
          <th>
            {onSelectAllClick ? (
              <Checkbox
                indeterminate={numSelected > 0 && numSelected < rowCount}
                checked={rowCount > 0 && numSelected === rowCount}
                onChange={onSelectAllClick}
                slotProps={{
                  input: {
                    "aria-label": "select all desserts",
                  },
                }}
                sx={{ verticalAlign: "sub" }}
              />
            ) : null}
          </th>
        ) : null}

        {columns.map((headCell) => {
          const active = orderBy === headCell.id;
          return (
            <th
              key={headCell.id}
              style={{ minWidth: headCell.minWidth }}
              aria-sort={
                active
                  ? ({ asc: "ascending", desc: "descending" } as const)[order]
                  : undefined
              }
            >
              <Link
                underline="none"
                color="neutral"
                textColor={active ? "primary.plainColor" : undefined}
                component="button"
                onClick={() => createSortHandler(headCell.id)}
                startDecorator={
                  <ArrowDownwardIcon
                    sx={[active ? { opacity: 1 } : { opacity: 0 }]}
                  />
                }
                sx={{
                  fontWeight: "lg",

                  "& svg": {
                    transition: "0.2s",
                    transform:
                      active && order === "desc"
                        ? "rotate(0deg)"
                        : "rotate(180deg)",
                  },

                  "&:hover": { "& svg": { opacity: 1 } },
                }}
              >
                {headCell.label}
                {active ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </Box>
                ) : null}
              </Link>
            </th>
          );
        })}
      </tr>
    </thead>
  );
};
