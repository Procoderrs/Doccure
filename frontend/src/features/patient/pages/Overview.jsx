import React, { useState } from 'react'
import { RiCalendarLine, RiMapPinLine, RiMessage2Line, RiArrowRightLine, RiAddLine } from "@remixicon/react"

const healthRecords = {
  heartRate: { value: "140 Bpm", change: "2%" },
  bodyTemp: { value: "37.5 C" },
  glucoseLevel: { value: "70 - 90", change: "6%" },
  spo2: { value: "96%" },
  bloodPressure: { value: "100 mg/dl", change: "2%" },
  bmi: { value: "20.1 kg/m2" },
}

const upcomingAppointments = [
  { img: "/doctor01.jpg", name: "Dr.Edalin Hendry", specialty: "Dentist", date: "21 Mar 2024 - 10:30 PM", type: "video" },
  { img: "/doctor02.jpg", name: "Dr.Juliet Gabriel", specialty: "Cardiologist", date: "22 Mar 2024 - 10:30 PM", type: "chat" },
]

const notifications = [
  { icon: "🔔", text: "Booking Confirmed on", bold: "21 Mar 2024 10:30 AM", time: "Just Now", color: "#316dff" },
  { icon: "⭐", text: "You have a", bold: "New Review", extra: "for your Appointment", time: "5 Days ago", color: "#fbbf24" },
  { icon: "📅", text: "You have Appointment with Ahmed by", bold: "01:20 PM", time: "12:55 PM", color: "#ef4444", isLink: true },
  { icon: "💰", text: "Sent an amount of", bold: "$200", extra: "for an Appointment", time: "2 Days ago", color: "#f97316" },
  { icon: "⭐", text: "You have a", bold: "New Review", extra: "for your Appointment", time: "5 Days ago", color: "#fbbf24" },
]

const pastAppointment = {
  img: "/doctor01.jpg",
  name: "Dr.Edalin Hendry",
  specialty: "Dental Specialist",
  date: "Thursday, Mar 2024",
  time: "04:00 PM - 04:30 PM (30 Min)",
  location: "Newyork, United States",
}

const dependants = [
  { img: "/dep01.jpg", name: "Laura", relation: "Mother", age: "58 years 20 days" },
  { img: "/dep02.jpg", name: "Mathew", relation: "Father", age: "59 years 15 days" },
]

const reportAppointments = [
  { id: "#AP1236", img: "/doctor01.jpg", doctor: "Dr. Robert Womack", date: "21 Mar 2024, 10:30 AM", type: "Video call", status: "Upcoming", statusColor: "#316dff" },
  { id: "#AP3656", img: "/doctor02.jpg", doctor: "Dr. Patricia Cassidy", date: "28 Mar 2024, 11:40 AM", type: "Clinic Visit", status: "Completed", statusColor: "#6938ef" },
  { id: "#AP1246", img: "/doctor03.jpg", doctor: "Dr. Kevin Evans", date: "02 Apr 2024, 09:20 AM", type: "Audio Call", status: "Completed", statusColor: "#22c55e" },
  { id: "#AP6985", img: "/doctor04.jpg", doctor: "Dr. Lisa Keating", date: "15 Apr 2024, 04:10 PM", type: "Clinic Visit", status: "Cancelled", statusColor: "#ef4444" },
  { id: "#AP3659", img: "/doctor05.jpg", doctor: "Dr. John Hammer", date: "10 May 2024, 06:00 PM", type: "Video Call", status: "Upcoming", statusColor: "#316dff" },
]

const chartData = [140, 100, 175, 130, 105, 130]
const chartDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const favourites = [
  { img: "/doctor01.jpg", name: "Dr. Edalin", specialty: "Endodontists" },
  { img: "/doctor02.jpg", name: "Dr. Maloney", specialty: "Cardiologist" },
  { img: "/doctor03.jpg", name: "Dr. Wayne", specialty: "Dental Specialist" },
  { img: "/doctor04.jpg", name: "Dr. Marla", specialty: "Endodontists" },
]

