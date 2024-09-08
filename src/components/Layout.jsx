import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="h-[100vh] mx-auto max-w-[1366px] md:max-w-[750px] sm:max-w-[650px] px-5 flex flex-col">
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
