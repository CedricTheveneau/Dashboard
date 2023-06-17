import React from "react";
import { navBtnClicked } from "./sidebar";

const SubMenu = ({ content }) => {
  return (
    <div className={content.class}>
      <h3>{content.h3}</h3>
      {content.buttons.map((item) => (
        <button className="navBtn" onClick={navBtnClicked}>
          <img src={item.icon} />
          {item.text}
          <span
            className="notifications"
            style={{
              display: !item.notifications ? "none" : "flex",
            }}
          >
            {item.notifications}
          </span>
        </button>
      ))}
    </div>
  );
};

export default SubMenu;
