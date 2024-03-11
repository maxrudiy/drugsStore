import { Box, Tabs } from "@mui/material";
import { useState } from "react";
import { LinkTab } from "./link-tab";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const MainNavbar = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
      <Tabs value={selectedTab} onChange={handleChange} aria-label="basic tabs example" centered>
        <LinkTab pathname="/" label="SHOPS" {...a11yProps(0)} />
        <LinkTab pathname="/cart" label="Shopping Cart" {...a11yProps(1)} />
        <LinkTab pathname="/orders-history" label="Orders History" {...a11yProps(2)} />
        <LinkTab pathname="/coupons" label="Coupons" {...a11yProps(3)} />
        <LinkTab pathname="manage-products" label="Manage Products" {...a11yProps(4)} />
      </Tabs>
    </Box>
  );
};

export { MainNavbar };
