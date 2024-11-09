import { z } from "zod";

export const createBetSchema = (maxValue: number) =>
  z.object({
    amount: z
      .string({
        required_error: "O valor é obrigatório",
      })
      .transform((val) => Number(val)) // Transforma string para number
      .refine((val) => !isNaN(val), "O valor deve ser um número válido") // Verifica se é um número válido
      .refine((val) => val >= 1, "O valor mínimo é R$ 1,00")
      .refine((val) => val <= maxValue, "Saldo insuficiente"),
  });

const example = createBetSchema(0);

export type CreateBetSchema = z.infer<typeof example>;
