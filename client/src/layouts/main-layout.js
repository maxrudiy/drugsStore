import { Outlet } from "react-router-dom";
import { MainNavbar } from "../components/main-navbar";
import { Container } from "@mui/material";
import "@fontsource/roboto";

const MainLayout = () => {
  return (
    <Container maxWidth="xl" sx={{ minWidth: "1200px" }}>
      <MainNavbar />
      <Outlet />
    </Container>
  );
};

export { MainLayout };
