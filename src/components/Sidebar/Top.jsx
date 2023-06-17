import React from "react";
import { sidebarExpand } from "./sidebar";

const Top = () => {
  return (
    <div className="top">
      <button className="logo">
        <img src="/logo.svg" />
        Dash
      </button>
      <button className="closeBtn" onClick={sidebarExpand}>
        <img src="/close.svg" />
      </button>
    </div>
  );
};

export default Top;
