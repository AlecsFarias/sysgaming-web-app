import { Transaction } from "../../utils/@types";
import { http } from "../http";
import { useQuery } from "react-query";

export type ListTransactionsResponse = {
  data: Transaction[];
  total: number;
  page: number;
  limit: number;
};

export type ListTransactionsParams = {
  id?: string;
  type?: string;
  page: number;
  limit: number;
};

const getTransactions = async (
  data: ListTransactionsParams
): Promise<ListTransactionsResponse> => {
  if (data.type === "all") {
    data.type = undefined;
  }

  return http
    .get("/my-transactions", {
      params: data,
    })
    .then((res) => res.data);
};

export const useListTransactions = (filters: ListTransactionsParams) =>
  useQuery(
    ["transactions", ...Object.entries(filters).map((item) => item.toString())],
    () => {
      return getTransactions(filters);
    }
  );
