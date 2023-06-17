import React from "react";

const ConnectedPeople = ({ connectedUsers }) => {
  return (
    <div className="connectedPeople">
      <div className="dot">&nbsp;</div>
      <p>Online</p>
      <div className="profilePics">
        {connectedUsers.users.map((item) => (
          <img src={item.profilePic} alt="Profile pic" className="profilePic" />
        ))}
      </div>
    </div>
  );
};

export default ConnectedPeople;
