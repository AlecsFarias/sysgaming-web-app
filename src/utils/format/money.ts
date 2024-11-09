export const formatMoney = (value: number, currency = "BRL") => {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency,
  });
};
