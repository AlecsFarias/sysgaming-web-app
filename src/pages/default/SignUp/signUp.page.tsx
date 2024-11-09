import * as React from "react";
import { Button, Link, Typography, Stack } from "@mui/joy";
import { Input } from "../../../components/form";
import { Link as RouterLink } from "react-router-dom";
import { useSignUp } from "./hooks/useSignUp";

export const SignUp: React.FC = () => {
  const { control, errors, onSubmit, isLoading } = useSignUp();

  return (
    <>
      <Stack sx={{ gap: 4, mb: 2 }}>
        <Stack sx={{ gap: 1 }}>
          <Typography component="h1" level="h3">
            Cadastro
          </Typography>
          <Typography level="body-sm">
            Ja tem conta ?
            <Link component={RouterLink} to="/signIn" level="title-sm" ml={1}>
              Fazer login
            </Link>
          </Typography>
        </Stack>
      </Stack>

      <Stack sx={{ gap: 4, mt: 2 }}>
        <form onSubmit={onSubmit}>
          <Input
            name="name"
            label="Nome"
            control={control}
            error={errors?.name?.message}
          />

          <Input
            name="email"
            label="E-mail"
            control={control}
            error={errors?.email?.message}
          />

          <Input
            name="password"
            label="Senha"
            control={control}
            type="password"
            error={errors?.password?.message}
          />

          <Input
            name="confirmPassword"
            label="Repetir senha"
            control={control}
            type="password"
            error={errors?.confirmPassword?.message}
          />

          <Button type="submit" fullWidth sx={{ mt: 6 }} loading={isLoading}>
            Sign in
          </Button>
        </form>
      </Stack>
    </>
  );
};
