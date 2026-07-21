import React from 'react'
import { RiSearchLine } from "@remixicon/react"
import { specialties, statuses, types, paymentStatuses } from '../../../../data/AppointmentData'

export default function FilterBar({ filters, setFilters }) {
  const update = (key, value) => setFilters((prev) => ({ ...prev, [key]: value }))

  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="relative flex-1 min-w-55">
        <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input
          value={filters.search}
          onChange={(e) => update("search", e.target.value)}
          placeholder="Search patient or doctor"
          className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-full text-sm"
        />
      </div>

      <select value={filters.status} onChange={(e) => update("status", e.target.value)} className="border border-gray-200 rounded-full px-4 py-2.5 text-sm text-gray-700">
        {statuses.map((s) => <option key={s} value={s}>{s}</option>)}
      </select>

      <select value={filters.specialty} onChange={(e) => update("specialty", e.target.value)} className="border border-gray-200 rounded-full px-4 py-2.5 text-sm text-gray-700">
        {specialties.map((s) => <option key={s} value={s}>{s}</option>)}
      </select>

      <select value={filters.type} onChange={(e) => update("type", e.target.value)} className="border border-gray-200 rounded-full px-4 py-2.5 text-sm text-gray-700">
        {types.map((t) => <option key={t} value={t}>{t}</option>)}
      </select>

      <select value={filters.payment} onChange={(e) => update("payment", e.target.value)} className="border border-gray-200 rounded-full px-4 py-2.5 text-sm text-gray-700">
        {paymentStatuses.map((p) => <option key={p} value={p}>{p}</option>)}
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