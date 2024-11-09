import { MutationListener } from "../../utils/@types";
import { http } from "../http";
import { useMutation } from "react-query";

export type CancelBetResponse = {
  transactionId: string;
  balance: number;
  currency: number;
};

const cancelBet = async (id: string): Promise<CancelBetResponse> => {
  return http.delete(`/my-bet/${id}`).then((res) => res.data);
};

export const useCancelBet = (listeners: MutationListener<CancelBetResponse>) =>
  useMutation({
    mutationFn: (id: string) => cancelBet(id),
    ...listeners,
  });
