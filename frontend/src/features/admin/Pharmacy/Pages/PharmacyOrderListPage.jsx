import React, { useState, useMemo } from 'react'
import { RiSearchLine } from "@remixicon/react"
import { pharmacyOrdersData, deliveryStatuses } from '../../../../data/pharmacyData'
import OrderTable from '../components/OrderTable'

export default function PharmacyOrdersListPage() {
  const [search, setSearch] = useState("")
  const [status, setStatus] = useState("All Status")

  const filtered = useMemo(() => {
    return pharmacyOrdersData.filter((o) => {
      const matchesSearch = o.patient.toLowerCase().includes(search.toLowerCase()) || o.id.toLowerCase().includes(search.toLowerCase())
      const matchesStatus = status === "All Status" || o.deliveryStatus === status
      return matchesSearch && matchesStatus
    })
  }, [search, status])

  return (
    <div className="flex flex-col gap-6 p-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Pharmacy Orders</h2>
        <p className="text-sm text-gray-400">Confirm, pack, ship, and manage medicine orders</p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[220px]">
          <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search order ID or patient" className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-full text-sm" />
        </div>
        <select value={status} onChange={(e) => setStatus(e.target.value)} className="border border-gray-200 rounded-full px-4 py-2.5 text-sm text-gray-700">
          <option>All Status</option>
          {deliveryStatuses.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <OrderTable orders={filtered} />
    </div>
  )
}