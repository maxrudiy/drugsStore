import { Outlet } from "react-router-dom";
import { CartNavbar } from "../components/cart-navbar";
import { Box, Grid } from "@mui/material";

const CartLayout = () => {
  return (
    <Grid container direction="row" justifyContent="space-between" alignItems="stretch" spacing={3} sx={{ pt: 1 }}>
      <Grid item xs={2}>
        <Box display="flex" justifyContent="center">
          <CartNavbar />
        </Box>
      </Grid>
      <Grid item xs={8}>
        <Outlet />
      </Grid>
      <Grid item xs={2}>
        Customer data? Submit?
      </Grid>
    </Grid>
  );
};

export { CartLayout };
