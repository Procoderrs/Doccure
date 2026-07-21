import React from 'react'
import { useNavigate } from "react-router-dom"
import { RiEyeLine, RiEditLine, RiForbidLine } from "@remixicon/react"
import StatusBadge from './StatusBadge'

export default function HospitalTable({ hospitals, onToggleBlock }) {
  const navigate = useNavigate()

  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-gray-500 border-b border-gray-100">
            <th className="py-3 px-4 font-medium">Hospital</th>
            <th className="py-3 px-4 font-medium">City</th>
            <th className="py-3 px-4 font-medium">Address</th>
            <th className="py-3 px-4 font-medium">Departments</th>
            <th className="py-3 px-4 font-medium">Total Doctors</th>
            <th className="py-3 px-4 font-medium">Total Appointments</th>
            <th className="py-3 px-4 font-medium">Status</th>
            <th className="py-3 px-4 font-medium">Action</th>
          </tr>
        </thead>
        <tbody>
          {hospitals.map((h) => (
            <tr key={h.id} className="border-b border-gray-50 hover:bg-gray-50/50">
              <td className="py-4 px-4">
                <div className="flex items-center gap-3">
                  <img src={h.logo} alt={h.name} className="w-10 h-10 rounded-lg object-cover bg-gray-100" />
                  <p className="font-semibold text-gray-900">{h.name}</p>
                </div>
              </td>
              <td className="py-4 px-4 text-gray-600">{h.city}</td>
              <td className="py-4 px-4 text-gray-600 max-w-[220px] truncate">{h.address}</td>
              <td className="py-4 px-4 text-gray-600">
                <div className="flex flex-wrap gap-1">
                  {h.departments.slice(0, 2).map((d) => (
                    <span key={d} className="bg-blue-50 text-[#316dff] text-xs px-2 py-0.5 rounded-full">{d}</span>
                  ))}
                  {h.departments.length > 2 && <span className="text-xs text-gray-400">+{h.departments.length - 2}</span>}
                </div>
              </td>
              <td className="py-4 px-4 text-gray-600">{h.totalDoctors}</td>
              <td className="py-4 px-4 text-gray-600">{h.totalAppointments}</td>
              <td className="py-4 px-4"><StatusBadge status={h.status} /></td>
              <td className="py-4 px-4">
                <div className="flex items-center gap-2">
                  <button onClick={() => navigate(`/admin/hospitals/${h.id}`)} className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50" title="View">
                    <RiEyeLine size={16} />
                  </button>
                  <button onClick={() => navigate(`/admin/hospitals/${h.id}/edit`)} className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50" title="Edit">
                    <RiEditLine size={16} />
                  </button>
                  <button
                    onClick={() => onToggleBlock(h.id)}
                    className={`w-8 h-8 rounded-full border flex items-center justify-center hover:bg-red-50 ${
                      h.status === "blocked" ? "border-gray-200 text-gray-400" : "border-red-200 text-red-500"
                    }`}
                    title={h.status === "blocked" ? "Unblock" : "Block"}
                  >
                    <RiForbidLine size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
          {hospitals.length === 0 && (
            <tr><td colSpan={8} className="text-center py-10 text-gray-400">No hospitals match these filters.</td></tr>
          )}
        </tbody>
      </table>
    </div>
  )
}