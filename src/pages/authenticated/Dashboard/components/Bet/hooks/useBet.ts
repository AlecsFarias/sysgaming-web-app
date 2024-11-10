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
import { queryClient, useTranslation } from "../../../../../../utils";

export const useBet = () => {
  const { translate } = useTranslation();
  const balance = useUserStore((state) => state.user?.balance ?? 0);

  const { mutate: createBet, isLoading } = useCreateBetService({
    onError: (error) =>
      enqueueSnackbar(error?.response?.data?.message, {
        variant: "error",
      }),
    onSuccess: onSuccessBet,
  });

  function onSuccessBet(data: CreateBetResponse) {
    const sucess = !!data.winAmount;

    queryClient.invalidateQueries({
      queryKey: ["bets"],
    });

    enqueueSnackbar(
      sucess
        ? translate("authenticated.pages.home.bet.success")
        : translate("authenticated.pages.home.bet.lose"),
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
    resolver: zodResolver(createBetSchema(balance, translate)),
  });

  const onSubmit = (data: CreateBetSchema) => {
    createBet(data);
  };

  return {
    handleSubmit: handleSubmit(onSubmit),
    control,
    errors,
    isLoading,
    translate,
  };
};
