import React from 'react'
import { useNavigate } from "react-router-dom"
import { RiEyeLine } from "@remixicon/react"
import { StatusBadge, PaymentBadge } from './StatusBadge'

export default function AppointmentTable({ appointments }) {
  const navigate = useNavigate()

  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-gray-500 border-b border-gray-100">
            <th className="py-3 px-4 font-medium">ID</th>
            <th className="py-3 px-4 font-medium">Patient</th>
            <th className="py-3 px-4 font-medium">Doctor</th>
            <th className="py-3 px-4 font-medium">Specialty</th>
            <th className="py-3 px-4 font-medium">Hospital/Clinic</th>
            <th className="py-3 px-4 font-medium">Date</th>
            <th className="py-3 px-4 font-medium">Time Slot</th>
            <th className="py-3 px-4 font-medium">Type</th>
            <th className="py-3 px-4 font-medium">Status</th>
            <th className="py-3 px-4 font-medium">Payment</th>
            <th className="py-3 px-4 font-medium">Amount</th>
            <th className="py-3 px-4 font-medium">Action</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((a) => (
            <tr key={a.id} className="border-b border-gray-50 hover:bg-gray-50/50">
              <td className="py-4 px-4 text-[#316dff] font-semibold">{a.id}</td>
              <td className="py-4 px-4 text-gray-900">{a.patient}</td>
              <td className="py-4 px-4 text-gray-900">{a.doctor}</td>
              <td className="py-4 px-4 text-gray-600">{a.specialty}</td>
              <td className="py-4 px-4 text-gray-600">{a.hospital}</td>
              <td className="py-4 px-4 text-gray-600">{a.date}</td>
              <td className="py-4 px-4 text-gray-600">{a.timeSlot}</td>
              <td className="py-4 px-4 text-gray-600">{a.type}</td>
              <td className="py-4 px-4"><StatusBadge status={a.status} /></td>
              <td className="py-4 px-4"><PaymentBadge payment={a.payment} /></td>
              <td className="py-4 px-4 text-gray-900 font-semibold">${a.amount}</td>
              <td className="py-4 px-4">
                <button
                  onClick={() => navigate(`/admin/appointments/${a.id}`)}
                  className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50"
                  title="View"
                >
                  <RiEyeLine size={16} />
                </button>
              </td>
            </tr>
          ))}
          {appointments.length === 0 && (
            <tr>
              <td colSpan={12} className="text-center py-10 text-gray-400">No appointments match these filters.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}