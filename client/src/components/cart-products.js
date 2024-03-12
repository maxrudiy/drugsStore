import { useSelector } from "react-redux";
import { Product } from "./product";
import { Grow, Grid, Box } from "@mui/material";

function CartProducts() {
  const cartStore = useSelector((state) => state.cartStore);
  const isFavorite = useSelector((state) => state.productsStore.isFavorite);

  return (
    <Grid container direction="column" justifyContent="flex-start" alignItems="stretch" spacing={2}>
      <Grid item minHeight="70vh">
        <Grow in>
          <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start" spacing={2}>
            {cartStore.productsInCart.map((item, index) => (
              <Grid item key={index}>
                <Product product={item.product} isFavorite={isFavorite.includes(item.product._id)} />
              </Grid>
            ))}
          </Grid>
        </Grow>
      </Grid>
      <Grid item>
        <Box display="flex" justifyContent="center" minWidth="100vh">
          Pagination?
        </Box>
      </Grid>
    </Grid>
  );
}

export { CartProducts };
