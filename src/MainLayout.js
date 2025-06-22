import React from "react";
import Navbar from "./comman_component/Navbar";
import Footer from "./comman_component/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
