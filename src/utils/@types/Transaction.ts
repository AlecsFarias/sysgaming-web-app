export type Transaction = {
  id: string;
  createdAt: Date;
  amount: number;
  type: "cancel" | "win" | "bet";
};

export const transactionTypes = ["cancel", "win", "bet"];
