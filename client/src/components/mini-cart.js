import { useDispatch, useSelector } from "react-redux";
import { Typography, List, ListItem, ListItemText, Button, Box, TextField, Grid } from "@mui/material";
import { addToCartAmount, removeFromCart } from "../store/cart-slice.js";
import { Link } from "react-router-dom";
import { setMainNavbarSelected } from "../store/other-slice.js";

const MiniCart = () => {
  const dispatch = useDispatch();
  const cartStore = useSelector((state) => state.cartStore);
  const productsInCart = useSelector((state) => state.cartStore.productsInCart);

  const numProductsInCart = () => {
    const reducer = (sum, item) => sum + item.quantity;
    return productsInCart.reduce(reducer, 0);
  };

  const addToCartHandler = (e, product) => {
    dispatch(addToCartAmount({ product, quantity: Number(e.target.value) }));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <Box textAlign="center">
      <Typography component="div" align="center">
        <div>Items in Cart: {numProductsInCart()}</div>
        <div>Cost: {cartStore.totalCost}$</div>
      </Typography>
      <List dense={true}>
        {productsInCart.map(({ product, quantity }, index) => (
          <ListItem key={index}>
            <Grid container direction="column" justifyContent="center" alignItems="center">
              <Grid item>
                <ListItemText primary={`${product.name} - ${product.price * quantity}$`} />
              </Grid>
              <Grid container direction="row" justifyContent="center" alignItems="center" spacing={1}>
                <Grid item xs={6}>
                  <TextField
                    margin="dense"
                    type="number"
                    onChange={(e) => addToCartHandler(e, product)}
                    size="small"
                    value={quantity}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Button variant="outlined" onClick={() => removeFromCartHandler(product._id)} color="secondary">
                    Remove
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </ListItem>
        ))}
      </List>

      <Button
        variant="outlined"
        component={Link}
        to="/cart"
        disabled={!numProductsInCart() && true}
        onClick={() => {
          dispatch(setMainNavbarSelected(1));
        }}
      >
        To Cart
      </Button>
    </Box>
  );
};

export default MiniCart;
