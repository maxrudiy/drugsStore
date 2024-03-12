import { List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { LinkListItem } from "./link-list-item";
import MapIcon from "@mui/icons-material/Map";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartNavbar = () => {
  return (
    <List>
      <LinkListItem pathname="/cart" disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText secondary="SUBMIT ORDER" />
        </ListItemButton>
      </LinkListItem>
      <LinkListItem pathname="/cart/map" disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <MapIcon />
          </ListItemIcon>
          <ListItemText secondary="MAP" />
        </ListItemButton>
      </LinkListItem>
    </List>
  );
};

export { CartNavbar };
