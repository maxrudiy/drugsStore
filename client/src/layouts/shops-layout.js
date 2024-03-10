import { Outlet } from "react-router-dom";
import { ShopsNavbar } from "../components/shops-navbar";

const ShopsLayout = () => {
  return (
    <>
      <ShopsNavbar />
      <Outlet />
      ShopsMiniCart
    </>
  );
};

export { ShopsLayout };
