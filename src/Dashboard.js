import React from "react";
import BarChart from "./BarChart";
import PieChart from "./PieChart";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <p>Welcome to the dashboard!</p>
      <BarChart />
      <PieChart />
    </div>
  );
};

export default Dashboard;
