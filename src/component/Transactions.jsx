import React, { useState } from "react";
import SummaryStats from "./SummaryStats";
import TransactionFilters from "./TransactionFilters";
import TransactionTable from "./TransactionTable";

const Transactions = () => {
  const [search, setSearch] = useState("");
  const [transactions, setTransactions] = useState([
    {
      id: "TXN001",
      user: "Vipul ",
      date: "2024-10-20",
      amount: 150,
      status: "Completed",
    },
    {
      id: "TXN002",
      user: "Vikas Kumar",
      date: "2024-10-07",
      amount: 1500,
      status: "Completed",
    },
    {
      id: "TXN003",
      user: "Vivek",
      date: "2024-10-22",
      amount: 1350,
      status: "Pending",
    },
  ]);

  const handleSearchChange = (event) => setSearch(event.target.value);

  return (
    <div className="p-6">
      <h1 className="mb-4 text-2xl font-semibold">Transactions</h1>
      <SummaryStats transactions={transactions} />
      <div className="flex flex-col items-center justify-between my-4 md:flex-row">
        <input
          type="text"
          placeholder="Search by user or ID"
          value={search}
          onChange={handleSearchChange}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg md:mb-0 md:mr-4 md:w-1/3"
        />
        <TransactionFilters />
      </div>
      <TransactionTable transactions={transactions} />
    </div>
  );
};

export default Transactions;
