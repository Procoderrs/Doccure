import React from 'react'
import { types, paymentStatuses, doctorsList } from '../../../../data/revenueData'

export default function FilterBar({ filters, setFilters }) {
  const update = (key, value) => setFilters((prev) => ({ ...prev, [key]: value }))

  return (
    <div className="flex flex-wrap items-center gap-3">
      <select value={filters.type} onChange={(e) => update("type", e.target.value)} className="border border-gray-200 rounded-full px-4 py-2.5 text-sm text-gray-700">
        {types.map((t) => <option key={t} value={t}>{t}</option>)}
      </select>

      <select value={filters.paymentStatus} onChange={(e) => update("paymentStatus", e.target.value)} className="border border-gray-200 rounded-full px-4 py-2.5 text-sm text-gray-700">
        {paymentStatuses.map((s) => <option key={s} value={s}>{s}</option>)}
      </select>

      <select value={filters.doctor} onChange={(e) => update("doctor", e.target.value)} className="border border-gray-200 rounded-full px-4 py-2.5 text-sm text-gray-700">
        {doctorsList.map((d) => <option key={d} value={d}>{d}</option>)}
      </select>

      <input
        type="date"
        value={filters.dateFrom}
        onChange={(e) => update("dateFrom", e.target.value)}
        className="border border-gray-200 rounded-full px-4 py-2.5 text-sm text-gray-700"
      />
      <span className="text-gray-400 text-sm">to</span>
      <input
        type="date"
        value={filters.dateTo}
        onChange={(e) => update("dateTo", e.target.value)}
        className="border border-gray-200 rounded-full px-4 py-2.5 text-sm text-gray-700"
      />
    </div>
  )
}