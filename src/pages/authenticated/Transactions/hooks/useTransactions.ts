import { useState } from "react";
import { useUserStore } from "../../../../store";
import { Transaction } from "../../../../utils/@types";
import {
  ListTransactionsParams,
  useListTransactions,
} from "../../../../services";
import { HeadCell } from "../../../../components";
import { formatDate, formatMoney, useTranslation } from "../../../../utils";

const color = (data: Transaction) => {
  if (data.type === "win" || data.type === "cancel") {
    return "green";
  }
  return "red";
};

const resetPageIfKey = ["type", "limit"];

export const useTransactions = () => {
  const { translate } = useTranslation();
  const currency = useUserStore((state) => state.user?.currency);
  const [filters, setFilters] = useState<ListTransactionsParams>({
    limit: 10,
    page: 1,
    id: undefined,
    type: undefined,
  });

  const { data, isFetching: loading } = useListTransactions(filters);

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

  const columns: HeadCell[] = [
    {
      id: "amount",
      label: translate("authenticated.pages.transactions.table.value"),
      minWidth: 150,
      style: (data: Transaction) => ({
        fontWeight: "bold",
        color: color(data),
      }),
      format: (data: Transaction) => formatMoney(data.amount, currency),
    },
    {
      id: "status",
      label: translate("authenticated.pages.transactions.table.type"),
      style: (data: Transaction) => ({
        fontWeight: "bold",
        color: color(data),
      }),
      format: (data: Transaction) =>
        translate(`authenticated.pages.transactions.type.${data.type}` as any),
    },

    {
      id: "createdAt",
      label: translate("authenticated.pages.transactions.table.date"),
      format: (data: Transaction) => formatDate(data.createdAt),
    },
  ];

  return {
    columns,
    data,
    loading,
    makeFilterHandlerForFilter,
    filters,
    translate,
  };
};
