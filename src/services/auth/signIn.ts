import { MutationListener } from "../../utils/@types";
import { SignInSchema } from "../../utils/validators/auth/signIn";
import { http } from "../http";
import { useMutation } from "react-query";

export type SignInResponse = {
  id: string;
  balance: number;
  currency: string;
  accessToken: string;
};

const signIn = async (data: SignInSchema): Promise<SignInResponse> => {
  return http.post("/login", data).then((res) => res.data);
};

export const useSignInService = (listeners: MutationListener<SignInResponse>) =>
  useMutation({
    mutationFn: (data: SignInSchema) => signIn(data),
    ...listeners,
  });
