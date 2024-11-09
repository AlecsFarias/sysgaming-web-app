import { Grid, Option, Select } from "@mui/joy";
import { DataGrid } from "../../../../../components";
import { useHistoryTable } from "./hooks/useHistoryTable";
import { betStatuses } from "../../../../../utils/@types";

export const HistoryTable: React.FC = () => {
  const { data, filters, loading, makeFilterHandlerForFilter, columns } =
    useHistoryTable();

  return (
    <DataGrid
      title="Apostas"
      columns={columns}
      data={data?.data ?? []}
      handleChangePage={makeFilterHandlerForFilter("page")}
      page={filters.page}
      rowsPerPage={filters.limit}
      total={data?.total ?? 0}
      handleChangeRowsPerPage={makeFilterHandlerForFilter("limit")}
      loading={loading}
      Actions={
        <Grid container spacing={2} justifyContent={"flex-end"}>
          <Grid>
            <Select
              placeholder="Filtrar por status"
              defaultValue={"all"}
              onChange={(_, value) =>
                makeFilterHandlerForFilter("status")(value)
              }
            >
              <Option value={"all"}>Todos</Option>

              {betStatuses.map((status) => (
                <Option value={status} key={status}>
                  {status}
                </Option>
              ))}
            </Select>
          </Grid>
        </Grid>
      }
    />
  );
};
