import React from "react";
import "./Navbar.css";
import LeftPart from "./LeftPart";
import RightPart from "./RightPart";

const Navbar = () => {
  return (
    <div className="navbar">
      <LeftPart />
      <RightPart />
    </div>
  );
};

export default Navbar;
