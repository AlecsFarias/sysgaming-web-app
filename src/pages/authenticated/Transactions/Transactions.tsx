import { DataGrid, Header } from "../../../components";
import { transactionTypes } from "../../../utils/@types";
import { Grid, Option, Select } from "@mui/joy";
import { useTransactions } from "./hooks/useTransactions";

export const Transactions: React.FC = () => {
  const { columns, data, makeFilterHandlerForFilter, filters, loading } =
    useTransactions();

  return (
    <>
      <Header routes={["Transações"]} title="Transações financeiras" />

      <DataGrid
        title="Transações financeiras em sua carteira"
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
                  makeFilterHandlerForFilter("type")(value)
                }
              >
                <Option value={"all"}>Todos</Option>

                {transactionTypes.map((type) => (
                  <Option value={type} key={type}>
                    {type}
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
