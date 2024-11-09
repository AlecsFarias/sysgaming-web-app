import {
  ListItem,
  ListItemButton,
  ListItemContent,
  Typography,
} from "@mui/joy";

export type ItemProps = {
  name: string;
  icon: React.ReactNode;
  route: string;
};

export const Item: React.FC<ItemProps> = ({ name, icon, route }) => {
  console.log(route);

  return (
    <ListItem>
      <ListItemButton selected>
        {icon}
        <ListItemContent>
          <Typography level="title-sm">{name}</Typography>
        </ListItemContent>
      </ListItemButton>
    </ListItem>
  );
};
