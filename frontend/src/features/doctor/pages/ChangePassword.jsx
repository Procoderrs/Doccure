import { useState } from 'react'
import { RiArrowDownSLine, RiArrowUpSLine, RiTimeLine } from "@remixicon/react"

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

export default function BusinessHours() {
  const [selectedDays, setSelectedDays] = useState(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"])
  const [expandedDay, setExpandedDay] = useState("Monday")
  const [hours, setHours] = useState(
    daysOfWeek.reduce((acc, day) => {
      acc[day] = { from: "", to: "" }
      return acc
    }, {})
  )

  const toggleDay = (day) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    )
  }

  const toggleExpand = (day) => {
    setExpandedDay((prev) => (prev === day ? null : day))
  }

  const updateTime = (day, field, value) => {
    setHours((prev) => ({
      ...prev,
      [day]: { ...prev[day], [field]: value },
    }))
  }

  return (
    <div>
      <h3 className="font-bold text-gray-900 text-lg mb-4">Business Hours</h3>

      {/* Select Business days */}
      <div className="border border-gray-100 rounded-2xl p-5 mb-5">
        <p className="text-sm font-medium text-gray-800 mb-3">Select Business days</p>
        <div className="flex flex-wrap gap-2">
          {daysOfWeek.map((day) => {
            const active = selectedDays.includes(day)
            return (
              <button
                key={day}
                onClick={() => toggleDay(day)}
                className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
                  active
                    ? "bg-[#316dff] text-white border-[#316dff]"
                    : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                }`}
              >
                {day}
              </button>
            )
          })}
        </div>
      </div>

      {/* Day rows */}
      <div className="border border-gray-100 rounded-2xl overflow-hidden">
        {daysOfWeek.map((day, i) => {
          const isExpanded = expandedDay === day
          return (
            <div key={day} className={i !== 0 ? "border-t border-gray-100" : ""}>
              <div className="flex items-center justify-between px-5 py-4">
                <p className="font-semibold text-gray-900">{day}</p>
                <button
                  onClick={() => toggleExpand(day)}
                  className="flex items-center gap-1 text-[#316dff] text-sm font-medium"
                >
                  Edit
                  {isExpanded ? <RiArrowUpSLine size={16} /> : <RiArrowDownSLine size={16} />}
                </button>
              </div>

              {isExpanded && (
                <div className="px-5 pb-5 grid grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm text-gray-600 mb-1 block">
                      From <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="time"
                        value={hours[day].from}
                        onChange={(e) => updateTime(day, "from", e.target.value)}
                        placeholder="Select time"
                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 outline-none pr-9"
                      />
                      <RiTimeLine size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-gray-600 mb-1 block">
                      To <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="time"
                        value={hours[day].to}
                        onChange={(e) => updateTime(day, "to", e.target.value)}
                        placeholder="Select time"
                        className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-700 outline-none pr-9"
                      />
                      <RiTimeLine size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-3 mt-5">
        <button className="px-5 py-2.5 rounded-full text-sm font-semibold text-gray-600 border border-gray-200 hover:bg-gray-50 transition">
          Cancel
        </button>
        <button
          className="px-5 py-2.5 rounded-full text-sm font-semibold text-white transition"
          style={{ background: "linear-gradient(90.08deg, #316dff 0.09%, #02bfff 70.28%)" }}
        >
          Save Changes
        </button>
      </div>
    </div>
  )
}