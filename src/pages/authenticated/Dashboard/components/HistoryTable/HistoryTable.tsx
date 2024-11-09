import { DataGrid, HeadCell } from "../../../../../components";

const columns: HeadCell[] = [
  {
    id: "name",
    disablePadding: true,
    label: "Dessert (100g serving)",
    minWidth: 150,
  },
  {
    id: "calories",
    disablePadding: false,
    label: "Calories",
  },
  {
    id: "fat",
    disablePadding: false,
    label: "Fat (g)",
  },
  {
    id: "carbs",
    disablePadding: false,
    label: "Carbs (g)",
  },
  {
    id: "protein",
    disablePadding: false,
    label: "Protein (g)",
  },
];

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
): any {
  return {
    id: name,
    name,
    calories,
    fat,
    carbs,
    protein,
  };
}

const rows = [
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Donut", 452, 25.0, 51, 4.9),
  createData("Eclair", 262, 16.0, 24, 6.0),
];

export const HistoryTable: React.FC = () => {
  return (
    <DataGrid
      title="Apostas"
      columns={columns}
      data={rows}
      handleChangePage={console.log}
      page={1}
      rowsPerPage={10}
      total={100}
      handleChangeRowsPerPage={console.log}
      loading={false}
      canSelect
      canSelectAll
    />
  );
};
