"use client";

import {
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Building2,
  Calendar,
  BadgeCheck,
  Edit,
} from "lucide-react";

export default function ProfilePage() {
  // Replace this with data from your backend
  const employee = {
    name: "Bibhas Das",
    employeeId: "EMP001",
    email: "Bibhasdas@gmail.com",
    phone: "+91 1120000000",
    address: "Kolkata, West Bengal",
    department: "IT Department",
    designation: "Software Developer",
    joiningDate: "15 Jan 2024",
    status: "Active",
    image: "https://ui-avatars.com/api/?name=John+Doe&background=2563eb&color=fff&size=256",
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Header */}
      <div className="border-b border-slate-800 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6 py-8 flex justify-between items-center">

          <div>
            <h1 className="text-3xl font-bold">Employee Profile</h1>
            <p className="text-slate-400 mt-2">
              View your personal and employment information.
            </p>
          </div>

          <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 hover:bg-blue-700 transition">
            <Edit size={18} />
            Edit Profile
          </button>

        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6">

        <div className="grid lg:grid-cols-3 gap-6">

          {/* Left Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

            <div className="flex flex-col items-center">

              <img
                src={employee.image}
                alt={employee.name}
                className="w-36 h-36 rounded-full border-4 border-blue-500 object-cover"
              />

              <h2 className="mt-5 text-2xl font-bold">
                {employee.name}
              </h2>

              <p className="text-slate-400">
                {employee.designation}
              </p>

              <span className="mt-4 px-4 py-1 rounded-full bg-green-500/20 text-green-400 text-sm">
                {employee.status}
              </span>

            </div>

            <div className="mt-8 space-y-5">

              <div className="flex items-center gap-4">
                <BadgeCheck className="text-blue-400" />
                <div>
                  <p className="text-slate-400 text-sm">
                    Employee ID
                  </p>
                  <p>{employee.employeeId}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Building2 className="text-blue-400" />
                <div>
                  <p className="text-slate-400 text-sm">
                    Department
                  </p>
                  <p>{employee.department}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Calendar className="text-blue-400" />
                <div>
                  <p className="text-slate-400 text-sm">
                    Joining Date
                  </p>
                  <p>{employee.joiningDate}</p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Card */}

          <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-3xl p-8">

            <h2 className="text-2xl font-semibold mb-8">
              Personal Information
            </h2>

            <div className="grid md:grid-cols-2 gap-8">

              <div className="space-y-6">

                <div className="flex gap-4">
                  <User className="text-blue-400 mt-1" />

                  <div>
                    <p className="text-slate-400 text-sm">
                      Full Name
                    </p>
                    <p className="text-lg">
                      {employee.name}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="text-blue-400 mt-1" />

                  <div>
                    <p className="text-slate-400 text-sm">
                      Email Address
                    </p>
                    <p className="text-lg">
                      {employee.email}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="text-blue-400 mt-1" />

                  <div>
                    <p className="text-slate-400 text-sm">
                      Phone Number
                    </p>
                    <p className="text-lg">
                      {employee.phone}
                    </p>
                  </div>
                </div>

              </div>

              <div className="space-y-6">

                <div className="flex gap-4">
                  <MapPin className="text-blue-400 mt-1" />

                  <div>
                    <p className="text-slate-400 text-sm">
                      Address
                    </p>
                    <p className="text-lg">
                      {employee.address}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Briefcase className="text-blue-400 mt-1" />

                  <div>
                    <p className="text-slate-400 text-sm">
                      Designation
                    </p>
                    <p className="text-lg">
                      {employee.designation}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Building2 className="text-blue-400 mt-1" />

                  <div>
                    <p className="text-slate-400 text-sm">
                      Department
                    </p>
                    <p className="text-lg">
                      {employee.department}
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* Stats */}

            <div className="grid md:grid-cols-3 gap-6 mt-12">

              <div className="rounded-2xl bg-slate-800 p-6 text-center">
                <h3 className="text-3xl font-bold text-blue-400">
                  98%
                </h3>
                <p className="text-slate-400 mt-2">
                  Attendance
                </p>
              </div>

              <div className="rounded-2xl bg-slate-800 p-6 text-center">
                <h3 className="text-3xl font-bold text-green-400">
                  12
                </h3>
                <p className="text-slate-400 mt-2">
                  Leave Balance
                </p>
              </div>

              <div className="rounded-2xl bg-slate-800 p-6 text-center">
                <h3 className="text-3xl font-bold text-yellow-400">
                  2
                </h3>
                <p className="text-slate-400 mt-2">
                  Pending Requests
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}