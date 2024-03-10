import { Box, Tabs } from "@mui/material";
import { useState } from "react";
import { LinkTab } from "./link-tab";

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const ShopsNavbar = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  return (
    <Box sx={{ flexGrow: 1, bgcolor: "background.paper", display: "flex", height: 224 }}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={selectedTab}
        onChange={handleChange}
        aria-label="vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <LinkTab pathname="/products/drugs24" label="DRUGS24" {...a11yProps(0)} />
        <LinkTab pathname="/products/pharmacy" label="PHARMACY" {...a11yProps(1)} />
        <LinkTab pathname="/products/shop1" label="SHOP1" {...a11yProps(2)} />
        <LinkTab pathname="/products/shop2" label="SHOP2" {...a11yProps(3)} />
      </Tabs>
    </Box>
  );
};

export { ShopsNavbar };
