export type Bet = {
  id: string;
  createdAt: Date;
  amount: number;
  winAmount: number;
  status: "win" | "lost" | "canceled";
};

export const betStatuses = ["win", "lost", "canceled"];
