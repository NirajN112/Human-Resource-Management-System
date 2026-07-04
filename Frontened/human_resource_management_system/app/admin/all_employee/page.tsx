"use client";

import { useMemo, useState } from "react";
import {
  Search,
  Eye,
  Pencil,
  Trash2,
  Users,
  Mail,
  Phone,
} from "lucide-react";

export default function EmployeesPage() {
  const [search, setSearch] = useState("");

  const employees = [
    {
      id: 1,
      name: "John Doe",
      email: "john@gmail.com",
      phone: "9876543210",
      department: "IT",
      designation: "Software Engineer",
      role: "Employee",
      status: "Active",
    },
    {
      id: 2,
      name: "Alex Roy",
      email: "alex@gmail.com",
      phone: "9123456789",
      department: "HR",
      designation: "HR Executive",
      role: "Manager",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Emma Watson",
      email: "emma@gmail.com",
      phone: "9988776655",
      department: "Accounts",
      designation: "Accountant",
      role: "Employee",
      status: "Active",
    },
  ];

  const filteredEmployees = useMemo(() => {
    return employees.filter((emp) => {
      const keyword = search.toLowerCase();

      return (
        emp.name.toLowerCase().includes(keyword) ||
        emp.email.toLowerCase().includes(keyword) ||
        emp.department.toLowerCase().includes(keyword) ||
        emp.designation.toLowerCase().includes(keyword)
      );
    });
  }, [search]);

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Header */}

      <div className="border-b border-slate-800 bg-slate-900">

        <div className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">

          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3">
              <Users className="text-blue-500" />
              All Employees
            </h1>

            <p className="text-slate-400 mt-2">
              Manage every employee in your organization.
            </p>
          </div>

          <a
            href="/admin/add-employee"
            className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl font-semibold"
          >
            + Add Employee
          </a>

        </div>

      </div>

      <div className="max-w-7xl mx-auto p-6">

        {/* Search */}

        <div className="relative mb-6">

          <Search className="absolute left-3 top-3 text-slate-400" />

          <input
            type="text"
            placeholder="Search employee..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-11 pr-4 py-3 outline-none focus:border-blue-500"
          />

        </div>

        {/* Table */}

        <div className="overflow-x-auto rounded-3xl border border-slate-800">

          <table className="w-full">

            <thead className="bg-slate-900">

              <tr>

                <th className="text-left px-6 py-4">Employee</th>
                <th className="text-left px-6 py-4">Department</th>
                <th className="text-left px-6 py-4">Designation</th>
                <th className="text-left px-6 py-4">Role</th>
                <th className="text-left px-6 py-4">Status</th>
                <th className="text-center px-6 py-4">Actions</th>

              </tr>

            </thead>

            <tbody>

              {filteredEmployees.map((emp) => (

                <tr
                  key={emp.id}
                  className="border-t border-slate-800 hover:bg-slate-900 transition"
                >

                  <td className="px-6 py-5">

                    <div className="flex items-center gap-4">

                      <img
                        src={`https://ui-avatars.com/api/?name=${emp.name}`}
                        className="w-12 h-12 rounded-full"
                      />

                      <div>

                        <h3 className="font-semibold">
                          {emp.name}
                        </h3>

                        <div className="flex items-center gap-2 text-slate-400 text-sm">

                          <Mail size={14} />

                          {emp.email}

                        </div>

                        <div className="flex items-center gap-2 text-slate-400 text-sm mt-1">

                          <Phone size={14} />

                          {emp.phone}

                        </div>

                      </div>

                    </div>

                  </td>

                  <td className="px-6">
                    {emp.department}
                  </td>

                  <td className="px-6">
                    {emp.designation}
                  </td>

                  <td className="px-6">
                    {emp.role}
                  </td>

                  <td className="px-6">

                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        emp.status === "Active"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {emp.status}
                    </span>

                  </td>

                  <td className="px-6">

                    <div className="flex justify-center gap-3">

                      <button
                        className="bg-blue-600 hover:bg-blue-700 p-2 rounded-lg"
                        title="View"
                      >
                        <Eye size={18} />
                      </button>

                      <button
                        className="bg-yellow-600 hover:bg-yellow-700 p-2 rounded-lg"
                        title="Edit"
                      >
                        <Pencil size={18} />
                      </button>

                      <button
                        className="bg-red-600 hover:bg-red-700 p-2 rounded-lg"
                        title="Delete"
                      >
                        <Trash2 size={18} />
                      </button>

                    </div>

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