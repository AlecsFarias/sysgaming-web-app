import { Bet } from "../../utils/@types";
import { http } from "../http";
import { useQuery } from "react-query";

export type ListBetsResponse = {
  data: Bet[];
  total: number;
  page: number;
  limit: number;
};

export type ListBetsParams = {
  id?: string;
  status?: string;
  page: number;
  limit: number;
};

const getBets = async (data: ListBetsParams): Promise<ListBetsResponse> => {
  if (data.status === "all") {
    data.status = undefined;
  }

  return http
    .get("/my-bets", {
      params: data,
    })
    .then((res) => res.data);
};

export const useListsBets = (filters: ListBetsParams) =>
  useQuery(
    ["bets", ...Object.entries(filters).map((item) => item.toString())],
    () => {
      return getBets(filters);
    }
  );
