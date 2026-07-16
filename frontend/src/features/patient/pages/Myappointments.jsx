import React, { useState } from 'react'
import { RiEyeLine, RiHome2Line, RiCloseLine, RiFilterLine, RiCalendarLine,RiVideoOnFill,RiEyeFill,RiHome2Fill,RiCloseFill ,RiCalendarTodoFill   } from "@remixicon/react"
import { appointments } from '../../../data/patient'

export default function MyAppointments() {
  const [tab, setTab] = useState("Upcoming")

  const tabs = [
    { label: "Upcoming", count: 21 },
    { label: "Cancelled", count: 16 },
    { label: "Completed", count: 214 },
  ]

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Appointments</h2>

      {/* Tabs + filters */}
      <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
        <div className="flex gap-2">
          {tabs.map(t => (
            <button
  key={t.label}
  onClick={() => setTab(t.label)}
  className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all border"
  style={{
    background: tab === t.label ? "#316dff" : "",
    color: tab === t.label ? "white" : "#374151",
    borderColor: tab === t.label ? "transparent" : "#e5e7eb",
  }}
>
  {t.label}
  <span
    className="text-xs px-2 py-0.5 rounded-full font-semibold"
    style={{
      background: tab === t.label ? "rgba(255,255,255,0.3)" : "white",
      color: tab === t.label ? "white" : "#374151",
      border: tab === t.label ? "none" : "1px solid #e5e7eb",
    }}
  >
    {t.count}
  </span>
</button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 bg-white">
            <RiCalendarLine size={15}  /> 08 Jul 26 - 08 Jul 26
          </div>
          <button className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900 bg-white">
            <RiFilterLine size={15} /> Filter By
          </button>
          {/* View toggle */}
          <div className="flex border border-gray-200 rounded-lg overflow-hidden">
            <button className="px-3 py-2 bg-[#316dff] text-white">▦</button>
            <button className="px-3 py-2 bg-white text-gray-400">☰</button>
          </div>
        </div>
      </div>

      {/* Appointment rows */}
      <div className="flex flex-col gap-4">
        {appointments.map((apt, i) => (
          <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex items-center gap-5">

            <div className="flex items-center gap-3 w-40 shrink-0">
              <div className="relative">
                <img src={apt.img} alt="" className="w-12 h-12 rounded-xl object-cover bg-gray-100" />
                {apt.isNew && (
                  <span className="absolute top-6 -right-26 bg-[#6938ef] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full">New</span>
                )}
              </div>
              <div>
                <p className="text-[#316dff] text-xs font-medium">{apt.id}</p>
                <p className="font-bold text-gray-900 ">{apt.name}</p>
              </div>
            </div>

            <div className="flex-1">
              <p className="text-gray-900  flex items-center gap-1 mb-1">🕐 {apt.date}</p>
              <div className="flex items-center gap-2  text-gray-900">
                <span>{apt.visitType}</span>
                <span className="w-1 h-1 rounded-full bg-gray-300" />
                <span>{apt.type}</span>
              </div>
            </div>

            <div className="w-44 shrink-0">
              <p className="text-gray-900  flex items-center gap-1 ">✉️ {apt.email}</p>
              <p className="text-gray-900  flex items-center gap-1">📞 {apt.phone}</p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
                <RiEyeFill  size={16} className="text-gray-900" />
              </button>
              <button className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
                <RiHome2Fill size={16} className="text-gray-900" />
              </button>
              <button className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
                <RiCloseFill size={16} className="text-gray-900" />
              </button>
              <button
                className="px-4 py-2 rounded-full text-white text-sm font-semibold flex items-center gap-1"
                style={{ background: "linear-gradient(90.08deg, #316dff 0.09%, #02bfff 70.28%)" }}
              >
                <RiCalendarTodoFill size={15}  />Attend
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}