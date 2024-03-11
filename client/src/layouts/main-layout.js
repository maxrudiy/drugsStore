import { Outlet } from "react-router-dom";
import { MainNavbar } from "../components/main-navbar";
import { Container } from "@mui/material";
import "@fontsource/roboto";

const MainLayout = () => {
  return (
    <Container maxWidth="xl">
      <MainNavbar />
      <Outlet />
    </Container>
  );
};

export { MainLayout };
