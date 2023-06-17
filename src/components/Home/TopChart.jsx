import React from "react";
import "./TopChart.css";
import {
  LineChart,
  ResponsiveContainer,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { name: "Jan", hpr: 55, mor: 110 },
  { name: "Feb", hpr: 75, mor: 100 },
  { name: "Mar", hpr: 65, mor: 140 },
  { name: "Apr", hpr: 55, mor: 125 },
  { name: "May", hpr: 78, mor: 105 },
  { name: "Jun", hpr: 80, mor: 132 },
  { name: "Jul", hpr: 88, mor: 115 },
  { name: "Aug", hpr: 82, mor: 135 },
  { name: "Sep", hpr: 50, mor: 110 },
  { name: "Oct", hpr: 85, mor: 120 },
  { name: "Nov", hpr: 83, mor: 138 },
  { name: "Dec", hpr: 92, mor: 130 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">
          <span>{`${payload[0].value}K`}</span>
          {` : High paid reach`}
        </p>
        <p className="desc">
          <span>{`${payload[1].value}K`}</span>
          {` : Med organic reach`}
        </p>
      </div>
    );
  }

  return null;
};

const TopChart = () => {
  return (
    <ResponsiveContainer
      maxHeight={400}
      width="100%"
      margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
    >
      <LineChart
        width={400}
        height={400}
        data={data}
        margin={{ top: 10, left: 10, right: 10, bottom: 10 }}
        cursor="pointer"
      >
        <Line
          strokeWidth={2}
          dataKey="hpr"
          stroke="#017EFA"
          dot={{ r: 4, fill: "#017EFA" }}
          activeDot={{
            r: 7,
            fill: "#ffffff",
            stroke: "#017EFA",
            strokeWidth: 3,
          }}
        />
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#8e8e8e" }}
          style={{
            left: 20,
            fontSize: "14px",
            fontWeight: "400",
            transform: "translateY(20px) ",
          }}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#8e8e8e" }}
          tickCount={5}
          domain={[0, 200]}
          tickFormatter={(tick) => `${tick}K`}
          style={{
            fontSize: "12px",
            fontWeight: "400",
            textAlign: "left",
            transform: "translateX(-30px) ",
          }}
        />
        <Tooltip
          cursor={false}
          content={CustomTooltip}
          wrapperStyle={{ outline: "none" }}
        />
        <Line
          strokeWidth={2}
          dataKey="mor"
          stroke="#FD1F9B"
          dot={{ r: 4, fill: "#FD1F9B" }}
          activeDot={{
            r: 7,
            fill: "#ffffff",
            stroke: "#FD1F9B",
            strokeWidth: 3,
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default TopChart;
