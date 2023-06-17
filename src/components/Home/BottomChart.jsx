import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Apr 21",
    male: 20,
    female: 20,
  },
  {
    name: "May 21",
    male: 50,
    female: 30,
  },
  {
    name: "Jun 21",
    male: 68,
    female: 120,
  },
  {
    name: "Jul 21",
    male: 68,
    female: 75,
  },
  {
    name: "Aug 21",
    male: 60,
    female: 65,
  },
  {
    name: "Sep 21",
    male: 45,
    female: 125,
  },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip" style={{ display: "none" }}>
        &nbsp;
      </div>
    );
  }

  return null;
};

const BottomChart = () => {
  return (
    <ResponsiveContainer
      maxHeight={500}
      width="100%"
      margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
    >
      <BarChart
        width={400}
        height={400}
        margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
        data={data}
        cursor="pointer"
      >
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#8e8e8e" }}
          style={{
            left: 20,
            fontSize: "14px",
            fontWeight: "400",
            transform: "translateY(10px) ",
          }}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#8e8e8e" }}
          tickCount={4}
          domain={[0, 150]}
          tickFormatter={(tick) => `${tick}K`}
          style={{
            fontSize: "12px",
            fontWeight: "400",
            textAlign: "left",
            transform: "translateX(-20px) ",
          }}
        />
        <Tooltip
          content={CustomTooltip}
          wrapperStyle={{ outline: "none" }}
          cursor={{ fill: "#ffffff" }}
        />
        <Bar dataKey="male" fill="#017EFA66" radius={[5, 5, 0, 0]} />
        <Bar dataKey="female" fill="#51CBFF66" radius={[5, 5, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BottomChart;
