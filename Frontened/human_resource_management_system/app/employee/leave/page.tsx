"use client";

import { useState } from "react";
import {
  CalendarPlus,
  Calendar,
  ClipboardList,
  CheckCircle2,
  Clock3,
  XCircle,
} from "lucide-react";

export default function LeavePage() {
  const [form, setForm] = useState({
    leaveType: "Casual Leave",
    fromDate: "",
    toDate: "",
    reason: "",
  });

  // Replace with API data
  const leaveHistory = [
    {
      type: "Casual Leave",
      from: "01 Jul 2026",
      to: "02 Jul 2026",
      days: 2,
      status: "Approved",
    },
    {
      type: "Sick Leave",
      from: "12 Jun 2026",
      to: "12 Jun 2026",
      days: 1,
      status: "Pending",
    },
    {
      type: "Earned Leave",
      from: "20 May 2026",
      to: "22 May 2026",
      days: 3,
      status: "Rejected",
    },
  ];

  const submitLeave = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(form);

    alert("Leave request submitted!");

    setForm({
      leaveType: "Casual Leave",
      fromDate: "",
      toDate: "",
      reason: "",
    });
  };

  const badge = (status: string) => {
    switch (status) {
      case "Approved":
        return "bg-green-500/20 text-green-400";
      case "Pending":
        return "bg-yellow-500/20 text-yellow-400";
      case "Rejected":
        return "bg-red-500/20 text-red-400";
      default:
        return "bg-slate-700";
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Header */}

      <div className="bg-slate-900 border-b border-slate-800">

        <div className="max-w-7xl mx-auto px-6 py-8">

          <h1 className="text-3xl font-bold flex items-center gap-3">
            <CalendarPlus className="text-blue-500" />
            Leave Requests
          </h1>

          <p className="text-slate-400 mt-2">
            Apply for leave and track all your requests.
          </p>

        </div>

      </div>

      <div className="max-w-7xl mx-auto p-6">

        {/* Leave Balance */}

        <div className="grid md:grid-cols-3 gap-6 mb-8">

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <CheckCircle2 className="text-green-500 w-10 h-10 mb-4" />
            <p className="text-slate-400">Casual Leave</p>
            <h2 className="text-3xl font-bold mt-2">8 Days</h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <Calendar className="text-blue-500 w-10 h-10 mb-4" />
            <p className="text-slate-400">Earned Leave</p>
            <h2 className="text-3xl font-bold mt-2">12 Days</h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <Clock3 className="text-yellow-500 w-10 h-10 mb-4" />
            <p className="text-slate-400">Sick Leave</p>
            <h2 className="text-3xl font-bold mt-2">5 Days</h2>
          </div>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Apply Leave */}

          <div className="lg:col-span-1 bg-slate-900 border border-slate-800 rounded-3xl p-6">

            <h2 className="text-xl font-semibold mb-6">
              Apply Leave
            </h2>

            <form onSubmit={submitLeave} className="space-y-5">

              <div>

                <label className="block mb-2 text-sm text-slate-300">
                  Leave Type
                </label>

                <select
                  value={form.leaveType}
                  onChange={(e) =>
                    setForm({ ...form, leaveType: e.target.value })
                  }
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 outline-none focus:border-blue-500"
                >
                  <option>Casual Leave</option>
                  <option>Sick Leave</option>
                  <option>Earned Leave</option>
                </select>

              </div>

              <div>

                <label className="block mb-2 text-sm text-slate-300">
                  From Date
                </label>

                <input
                  type="date"
                  value={form.fromDate}
                  onChange={(e) =>
                    setForm({ ...form, fromDate: e.target.value })
                  }
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3"
                />

              </div>

              <div>

                <label className="block mb-2 text-sm text-slate-300">
                  To Date
                </label>

                <input
                  type="date"
                  value={form.toDate}
                  onChange={(e) =>
                    setForm({ ...form, toDate: e.target.value })
                  }
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3"
                />

              </div>

              <div>

                <label className="block mb-2 text-sm text-slate-300">
                  Reason
                </label>

                <textarea
                  rows={4}
                  value={form.reason}
                  onChange={(e) =>
                    setForm({ ...form, reason: e.target.value })
                  }
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 resize-none"
                  placeholder="Write your reason..."
                />

              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 transition rounded-xl py-3 font-semibold"
              >
                Submit Leave Request
              </button>

            </form>

          </div>

          {/* Leave History */}

          <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">

            <div className="p-6 border-b border-slate-800 flex items-center gap-3">
              <ClipboardList className="text-blue-500" />
              <h2 className="text-xl font-semibold">
                Leave History
              </h2>
            </div>

            <div className="overflow-x-auto">

              <table className="w-full">

                <thead className="bg-slate-800">

                  <tr>

                    <th className="text-left px-6 py-4">Leave Type</th>
                    <th className="text-left px-6 py-4">From</th>
                    <th className="text-left px-6 py-4">To</th>
                    <th className="text-left px-6 py-4">Days</th>
                    <th className="text-left px-6 py-4">Status</th>

                  </tr>

                </thead>

                <tbody>

                  {leaveHistory.map((leave, index) => (

                    <tr
                      key={index}
                      className="border-b border-slate-800 hover:bg-slate-800 transition"
                    >

                      <td className="px-6 py-4">
                        {leave.type}
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

                      <td className="px-6 py-4">

                        <span
                          className={`px-3 py-1 rounded-full text-sm ${badge(
                            leave.status
                          )}`}
                        >
                          {leave.status}
                        </span>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}