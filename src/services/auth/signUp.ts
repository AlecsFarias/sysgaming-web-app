import { MutationListeners } from "../../utils/@types";
import { SignUpSchema } from "../../utils/validators/auth/signUp";
import { http } from "../http";
import { useMutation } from "react-query";

type SignUpResponse = {
  id: string;
};

const signUp = async (data: SignUpSchema): Promise<SignUpResponse> => {
  return http.post("/register", data);
};

export const useSignUpService = (
  listeners: MutationListeners<SignUpResponse>
) =>
  useMutation({
    mutationFn: (data: SignUpSchema) => signUp(data),
    ...listeners,
  });
