import { useSelector } from "react-redux";
import { MyPagination } from "./my-pagination";
import { Product } from "./product";
import { Grow, Grid, CircularProgress, Box } from "@mui/material";
import { FilterBar } from "./filters-bar";

function AllProducts() {
  const productsStore = useSelector((state) => state.productsStore);

  return (
    <Grid container direction="column" justifyContent="flex-start" alignItems="stretch" spacing={0}>
      <Grid item>
        <FilterBar />
      </Grid>
      <Grid item minHeight="70vh">
        {productsStore.loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
            <CircularProgress />
          </Box>
        ) : (
          <Grow in>
            <Grid container direction="row" justifyContent="space-around" alignItems="flex-start" spacing={2}>
              {productsStore.response.data.map((item, index) => (
                <Grid item key={index}>
                  <Product product={item} isFavorite={productsStore.isFavorite.includes(item._id)} />
                </Grid>
              ))}
            </Grid>
          </Grow>
        )}
      </Grid>
      <Grid item>
        <Box display="flex" justifyContent="center" minWidth="100vh">
          <MyPagination page={productsStore.response.currentPage} count={productsStore.response.numberOfPages} />
        </Box>
      </Grid>
    </Grid>
  );
}

export { AllProducts };
