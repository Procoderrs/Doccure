import React from 'react'
import { useNavigate } from "react-router-dom"
import { pharmacyOrdersData } from '../../../data/pharmacyOrderData'

const statusStyles = {
  Pending: "bg-yellow-100 text-yellow-700",
  Confirmed: "bg-blue-100 text-blue-600",
  Packed: "bg-purple-100 text-purple-600",
  Shipped: "bg-cyan-100 text-cyan-600",
  Delivered: "bg-green-100 text-green-600",
  Cancelled: "bg-red-100 text-red-600",
}

export default function MyOrdersPage() {
  const navigate = useNavigate()
  const myOrders = pharmacyOrdersData.filter((o) => o.patient === "Hendrita Hayes")

  return (
    <div className="flex flex-col gap-6 p-6">
      <h2 className="text-2xl font-bold text-gray-900">My Pharmacy Orders</h2>

      <div className="flex flex-col gap-4">
        {myOrders.map((o) => (
          <button
            key={o.id}
            onClick={() => navigate(`/pharmacy/orders/${o.id}`)}
            className="bg-white border border-gray-100 rounded-2xl p-5 flex items-center justify-between text-left hover:shadow-md transition"
          >
            <div>
              <p className="text-[#316dff] font-semibold">{o.id}</p>
              <p className="text-sm text-gray-500">{o.items.length} item(s) &nbsp;•&nbsp; {o.date}</p>
            </div>
            <div className="flex items-center gap-4">
              <p className="font-bold text-gray-900">${o.totalAmount}</p>
              <span className={`text-xs font-medium px-3 py-1 rounded-full ${statusStyles[o.deliveryStatus]}`}>{o.deliveryStatus}</span>
            </div>
          </button>
        ))}
        {myOrders.length === 0 && (
          <p className="text-center py-10 text-gray-400">No pharmacy orders yet.</p>
        )}
      </div>
    </div>
  )
}