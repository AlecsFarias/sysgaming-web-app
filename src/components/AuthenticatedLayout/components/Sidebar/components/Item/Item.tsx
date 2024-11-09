import {
  ListItem,
  ListItemButton,
  ListItemContent,
  Typography,
} from "@mui/joy";
import { Link, useLocation } from "react-router-dom";

export type ItemProps = {
  name: string;
  icon: React.ReactNode;
  route: string;
};

export const Item: React.FC<ItemProps> = ({ name, icon, route }) => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <ListItem component={Link} to={route}>
      <ListItemButton selected={pathname.includes(route)}>
        {icon}
        <ListItemContent>
          <Typography level="title-sm">{name}</Typography>
        </ListItemContent>
      </ListItemButton>
    </ListItem>
  );
};
