import { Box, Grid, styled, Typography } from "@mui/joy";
import { useUserStore } from "../../../../../store";
import { formatMoney, useBalanceSocket } from "../../../../../utils";
import { Card } from "../Card";
import { useEffect, useState } from "react";

import Lottie from "react-lottie";
import money from "../../../../../assets/money.json";
import loseMoney from "../../../../../assets/lose_money.json";
import { StackedLineChart } from "@mui/icons-material";

const BalanceAmount = styled(Typography)({
  fontSize: "2rem",
  fontWeight: "bold",
  color: "#4caf50", // Verde para indicar saldo positivo
  wordWrap: "break-word", // Quebra a linha se o número for muito grande
  overflowWrap: "break-word",
});

export const Wallet: React.FC = () => {
  const [balance, setBalance] = useState(0);

  const [successAnimation, setSuccessAnimation] = useState(false);
  const [loseAnimation, setLoseAnimation] = useState(false);

  const { balance: storeBalance, currency } = useUserStore(
    (state) => state.user ?? { balance: 0, currency: undefined }
  );

  useEffect(() => {
    setBalance(storeBalance);

    if (balance == 0) {
      return;
    }

    if (storeBalance > balance) {
      setSuccessAnimation(true);

      setTimeout(() => setSuccessAnimation(false), 1500);
    }

    if (storeBalance < balance) {
      setLoseAnimation(true);

      setTimeout(() => setLoseAnimation(false), 1500);
    }
  }, [storeBalance]);

  return (
    <Card title="Saldo Atual">
      <Grid container spacing={2}>
        <Grid xs>
          <Box
            display={"flex"}
            alignItems={"center"}
            gap={1}
            sx={{ fontSize: 30 }}
          >
            <BalanceAmount
              sx={{
                color: loseAnimation ? "red" : undefined,
              }}
            >
              {formatMoney(balance, currency)}
            </BalanceAmount>

            {loseAnimation || successAnimation ? (
              <StackedLineChart
                sx={{
                  color: loseAnimation ? "red" : "#4caf50",
                  transform: loseAnimation ? "scaleX(-1)" : undefined,
                }}
              />
            ) : null}
          </Box>
        </Grid>

        <Grid xs>
          {successAnimation ? (
            <Lottie
              options={{
                autoplay: true,
                loop: true,
                animationData: money,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
              height={50}
              width={"100%"}
            />
          ) : null}

          {loseAnimation ? (
            <Lottie
              options={{
                autoplay: true,
                loop: true,
                animationData: loseMoney,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
              height={50}
              width={50}
            />
          ) : null}
        </Grid>
      </Grid>

      <Typography mt={2}>
        Aposte com responsabilidade. Boa sorte nas suas apostas!
      </Typography>
    </Card>
  );
};
