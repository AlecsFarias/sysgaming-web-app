import { useState } from "react";
import { ListBetsParams, useListsBets } from "../../../../../../services";
import { useUserStore } from "../../../../../../store";
import { HeadCell } from "../../../../../../components";
import { formatDate, formatMoney } from "../../../../../../utils";
import { Bet } from "../../../../../../utils/@types";
import { Typography } from "@mui/joy";

const isWin = (data: Bet) => {
  return data.status === "win";
};

export const useHistoryTable = () => {
  const currency = useUserStore((state) => state.user?.currency);

  const [filters, setFilters] = useState<ListBetsParams>({
    limit: 10,
    page: 1,
    id: undefined,
    status: undefined,
  });

  const { data, isFetching } = useListsBets(filters);

  const makeFilterHandlerForFilter = (key: string) => {
    return (value: any) => {
      if (value === filters[key as keyof typeof filters]) {
        return;
      }

      setFilters((prev) => ({ ...prev, [key]: value }));
    };
  };

  const columns: HeadCell[] = [
    {
      id: "amount",
      label: "Valor apostado",
      minWidth: 150,
      render: (data: Bet) => formatMoney(data.amount, currency),
    },
    {
      id: "status",
      label: "status",
      style: (data: Bet) => ({
        fontWeight: "bold",
        color: isWin(data) ? "green" : "red",
      }),
      format: (data: Bet) => (isWin(data) ? "Ganho" : "Perda"),
    },
    {
      id: "amount",
      label: "Valor recebido",

      render: (data: Bet) => {
        const isWin = data.status === "win";

        return (
          <Typography
            color={isWin ? "success" : "danger"}
            sx={{
              fontWeight: "bold",
            }}
          >
            {formatMoney(data.winAmount ?? -data.amount, currency)}
          </Typography>
        );
      },
    },
    {
      id: "createdAt",
      label: "Data",
      format: (data: Bet) => formatDate(data.createdAt),
    },
    {
      id: "actions",
      label: " ",
      render: (data: Bet) => {
        return "actions";
      },
    },
  ];

  return {
    filters,
    makeFilterHandlerForFilter,
    data,
    loading: isFetching,
    columns,
  };
};
