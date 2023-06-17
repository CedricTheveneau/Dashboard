import React from "react";
import { user } from "../../data/Navbar.js";
import Profile from "./Profile.jsx";

const LeftPart = () => {
  return (
    <div className="leftPart">
      <Profile user={user} />
      <div className="separator">&nbsp;</div>
      <div className="searchbar">
        <img src="/SearchIcon.svg" alt="Searchbar icon" />
        <input
          type="search"
          name="searchbar"
          id="searchbar"
          placeholder="Search..."
        />
      </div>
    </div>
  );
};

export default LeftPart;
