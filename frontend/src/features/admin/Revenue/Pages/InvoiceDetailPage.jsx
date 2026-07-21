import React from 'react'
import { useParams, useNavigate } from "react-router-dom"
import { RiArrowLeftLine } from "@remixicon/react"
import { transactionsData } from '../../../../data/revenueData'

const paymentStyles = {
  Paid: "bg-green-100 text-green-600",
  Unpaid: "bg-orange-100 text-orange-600",
  Refunded: "bg-red-100 text-red-600",
}

export default function InvoiceDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const txn = transactionsData.find((t) => t.id === id)

  if (!txn) {
    return (
      <div className="p-6">
        <p className="text-gray-500">Transaction not found.</p>
        <button onClick={() => navigate(-1)} className="text-[#316dff] font-medium mt-2">Go back</button>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-6 p-6">
      <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-sm text-gray-500 w-fit">
        <RiArrowLeftLine size={16} /> Back to Revenue
      </button>

      <div className="bg-white border border-gray-100 rounded-2xl p-6 max-w-2xl">
        <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-100">
          <div>
            <p className="text-[#316dff] font-semibold text-lg">{txn.id}</p>
            <p className="text-sm text-gray-500">{txn.date}</p>
          </div>
          <span className={`text-xs font-medium px-3 py-1 rounded-full ${paymentStyles[txn.paymentStatus]}`}>{txn.paymentStatus}</span>
        </div>

        <div className="grid grid-cols-2 gap-5 text-sm mb-6">
          <div><p className="text-gray-500">Type</p><p className="font-semibold text-gray-900">{txn.type}</p></div>
          <div><p className="text-gray-500">Patient</p><p className="font-semibold text-gray-900">{txn.patient}</p></div>
          <div><p className="text-gray-500">Doctor / Order</p><p className="font-semibold text-gray-900">{txn.reference}</p></div>
          <div><p className="text-gray-500">Reference ID</p><p className="font-semibold text-gray-900">{txn.referenceId}</p></div>
        </div>

        <div className="border-t border-gray-100 pt-4 flex flex-col gap-2 text-sm">
          <div className="flex justify-between"><span className="text-gray-500">Amount</span><span className="font-semibold text-gray-900">${Math.abs(txn.amount)}</span></div>
          {txn.type === "Appointment" && (
            <>
              <div className="flex justify-between"><span className="text-gray-500">Platform Commission</span><span className="text-gray-900">${txn.commission}</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Doctor Earning</span><span className="text-gray-900">${txn.doctorEarning}</span></div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}