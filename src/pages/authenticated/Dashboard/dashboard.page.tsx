import { Button } from "@mui/joy";
import { signOut } from "../../../utils/store";

export const Dashboard = () => {
  return <Button onClick={signOut}>Sair</Button>;
};
