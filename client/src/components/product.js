import { Grid, Box, Card, CardActions, CardContent, CardMedia, Button, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch } from "react-redux";
import { setIsFavorite } from "../store/products-slice";
import { addToCart } from "../store/cart-slice";
import { removeFromCart } from "../store/cart-slice";

const Product = ({ product, isFavorite }) => {
  const { _id, price, name, description, image } = product;

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(product));
  };

  const removeFromCartHandler = () => {
    dispatch(removeFromCart(_id));
  };

  return (
    <Card sx={{ maxWidth: 220 }}>
      <CardMedia sx={{ height: 100 }} image={`data:image/jpeg;base64,${image}`} title={name} />
      <CardContent>
        <Typography gutterBottom variant="h9" component="span">
          {name} - {price}$
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Grid container direction="row" justifyContent="center" alignItems="center">
          <Grid item xs={4}>
            <Button size="small" onClick={addToCartHandler}>
              Add to Cart
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button size="small" onClick={removeFromCartHandler}>
              Remove from Cart
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <FavoriteIcon
                onClick={() => dispatch(setIsFavorite({ id: _id, isFavorite: !isFavorite }))}
                color={isFavorite ? "primary" : "disabled"}
              />
            </Box>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

export { Product };
