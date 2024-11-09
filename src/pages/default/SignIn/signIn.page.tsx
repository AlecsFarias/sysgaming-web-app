import * as React from "react";
import { Button, Link, Typography, Stack } from "@mui/joy";
import { Link as RouterLink } from "react-router-dom";
import { Input } from "../../../components/form";
import { useSignIn } from "./hooks/useSignIn";

export const SignIn: React.FC = () => {
  const { control, errors, onSubmit, isLoading } = useSignIn();

  return (
    <>
      <Stack sx={{ gap: 4, mb: 2 }}>
        <Stack sx={{ gap: 1 }}>
          <Typography component="h1" level="h3">
            Entrar
          </Typography>
          <Typography level="body-sm">
            Ainda não tem cadastro ?
            <Link component={RouterLink} to="/signUp" level="title-sm" ml={1}>
              Quero me cadastrar
            </Link>
          </Typography>
        </Stack>
      </Stack>

      <Stack sx={{ gap: 4, mt: 2 }}>
        <form onSubmit={onSubmit}>
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

          <Button type="submit" fullWidth sx={{ mt: 6 }} loading={isLoading}>
            Entrar
          </Button>
        </form>
      </Stack>
    </>
  );
};