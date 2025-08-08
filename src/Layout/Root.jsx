import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
const Root = () => {
  AOS.init();
  const navigation = useNavigation();
  const load = navigation.state === "loading";

  return ( 
    <div className="overflow-x-hidden xl:overflow-visible min-h-screen bg-error">
      <header className="bg-warning fixed w-full z-50 top-0">
        <Navbar></Navbar>
      </header>

      {(load) ? (
        <div className="flex items-center justify-center min-h-[calc(100vh-400px)]">
          <span className="loading loading-spinner loading-xl"></span>
        </div>
      ) : (
        <div className="min-h-[calc(100vh-400px)]">
        <Outlet></Outlet>
      </div> 
      )}
      <Footer></Footer>
    </div>
  );
};

export default Root;
