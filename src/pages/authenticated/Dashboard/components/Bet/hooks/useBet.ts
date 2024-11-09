import { useForm } from "react-hook-form";
import { useUserStore } from "../../../../../../store";
import {
  createBetSchema,
  CreateBetSchema,
} from "../../../../../../utils/validators/bet/createBet";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CreateBetResponse,
  useCreateBetService,
} from "../../../../../../services/bet/createBet";
import { enqueueSnackbar } from "notistack";
import { queryClient } from "../../../../../../utils";

export const useBet = () => {
  const balance = useUserStore((state) => state.user?.balance ?? 0);
  const updateBalance = useUserStore((state) => state.updateBalance);

  const { mutate: createBet, isLoading } = useCreateBetService({
    onError: (error) =>
      enqueueSnackbar(
        error?.response?.data?.message ??
          "Ocorreu algum erro, tente novamente mais tarde",
        {
          variant: "error",
        }
      ),
    onSuccess: onSuccessBet,
  });

  function onSuccessBet(data: CreateBetResponse) {
    updateBalance(data.balance);

    const sucess = !!data.winAmount;

    queryClient.invalidateQueries({
      queryKey: ["bets"],
    });

    enqueueSnackbar(
      sucess
        ? "Você ganhou a aposta! 🤩"
        : "Parece que você perdeu essa aposta 😭",
      {
        variant: sucess ? "success" : "error",
        hideIconVariant: true,
      }
    );
  }

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CreateBetSchema>({
    resolver: zodResolver(createBetSchema(balance)),
  });

  const onSubmit = (data: CreateBetSchema) => {
    createBet(data);
  };

  return {
    handleSubmit: handleSubmit(onSubmit),
    control,
    errors,
    isLoading,
  };
};
