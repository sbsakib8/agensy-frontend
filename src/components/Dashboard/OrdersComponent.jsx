"use client";

import React from "react";

export default function OrdersComponent() {
  const orders = [
    {
      id: "#10245",
      client: "Sarah Khan",
      company: "ABC Corp",
      package: "SEO Basic",
      amount: "$500",
      payment: "Unpaid",
      status: "Pending Payment",
      assigned: "-",
      delivery: "May 12, 2024",
    },
    {
      id: "#10244",
      client: "Mehedi Hasan",
      company: "Creative Studio",
      package: "Web Design Pro",
      amount: "$1200",
      payment: "Paid",
      status: "Active",
      assigned: "Rajib Ahmed",
      delivery: "Apr 28, 2024",
    },
    {
      id: "#10243",
      client: "Alina Roy",
      company: "Saralt Khan",
      package: "Branding Package",
      amount: "$3000",
      payment: "Pending",
      status: "In Review",
      assigned: "Sarah Khan",
      delivery: "Apr 25, 2024",
    },
    {
      id: "#10242",
      client: "Rajib Ahmed",
      company: "—",
      package: "Monthly Retainer",
      amount: "$2000",
      payment: "Paid",
      status: "Completed",
      assigned: "Mehedi Hasan",
      delivery: "Today",
    },
  ];

  const statusColor = (status) => {
    switch (status) {
      case "Pending Payment":
        return "bg-yellow-500/20 text-yellow-400";
      case "Active":
        return "bg-blue-500/20 text-blue-400";
      case "In Review":
        return "bg-orange-500/20 text-orange-400";
      case "Completed":
        return "bg-green-500/20 text-green-400";
      default:
        return "bg-gray-500/20 text-gray-400";
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Page Title */}
      <div>
        <h1 className="text-2xl font-bold text-white">Orders</h1>
        <p className="text-gray-400 text-sm">
          Manage all agency package orders here
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {[
          { label: "Total Orders", value: "185" },
          { label: "Active Orders", value: "52" },
          { label: "Pending Payment", value: "12" },
          { label: "Completed", value: "92" },
          { label: "Monthly Revenue", value: "$23,540" },
        ].map((item, i) => (
          <div
            key={i}
            className="rounded-xl bg-[#0a0f23]/60 backdrop-blur-md border border-blue-500/20  p-4"
          >
            <p className="text-gray-400 text-sm">{item.label}</p>
            <h2 className="text-xl font-semibold text-white mt-1">
              {item.value}
            </h2>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        <input
          type="text"
          placeholder="Search orders..."
          className="bg-[#101a28] border border-white/10 text-white px-4 py-2 rounded-lg outline-none w-full sm:w-64"
        />

        {["Package", "Status", "Payment", "Assigned To", "Date Range"].map(
          (f) => (
            <select
              key={f}
              className="bg-white/5 border border-white/10  text-gray-300 px-3 py-2 rounded-lg"
            >
              <option>{f}</option>
            </select>
          )
        )}

        <button className="ml-auto bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
          + Create Order
        </button>
      </div>

      {/* Orders Table */}
      <div className="overflow-x-auto rounded-xl border border-white/10">
        <table className="w-full text-sm">
          <thead className="bg-white/5 text-gray-300">
            <tr>
              <th className="px-4 py-3 text-left">Order ID</th>
              <th className="px-4 py-3 text-left">Client</th>
              <th className="px-4 py-3 text-left">Package</th>
              <th className="px-4 py-3 text-left">Amount</th>
              <th className="px-4 py-3 text-left">Payment</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Assigned</th>
              <th className="px-4 py-3 text-left">Delivery</th>
              <th className="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {orders.map((order, i) => (
              <tr key={i} className="hover:bg-white/5">
                <td className="px-4 py-3 text-blue-400 font-medium">
                  {order.id}
                </td>
                <td className="px-4 py-3">
                  <p className="text-white">{order.client}</p>
                  <p className="text-gray-400 text-xs">{order.company}</p>
                </td>
                <td className="px-4 py-3 text-gray-300">
                  {order.package}
                </td>
                <td className="px-4 py-3 text-white">{order.amount}</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 rounded-full text-xs bg-white/10 text-gray-300">
                    {order.payment}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${statusColor(
                      order.status
                    )}`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-gray-300">
                  {order.assigned}
                </td>
                <td className="px-4 py-3 text-gray-300">
                  {order.delivery}
                </td>
                <td className="px-4 py-3">
                  <button className="text-blue-400 hover:underline">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
