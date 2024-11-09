import * as React from "react";

import { Header } from "../../../components";
import { Grid } from "@mui/joy";
import { Bet, HistoryTable, Wallet } from "./components";

export const Dashboard: React.FC = () => {
  return (
    <>
      <Header routes={["Inicio"]} title="Carteira digital" />

      <Grid container spacing={2} alignItems={"stretch"}>
        <Grid xs={12} sm={12} md={6}>
          <Wallet />
        </Grid>

        <Grid xs={12} sm={12} md={6}>
          <Bet />
        </Grid>

        <Grid xs={12}>
          <HistoryTable />
        </Grid>
      </Grid>
    </>
  );
};
