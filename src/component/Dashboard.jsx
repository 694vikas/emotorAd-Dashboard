// Dashboard.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { motion } from "framer-motion";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/carts")
      .then((response) => {
        setData(response.data.carts);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Calculate additional statistics
  const totalIncome = data.reduce((sum, cart) => sum + cart.total, 0);
  const totalUsers = data.length;
  const dailySales = totalIncome / (totalUsers || 1);

  const chartData = {
    labels: data.map((cart) => `Cart ${cart.id}`),
    datasets: [
      {
        label: "Total Amount",
        data: data.map((cart) => cart.total),
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Total Amount per Transaction",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="p-6 space-y-6 rounded-lg shadow-lg bg-gray-50">
      <h2 className="mb-4 text-2xl font-semibold text-gray-800">Dashboard</h2>

      {/* Stat Cards with animation */}
      <motion.div
        className="grid grid-cols-1 gap-4 md:grid-cols-3"
        initial="hidden"
        animate="visible"
        variants={cardVariants}
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.div
          variants={cardVariants}
          className="p-4 text-center bg-white rounded-lg shadow-md"
        >
          <h3 className="text-xl font-semibold text-gray-700">Total Users</h3>
          <p className="text-2xl font-bold text-blue-600">{totalUsers}</p>
        </motion.div>
        <motion.div
          variants={cardVariants}
          className="p-4 text-center bg-white rounded-lg shadow-md"
        >
          <h3 className="text-xl font-semibold text-gray-700">Total Income</h3>
          <p className="text-2xl font-bold text-green-600">
            ${totalIncome.toFixed(2)}
          </p>
        </motion.div>
        <motion.div
          variants={cardVariants}
          className="p-4 text-center bg-white rounded-lg shadow-md"
        >
          <h3 className="text-xl font-semibold text-gray-700">Daily Sales</h3>
          <p className="text-2xl font-bold text-purple-600">
            ${dailySales.toFixed(2)}
          </p>
        </motion.div>
      </motion.div>

      {loading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : (
        <motion.div
          className="max-w-xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Bar data={chartData} options={options} />
        </motion.div>
      )}
    </div>
  );
}

export default Dashboard;
