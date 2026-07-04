"use client";

import { useMemo, useState } from "react";
import {
  ClipboardList,
  Search,
  CheckCircle2,
  XCircle,
  Clock3,
} from "lucide-react";

export default function LeaveManagementPage() {
  const [search, setSearch] = useState("");

  const [requests, setRequests] = useState([
    {
      id: 1,
      employee: "John Doe",
      department: "IT",
      leaveType: "Casual Leave",
      from: "2026-07-10",
      to: "2026-07-12",
      days: 3,
      reason: "Family Function",
      status: "Pending",
    },
    {
      id: 2,
      employee: "Alex Roy",
      department: "HR",
      leaveType: "Sick Leave",
      from: "2026-07-08",
      to: "2026-07-08",
      days: 1,
      reason: "Fever",
      status: "Approved",
    },
    {
      id: 3,
      employee: "Emma Watson",
      department: "Accounts",
      leaveType: "Earned Leave",
      from: "2026-07-15",
      to: "2026-07-18",
      days: 4,
      reason: "Vacation",
      status: "Pending",
    },
  ]);

  const filtered = useMemo(() => {
    return requests.filter(
      (item) =>
        item.employee.toLowerCase().includes(search.toLowerCase()) ||
        item.department.toLowerCase().includes(search.toLowerCase()) ||
        item.leaveType.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, requests]);

  const updateStatus = async (
    id: number,
    status: "Approved" | "Rejected"
  ) => {
    // Example API call
    /*
    await fetch(`http://localhost:5000/api/leaves/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status }),
    });
    */

    setRequests((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status } : item
      )
    );
  };

  const badge = (status: string) => {
    switch (status) {
      case "Approved":
        return "bg-green-500/20 text-green-400";
      case "Rejected":
        return "bg-red-500/20 text-red-400";
      default:
        return "bg-yellow-500/20 text-yellow-400";
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Header */}

      <div className="bg-slate-900 border-b border-slate-800">

        <div className="max-w-7xl mx-auto px-6 py-8">

          <h1 className="text-3xl font-bold flex items-center gap-3">
            <ClipboardList className="text-purple-400" />
            Leave Requests
          </h1>

          <p className="text-slate-400 mt-2">
            Review and approve employee leave applications.
          </p>

        </div>

      </div>

      <div className="max-w-7xl mx-auto p-6">

        {/* Summary */}

        <div className="grid md:grid-cols-3 gap-6 mb-8">

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

            <Clock3 className="text-yellow-400 w-10 h-10" />

            <p className="mt-4 text-slate-400">
              Pending Requests
            </p>

            <h2 className="text-3xl font-bold mt-2">
              {requests.filter((x) => x.status === "Pending").length}
            </h2>

          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

            <CheckCircle2 className="text-green-400 w-10 h-10" />

            <p className="mt-4 text-slate-400">
              Approved
            </p>

            <h2 className="text-3xl font-bold mt-2">
              {requests.filter((x) => x.status === "Approved").length}
            </h2>

          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

            <XCircle className="text-red-400 w-10 h-10" />

            <p className="mt-4 text-slate-400">
              Rejected
            </p>

            <h2 className="text-3xl font-bold mt-2">
              {requests.filter((x) => x.status === "Rejected").length}
            </h2>

          </div>

        </div>

        {/* Search */}

        <div className="relative mb-6">

          <Search className="absolute left-3 top-3 text-slate-400" />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search employee, department or leave type..."
            className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-3 outline-none focus:border-purple-500"
          />

        </div>

        {/* Table */}

        <div className="overflow-x-auto rounded-3xl border border-slate-800 bg-slate-900">

          <table className="w-full">

            <thead className="bg-slate-800">

              <tr>

                <th className="text-left px-6 py-4">Employee</th>
                <th className="text-left px-6 py-4">Department</th>
                <th className="text-left px-6 py-4">Leave Type</th>
                <th className="text-left px-6 py-4">From</th>
                <th className="text-left px-6 py-4">To</th>
                <th className="text-left px-6 py-4">Days</th>
                <th className="text-left px-6 py-4">Reason</th>
                <th className="text-left px-6 py-4">Status</th>
                <th className="text-center px-6 py-4">Action</th>

              </tr>

            </thead>

            <tbody>

              {filtered.map((leave) => (

                <tr
                  key={leave.id}
                  className="border-t border-slate-800 hover:bg-slate-800"
                >

                  <td className="px-6 py-4 font-medium">
                    {leave.employee}
                  </td>

                  <td className="px-6 py-4">
                    {leave.department}
                  </td>

                  <td className="px-6 py-4">
                    {leave.leaveType}
                  </td>

                  <td className="px-6 py-4">
                    {leave.from}
                  </td>

                  <td className="px-6 py-4">
                    {leave.to}
                  </td>

                  <td className="px-6 py-4">
                    {leave.days}
                  </td>

                  <td className="px-6 py-4 max-w-xs">
                    {leave.reason}
                  </td>

                  <td className="px-6 py-4">

                    <span
                      className={`px-3 py-1 rounded-full text-sm ${badge(
                        leave.status
                      )}`}
                    >
                      {leave.status}
                    </span>

                  </td>

                  <td className="px-6 py-4">

                    {leave.status === "Pending" ? (

                      <div className="flex gap-2 justify-center">

                        <button
                          onClick={() =>
                            updateStatus(leave.id, "Approved")
                          }
                          className="bg-green-600 hover:bg-green-700 px-3 py-2 rounded-lg text-sm"
                        >
                          Approve
                        </button>

                        <button
                          onClick={() =>
                            updateStatus(leave.id, "Rejected")
                          }
                          className="bg-red-600 hover:bg-red-700 px-3 py-2 rounded-lg text-sm"
                        >
                          Reject
                        </button>

                      </div>

                    ) : (

                      <span className="text-slate-400">
                        Completed
                      </span>

                    )}

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}