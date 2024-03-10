import { Outlet } from "react-router-dom";
import { MainNavbar } from "../components/main-navbar";

const MainLayout = () => {
  return (
    <>
      <MainNavbar />
      <Outlet />
    </>
  );
};

export { MainLayout };
