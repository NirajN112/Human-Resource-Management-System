"use client";

import {
  Users,
  CalendarCheck,
  CalendarX,
  FileClock,
  UserPlus,
  UserCog,
  ClipboardList,
  ArrowRight,
} from "lucide-react";

export default function AdminDashboard() {
  const leaveRequests = [
    {
      name: "John Doe",
      type: "Casual Leave",
      days: 2,
      status: "Pending",
    },
    {
      name: "Alex Smith",
      type: "Sick Leave",
      days: 1,
      status: "Approved",
    },
    {
      name: "David Roy",
      type: "Earned Leave",
      days: 5,
      status: "Pending",
    },
  ];

  const employees = [
    {
      name: "John Doe",
      department: "IT",
      status: "Present",
    },
    {
      name: "Alex Smith",
      department: "HR",
      status: "Absent",
    },
    {
      name: "Emma Watson",
      department: "Accounts",
      status: "Present",
    },
  ];

  const stats = [
    {
      title: "Total Employees",
      value: 120,
      icon: Users,
      color: "text-blue-400",
    },
    {
      title: "Present Today",
      value: 108,
      icon: CalendarCheck,
      color: "text-green-400",
    },
    {
      title: "Absent Today",
      value: 12,
      icon: CalendarX,
      color: "text-red-400",
    },
    {
      title: "Pending Leaves",
      value: 7,
      icon: FileClock,
      color: "text-yellow-400",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Header */}

      <div className="border-b border-slate-800 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 py-8">

          <h1 className="text-3xl font-bold">
            Admin Dashboard
          </h1>

          <p className="text-slate-400 mt-2">
            Monitor employees, attendance, and leave requests.
          </p>

        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6 space-y-8">

        {/* Statistics */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-slate-900 rounded-3xl border border-slate-800 p-6"
              >
                <Icon className={`w-10 h-10 ${item.color}`} />

                <p className="text-slate-400 mt-4">
                  {item.title}
                </p>

                <h2 className="text-3xl font-bold mt-2">
                  {item.value}
                </h2>
              </div>
            );
          })}

        </div>

        {/* Quick Actions */}

        <div>

          <h2 className="text-2xl font-semibold mb-5">
            Quick Actions
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

            <a
              href="/admin/all_employee"
              className="bg-slate-900 rounded-3xl border border-slate-800 p-6 hover:border-blue-500 transition"
            >
              <Users className="w-10 h-10 text-blue-400" />

              <h3 className="mt-5 text-xl font-semibold">
                Employees
              </h3>

              <p className="text-slate-400 mt-2">
                View all employees.
              </p>

              <ArrowRight className="mt-5" />
            </a>

            <a
              href="/admin/add-employee"
              className="bg-slate-900 rounded-3xl border border-slate-800 p-6 hover:border-green-500 transition"
            >
              <UserPlus className="w-10 h-10 text-green-400" />

              <h3 className="mt-5 text-xl font-semibold">
                Add Employee
              </h3>

              <p className="text-slate-400 mt-2">
                Register a new employee.
              </p>

              <ArrowRight className="mt-5" />
            </a>

            <a
              href="/admin/attendance"
              className="bg-slate-900 rounded-3xl border border-slate-800 p-6 hover:border-yellow-500 transition"
            >
              <CalendarCheck className="w-10 h-10 text-yellow-400" />

              <h3 className="mt-5 text-xl font-semibold">
                Attendance
              </h3>

              <p className="text-slate-400 mt-2">
                Monitor attendance.
              </p>

              <ArrowRight className="mt-5" />
            </a>

            <a
              href="/admin/leaves_request"
              className="bg-slate-900 rounded-3xl border border-slate-800 p-6 hover:border-purple-500 transition"
            >
              <ClipboardList className="w-10 h-10 text-purple-400" />

              <h3 className="mt-5 text-xl font-semibold">
                Leave Requests
              </h3>

              <p className="text-slate-400 mt-2">
                Approve or reject leave.
              </p>

              <ArrowRight className="mt-5" />
            </a>

          </div>

        </div>

        {/* Tables */}

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Leave Requests */}

          <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden">

            <div className="p-6 border-b border-slate-800">
              <h2 className="text-xl font-semibold">
                Recent Leave Requests
              </h2>
            </div>

            <table className="w-full">

              <thead className="bg-slate-800">

                <tr>
                  <th className="text-left px-6 py-4">Employee</th>
                  <th className="text-left px-6 py-4">Leave</th>
                  <th className="text-left px-6 py-4">Days</th>
                  <th className="text-left px-6 py-4">Status</th>
                </tr>

              </thead>

              <tbody>

                {leaveRequests.map((leave, index) => (

                  <tr
                    key={index}
                    className="border-b border-slate-800 hover:bg-slate-800"
                  >
                    <td className="px-6 py-4">{leave.name}</td>
                    <td className="px-6 py-4">{leave.type}</td>
                    <td className="px-6 py-4">{leave.days}</td>
                    <td className="px-6 py-4">

                      <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400">
                        {leave.status}
                      </span>

                    </td>
                  </tr>

                ))}

              </tbody>

            </table>

          </div>

          {/* Employees */}

          <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden">

            <div className="p-6 border-b border-slate-800">
              <h2 className="text-xl font-semibold">
                Employee Status
              </h2>
            </div>

            <table className="w-full">

              <thead className="bg-slate-800">

                <tr>

                  <th className="text-left px-6 py-4">Employee</th>
                  <th className="text-left px-6 py-4">Department</th>
                  <th className="text-left px-6 py-4">Status</th>

                </tr>

              </thead>

              <tbody>

                {employees.map((employee, index) => (

                  <tr
                    key={index}
                    className="border-b border-slate-800 hover:bg-slate-800"
                  >

                    <td className="px-6 py-4">
                      {employee.name}
                    </td>

                    <td className="px-6 py-4">
                      {employee.department}
                    </td>

                    <td className="px-6 py-4">

                      <span
                        className={`px-3 py-1 rounded-full ${
                          employee.status === "Present"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-red-500/20 text-red-400"
                        }`}
                      >
                        {employee.status}
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