import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import Transactions from "./Transactions";
import Schedules from "./Schedules";
import Users from "./Users";
import Settings from "./Settings";

export default function Layout() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />

        <div className="flex-1 p-6">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/schedules" element={<Schedules />} />
            <Route path="/users" element={<Users />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
