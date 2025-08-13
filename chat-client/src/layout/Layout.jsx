import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import "./Layout.scss"; // Assuming you have a Layout.scss for styling
const Layout = () => {
  return (
    <>
      <Sidebar />
      <div className="client__main">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
