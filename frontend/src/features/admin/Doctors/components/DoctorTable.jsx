import React from 'react'
import { useNavigate } from "react-router-dom"
import { RiStarFill, RiEyeLine, RiCheckLine, RiForbidLine } from "@remixicon/react"
import StatusBadge from './StatusBadge'

export default function DoctorsTable({ doctors, onApprove, onToggleBlock, onToggleFeatured }) {
  const navigate = useNavigate()

  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-gray-500 border-b border-gray-100">
            <th className="py-3 px-4 font-medium">Doctor</th>
            <th className="py-3 px-4 font-medium">Specialty</th>
            <th className="py-3 px-4 font-medium">Hospital/Clinic</th>
            <th className="py-3 px-4 font-medium">City</th>
            <th className="py-3 px-4 font-medium">Fee</th>
            <th className="py-3 px-4 font-medium">Rating</th>
            <th className="py-3 px-4 font-medium">Status</th>
            <th className="py-3 px-4 font-medium">Appointments</th>
            <th className="py-3 px-4 font-medium">Featured</th>
            <th className="py-3 px-4 font-medium">Action</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((d) => (
            <tr key={d.id} className="border-b border-gray-50 hover:bg-gray-50/50">
              <td className="py-4 px-4">
                <div className="flex items-center gap-3">
                  <img src={d.img} alt={d.name} className="w-10 h-10 rounded-full object-cover bg-gray-100" />
                  <div>
                    <p className="font-semibold text-gray-900">{d.name}</p>
                    <p className="text-xs text-gray-400">{d.email}</p>
                  </div>
                </div>
              </td>
              <td className="py-4 px-4 text-gray-600">{d.specialty}</td>
              <td className="py-4 px-4 text-gray-600">{d.hospital}</td>
              <td className="py-4 px-4 text-gray-600">{d.city}</td>
              <td className="py-4 px-4 text-gray-900 font-semibold">${d.fee}</td>
              <td className="py-4 px-4">
                <span className="flex items-center gap-1 text-gray-700">
                  <RiStarFill size={14} className="text-yellow-400" /> {d.rating}
                </span>
              </td>
              <td className="py-4 px-4"><StatusBadge status={d.status} /></td>
              <td className="py-4 px-4 text-gray-600">{d.appointmentsCount}</td>
              <td className="py-4 px-4">
                <button
                  onClick={() => onToggleFeatured(d.id)}
                  className={`w-10 h-5 rounded-full flex items-center transition-colors ${d.featured ? "bg-[#316dff] justify-end" : "bg-gray-300 justify-start"} px-0.5`}
                >
                  <span className="w-4 h-4 bg-white rounded-full block" />
                </button>
              </td>
              <td className="py-4 px-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => navigate(`/admin/doctors/${d.id}`)}
                    className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50"
                    title="View"
                  >
                    <RiEyeLine size={16} />
                  </button>
                  {d.status === "pending" && (
                    <button
                      onClick={() => onApprove(d.id)}
                      className="w-8 h-8 rounded-full border border-green-200 flex items-center justify-center text-green-600 hover:bg-green-50"
                      title="Approve"
                    >
                      <RiCheckLine size={16} />
                    </button>
                  )}
                  <button
                    onClick={() => onToggleBlock(d.id)}
                    className={`w-8 h-8 rounded-full border flex items-center justify-center hover:bg-red-50 ${
                      d.status === "blocked" ? "border-gray-200 text-gray-400" : "border-red-200 text-red-500"
                    }`}
                    title={d.status === "blocked" ? "Unblock" : "Block"}
                  >
                    <RiForbidLine size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
          {doctors.length === 0 && (
            <tr>
              <td colSpan={10} className="text-center py-10 text-gray-400">No doctors match these filters.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}