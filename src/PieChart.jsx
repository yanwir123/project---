import React, { useState, useEffect } from "react";
import {
  PieChart as RechartsPieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";
import "./PieChart.css";

const PieChart = () => {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:1213/api/DataDataFacopi/GetKeuanganFacopi"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setChartData(data.Data.slice(0, 6)); // Ambil 6 data pertama
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const formatLabel = (value) => {
    // Pastikan value adalah angka dan bukan NaN
    if (typeof value !== "number" || isNaN(value)) {
      return "";
    }
    return `${(value * 100).toFixed(2)}%`;
  };

  const colors = [
    "#8884d8",
    "#82ca9d",
    "#ffc658",
    "#ff7f50",
    "#0088FE",
    "#00C49F",
  ]; // Warna-warna yang berbeda

  const renderTooltipContent = (value) => {
    return <span>{`${value}%`}</span>;
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error.message}</div>;
  }

  return (
    <div className="pie-chart-container">
      <h2>Data Nasabah</h2>
      <div className="pie-chart">
        <ResponsiveContainer width="100%" height={600}>
          <RechartsPieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={0}
              outerRadius={250} // Sesuaikan ukuran lingkaran di sini
              fill="#8884d8"
              paddingAngle={5}
              dataKey="Total Penjualan"
              label={formatLabel}
              startAngle={180}
              endAngle={0}
              stroke="none" // Menghilangkan garis pada pie
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Pie>
            <Tooltip formatter={renderTooltipContent} />
          </RechartsPieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PieChart;
