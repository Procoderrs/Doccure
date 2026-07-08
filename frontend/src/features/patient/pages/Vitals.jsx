import React from 'react'
import { RiSearchLine, RiAddLine, RiLinksLine,RiEditLine, RiDeleteBinLine } from "@remixicon/react"
import { vitals } from '../../../data/patient'
//RiLinkLine,
const vitalCards = [
  { label: "Blood Pressure", value: vitals.bloodPressure, icon: "💊" },
  { label: "Heart Rate", value: vitals.heartRate, icon: "❤️" },
  { label: "Glucose Level", value: vitals.glucoseLevel, icon: "💧" },
  { label: "Body Temprature", value: vitals.bodyTemp, icon: "🌡️" },
  { label: "BMI", value: vitals.bmi, icon: "⚖️" },
  { label: "SPo2", value: vitals.spo2, icon: "🫁" },
]

export default function Vitals() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Vitals</h2>

      {/* Latest Vitals */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-gray-900">Latest Updated Vitals</h3>
          <p className="text-gray-400 text-sm flex items-center gap-1">
            📅 Last update on : {vitals.lastUpdate}
          </p>
        </div>
        <div className="grid grid-cols-6 gap-4">
          {vitalCards.map((v, i) => (
            <div key={i}>
              <p className="text-gray-400 text-xs flex items-center gap-1 mb-1">
                {v.icon} {v.label}
              </p>
              <p className="font-bold text-gray-900 text-sm">{v.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Search + Add */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 bg-white max-w-sm flex-1">
          <RiSearchLine size={16} className="text-gray-400" />
          <input type="text" placeholder="Search" className="text-sm outline-none text-gray-600 flex-1" />
        </div>
        <button
          className="px-5 py-2.5 rounded-full text-white text-sm font-semibold flex items-center gap-2"
          style={{ background: "linear-gradient(90.08deg, #316dff 0.09%, #02bfff 70.28%)" }}
        >
          <RiAddLine size={16} /> Add Vitals
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full">
          <thead>
            <tr>
              {["ID", "Patient Name", "BMI", "Heart Rate", "FBC Status", "Weight", "Added on", "Action"].map(h => (
                <th key={h} className="text-left text-sm font-medium py-3 px-4 bg-gray-50 text-gray-500">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {vitals.records.map((r, i) => (
              <tr key={i} className="border-t border-gray-50 hover:bg-gray-50 transition">
                <td className="py-3 px-4 text-[#316dff] text-sm font-medium">{r.id}</td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <img src={r.img} alt="" className="w-8 h-8 rounded-full object-cover bg-gray-100" />
                    <span className="text-gray-800 text-sm">{r.name}</span>
                  </div>
                </td>
                <td className="py-3 px-4 text-gray-600 text-sm">{r.bmi}</td>
                <td className="py-3 px-4 text-gray-600 text-sm">{r.heartRate}</td>
                <td className="py-3 px-4 text-gray-600 text-sm">{r.fbcStatus}</td>
                <td className="py-3 px-4 text-gray-600 text-sm">{r.weight}</td>
                <td className="py-3 px-4 text-gray-600 text-sm">{r.addedOn}</td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <button className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
                      <RiLinksLine size={13} className="text-gray-500" />
                    </button>
                    <button className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
                      <RiEditLine size={13} className="text-gray-500" />
                    </button>
                    <button className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center hover:bg-red-50">
                      <RiDeleteBinLine size={13} className="text-red-400" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}