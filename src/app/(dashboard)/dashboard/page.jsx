"use client";

import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { useContext } from "react";
import apps from "@/data/data.json";
import { installAppContext } from "@/context/InstallContext";

const Dashboard = () => {
  const { install } = useContext(installAppContext);

  const uninstalledAppsLength = apps.length - install.length;

  const data = [
    { name: "Installed", value: install.length, fill: "#0088FE" },
    { name: "Uninstalled", value: uninstalledAppsLength, fill: "#FF8042" },
  ];

  return (
    <div className=" my-10 shadow p-10 rounded-md border border-slate-300 container mx-auto">
      <h2 className="font-semibold text-3xl mb-16 text-center">
        Installed and uninstalled apps
      </h2>
      <PieChart
        style={{
          width: "100%",
          maxWidth: "300px",
          maxHeight: "50vh",
          margin: "auto",
          aspectRatio: 1,
        }}
        responsive
      >
        <Pie
          data={data}
          innerRadius="80%"
          outerRadius="100%"
          // Corner radius is the rounded edge of each pie slice
          cornerRadius="50%"
          fill="#8884d8"
          // padding angle is the gap between each pie slice
          paddingAngle={5}
          dataKey="value"
          isAnimationActive={true}
        />
        <Legend />
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default Dashboard;
