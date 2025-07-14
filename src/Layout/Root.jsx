import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
const Root = () => {
  AOS.init();

  return (
    <div className="overflow-x-hidden min-h-screen bg-error">
      <header className="bg-warning">
        <Navbar></Navbar>
      </header>
      <div className="min-h-[calc(100vh-488px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
