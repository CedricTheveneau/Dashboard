import React from "react";
import { user, connectedUsers } from "../../data/Navbar.js";
import ConnectedPeople from "./ConnectedPeople.jsx";
import NotificationsBell from "./NotificationsBell.jsx";

const RightPart = () => {
  return (
    <div className="rightPart">
      <ConnectedPeople connectedUsers={connectedUsers} />
      <div className="separator">&nbsp;</div>
      <NotificationsBell user={user} />
    </div>
  );
};

export default RightPart;
