"use client";

import { useMemo, useState } from "react";
import {
  CalendarDays,
  Search,
  CheckCircle2,
  XCircle,
  Clock3,
  Timer,
} from "lucide-react";

export default function AttendancePage() {
  const [search, setSearch] = useState("");
  const [selectedDate, setSelectedDate] = useState("2026-07-04");

  const attendance = [
    {
      id: 1,
      name: "John Doe",
      department: "IT",
      checkIn: "09:00 AM",
      checkOut: "06:05 PM",
      hours: "9h 05m",
      status: "Present",
    },
    {
      id: 2,
      name: "Alex Roy",
      department: "HR",
      checkIn: "-",
      checkOut: "-",
      hours: "-",
      status: "Absent",
    },
    {
      id: 3,
      name: "Emma Watson",
      department: "Accounts",
      checkIn: "09:40 AM",
      checkOut: "06:00 PM",
      hours: "8h 20m",
      status: "Late",
    },
    {
      id: 4,
      name: "David Kumar",
      department: "IT",
      checkIn: "09:10 AM",
      checkOut: "01:00 PM",
      hours: "4h",
      status: "Half Day",
    },
  ];

  const filtered = useMemo(() => {
    return attendance.filter(
      (emp) =>
        emp.name.toLowerCase().includes(search.toLowerCase()) ||
        emp.department.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const summary = {
    present: attendance.filter((x) => x.status === "Present").length,
    absent: attendance.filter((x) => x.status === "Absent").length,
    late: attendance.filter((x) => x.status === "Late").length,
    halfDay: attendance.filter((x) => x.status === "Half Day").length,
  };

  const badge = (status: string) => {
    switch (status) {
      case "Present":
        return "bg-green-500/20 text-green-400";
      case "Absent":
        return "bg-red-500/20 text-red-400";
      case "Late":
        return "bg-yellow-500/20 text-yellow-400";
      default:
        return "bg-blue-500/20 text-blue-400";
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Header */}

      <div className="bg-slate-900 border-b border-slate-800">

        <div className="max-w-7xl mx-auto px-6 py-8">

          <h1 className="text-3xl font-bold flex items-center gap-3">
            <CalendarDays className="text-green-400" />
            Attendance Management
          </h1>

          <p className="text-slate-400 mt-2">
            Monitor employee attendance records.
          </p>

        </div>

      </div>

      <div className="max-w-7xl mx-auto p-6">

        {/* Summary */}

        <div className="grid md:grid-cols-4 gap-6 mb-8">

          <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6">
            <CheckCircle2 className="w-10 h-10 text-green-400" />
            <p className="mt-3 text-slate-400">Present</p>
            <h2 className="text-3xl font-bold">{summary.present}</h2>
          </div>

          <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6">
            <XCircle className="w-10 h-10 text-red-400" />
            <p className="mt-3 text-slate-400">Absent</p>
            <h2 className="text-3xl font-bold">{summary.absent}</h2>
          </div>

          <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6">
            <Clock3 className="w-10 h-10 text-yellow-400" />
            <p className="mt-3 text-slate-400">Late</p>
            <h2 className="text-3xl font-bold">{summary.late}</h2>
          </div>

          <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6">
            <Timer className="w-10 h-10 text-blue-400" />
            <p className="mt-3 text-slate-400">Half Day</p>
            <h2 className="text-3xl font-bold">{summary.halfDay}</h2>
          </div>

        </div>

        {/* Filters */}

        <div className="flex flex-col md:flex-row gap-4 mb-6">

          <div className="relative flex-1">

            <Search className="absolute left-3 top-3 text-slate-400" />

            <input
              type="text"
              placeholder="Search employee..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 p-3 outline-none focus:border-green-500"
            />

          </div>

          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="bg-slate-900 border border-slate-800 rounded-xl px-4"
          />

        </div>

        {/* Table */}

        <div className="overflow-x-auto bg-slate-900 border border-slate-800 rounded-3xl">

          <table className="w-full">

            <thead className="bg-slate-800">

              <tr>

                <th className="text-left px-6 py-4">Employee</th>
                <th className="text-left px-6 py-4">Department</th>
                <th className="text-left px-6 py-4">Check In</th>
                <th className="text-left px-6 py-4">Check Out</th>
                <th className="text-left px-6 py-4">Working Hours</th>
                <th className="text-left px-6 py-4">Status</th>

              </tr>

            </thead>

            <tbody>

              {filtered.map((emp) => (

                <tr
                  key={emp.id}
                  className="border-t border-slate-800 hover:bg-slate-800 transition"
                >

                  <td className="px-6 py-4 font-medium">
                    {emp.name}
                  </td>

                  <td className="px-6 py-4">
                    {emp.department}
                  </td>

                  <td className="px-6 py-4">
                    {emp.checkIn}
                  </td>

                  <td className="px-6 py-4">
                    {emp.checkOut}
                  </td>

                  <td className="px-6 py-4">
                    {emp.hours}
                  </td>

                  <td className="px-6 py-4">

                    <span
                      className={`px-3 py-1 rounded-full text-sm ${badge(
                        emp.status
                      )}`}
                    >
                      {emp.status}
                    </span>

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