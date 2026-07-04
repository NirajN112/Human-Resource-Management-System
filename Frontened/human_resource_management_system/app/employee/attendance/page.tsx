"use client";

import {
  CalendarCheck,
  Clock,
  CheckCircle2,
  XCircle,
  Timer,
} from "lucide-react";

export default function AttendancePage() {
  // Replace with API data
  const attendance = [
    {
      date: "04 Jul 2026",
      checkIn: "09:02 AM",
      checkOut: "-",
      hours: "-",
      status: "Present",
    },
    {
      date: "03 Jul 2026",
      checkIn: "09:10 AM",
      checkOut: "06:12 PM",
      hours: "9h 02m",
      status: "Present",
    },
    {
      date: "02 Jul 2026",
      checkIn: "09:45 AM",
      checkOut: "06:20 PM",
      hours: "8h 35m",
      status: "Late",
    },
    {
      date: "01 Jul 2026",
      checkIn: "-",
      checkOut: "-",
      hours: "-",
      status: "Absent",
    },
    {
      date: "30 Jun 2026",
      checkIn: "08:58 AM",
      checkOut: "05:58 PM",
      hours: "9h",
      status: "Present",
    },
  ];

  const getBadge = (status: string) => {
    switch (status) {
      case "Present":
        return "bg-green-500/20 text-green-400";
      case "Late":
        return "bg-yellow-500/20 text-yellow-400";
      case "Absent":
        return "bg-red-500/20 text-red-400";
      default:
        return "bg-slate-700 text-white";
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Header */}
      <div className="border-b border-slate-800 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 py-8">

          <h1 className="text-3xl font-bold flex items-center gap-3">
            <CalendarCheck className="text-green-500" />
            Attendance
          </h1>

          <p className="text-slate-400 mt-2">
            View your attendance records and working hours.
          </p>

        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">

        {/* Summary Cards */}

        <div className="grid md:grid-cols-4 gap-6 mb-8">

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <CheckCircle2 className="text-green-500 w-10 h-10 mb-4" />
            <p className="text-slate-400">Present Days</p>
            <h2 className="text-3xl font-bold mt-2">21</h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <XCircle className="text-red-500 w-10 h-10 mb-4" />
            <p className="text-slate-400">Absent Days</p>
            <h2 className="text-3xl font-bold mt-2">2</h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <Clock className="text-yellow-500 w-10 h-10 mb-4" />
            <p className="text-slate-400">Late Days</p>
            <h2 className="text-3xl font-bold mt-2">1</h2>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <Timer className="text-blue-500 w-10 h-10 mb-4" />
            <p className="text-slate-400">Avg. Hours</p>
            <h2 className="text-3xl font-bold mt-2">8.9h</h2>
          </div>

        </div>

        {/* Today's Attendance */}

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 mb-8">

          <h2 className="text-xl font-semibold mb-6">
            Today's Attendance
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div>
              <p className="text-slate-400 text-sm">
                Status
              </p>

              <span className="inline-block mt-2 px-4 py-1 rounded-full bg-green-500/20 text-green-400">
                Present
              </span>
            </div>

            <div>
              <p className="text-slate-400 text-sm">
                Check In
              </p>

              <h3 className="text-xl font-semibold mt-2">
                09:02 AM
              </h3>
            </div>

            <div>
              <p className="text-slate-400 text-sm">
                Check Out
              </p>

              <h3 className="text-xl font-semibold mt-2">
                --
              </h3>
            </div>

            <div>
              <p className="text-slate-400 text-sm">
                Working Hours
              </p>

              <h3 className="text-xl font-semibold mt-2">
                05h 15m
              </h3>
            </div>

          </div>

        </div>

        {/* Attendance History */}

        <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">

          <div className="p-6 border-b border-slate-800">
            <h2 className="text-xl font-semibold">
              Attendance History
            </h2>
          </div>

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="bg-slate-800">

                <tr>

                  <th className="text-left px-6 py-4">Date</th>
                  <th className="text-left px-6 py-4">Check In</th>
                  <th className="text-left px-6 py-4">Check Out</th>
                  <th className="text-left px-6 py-4">Hours</th>
                  <th className="text-left px-6 py-4">Status</th>

                </tr>

              </thead>

              <tbody>

                {attendance.map((item, index) => (

                  <tr
                    key={index}
                    className="border-b border-slate-800 hover:bg-slate-800 transition"
                  >

                    <td className="px-6 py-4">
                      {item.date}
                    </td>

                    <td className="px-6 py-4">
                      {item.checkIn}
                    </td>

                    <td className="px-6 py-4">
                      {item.checkOut}
                    </td>

                    <td className="px-6 py-4">
                      {item.hours}
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm ${getBadge(
                          item.status
                        )}`}
                      >
                        {item.status}
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
  );
}