import { Box, Checkbox, Link } from "@mui/joy";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { visuallyHidden } from "@mui/utils";
import { DetailedHTMLProps, TdHTMLAttributes } from "react";

export interface HeadCell {
  disablePadding?: boolean;
  id: string;
  label: string;
  Render?: (data: any) => React.ReactNode;
  format?: (data: any) => string;
  minWidth?: number;
  style?: (
    data?: any
  ) => DetailedHTMLProps<
    TdHTMLAttributes<HTMLTableDataCellElement>,
    HTMLTableDataCellElement
  >;
}

interface EnhancedTableProps {
  numSelected: number;
  onSelectAllClick?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  rowCount: number;
  columns: HeadCell[];
  canSelect?: boolean;
}

export const EnhancedTableHead: React.FC<EnhancedTableProps> = ({
  onSelectAllClick,
  numSelected,
  rowCount,
  columns,
  canSelect,
}) => {
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
          return (
            <th key={headCell.id} style={{ minWidth: headCell.minWidth }}>
              <Link
                underline="none"
                color="neutral"
                textColor={"primary.plainColor"}
                component="button"
                sx={{
                  fontWeight: "lg",
                }}
              >
                {headCell.label}
              </Link>
            </th>
          );
        })}
      </tr>
    </thead>
  );
};
