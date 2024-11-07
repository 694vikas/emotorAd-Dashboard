import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-blue-700 text-white flex flex-col justify-between p-6">
      {/* Title */}
      <div className="text-2xl font-bold mb-4">Board.</div>

      {/* Menu Items */}
      <div className="space-y-2">
        <Link to="/dashboard">
          <div className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded cursor-pointer">
            <span>Dashboard</span>
          </div>
        </Link>
        <Link to="/transactions">
          <div className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded cursor-pointer">
            <span>Transactions</span>
          </div>
        </Link>
        <Link to="/schedules">
          <div className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded cursor-pointer">
            <span>Schedules</span>
          </div>
        </Link>
        <Link to="/users">
          <div className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded cursor-pointer">
            <span>Users</span>
          </div>
        </Link>
        <Link to="/settings">
          <div className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded cursor-pointer">
            <span>Settings</span>
          </div>
        </Link>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-700 pt-4 space-y-2">
        <div className="hover:bg-gray-700 p-2 rounded cursor-pointer">
          <p>Help</p>
        </div>
        <div className="hover:bg-gray-700 p-2 rounded cursor-pointer">
          <p>Contact Us</p>
        </div>
      </div>
    </div>
  );
}
