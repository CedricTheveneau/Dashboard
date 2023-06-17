import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar.jsx";
import "./Layout.css";
import Navbar from "../Navbar/Navbar";

const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
