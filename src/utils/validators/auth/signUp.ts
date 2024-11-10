import { z } from "zod";
import { TranslationKeys } from "../../i18n/translations";

export const signUpSchema = (translate: (key: TranslationKeys) => string) =>
  z
    .object({
      name: z.string({
        required_error: translate("auth.signUp.errors.name.required"),
      }),
      email: z
        .string({
          required_error: translate("auth.signUp.errors.email.required"),
        })
        .email(translate("auth.signUp.errors.email.valid")),
      password: z.string({
        required_error: translate("auth.signUp.errors.password.required"),
      }),
      confirmPassword: z.string({
        required_error: translate(
          "auth.signUp.errors.confirmPassword.required"
        ),
      }),
    })
    .superRefine(({ confirmPassword, password }, ctx) => {
      if (confirmPassword !== password) {
        ctx.addIssue({
          code: "custom",
          message: translate("auth.signUp.errors.confirmPassword.equal"),
          path: ["confirmPassword"],
        });
      }
    });

const signUpSchemaExamples = signUpSchema((key: string) => "");

export type SignUpSchema = z.infer<typeof signUpSchemaExamples>;
