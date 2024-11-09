import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { enqueueSnackbar } from "notistack";
import { useSignUpService } from "../../../../services/auth/signUp";
import {
  signUpSchema,
  SignUpSchema,
} from "../../../../utils/validators/auth/signUp";
import { useNavigate } from "react-router-dom";

export const useSignUp = () => {
  const navigate = useNavigate();

  const { mutate: signIn, isLoading } = useSignUpService({
    onError: (error) =>
      enqueueSnackbar(error?.response?.data?.message, {
        variant: "error",
      }),
    onSuccess: () => {
      enqueueSnackbar("Conta criada com sucesso!", {
        variant: "success",
      });
      navigate("/signIn");
    },
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = (data: SignUpSchema) => {
    signIn(data);
  };

  return {
    onSubmit: handleSubmit(onSubmit),
    control,
    errors,
    isLoading,
  };
};
