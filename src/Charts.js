import React, { useState, useEffect } from "react";
import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Charts = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Contoh penggunaan useEffect untuk fetching data
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:1213/api/DataDataFacopi/GetKeuanganFacopi"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setChartData(data.Data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="charts">
      <h2>Charts</h2>
      <div className="chart">
        <ResponsiveContainer width="100%" height={400}>
          <RechartsBarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Keterangan" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="Total Penjualan" fill="#8884d8" />
            <Bar dataKey="Penjualan Bersih" fill="Red" />
            <Bar dataKey="Pemasukan Month" fill="Blue" />
            <Bar dataKey="Pemasukan Week" fill="Green" />
          </RechartsBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Charts;
