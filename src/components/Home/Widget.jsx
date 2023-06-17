import React from "react";
import "./Widget.css";
import { scheduleComponents } from "../../data/Home";
import ComponentsBox from "./ComponentsBox";

const Widget = ({ info }) => {
  return (
    <div className={info.class}>
      <div className="title">
        <h3>{info.title}</h3>
        <button className="cta">
          {info.callToAction} &nbsp; <img src="/CtaChevron.svg" />
        </button>{" "}
      </div>
      <ComponentsBox />
    </div>
  );
};

export default Widget;
