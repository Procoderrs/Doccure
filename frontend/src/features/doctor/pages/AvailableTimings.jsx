import React, { useState } from 'react'
import Breadcrumb from '../../../components/ui/Breadcrumb'

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const defaultSlots = ["09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM"]

export default function AvailableTimings() {
  const [selectedDay, setSelectedDay] = useState("Monday")
  const [fee, setFee] = useState("254")

  return (
    <div className="p-6">
      <Breadcrumb title="Available Timings" parent="Doctor" />

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <h3 className="font-bold text-gray-900 text-lg mb-6">Select Available Slots</h3>

        {/* Days */}
        <div className="mb-6">
          <p className="text-gray-600 font-medium mb-3">Select Available days</p>
          <div className="flex flex-wrap gap-3">
            {days.map(day => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className="px-5 py-2.5 rounded-full text-sm font-medium border transition-all"
                style={{
                  background: selectedDay === day ? "#316dff" : "white",
                  color: selectedDay === day ? "white" : "#374151",
                  borderColor: selectedDay === day ? "#316dff" : "#e5e7eb"
                }}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        {/* Time Slots */}
        <div className="border border-gray-100 rounded-xl p-5 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-bold text-gray-900">{selectedDay}</h4>
            <div className="flex gap-3">
              <button className="text-[#316dff] text-sm font-medium hover:underline">Add Slots</button>
              <button className="text-red-500 text-sm font-medium hover:underline">Delete All</button>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {defaultSlots.map((slot, i) => (
              <div
                key={i}
                className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-700"
              >
                🕐 {slot}
              </div>
            ))}
          </div>
        </div>

        {/* Fee */}
        <div className="mb-8">
          <label className="block text-gray-600 font-medium mb-2">
            Appointment Fees ($)
          </label>
          <input
            type="number"
            value={fee}
            onChange={e => setFee(e.target.value)}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700 outline-none focus:border-[#316dff]"
          />
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-end gap-3">
          <button className="px-6 py-2.5 rounded-full border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50">
            Cancel
          </button>
          <button
            className="px-6 py-2.5 rounded-full text-white text-sm font-semibold"
            style={{ background: "linear-gradient(90.08deg, #316dff 0.09%, #02bfff 70.28%)" }}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  )
} 