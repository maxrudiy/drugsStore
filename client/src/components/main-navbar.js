import { Grid, Tabs, AppBar } from "@mui/material";
import { LinkTab } from "./link-tab";
import { useSelector, useDispatch } from "react-redux";
import { setMainNavbarSelected } from "../store/other-slice";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

const MainNavbar = () => {
  const dispatch = useDispatch();
  const mainNavbarSelected = useSelector((state) => state.otherStore.mainNavbarSelected);
  const handleChange = (event, newValue) => {
    dispatch(setMainNavbarSelected(newValue));
  };

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>
      <Grid item xs={8}>
        <AppBar position="static" color="info">
          <Tabs
            value={mainNavbarSelected}
            onChange={handleChange}
            aria-label="tabs"
            centered
            variant="fullWidth"
            indicatorColor="primary"
            textColor="inherit"
          >
            <LinkTab pathname="/" label="SHOPS" {...a11yProps(0)} />
            <LinkTab pathname="/cart" label="Shopping Cart" {...a11yProps(1)} />
            <LinkTab pathname="/orders-history" label="Orders History" {...a11yProps(2)} />
            <LinkTab pathname="/coupons" label="Coupons" {...a11yProps(3)} />
            <LinkTab pathname="manage-products" label="Manage Products" {...a11yProps(4)} />
          </Tabs>
        </AppBar>
      </Grid>
    </Grid>
  );
};

export { MainNavbar };
