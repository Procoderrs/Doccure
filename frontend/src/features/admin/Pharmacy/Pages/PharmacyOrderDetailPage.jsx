import React, { useState } from 'react'
import { useParams, useNavigate } from "react-router-dom"
import { RiArrowLeftLine, RiShieldCheckFill } from "@remixicon/react"
import { pharmacyOrdersData, deliveryStatuses } from '../../../../data/pharmacyData'

const statusStyles = {
  Pending: "bg-yellow-100 text-yellow-700",
  Confirmed: "bg-blue-100 text-blue-600",
  Packed: "bg-purple-100 text-purple-600",
  Shipped: "bg-cyan-100 text-cyan-600",
  Delivered: "bg-green-100 text-green-600",
  Cancelled: "bg-red-100 text-red-600",
}

const flow = ["Pending", "Confirmed", "Packed", "Shipped", "Delivered"]

export default function PharmacyOrderDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [order, setOrder] = useState(() => pharmacyOrdersData.find((o) => o.id === id))
  const [showCancelConfirm, setShowCancelConfirm] = useState(false)

  if (!order) {
    return (
      <div className="p-6">
        <p className="text-gray-500">Order not found.</p>
        <button onClick={() => navigate(-1)} className="text-[#316dff] font-medium mt-2">Go back</button>
      </div>
    )
  }

  const currentIndex = flow.indexOf(order.deliveryStatus)
  const nextStatus = flow[currentIndex + 1]

  const advanceStatus = () => {
    if (!nextStatus) return
    if (nextStatus === "Confirmed" && order.medicineRequiresPrescription && !order.prescriptionAttached) return
    setOrder((prev) => ({ ...prev, deliveryStatus: nextStatus }))
  }

  const cancelOrder = () => {
    setOrder((prev) => ({ ...prev, deliveryStatus: "Cancelled" }))
    setShowCancelConfirm(false)
  }

  return (
    <div className="flex flex-col gap-6 p-6">
      <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-sm text-gray-500 w-fit">
        <RiArrowLeftLine size={16} /> Back to Orders
      </button>

      <div className="bg-white border border-gray-100 rounded-2xl p-6 flex items-center justify-between flex-wrap gap-4">
        <div>
          <p className="text-[#316dff] font-semibold">{order.id}</p>
          <p className="text-sm text-gray-500">{order.patient} &nbsp;•&nbsp; {order.date}</p>
        </div>
        <span className={`text-xs font-medium px-3 py-1 rounded-full ${statusStyles[order.deliveryStatus]}`}>{order.deliveryStatus}</span>
      </div>

      {order.deliveryStatus !== "Cancelled" && (
        <div className="bg-white border border-gray-100 rounded-2xl p-6">
          <h3 className="font-bold text-lg text-gray-900 mb-4">Delivery Progress</h3>
          <div className="flex items-center justify-between mb-6">
            {flow.map((s, i) => (
              <div key={s} className="flex-1 flex flex-col items-center relative">
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold z-10 ${
                  i <= currentIndex ? "bg-[#316dff] text-white" : "bg-gray-100 text-gray-400"
                }`}>{i + 1}</span>
                <p className={`text-xs mt-2 text-center ${i <= currentIndex ? "text-gray-900 font-medium" : "text-gray-400"}`}>{s}</p>
                {i < flow.length - 1 && (
                  <span className={`absolute top-3 left-1/2 w-full h-[2px] ${i < currentIndex ? "bg-[#316dff]" : "bg-gray-200"}`} />
                )}
              </div>
            ))}
          </div>

          <div className="flex gap-3">
            {nextStatus && (
              <button onClick={advanceStatus} className="bg-[#316dff] text-white rounded-full px-6 py-2.5 text-sm font-semibold">
                Mark as {nextStatus}
              </button>
            )}
            <button onClick={() => setShowCancelConfirm(true)} className="border border-red-300 text-red-600 rounded-full px-6 py-2.5 text-sm font-semibold">
              Cancel Order
            </button>
          </div>
        </div>
      )}

      <div className="bg-white border border-gray-100 rounded-2xl p-6">
        <h3 className="font-bold text-lg text-gray-900 mb-4">Items</h3>
        <div className="flex flex-col divide-y divide-gray-100">
          {order.items.map((item, i) => (
            <div key={i} className="flex items-center justify-between py-3">
              <span className="text-gray-700">{item.name} × {item.qty}</span>
              <span className="font-semibold text-gray-900">${item.price * item.qty}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-between pt-4 mt-2 border-t border-gray-100 font-bold text-gray-900">
          <span>Total</span><span>${order.totalAmount}</span>
        </div>
      </div>

      {order.prescriptionAttached && (
        <div className="bg-white border border-gray-100 rounded-2xl p-6">
          <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center gap-2">
            <RiShieldCheckFill className="text-orange-500" size={18} /> Prescription
          </h3>
          <p className="text-gray-600 text-sm">{order.prescriptionId} attached — verify before confirming.</p>
        </div>
      )}

      {showCancelConfirm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm">
            <p className="font-bold text-gray-900 mb-2">Cancel this order?</p>
            <p className="text-sm text-gray-500 mb-5">This will notify the patient. This action cannot be undone.</p>
            <div className="flex gap-3">
              <button onClick={() => setShowCancelConfirm(false)} className="flex-1 border border-gray-200 rounded-full py-2.5 text-sm font-medium">Keep Order</button>
              <button onClick={cancelOrder} className="flex-1 bg-red-500 text-white rounded-full py-2.5 text-sm font-medium">Yes, Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}