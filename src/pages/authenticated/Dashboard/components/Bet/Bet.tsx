import { Button, Stack } from "@mui/joy";
import { Card } from "../Card";
import { NumericFormat, NumericFormatProps } from "react-number-format";
import { Input } from "../../../../../components";
import { forwardRef } from "react";
import { useBet } from "./hooks/useBet";

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const NumericFormatAdapter = forwardRef<NumericFormatProps, CustomProps>(
  function NumericFormatAdapter(props, ref) {
    const { onChange, ...other } = props;

    return (
      <NumericFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandSeparator
        valueIsNumericString
        prefix="R$ "
      />
    );
  }
);

export const Bet: React.FC = () => {
  const { control, errors, handleSubmit, isLoading } = useBet();

  return (
    <Card title="Apostar">
      <form onSubmit={handleSubmit}>
        <Stack gap={2}>
          <Input
            name="amount"
            color="success"
            size="lg"
            variant="soft"
            placeholder="Valor de aposta"
            control={control}
            error={errors?.amount?.message}
            slotProps={{
              input: {
                component: NumericFormatAdapter,
              },
            }}
          />

          <Button color="success" type="submit" loading={isLoading}>
            Apostar
          </Button>
        </Stack>
      </form>
    </Card>
  );
};
