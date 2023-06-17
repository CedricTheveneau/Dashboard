import React from "react";

const Profile = ({ user }) => {
  return (
    <div className="profile">
      <img src={user.profilePic} alt="User's profile pic" />
      <div className="userInfo">
        <p>{user.fullName}</p>
        <p>{user.email}</p>
      </div>
      <button className="dropdown">
        <img src="/Chevron.svg" />
      </button>
    </div>
  );
};

export default Profile;
