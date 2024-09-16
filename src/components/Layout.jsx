import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useAuthContext } from "../context/authContext";

export const Layout = () => {
  return (
    <div className="h-[100vh] mx-auto max-w-[1366px] md:max-w-[750px] sm:max-w-[650px] px-5 flex flex-col">
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export const ProtectedLayout = () => {
  const { currentUser } = useAuthContext();
  if (!currentUser) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className="h-[100vh] mx-auto max-w-[1366px] md:max-w-[750px] sm:max-w-[650px] px-5 flex flex-col">
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};
