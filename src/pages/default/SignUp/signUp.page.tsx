import * as React from "react";
import { Button, Link, Typography, Stack } from "@mui/joy";
import { Input } from "../../../components/form";
import { Link as RouterLink } from "react-router-dom";
import { useSignUp } from "./hooks/useSignUp";

export const SignUp: React.FC = () => {
  const { control, errors, onSubmit, isLoading, translate } = useSignUp();

  return (
    <>
      <Stack sx={{ gap: 4, mb: 2 }}>
        <Stack sx={{ gap: 1 }}>
          <Typography component="h1" level="h3">
            {translate("auth.signUp.title")}
          </Typography>
          <Typography level="body-sm">
            {translate("auth.signUp.haveAccount")}
            <Link component={RouterLink} to="/signIn" level="title-sm" ml={1}>
              {translate("auth.signUp.goSignIn")}
            </Link>
          </Typography>
        </Stack>
      </Stack>

      <Stack sx={{ gap: 4, mt: 2 }}>
        <form onSubmit={onSubmit}>
          <Input
            name="name"
            label={translate("auth.signUp.forms.name")}
            control={control}
            error={errors?.name?.message}
          />

          <Input
            name="email"
            label={translate("auth.signUp.forms.email")}
            control={control}
            error={errors?.email?.message}
          />

          <Input
            name="password"
            label={translate("auth.signUp.forms.password")}
            control={control}
            type="password"
            error={errors?.password?.message}
          />

          <Input
            name="confirmPassword"
            label={translate("auth.signUp.forms.repeatPassword")}
            control={control}
            type="password"
            error={errors?.confirmPassword?.message}
          />

          <Button type="submit" fullWidth sx={{ mt: 6 }} loading={isLoading}>
            {translate("auth.signUp.forms.signUp")}
          </Button>
        </form>
      </Stack>
    </>
  );
};
