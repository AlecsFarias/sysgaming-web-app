import { z } from "zod";

export const signUpSchema = z
  .object({
    name: z.string({
      required_error: "O nome é obrigatório",
    }),
    email: z
      .string({
        required_error: "O e-mail é obrigatório",
      })
      .email("Deve ser um e-mail válido"),
    password: z.string({
      required_error: "A senha é obrigatória",
    }),

    confirmPassword: z.string({
      required_error: "A senha é obrigatória",
    }),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "A senhas devem ser iguais",
        path: ["confirmPassword"],
      });
    }
  });

export type SignUpSchema = z.infer<typeof signUpSchema>;
