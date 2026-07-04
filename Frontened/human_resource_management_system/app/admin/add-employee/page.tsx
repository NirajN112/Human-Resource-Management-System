"use client";

import { useState } from "react";
import { Search, UserCheck, UserX } from "lucide-react";

export default function EmployeeManagement() {
  const [employees, setEmployees] = useState([
    {
      employee_id: 1,
      name: "John Doe",
      email: "john@gmail.com",
      department: "IT",
      designation: "Developer",
      status: "Active",
    },
    {
      employee_id: 2,
      name: "Alex Roy",
      email: "alex@gmail.com",
      department: "HR",
      designation: "HR Executive",
      status: "Inactive",
    },
    {
      employee_id: 3,
      name: "Emma Watson",
      email: "emma@gmail.com",
      department: "Accounts",
      designation: "Accountant",
      status: "Active",
    },
  ]);

  const changeStatus = async (id: number, status: string) => {
    try {
      // Uncomment when backend is ready
      /*
      await fetch(`http://localhost:5000/api/employees/${id}/status`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status,
        }),
      });
      */

      setEmployees((prev) =>
        prev.map((emp) =>
          emp.employee_id === id ? { ...emp, status } : emp
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Header */}
      <div className="border-b border-slate-800 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 py-8">

          <h1 className="text-3xl font-bold">
            Employee Management
          </h1>

          <p className="text-slate-400 mt-2">
            Activate or deactivate employee accounts.
          </p>

        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">

        {/* Search */}

        <div className="relative mb-6">

          <Search className="absolute left-3 top-3 text-slate-400" />

          <input
            type="text"
            placeholder="Search employee..."
            className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 p-3 outline-none"
          />

        </div>

        {/* Table */}

        <div className="overflow-x-auto bg-slate-900 rounded-3xl border border-slate-800">

          <table className="w-full">

            <thead className="bg-slate-800">

              <tr>

                <th className="text-left px-6 py-4">Name</th>
                <th className="text-left px-6 py-4">Email</th>
                <th className="text-left px-6 py-4">Department</th>
                <th className="text-left px-6 py-4">Designation</th>
                <th className="text-left px-6 py-4">Status</th>
                <th className="text-center px-6 py-4">Action</th>

              </tr>

            </thead>

            <tbody>

              {employees.map((emp) => (

                <tr
                  key={emp.employee_id}
                  className="border-b border-slate-800 hover:bg-slate-800"
                >

                  <td className="px-6 py-4 font-medium">
                    {emp.name}
                  </td>

                  <td className="px-6 py-4">
                    {emp.email}
                  </td>

                  <td className="px-6 py-4">
                    {emp.department}
                  </td>

                  <td className="px-6 py-4">
                    {emp.designation}
                  </td>

                  <td className="px-6 py-4">

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

                  <td className="px-6 py-4">

                    {emp.status === "Active" ? (

                      <button
                        onClick={() =>
                          changeStatus(emp.employee_id, "Inactive")
                        }
                        className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg mx-auto"
                      >
                        <UserX size={18} />
                        Deactivate
                      </button>

                    ) : (

                      <button
                        onClick={() =>
                          changeStatus(emp.employee_id, "Active")
                        }
                        className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg mx-auto"
                      >
                        <UserCheck size={18} />
                        Activate
                      </button>

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