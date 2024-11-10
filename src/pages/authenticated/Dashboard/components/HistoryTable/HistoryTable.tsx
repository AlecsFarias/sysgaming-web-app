import { Grid, Option, Select } from "@mui/joy";
import { DataGrid } from "../../../../../components";
import { useHistoryTable } from "./hooks/useHistoryTable";
import { betStatuses } from "../../../../../utils/@types";

export const HistoryTable: React.FC = () => {
  const {
    data,
    filters,
    loading,
    makeFilterHandlerForFilter,
    columns,
    translate,
  } = useHistoryTable();

  return (
    <DataGrid
      title={translate("authenticated.pages.home.history.title")}
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
              defaultValue={"all"}
              onChange={(_, value) =>
                makeFilterHandlerForFilter("status")(value)
              }
            >
              <Option value={"all"}>
                {translate("authenticated.pages.home.history.status.all")}
              </Option>

              {betStatuses.map((status) => (
                <Option value={status} key={status}>
                  {translate(
                    `authenticated.pages.home.history.status.${status}` as any
                  )}
                </Option>
              ))}
            </Select>
          </Grid>
        </Grid>
      }
    />
  );
};
