import React from 'react'

export default function ScheduleTab({ doctor }) {
  const { schedule } = doctor
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6">
      <h3 className="font-bold text-lg text-gray-900 mb-4">Schedule</h3>

      <p className="text-sm text-gray-500 mb-2">Available Days</p>
      <div className="flex gap-2 mb-6">
        {schedule.days.map((d) => (
          <span key={d} className="bg-blue-50 text-[#316dff] text-sm font-medium px-3 py-1.5 rounded-full">{d}</span>
        ))}
      </div>

      <p className="text-sm text-gray-500 mb-2">Time Slots</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {schedule.slots.map((s) => (
          <span key={s} className="border border-gray-200 text-sm text-gray-700 px-3 py-1.5 rounded-full">{s}</span>
        ))}
      </div>

      <p className="text-sm text-gray-500 mb-1">Clinic Timings</p>
      <p className="text-gray-900 font-semibold">{schedule.clinicTimings}</p>
    </div>
  )
}