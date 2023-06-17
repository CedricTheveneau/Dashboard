import React from "react";
import Widget from "../components/Home/Widget";
import "./Home.css";
import { widgets } from "../data/Home";
import { user } from "../data/Navbar";
import TopChart from "../components/Home/TopChart";
import BottomChart from "../components/Home/BottomChart";

const Home = () => {
  return (
    <div className="home">
      <div className="topInfo">
        <h2>Dashboard</h2>
        <p>Welcome back, {user.fullName} !</p>
      </div>
      <div className="widgets">
        <div className="leftwidgets">
          {widgets.widget.map((info) => (
            <Widget info={info} />
          ))}
        </div>
        <div className="rightCharts">
          <div className="topChartInfo">&nbsp;</div>
          <TopChart />
          <div className="topChartInfo">&nbsp;</div>
          <BottomChart />
        </div>
      </div>
    </div>
  );
};

export default Home;