const weekDays = [
  { date: 19, day: "Mon" },
  { date: 20, day: "Mon" },
  { date: 21, day: "Tue", dot: true },
  { date: 22, day: "Wed", dot: true },
  { date: 23, day: "Thu" },
]

export default function Overview() {
  const [reportTab, setReportTab] = useState("Appointments")
  const [chartTab, setChartTab] = useState("Heart Rate")
  const [selectedDay, setSelectedDay] = useState(21)

  return (
    <div className="p-6 bg-gray-50 min-h-screen">

      {/* Top bar */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <img src="/profile-06.jpg" alt="" className="w-12 h-12 rounded-full object-cover" />
          Hendrita ▾
        </div>
      </div>

      <div className="grid grid-cols-[1fr_220px] gap-5">

        {/* LEFT */}
        <div className="flex flex-col gap-5">

          {/* Health Records */}
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-4">Health Records</h3>
            <div className="grid grid-cols-2 gap-4">

            
            <div className="grid grid-cols-2  mb-4">
              {Object.entries(healthRecords).map(([key, val]) => (
                <div key={key} className=" rounded-xl ">
                  <p className="text-gray-800 text-xs capitalize mb-1">
                    {key === 'heartRate' ? '❤️ Heart Rate' :
                     key === 'bodyTemp' ? '🌡️ Body Temperature' :
                     key === 'glucoseLevel' ? '💧 Glucose Level' :
                     key === 'spo2' ? '🫁 SPo2' :
                     key === 'bloodPressure' ? '💊 Blood Pressure' : '⚖️ BMI'}
                  </p>
                  <p className="font-bold text-gray-900">
                    {val.value}
                    {val.change && <sup className="text-green-500 text-xs ml-1">{val.change}</sup>}
                  </p>
                </div>
              ))}
            </div>
             {/* Overall Report donut */}
          <div className="bg-white px-5 border-l border-gray-100 ">
            <h3 className="font-bold text-gray-900 mb-4">Overall Report</h3>
            <div className="flex items-center justify-center mb-4">
              <div className="relative w-32 h-32">
                <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                  <circle cx="18" cy="18" r="15.9" fill="none" stroke="#f3f4f6" strokeWidth="3" />
                  <circle cx="18" cy="18" r="15.9" fill="none" stroke="#22c55e" strokeWidth="3"
                    strokeDasharray="95 5" strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <p className="text-xs text-gray-400">Last visit 25</p>
                  <p className="text-xs text-gray-400">Mar 2024</p>
                </div>
              </div>
            </div>
            <p className="text-center text-green-500 font-semibold text-sm">Your health is 95% Normal</p>
            <button
              className="w-full mt-4 py-2.5 rounded-full text-white text-sm font-semibold flex items-center justify-center gap-2"
              style={{ background: "#0f172a" }}
            >
              View Details <RiArrowRightLine size={16} />
            </button>
          </div>
            </div>
            <p className="text-gray-700 text-xs">Report generated on last visit : 25 Mar 2024 📋</p>
          </div>

          <div className="grid grid-cols-[320px_1fr]">

         
          {/* Appointment calendar */}
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-900">Appointment</h3>
              <div className="flex gap-2">
                <button className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50">‹</button>
                <button className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50">›</button>
              </div>
            </div>

            {/* Week selector */}
            <div className="flex gap-3 mb-5">
              {weekDays.map((d, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedDay(d.date)}
                  className="flex flex-col items-center gap-1 cursor-pointer"
                >
                  <span className="text-sm font-bold text-gray-900">{d.date}</span>
                  <span className="text-xs text-gray-400">{d.day}</span>
                  {d.dot && (
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: selectedDay === d.date ? "#316dff" : "#e2e8f0" }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Appointment cards */}
            <div className="flex flex-col gap-3">
              {upcomingAppointments.map((apt, i) => (
                <div key={i} className="border border-gray-100 rounded-xl p-4 flex items-center gap-3">
                  <img src={apt.img} alt="" className="w-12 h-12 rounded-full object-cover bg-gray-100" />
                  <div className="flex-1">
                    <p className="font-bold text-gray-900 text-sm">{apt.name}</p>
                    <p className="text-gray-400 text-xs">{apt.specialty}</p>
                    <p className="text-gray-500 text-xs mt-1 flex items-center gap-1">
                      🕐 {apt.date}
                    </p>
                  </div>
                  <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm">
                    {apt.type === 'video' ? '📹' : '💬'}
                  </span>
                  <div className="flex gap-2">
                    <button className="px-3 py-1.5 rounded-full border border-gray-200 text-xs text-gray-600 flex items-center gap-1 hover:bg-gray-50">
                      💬 Chat
                    </button>
                    <button
                      className="px-3 py-1.5 rounded-full text-white text-xs font-semibold flex items-center gap-1"
                      style={{ background: "linear-gradient(90.08deg, #316dff 0.09%, #02bfff 70.28%)" }}
                    >
                      🎥 Attend
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Analytics chart */}
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-gray-900">Analytics</h3>
              <div className="flex items-center gap-2 text-xs text-gray-400 border border-gray-200 rounded-lg px-2 py-1">
                Mar 14 - Mar 21 ▾
              </div>
            </div>
            <div className="flex gap-4 mb-4">
              {["Heart Rate", "Blood Pressure"].map(tab => (
                <button
                  key={tab}
                  onClick={() => setChartTab(tab)}
                  className="text-sm font-medium pb-1 transition-colors"
                  style={{
                    color: chartTab === tab ? '#316dff' : '#9ca3af',
                    borderBottom: chartTab === tab ? '2px solid #316dff' : '2px solid transparent'
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="flex items-end gap-2 h-32">
              {chartData.map((val, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className="w-full rounded-t-sm"
                    style={{
                      height: `${(val / 200) * 100}%`,
                      background: "#316dff",
                      opacity: 0.8
                    }}
                  />
                  <span className="text-xs text-gray-400">{chartDays[i]}</span>
                </div>
              ))}
            </div>
          </div>
 </div>
          {/* Notifications */}
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-900">Notifications</h3>
              <button className="text-[#316dff] text-sm hover:underline">View All</button>
            </div>
            <div className="flex flex-col gap-4">
              {notifications.map((n, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 text-sm"
                    style={{ background: `${n.color}20` }}
                  >
                    {n.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-600 text-sm">
                      {n.text}{" "}
                      <span className={`font-bold ${n.isLink ? 'text-[#316dff]' : 'text-gray-900'}`}>
                        {n.bold}
                      </span>
                      {n.extra && ` ${n.extra}`}
                    </p>
                    <p className="text-gray-400 text-xs mt-1">{n.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reports */}
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-4">Reports</h3>
            <div className="flex gap-2 mb-5 flex-wrap">
              {["Appointments", "Medical Records", "Prescriptions", "Invoices"].map(tab => (
                <button
                  key={tab}
                  onClick={() => setReportTab(tab)}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-all"
                  style={{
                    background: reportTab === tab ? "linear-gradient(90.08deg, #316dff 0.09%, #02bfff 70.28%)" : "#f3f4f6",
                    color: reportTab === tab ? "white" : "#374151"
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>

            <table className="w-full">
              <thead>
                <tr>
                  {["ID", "Doctor", "Date", "Type", "Status"].map(h => (
                    <th key={h} className="text-left text-sm font-medium py-3 px-3 bg-gray-50 first:rounded-l-lg last:rounded-r-lg text-gray-500">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {reportAppointments.map((r, i) => (
                  <tr key={i} className="border-t border-gray-50 hover:bg-gray-50 transition">
                    <td className="py-3 px-3 text-[#316dff] text-sm font-medium">{r.id}</td>
                    <td className="py-3 px-3">
                      <div className="flex items-center gap-2">
                        <img src={r.img} alt="" className="w-8 h-8 rounded-full object-cover bg-gray-100" />
                        <span className="text-gray-800 text-sm font-medium">{r.doctor}</span>
                      </div>
                    </td>
                    <td className="py-3 px-3 text-gray-500 text-sm">{r.date}</td>
                    <td className="py-3 px-3 text-gray-500 text-sm">{r.type}</td>
                    <td className="py-3 px-3">
                      <span
                        className="flex items-center gap-1 text-xs font-semibold"
                        style={{ color: r.statusColor }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: r.statusColor }} />
                        {r.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-5">

          {/* Book Appointment */}
          <div
            className="rounded-2xl p-5 flex items-center justify-between cursor-pointer"
            style={{ background: "linear-gradient(90.08deg, #316dff 0.09%, #02bfff 70.28%)" }}
          >
            <div>
              <p className="text-white/80 text-sm">Book a new</p>
              <p className="text-white font-bold text-lg">Appointment</p>
            </div>
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
              <RiAddLine size={20} className="text-white" />
            </div>
          </div>

          {/* Favourites */}
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-900">Favourites</h3>
              <button className="text-[#316dff] text-sm hover:underline">View All</button>
            </div>
            <div className="flex flex-col gap-3">
              {favourites.map((f, i) => (
                <div key={i} className="flex items-center gap-3">
                  <img src={f.img} alt="" className="w-10 h-10 rounded-full object-cover bg-gray-100" />
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800 text-sm">{f.name}</p>
                    <p className="text-gray-400 text-xs">{f.specialty}</p>
                  </div>
                  <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
                    📅
                  </button>
                </div>
              ))}
            </div>
          </div>

         

          

          {/* Past Appointments */}
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-900">Past Appointments</h3>
              <div className="flex gap-2">
                <button className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-400">‹</button>
                <button className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-400">›</button>
              </div>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <img src={pastAppointment.img} alt="" className="w-12 h-12 rounded-full object-cover bg-gray-100" />
              <div className="flex-1">
                <p className="font-bold text-gray-900 text-sm">{pastAppointment.name}</p>
                <p className="text-gray-400 text-xs">{pastAppointment.specialty}</p>
              </div>
              <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-semibold flex items-center gap-1">
                📹 30 Min
              </span>
            </div>
            <p className="font-bold text-gray-900 text-sm mb-2">{pastAppointment.date}</p>
            <p className="text-gray-500 text-xs flex items-center gap-1 mb-1">🕐 {pastAppointment.time}</p>
            <p className="text-gray-500 text-xs flex items-center gap-1 mb-4">📍 {pastAppointment.location}</p>
            <div className="flex gap-3">
              <button className="flex-1 py-2 rounded-full border border-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-50">
                Reschedule
              </button>
              <button
                className="flex-1 py-2 rounded-full text-white text-sm font-semibold"
                style={{ background: "linear-gradient(90.08deg, #316dff 0.09%, #02bfff 70.28%)" }}
              >
                View Details
              </button>
            </div>
          </div>

          {/* Dependant */}
          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-900">Dependant</h3>
              <div className="flex items-center gap-3">
                <button className="text-[#316dff] text-sm flex items-center gap-1 hover:underline">
                  <RiAddLine size={14} /> Add New
                </button>
                <button className="text-[#316dff] text-sm hover:underline">View All</button>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {dependants.map((d, i) => (
                <div key={i} className="flex items-center gap-3">
                  <img src={d.img} alt="" className="w-10 h-10 rounded-full object-cover bg-gray-100" />
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800 text-sm">{d.name}</p>
                    <p className="text-gray-400 text-xs">{d.relation} - {d.age}</p>
                  </div>
                  <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">📅</button>
                  <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">👁️</button>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}