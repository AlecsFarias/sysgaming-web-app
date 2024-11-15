import * as React from "react";
import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";

import {
  EnhancedTableHead,
  EnhancedTableToolbar,
  Footer,
  HeadCell,
  Row,
} from "./components";

export * from "./components";

export type DataGridProps = {
  title: string;
  columns: HeadCell[];
  canSelect?: boolean;
  canSelectAll?: boolean;
  data: any[];
  handleChangePage: (page: number) => void;
  handleChangeRowsPerPage: (page: number) => void;
  page: number;
  rowsPerPage: number;
  total: number;
  loading?: boolean;
  Actions?: React.ReactNode;
};

export const DataGrid: React.FC<DataGridProps> = ({
  title,
  columns,
  canSelect,
  canSelectAll,
  data,
  handleChangePage,
  page,
  rowsPerPage,
  total,
  handleChangeRowsPerPage,
  loading,
  Actions,
}) => {
  const [selected, setSelected] = React.useState<readonly string[]>([]);

  const handleSelectAllClick = canSelectAll
    ? (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
          setSelected(data.map((item) => item.id));
          return;
        }
        setSelected([]);
      }
    : undefined;

  const handleClick = (id: string) => {
    if (selected.includes(id)) {
      return setSelected((prev) => [
        ...prev.filter((otherId) => otherId !== id),
      ]);
    }

    setSelected((prev) => [...prev, id]);
  };

  const emptyRows = data.length === 0;

  const columnsLengt = columns.length + (canSelect ? 1 : 0);

  return (
    <Sheet
      variant="outlined"
      sx={{ width: "100%", boxShadow: "sm", borderRadius: "sm" }}
    >
      <EnhancedTableToolbar
        numSelected={selected.length}
        title={title}
        loading={loading}
        Actions={Actions}
      />

      <Table
        aria-labelledby="tableTitle"
        hoverRow
        sx={{
          "--TableCell-headBackground": "transparent",
          "--TableCell-selectedBackground": (theme) =>
            theme.vars.palette.success.softBg,
          "& tr > *:nth-child(n+3)": { textAlign: "right" },

          ...(canSelect || canSelectAll
            ? {
                "& thead th:nth-child(1)": {
                  width: "40px",
                },
                "& thead th:nth-child(2)": {
                  width: "30%",
                },
              }
            : {}),
        }}
      >
        <EnhancedTableHead
          numSelected={selected.length}
          onSelectAllClick={handleSelectAllClick}
          canSelect={canSelect}
          rowCount={data.length}
          columns={columns}
        />
        <tbody>
          {data.map((row) => (
            <Row
              columns={columns}
              data={row}
              canSelect={canSelect}
              isSelected={selected.includes(row.name)}
              handleClick={handleClick}
            />
          ))}

          {emptyRows && (
            <tr
              style={
                {
                  height: `calc(${emptyRows} * 40px)`,
                  "--TableRow-hoverBackground": "transparent",
                } as React.CSSProperties
              }
            >
              <td colSpan={columnsLengt} aria-hidden />
            </tr>
          )}
        </tbody>

        <Footer
          columnsLengt={columnsLengt}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          page={page}
          rowsPerPage={rowsPerPage}
          total={total}
        />
      </Table>
    </Sheet>
  );
};
