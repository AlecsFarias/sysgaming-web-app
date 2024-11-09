import { useForm } from "react-hook-form";
import {
  signInSchema,
  SignInSchema,
} from "../../../../utils/validators/auth/signIn";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInResponse, useSignInService } from "../../../../services";
import { enqueueSnackbar } from "notistack";
import { useAuthStore } from "../../../../store/auth.store";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../../../store";

export const useSignIn = () => {
  const navigate = useNavigate();
  const authenticate = useAuthStore((state) => state.authenticate);
  const setUser = useUserStore((state) => state.setUser);

  const { mutate: signIn, isLoading } = useSignInService({
    onError: (error) =>
      enqueueSnackbar(error?.response?.data?.message, {
        variant: "error",
      }),
    onSuccess: onSignSucess,
  });

  function onSignSucess({ accessToken, ...user }: SignInResponse) {
    navigate("/home");
    authenticate(accessToken);
    setUser(user);
  }

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = (data: SignInSchema) => {
    signIn(data);
  };

  return {
    onSubmit: handleSubmit(onSubmit),
    control,
    errors,
    isLoading,
  };
};
