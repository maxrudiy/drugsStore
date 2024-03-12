import { Outlet } from "react-router-dom";
import { ShopsNavbar } from "../components/shops-navbar";
import { Grid, Box } from "@mui/material";
import MiniCart from "../components/mini-cart";

const ShopsLayout = () => {
  return (
    <Grid container direction="row" justifyContent="space-between" alignItems="stretch" spacing={0} sx={{ pt: 1 }}>
      <Grid item xs={2}>
        <Box display="flex" justifyContent="center" minHeight="40vh">
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
