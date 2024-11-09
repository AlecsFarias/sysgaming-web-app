import { Button, styled, Typography } from "@mui/joy";
import { useUserStore } from "../../../../../store";
import { formatMoney } from "../../../../../utils";
import { Card } from "../Card";

const BalanceAmount = styled(Typography)({
  fontSize: "2rem",
  fontWeight: "bold",
  color: "#4caf50", // Verde para indicar saldo positivo
  wordWrap: "break-word", // Quebra a linha se o número for muito grande
  overflowWrap: "break-word",
});

export const Wallet: React.FC = () => {
  const { balance, currency } = useUserStore(
    (state) => state.user ?? { balance: 0, currency: undefined }
  );

  return (
    <Card
      title="Saldo Atual"
      action={
        <Button variant="solid" color="primary" sx={{ borderRadius: "20px" }}>
          Depositar
        </Button>
      }
    >
      <BalanceAmount>{formatMoney(balance, currency)}</BalanceAmount>
      <Typography mt={2}>
        Aposte com responsabilidade. Boa sorte nas suas apostas!
      </Typography>
    </Card>
  );
};
