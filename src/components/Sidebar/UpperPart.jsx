import React from "react";
import SubMenu from "./SubMenu";
import { mainMenu, workspace, general } from "../../data/Sidebar.js";
import Top from "./Top";

const UpperPart = () => {
  return (
    <div className="upperPart">
      <Top />
      <SubMenu content={mainMenu} />
      <SubMenu content={workspace} />
      <SubMenu content={general} />
    </div>
  );
};

export default UpperPart;
