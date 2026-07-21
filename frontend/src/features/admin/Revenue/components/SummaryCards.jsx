import React from 'react'
import {
  RiMoneyDollarCircleLine, RiCalendarCheckLine, RiMedicineBottleLine,
  RiTimeLine, RiRefund2Line, RiHandCoinLine, RiPercentLine
} from "@remixicon/react"

export default function SummaryCards({ summary }) {
  const cards = [
    { label: "Total Revenue", value: summary.totalRevenue, icon: RiMoneyDollarCircleLine, accent: "#316dff", bg: "bg-blue-50" },
    { label: "Appointment Revenue", value: summary.appointmentRevenue, icon: RiCalendarCheckLine, accent: "#6C5CE7", bg: "bg-purple-50" },
    { label: "Pharmacy Revenue", value: summary.pharmacyRevenue, icon: RiMedicineBottleLine, accent: "#17A398", bg: "bg-cyan-50" },
    { label: "Pending Payments", value: summary.pendingPayments, icon: RiTimeLine, accent: "#E8A33D", bg: "bg-orange-50" },
    { label: "Refunded Amount", value: summary.refundedAmount, icon: RiRefund2Line, accent: "#E8734A", bg: "bg-red-50" },
    { label: "Doctor Payouts", value: summary.doctorPayouts, icon: RiHandCoinLine, accent: "#2FA84F", bg: "bg-green-50" },
    { label: "Platform Commission", value: summary.platformCommission, icon: RiPercentLine, accent: "#0f172a", bg: "bg-gray-100" },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {cards.map((c) => {
        const Icon = c.icon
        return (
          <div key={c.label} className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5 flex items-center gap-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${c.bg}`} style={{ color: c.accent }}>
              <Icon size={22} />
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">{c.label}</p>
              <p className="text-xl font-bold text-gray-900">${c.value.toLocaleString()}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}