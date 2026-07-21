import React from 'react'

const statusStyles = {
  Confirmed: "bg-blue-100 text-blue-600",
  Pending: "bg-yellow-100 text-yellow-700",
  Completed: "bg-green-100 text-green-600",
  Cancelled: "bg-red-100 text-red-600",
}

export default function AppointmentsTab({ hospital }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 overflow-x-auto">
      <h3 className="font-bold text-lg text-gray-900 mb-4">Appointments</h3>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-gray-500 border-b border-gray-100">
            <th className="py-3 font-medium">ID</th>
            <th className="py-3 font-medium">Patient</th>
            <th className="py-3 font-medium">Doctor</th>
            <th className="py-3 font-medium">Date</th>
            <th className="py-3 font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          {hospital.appointments.map((a) => (
            <tr key={a.id} className="border-b border-gray-50">
              <td className="py-3 text-[#316dff] font-semibold">{a.id}</td>
              <td className="py-3 text-gray-900">{a.patient}</td>
              <td className="py-3 text-gray-600">{a.doctor}</td>
              <td className="py-3 text-gray-600">{a.date}</td>
              <td className="py-3"><span className={`text-xs font-medium px-3 py-1 rounded-full ${statusStyles[a.status]}`}>{a.status}</span></td>
            </tr>
          ))}
          {hospital.appointments.length === 0 && (
            <tr><td colSpan={5} className="text-center py-8 text-gray-400">No appointments yet.</td></tr>
          )}
        </tbody>
      </table>
    </div>
  )
}