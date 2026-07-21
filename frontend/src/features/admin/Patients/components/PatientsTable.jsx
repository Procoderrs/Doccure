import React from 'react'
import { useNavigate } from "react-router-dom"
import { RiEyeLine, RiForbidLine } from "@remixicon/react"
import StatusBadge from './StatusBadge'

export default function PatientTable({ patients, onToggleBlock }) {
  const navigate = useNavigate()

  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-gray-500 border-b border-gray-100">
            <th className="py-3 px-4 font-medium">Patient</th>
            <th className="py-3 px-4 font-medium">Phone / Email</th>
            <th className="py-3 px-4 font-medium">Age / Gender</th>
            <th className="py-3 px-4 font-medium">City</th>
            <th className="py-3 px-4 font-medium">Total Appointments</th>
            <th className="py-3 px-4 font-medium">Last Visited Doctor</th>
            <th className="py-3 px-4 font-medium">Last Appointment</th>
            <th className="py-3 px-4 font-medium">Status</th>
            <th className="py-3 px-4 font-medium">Action</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((p) => (
            <tr key={p.id} className="border-b border-gray-50 hover:bg-gray-50/50">
              <td className="py-4 px-4">
                <div className="flex items-center gap-3">
                  <img src={p.img} alt={p.name} className="w-10 h-10 rounded-full object-cover bg-gray-100" />
                  <p className="font-semibold text-gray-900">{p.name}</p>
                </div>
              </td>
              <td className="py-4 px-4 text-gray-600">
                <p>{p.phone}</p>
                <p className="text-xs text-gray-400">{p.email}</p>
              </td>
              <td className="py-4 px-4 text-gray-600">{p.age} / {p.gender}</td>
              <td className="py-4 px-4 text-gray-600">{p.city}</td>
              <td className="py-4 px-4 text-gray-600">{p.totalAppointments}</td>
              <td className="py-4 px-4 text-gray-600">{p.lastVisitedDoctor}</td>
              <td className="py-4 px-4 text-gray-600">{p.lastAppointmentDate}</td>
              <td className="py-4 px-4"><StatusBadge status={p.status} /></td>
              <td className="py-4 px-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => navigate(`/admin/patients/${p.id}`)}
                    className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50"
                    title="View"
                  >
                    <RiEyeLine size={16} />
                  </button>
                  <button
                    onClick={() => onToggleBlock(p.id)}
                    className={`w-8 h-8 rounded-full border flex items-center justify-center hover:bg-red-50 ${
                      p.status === "blocked" ? "border-gray-200 text-gray-400" : "border-red-200 text-red-500"
                    }`}
                    title={p.status === "blocked" ? "Unblock" : "Block"}
                  >
                    <RiForbidLine size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
          {patients.length === 0 && (
            <tr>
              <td colSpan={9} className="text-center py-10 text-gray-400">No patients match these filters.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}