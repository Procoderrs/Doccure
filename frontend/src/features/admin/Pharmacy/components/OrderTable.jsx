import React from 'react'
import { useNavigate } from "react-router-dom"
import { RiEyeLine, RiShieldCheckFill } from "@remixicon/react"

const statusStyles = {
  Pending: "bg-yellow-100 text-yellow-700",
  Confirmed: "bg-blue-100 text-blue-600",
  Packed: "bg-purple-100 text-purple-600",
  Shipped: "bg-cyan-100 text-cyan-600",
  Delivered: "bg-green-100 text-green-600",
  Cancelled: "bg-red-100 text-red-600",
}

const paymentStyles = {
  Paid: "bg-green-100 text-green-600",
  Unpaid: "bg-orange-100 text-orange-600",
}

export default function OrderTable({ orders }) {
  const navigate = useNavigate()

  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-gray-500 border-b border-gray-100">
            <th className="py-3 px-4 font-medium">Order ID</th>
            <th className="py-3 px-4 font-medium">Patient</th>
            <th className="py-3 px-4 font-medium">Medicines</th>
            <th className="py-3 px-4 font-medium">Total</th>
            <th className="py-3 px-4 font-medium">Payment</th>
            <th className="py-3 px-4 font-medium">Delivery</th>
            <th className="py-3 px-4 font-medium">Prescription</th>
            <th className="py-3 px-4 font-medium">Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o.id} className="border-b border-gray-50 hover:bg-gray-50/50">
              <td className="py-4 px-4 text-[#316dff] font-semibold">{o.id}</td>
              <td className="py-4 px-4 text-gray-900">{o.patient}</td>
              <td className="py-4 px-4 text-gray-600">{o.items.map((i) => i.name).join(", ")}</td>
              <td className="py-4 px-4 text-gray-900 font-semibold">${o.totalAmount}</td>
              <td className="py-4 px-4"><span className={`text-xs font-medium px-3 py-1 rounded-full ${paymentStyles[o.paymentStatus]}`}>{o.paymentStatus}</span></td>
              <td className="py-4 px-4"><span className={`text-xs font-medium px-3 py-1 rounded-full ${statusStyles[o.deliveryStatus]}`}>{o.deliveryStatus}</span></td>
              <td className="py-4 px-4">
                {o.prescriptionAttached ? (
                  <span className="flex items-center gap-1 text-xs text-green-600"><RiShieldCheckFill size={14} /> Attached</span>
                ) : (
                  <span className="text-xs text-gray-400">Not required</span>
                )}
              </td>
              <td className="py-4 px-4">
                <button onClick={() => navigate(`/admin/pharmacy/orders/${o.id}`)} className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50" title="View">
                  <RiEyeLine size={16} />
                </button>
              </td>
            </tr>
          ))}
          {orders.length === 0 && (
            <tr><td colSpan={8} className="text-center py-10 text-gray-400">No orders found.</td></tr>
          )}
        </tbody>
      </table>
    </div>
  )
}