import { DataGrid, Header } from "../../../components";
import { transactionTypes } from "../../../utils/@types";
import { Grid, Option, Select } from "@mui/joy";
import { useTransactions } from "./hooks/useTransactions";
export const Transactions: React.FC = () => {
  const {
    columns,
    data,
    makeFilterHandlerForFilter,
    filters,
    loading,
    translate,
  } = useTransactions();

  return (
    <>
      <Header
        routes={[translate("authenticated.pages.transactions.routes")]}
        title={translate("authenticated.pages.transactions.title")}
      />

      <DataGrid
        title={translate("authenticated.pages.transactions.table.title")}
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
                  makeFilterHandlerForFilter("type")(value)
                }
              >
                <Option value={"all"}>
                  {translate("authenticated.pages.transactions.type.all")}
                </Option>

                {transactionTypes.map((type) => (
                  <Option value={type} key={type}>
                    {translate(
                      `authenticated.pages.transactions.type.${type}` as any
                    )}
                  </Option>
                ))}
              </Select>
            </Grid>
          </Grid>
        }
      />
    </>
  );
};
