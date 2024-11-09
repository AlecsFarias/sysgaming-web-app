import { DataGrid } from "../../../../../components";
import { useHistoryTable } from "./hooks/useHistoryTable";

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
    />
  );
};
