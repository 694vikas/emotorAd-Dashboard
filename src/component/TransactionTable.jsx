import React from "react";

const TransactionTable = ({ transactions }) => {
  return (
    <div className="overflow-auto rounded-lg shadow-md">
      <table className="w-full bg-white">
        <thead className="bg-gray-200 border-b">
          <tr>
            <th className="p-4 font-semibold text-left">Transaction ID</th>
            <th className="p-4 font-semibold text-left">User</th>
            <th className="p-4 font-semibold text-left">Date</th>
            <th className="p-4 font-semibold text-left">Amount</th>
            <th className="p-4 font-semibold text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((txn) => (
            <tr key={txn.id} className="border-b hover:bg-gray-100">
              <td className="p-4">{txn.id}</td>
              <td className="p-4">{txn.user}</td>
              <td className="p-4">{txn.date}</td>
              <td className="p-4">${txn.amount}</td>
              <td className="p-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    txn.status === "Completed"
                      ? "bg-green-100 text-green-700"
                      : txn.status === "Pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {txn.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
