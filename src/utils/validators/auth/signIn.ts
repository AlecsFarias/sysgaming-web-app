import { z } from "zod";

export const signInSchema = z.object({
  email: z
    .string({
      required_error: "O e-mail é obrigatório",
    })
    .email("Deve ser um e-mail válido"),
  password: z.string({
    required_error: "A senha é obrigatória",
  }),
});

export type SignInSchema = z.infer<typeof signInSchema>;
