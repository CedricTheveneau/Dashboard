import React from "react";
import "./Sidebar.css";
import LowerPart from "./LowerPart";
import UpperPart from "./UpperPart";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <UpperPart />
      <LowerPart />
    </div>
  );
};

export default Sidebar;
