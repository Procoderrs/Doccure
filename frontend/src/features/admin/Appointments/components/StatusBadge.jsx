import React from 'react'

const statusStyles = {
  Pending: "bg-yellow-100 text-yellow-700",
  Confirmed: "bg-blue-100 text-blue-600",
  Completed: "bg-green-100 text-green-600",
  Cancelled: "bg-red-100 text-red-600",
  Rejected: "bg-gray-200 text-gray-600",
}

const paymentStyles = {
  Paid: "bg-green-100 text-green-600",
  Unpaid: "bg-orange-100 text-orange-600",
}

export function StatusBadge({ status }) {
  return <span className={`text-xs font-medium px-3 py-1 rounded-full ${statusStyles[status]}`}>{status}</span>
}

export function PaymentBadge({ payment }) {
  return <span className={`text-xs font-medium px-3 py-1 rounded-full ${paymentStyles[payment]}`}>{payment}</span>
}