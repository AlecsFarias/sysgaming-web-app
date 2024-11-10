import { z } from "zod";
import { TranslationKeys } from "../../i18n/translations";

export const signInSchema = (translate: (key: TranslationKeys) => string) =>
  z.object({
    email: z
      .string({
        required_error: translate("auth.signIn.errors.email.required"),
      })
      .email(translate("auth.signIn.errors.email.valid")),
    password: z.string({
      required_error: translate("auth.signIn.errors.password.required"),
    }),
  });

const signInSchemaExample = signInSchema((key: string) => "");

export type SignInSchema = z.infer<typeof signInSchemaExample>;
