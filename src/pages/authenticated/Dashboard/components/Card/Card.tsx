import {
  Box,
  Card as JoyCard,
  CardContent,
  styled,
  Typography,
} from "@mui/joy";

const CardHeader = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: 5,
  borderBottom: "1px solid #2c303a",
  marginBottom: "10px",
  minHeight: 50,
});

type CardProps = {
  title: string;
  action?: React.ReactNode;
  children: React.ReactNode;
};

export const Card: React.FC<CardProps> = ({ title, action, children }) => {
  return (
    <JoyCard
      sx={{
        minHeight: "100%",
      }}
    >
      <CardContent>
        <CardHeader>
          <Typography
            sx={{
              fontWeight: "bold",
            }}
            color="primary"
          >
            {title}
          </Typography>
          {action ? action : null}
        </CardHeader>
        {children}
      </CardContent>
    </JoyCard>
  );
};
