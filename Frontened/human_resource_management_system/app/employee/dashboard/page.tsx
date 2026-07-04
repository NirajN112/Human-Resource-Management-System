"use client";

import {
  User,
  CalendarCheck,
  FileClock,
  LogOut,
  Bell,
  ArrowRight,
} from "lucide-react";

const cards = [
  {
    title: "Profile",
    description: "View and update your profile information.",
    icon: User,
    href: "/employee/profile",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Attendance",
    description: "Check your attendance records.",
    icon: CalendarCheck,
    href: "/employee/attendance",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Leave Requests",
    description: "Apply and track leave requests.",
    icon: FileClock,
    href: "/employee/leave",
    color: "from-purple-500 to-pink-500",
  },

];

const activities = [
  {
    title: "Attendance marked successfully.",
    time: "Today • 09:02 AM",
  },
  {
    title: "Leave request approved.",
    time: "Yesterday",
  },
  {
    title: "Profile updated successfully.",
    time: "2 days ago",
  },
];

export default function EmployeeDashboard() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/70 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">

          <div>
            <h1 className="text-3xl font-bold">
              Employee Dashboard
            </h1>

            <p className="text-slate-400 mt-1">
              Welcome back! Here's an overview of your account.
            </p>
          </div>

          <div className="relative">
            <Bell className="h-7 w-7 text-slate-300 cursor-pointer hover:text-white transition" />

            <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500"></span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-10">

        {/* Cards */}

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <a
                key={card.title}
                href={card.href}
                className="group rounded-3xl bg-slate-900 border border-slate-800 p-6 hover:border-indigo-500 transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`inline-flex rounded-2xl bg-gradient-to-r ${card.color} p-4`}
                >
                  <Icon className="h-8 w-8 text-white" />
                </div>

                <h2 className="mt-6 text-2xl font-semibold">
                  {card.title}
                </h2>

                <p className="mt-2 text-slate-400 text-sm leading-6">
                  {card.description}
                </p>

                <div className="mt-8 flex items-center text-indigo-400 group-hover:translate-x-2 transition">
                  Open
                  <ArrowRight className="ml-2 h-5 w-5" />
                </div>
              </a>
            );
          })}
        </div>

        {/* Recent Activity */}

        <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900 p-8">

          <h2 className="text-2xl font-bold mb-6">
            Recent Activity & Alerts
          </h2>

          <div className="space-y-5">

            {activities.map((item, index) => (
              <div
                key={index}
                className="flex items-start justify-between rounded-2xl bg-slate-800 p-5 hover:bg-slate-700 transition"
              >
                <div>

                  <h3 className="font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-400 mt-1">
                    {item.time}
                  </p>

                </div>

                <div className="h-3 w-3 rounded-full bg-green-500 mt-2"></div>
              </div>
            ))}

          </div>

        </div>

      </main>

    </div>
  );
}