import React from 'react'
import { useNavigate } from "react-router-dom"
import { RiEyeLine } from "@remixicon/react"

const typeStyles = {
  Appointment: "bg-blue-100 text-blue-600",
  Pharmacy: "bg-cyan-100 text-cyan-600",
  Refund: "bg-red-100 text-red-600",
}

const paymentStyles = {
  Paid: "bg-green-100 text-green-600",
  Unpaid: "bg-orange-100 text-orange-600",
  Refunded: "bg-red-100 text-red-600",
}

export default function TransactionTable({ transactions }) {
  const navigate = useNavigate()

  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-gray-500 border-b border-gray-100">
            <th className="py-3 px-4 font-medium">Transaction ID</th>
            <th className="py-3 px-4 font-medium">Type</th>
            <th className="py-3 px-4 font-medium">Patient</th>
            <th className="py-3 px-4 font-medium">Doctor / Order ID</th>
            <th className="py-3 px-4 font-medium">Amount</th>
            <th className="py-3 px-4 font-medium">Payment Status</th>
            <th className="py-3 px-4 font-medium">Date</th>
            <th className="py-3 px-4 font-medium">Action</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <tr key={t.id} className="border-b border-gray-50 hover:bg-gray-50/50">
              <td className="py-4 px-4 text-[#316dff] font-semibold">{t.id}</td>
              <td className="py-4 px-4"><span className={`text-xs font-medium px-3 py-1 rounded-full ${typeStyles[t.type]}`}>{t.type}</span></td>
              <td className="py-4 px-4 text-gray-900">{t.patient}</td>
              <td className="py-4 px-4 text-gray-600">{t.reference}</td>
              <td className={`py-4 px-4 font-semibold ${t.amount < 0 ? "text-red-500" : "text-gray-900"}`}>
                {t.amount < 0 ? `-$${Math.abs(t.amount)}` : `$${t.amount}`}
              </td>
              <td className="py-4 px-4"><span className={`text-xs font-medium px-3 py-1 rounded-full ${paymentStyles[t.paymentStatus]}`}>{t.paymentStatus}</span></td>
              <td className="py-4 px-4 text-gray-600">{t.date}</td>
              <td className="py-4 px-4">
                <button onClick={() => navigate(`/admin/revenue/${t.id}`)} className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50" title="View Invoice">
                  <RiEyeLine size={16} />
                </button>
              </td>
            </tr>
          ))}
          {transactions.length === 0 && (
            <tr><td colSpan={8} className="text-center py-10 text-gray-400">No transactions match these filters.</td></tr>
          )}
        </tbody>
      </table>
    </div>
  )
}