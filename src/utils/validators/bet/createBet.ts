import { z } from "zod";
import { TranslationKeys } from "../../i18n/translations";

export const createBetSchema = (
  maxValue: number,
  translate: (key: TranslationKeys) => string
) =>
  z.object({
    amount: z
      .string({
        required_error: translate(
          "authenticated.pages.home.bet.errors.required"
        ),
      })
      .transform((val) => Number(val)) // Transforma string para number
      .refine(
        (val) => !isNaN(val),
        translate("authenticated.pages.home.bet.errors.valid")
      ) // Verifica se é um número válido
      .refine(
        (val) => val >= 1,
        translate("authenticated.pages.home.bet.errors.min")
      )
      .refine(
        (val) => val <= maxValue,
        translate("authenticated.pages.home.bet.errors.max")
      ),
  });

const example = createBetSchema(0, (key: string) => "" as any);

export type CreateBetSchema = z.infer<typeof example>;
