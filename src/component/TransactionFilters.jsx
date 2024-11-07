import React from "react";

const TransactionFilters = () => {
  return (
    <div className="flex space-x-4">
      <select className="px-4 py-2 border border-gray-300 rounded-lg">
        <option value="">Status</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
        <option value="failed">Failed</option>
      </select>
      <input
        type="date"
        className="px-4 py-2 border border-gray-300 rounded-lg"
      />
    </div>
  );
};

export default TransactionFilters;
