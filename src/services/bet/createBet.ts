import { MutationListener } from "../../utils/@types";
import { CreateBetSchema } from "../../utils/validators/bet/createBet";
import { http } from "../http";
import { useMutation } from "react-query";

export type CreateBetResponse = {
  transactionId: string;
  currency: string;
  balance: number;
  winAmount: number;
};

const createBet = async (data: CreateBetSchema): Promise<CreateBetResponse> => {
  return http.post("/bet", data).then((res) => res.data);
};

export const useCreateBetService = (
  listeners: MutationListener<CreateBetResponse>
) =>
  useMutation({
    mutationFn: (data: CreateBetSchema) => createBet(data),
    ...listeners,
  });
