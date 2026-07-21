import React from 'react'

export default function PatientsTab({ doctor }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 overflow-x-auto">
      <h3 className="font-bold text-lg text-gray-900 mb-1">Patients Summary</h3>
      <p className="text-sm text-gray-400 mb-4">Linked patients overview — full medical records stay within patient/doctor dashboards.</p>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-gray-500 border-b border-gray-100">
            <th className="py-3 font-medium">Patient Name</th>
            <th className="py-3 font-medium">Last Appointment</th>
            <th className="py-3 font-medium">Total Visits</th>
            <th className="py-3 font-medium">Status</th>
            <th className="py-3 font-medium">Action</th>
          </tr>
        </thead>
        <tbody>
          {doctor.patients.map((p, i) => (
            <tr key={i} className="border-b border-gray-50">
              <td className="py-3 text-gray-900 font-medium">{p.name}</td>
              <td className="py-3 text-gray-600">{p.lastVisit}</td>
              <td className="py-3 text-gray-600">{p.totalVisits}</td>
              <td className="py-3 text-gray-600">{p.status}</td>
              <td className="py-3">
                <button className="text-[#316dff] font-medium">View History</button>
              </td>
            </tr>
          ))}
          {doctor.patients.length === 0 && (
            <tr><td colSpan={5} className="text-center py-8 text-gray-400">No linked patients yet.</td></tr>
          )}
        </tbody>
      </table>
    </div>
  )
}