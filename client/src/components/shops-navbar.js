import { List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import MedicationIcon from "@mui/icons-material/Medication";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import SoupKitchenIcon from "@mui/icons-material/SoupKitchen";
import { LinkListItem } from "./link-list-item";

const ShopsNavbar = () => {
  return (
    <List>
      <LinkListItem pathname="/products/drugs24" disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <MedicationIcon />
          </ListItemIcon>
          <ListItemText secondary="DRUGS24" />
        </ListItemButton>
      </LinkListItem>
      <LinkListItem pathname="/products/pharmacy" disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <MedicalServicesIcon />
          </ListItemIcon>
          <ListItemText secondary="PHARMACY" />
        </ListItemButton>
      </LinkListItem>
      <LinkListItem pathname="/products/shop1" disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <RamenDiningIcon />
          </ListItemIcon>
          <ListItemText secondary="SHOP1" />
        </ListItemButton>
      </LinkListItem>
      <LinkListItem pathname="/products/shop2" disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <SoupKitchenIcon />
          </ListItemIcon>
          <ListItemText secondary="SHOP2" />
        </ListItemButton>
      </LinkListItem>
    </List>
  );
};

export { ShopsNavbar };
