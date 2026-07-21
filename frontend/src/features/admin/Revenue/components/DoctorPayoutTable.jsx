import React from 'react'
import { doctorPayoutsData } from '../../../../data/revenueData'

export default function DoctorPayoutsTable() {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-gray-500 border-b border-gray-100">
            <th className="py-3 px-4 font-medium">Doctor</th>
            <th className="py-3 px-4 font-medium">Total Earnings</th>
            <th className="py-3 px-4 font-medium">Paid to Doctor</th>
            <th className="py-3 px-4 font-medium">Pending Payout</th>
          </tr>
        </thead>
        <tbody>
          {doctorPayoutsData.map((d) => (
            <tr key={d.doctor} className="border-b border-gray-50">
              <td className="py-4 px-4 font-semibold text-gray-900">{d.doctor}</td>
              <td className="py-4 px-4 text-gray-900">${d.totalEarned}</td>
              <td className="py-4 px-4 text-green-600 font-medium">${d.paid}</td>
              <td className="py-4 px-4">
                {d.pending > 0 ? (
                  <span className="text-orange-600 font-medium">${d.pending}</span>
                ) : (
                  <span className="text-gray-400">$0</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}