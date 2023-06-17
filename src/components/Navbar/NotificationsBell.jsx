import React from "react";

const NotificationsBell = ({ user }) => {
  return (
    <button className="notificationsBell">
      <img src="/NotificationBell.svg" alt="Notification bell" />
      <div
        className="notification"
        style={{
          display: !user.notifications ? "none" : "flex",
        }}
      >
        &nbsp;
      </div>
    </button>
  );
};

export default NotificationsBell;
