import { useState } from "react";
import {
  CancelBetResponse,
  ListBetsParams,
  useCancelBet,
  useListsBets,
} from "../../../../../../services";
import { useUserStore } from "../../../../../../store";
import { HeadCell } from "../../../../../../components";
import {
  formatDate,
  formatMoney,
  queryClient,
  useTranslation,
} from "../../../../../../utils";
import { Bet } from "../../../../../../utils/@types";
import { IconButton, Typography } from "@mui/joy";
import { Delete } from "@mui/icons-material";
import { enqueueSnackbar } from "notistack";

const isWin = (data: Bet) => {
  return data.status === "win";
};

const color = (data: Bet) => {
  if (data.status === "win") {
    return "green";
  }

  if (data.status === "lost") {
    return "red";
  }

  return "grey";
};

const resetPageIfKey = ["status", "limit"];

export const useHistoryTable = () => {
  const { translate } = useTranslation();
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

      setFilters((prev) => {
        const newFilters = { ...prev, [key]: value };

        //filters that chnage and must reset table page
        if (resetPageIfKey.includes(key)) {
          newFilters.page = 1;
        }

        return newFilters;
      });
    };
  };

  const onSuccessCancelBet = (data: CancelBetResponse) => {
    queryClient.invalidateQueries({
      queryKey: ["bets"],
    });

    enqueueSnackbar(translate("authenticated.pages.home.history.deleted"), {
      variant: "success",
    });
  };

  const columns: HeadCell[] = [
    {
      id: "amount",
      label: translate("authenticated.pages.home.history.table.value"),
      minWidth: 150,
      Render: (data: Bet) => formatMoney(data.amount, currency),
    },
    {
      id: "status",
      label: translate("authenticated.pages.home.history.table.status"),
      style: (data: Bet) => ({
        fontWeight: "bold",
        color: color(data),
      }),
      format: (data: Bet) => {
        if (data.status === "canceled") {
          return "Cancelado";
        }

        if (isWin(data)) {
          return "Ganho";
        }

        return "Perda";
      },
    },
    {
      id: "amount",
      label: translate("authenticated.pages.home.history.table.gain"),
      Render: (data: Bet) => {
        return (
          <Typography
            color={
              data.status === "win"
                ? "success"
                : data.status === "lost"
                ? "danger"
                : "neutral"
            }
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
      label: translate("authenticated.pages.home.history.table.date"),
      format: (data: Bet) => formatDate(data.createdAt),
    },
    {
      id: "actions",
      label: " ",
      Render: (data: Bet) => {
        const { isLoading, mutate: cancelBet } = useCancelBet({
          onSuccess: onSuccessCancelBet,
          onError: (error) =>
            enqueueSnackbar(error?.response?.data?.message, {
              variant: "error",
            }),
        });

        if (data.status === "canceled") {
          return null;
        }

        return (
          <IconButton
            color={"danger"}
            loading={isLoading}
            onClick={() => cancelBet(data.id)}
          >
            <Delete />
          </IconButton>
        );
      },
    },
  ];

  return {
    translate,
    filters,
    makeFilterHandlerForFilter,
    data,
    loading: isFetching,
    columns,
  };
};
