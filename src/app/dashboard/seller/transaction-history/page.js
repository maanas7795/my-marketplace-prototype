"use client";
import React from "react";

const dummyTransactions = [
  {
    id: "TXN-12098",
    date: "25 July 2025",
    productName: "Bluetooth Speaker",
    amount: "₹1,200",
    buyerId: "Buyer #321XX",
    status: "Success",
  },
  {
    id: "TXN-12100",
    date: "24 July 2025",
    productName: "Wireless Mouse",
    amount: "₹599",
    buyerId: "Buyer #298ZZ",
    status: "Pending",
  },
  {
    id: "TXN-12105",
    date: "22 July 2025",
    productName: "Smart Watch",
    amount: "₹2,999",
    buyerId: "Buyer #112AA",
    status: "Failed",
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case "Success":
      return "text-green-600";
    case "Pending":
      return "text-yellow-600";
    case "Failed":
      return "text-red-600";
    default:
      return "text-gray-600";
  }
};

export default function TransactionHistory() {
  return (
    <div className="min-h-screen px-6 py-10 bg-white text-black">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Transaction History
      </h1>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
  <div className="bg-green-50 border border-green-400 rounded-xl p-4 shadow-md ring-2 ring-green-300 hover:ring-4 transition duration-300">
    <h2 className="text-lg font-semibold text-green-800">Transaction ID</h2>
    <p className="text-sm text-green-600">Payment: ₹500 - Successful</p>
  </div>
</div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyTransactions.map((txn) => (
          <div
            key={txn.id}
            className="border shadow-md rounded-xl p-5 hover:shadow-lg transition duration-300"
          >
            <p className="text-sm text-gray-500 mb-1">{txn.date}</p>
            <h2 className="text-xl font-semibold mb-2">{txn.productName}</h2>
            <p className="text-gray-700 mb-1">
              <strong>Transaction ID:</strong> {txn.id}
            </p>
            <p className="text-gray-700 mb-1">
              <strong>Amount:</strong> {txn.amount}
            </p>
            <p className="text-gray-700 mb-1">
              <strong>Buyer ID:</strong> {txn.buyerId}
            </p>
            <p className={`font-semibold ${getStatusColor(txn.status)}`}>
              {txn.status}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-gray-400">
        * This is demo data. Not actual transactions.
      </p>
    </div>
  );
}
