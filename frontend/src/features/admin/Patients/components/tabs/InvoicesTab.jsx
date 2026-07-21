import React from 'react'

const statusStyles = {
  Paid: "bg-green-100 text-green-600",
  Pending: "bg-yellow-100 text-yellow-700",
}

export default function InvoicesTab({ patient }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 overflow-x-auto">
      <h3 className="font-bold text-lg text-gray-900 mb-4">Invoices</h3>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-gray-500 border-b border-gray-100">
            <th className="py-3 font-medium">ID</th>
            <th className="py-3 font-medium">Doctor</th>
            <th className="py-3 font-medium">Date</th>
            <th className="py-3 font-medium">Amount</th>
            <th className="py-3 font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          {patient.invoices.map((inv) => (
            <tr key={inv.id} className="border-b border-gray-50">
              <td className="py-3 text-[#316dff] font-semibold">{inv.id}</td>
              <td className="py-3 text-gray-900">{inv.doctor}</td>
              <td className="py-3 text-gray-600">{inv.date}</td>
              <td className="py-3 text-gray-900 font-semibold">${inv.amount}</td>
              <td className="py-3">
                <span className={`text-xs font-medium px-3 py-1 rounded-full ${statusStyles[inv.status]}`}>{inv.status}</span>
              </td>
            </tr>
          ))}
          {patient.invoices.length === 0 && (
            <tr><td colSpan={5} className="text-center py-8 text-gray-400">No invoices yet.</td></tr>
          )}
        </tbody>
      </table>
    </div>
  )
}