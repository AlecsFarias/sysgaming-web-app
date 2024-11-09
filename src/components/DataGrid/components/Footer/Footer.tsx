import {
  Box,
  FormControl,
  FormLabel,
  IconButton,
  Option,
  Select,
} from "@mui/joy";

import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

type FooterProps = {
  page: number;
  total: number;
  columnsLengt: number;
  rowsPerPage: number;
  handleChangePage: (page: number) => void;
  handleChangeRowsPerPage: (page: number) => void;
};

export const Footer: React.FC<FooterProps> = ({
  total,
  rowsPerPage,
  page,
  handleChangePage,
  handleChangeRowsPerPage,
  columnsLengt,
}) => {
  return (
    <tfoot>
      <tr>
        <td colSpan={columnsLengt}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              justifyContent: "flex-end",
            }}
          >
            <FormControl orientation="horizontal" size="sm">
              <FormLabel>Linhas por pagina:</FormLabel>
              <Select
                onChange={(_, perPage) =>
                  handleChangeRowsPerPage(perPage ?? 10)
                }
                value={rowsPerPage}
              >
                <Option value={5}>5</Option>
                <Option value={10}>10</Option>
                <Option value={25}>25</Option>
              </Select>
            </FormControl>

            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton
                size="sm"
                color="neutral"
                variant="outlined"
                disabled={page === 0}
                onClick={() => handleChangePage(page - 1)}
                sx={{ bgcolor: "background.surface" }}
              >
                <KeyboardArrowLeft />
              </IconButton>

              <IconButton
                size="sm"
                color="neutral"
                variant="outlined"
                disabled={total <= page * rowsPerPage}
                onClick={() => handleChangePage(page + 1)}
                sx={{ bgcolor: "background.surface" }}
              >
                <KeyboardArrowRight />
              </IconButton>
            </Box>
          </Box>
        </td>
      </tr>
    </tfoot>
  );
};
