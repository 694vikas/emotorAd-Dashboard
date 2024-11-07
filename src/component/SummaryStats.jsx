import React from "react";

const SummaryStats = ({ transactions }) => {
  const totalIncome = transactions.reduce((sum, txn) => sum + txn.amount, 0);
  const totalTransactions = transactions.length;
  const pendingTransactions = transactions.filter(
    (txn) => txn.status === "Pending"
  ).length;

  return (
    <div className="grid grid-cols-1 gap-4 mb-6 md:grid-cols-3">
      <div className="p-4 bg-blue-100 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold">Total Transactions</h2>
        <p className="text-2xl font-bold">{totalTransactions}</p>
      </div>
      <div className="p-4 bg-green-100 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold">Total Income</h2>
        <p className="text-2xl font-bold">${totalIncome}</p>
      </div>
      <div className="p-4 bg-yellow-100 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold">Pending Transactions</h2>
        <p className="text-2xl font-bold">{pendingTransactions}</p>
      </div>
    </div>
  );
};

export default SummaryStats;
