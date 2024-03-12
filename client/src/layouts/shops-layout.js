import { Outlet } from "react-router-dom";
import { ShopsNavbar } from "../components/shops-navbar";
import { Grid, Box } from "@mui/material";
import MiniCart from "../components/mini-cart";

const ShopsLayout = () => {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="flex-start" spacing={2}>
      <Grid item xs={2}>
        <Box display="flex" justifyContent="center">
          <ShopsNavbar />
        </Box>
      </Grid>
      <Grid item xs={8}>
        <Outlet />
      </Grid>
      <Grid item xs={2}>
        <MiniCart />
      </Grid>
    </Grid>
  );
};

export { ShopsLayout };
