import { Checkbox } from "@mui/joy";
import { HeadCell } from "../EnhancedTableHead";

type RowProps = {
  data: any & { id: string };
  columns: HeadCell[];
  handleClick: (id: string) => void;
  isSelected?: boolean;
  canSelect?: boolean;
};

export const Row: React.FC<RowProps> = ({
  data,
  columns,
  handleClick,
  isSelected,
  canSelect,
}) => {
  const renderCell = (
    id: string,
    render?: (data: any) => React.ReactNode,
    format?: (data: any) => string
  ) => {
    if (format) {
      return format(data);
    }

    if (render) {
      return render(data);
    }

    return data[id];
  };

  return (
    <tr role="checkbox" aria-checked={isSelected} tabIndex={-1} key={data.id}>
      {canSelect ? (
        <th scope="row">
          <Checkbox
            checked={isSelected}
            onChange={(e) => handleClick(data.id)}
            slotProps={{
              input: {
                "aria-labelledby": data.id,
              },
            }}
            sx={{ verticalAlign: "top" }}
          />
        </th>
      ) : null}

      {columns.map((column) => (
        <td
          style={{
            minWidth: column.minWidth,
            paddingLeft: 30,
            ...(column.style ? column.style(data) : {}),
          }}
        >
          {renderCell(column.id, column.Render, column.format)}
        </td>
      ))}
    </tr>
  );
};
