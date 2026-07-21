import React, { useState, useMemo } from 'react'
import { transactionsData, commissionRate } from '../../../../data/revenueData'
import SummaryCards from '../components/SummaryCards'
import FilterBar from '../components/filterBar'
import TransactionTable from '../components/TransactionTable'
import DoctorPayoutsTable from '../components/DoctorPayoutTable'

export default function RevenuePage() {
  const [activeTab, setActiveTab] = useState("Transactions")
  const [filters, setFilters] = useState({
    type: "All Types",
    paymentStatus: "All Status",
    doctor: "All Doctors",
    dateFrom: "",
    dateTo: "",
  })

  const summary = useMemo(() => {
    const paidTxns = transactionsData.filter((t) => t.paymentStatus === "Paid")
    const appointmentRevenue = paidTxns.filter((t) => t.type === "Appointment").reduce((s, t) => s + t.amount, 0)
    const pharmacyRevenue = paidTxns.filter((t) => t.type === "Pharmacy").reduce((s, t) => s + t.amount, 0)
    const pendingPayments = transactionsData.filter((t) => t.paymentStatus === "Unpaid").reduce((s, t) => s + t.amount, 0)
    const refundedAmount = transactionsData.filter((t) => t.type === "Refund").reduce((s, t) => s + Math.abs(t.amount), 0)
    const doctorPayouts = paidTxns.reduce((s, t) => s + t.doctorEarning, 0)
    const platformCommission = paidTxns.reduce((s, t) => s + t.commission, 0)
    const totalRevenue = appointmentRevenue + pharmacyRevenue - refundedAmount

    return { totalRevenue, appointmentRevenue, pharmacyRevenue, pendingPayments, refundedAmount, doctorPayouts, platformCommission }
  }, [])

  const filteredTransactions = useMemo(() => {
    return transactionsData.filter((t) => {
      const matchesType = filters.type === "All Types" || t.type === filters.type
      const matchesStatus = filters.paymentStatus === "All Status" || t.paymentStatus === filters.paymentStatus
      const matchesDoctor = filters.doctor === "All Doctors" || t.reference === filters.doctor
      const matchesDateFrom = !filters.dateFrom || t.date >= filters.dateFrom
      const matchesDateTo = !filters.dateTo || t.date <= filters.dateTo
      return matchesType && matchesStatus && matchesDoctor && matchesDateFrom && matchesDateTo
    })
  }, [filters])

  return (
    <div className="flex flex-col gap-6 p-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Revenue</h2>
        <p className="text-sm text-gray-400">Appointment fees, video consults, pharmacy orders & refunds — platform commission at {commissionRate * 100}%</p>
      </div>

      <SummaryCards summary={summary} />

      <div className="flex gap-2">
        {["Transactions", "Doctor Payouts"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium ${
              activeTab === tab ? "bg-[#316dff] text-white" : "border border-gray-200 text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === "Transactions" && (
        <>
          <FilterBar filters={filters} setFilters={setFilters} />
          <TransactionTable transactions={filteredTransactions} />
        </>
      )}

      {activeTab === "Doctor Payouts" && <DoctorPayoutsTable />}
    </div>
  )
}