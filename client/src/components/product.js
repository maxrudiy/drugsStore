import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid, Box } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector, useDispatch } from "react-redux";
// import { addToCart, removeFromCart } from "../../../store/cart-slice";
// import { setFavoritesProducts } from "../../../store/products-slice";
import { useEffect, useState } from "react";

const Product = ({ product }) => {
  const { _id, price, name, description, image } = product;
  const [favToggled, setFavToggled] = useState(false);
  const products = useSelector((state) => state.products);

  const dispatch = useDispatch();

  const addToCartHandler = () => {
    //dispatch(addToCart({ productId: _id, price, name }));
  };

  const removeFromCartHandler = () => {
    //dispatch(removeFromCart({ productId: _id }));
  };

  //   useEffect(() => {
  //     products.favorites.includes(_id) ? setFavToggled(true) : setFavToggled(false);
  //   }, [products]);

  //   useEffect(() => {
  //     favToggled
  //       ? dispatch(setFavoritesProducts([...products.favorites, _id]))
  //       : dispatch(setFavoritesProducts(products.favorites.filter((item) => item !== _id)));
  //   }, [favToggled]);

  return (
    <Card sx={{ maxWidth: 230 }}>
      <CardMedia sx={{ height: 140 }} image={`data:image/jpeg;base64,${image}`} title={name} />
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
              <FavoriteIcon onClick={() => setFavToggled(!favToggled)} color={favToggled ? "primary" : "disabled"} />
            </Box>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

export { Product };
