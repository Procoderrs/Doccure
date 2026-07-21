import React from 'react'
import { RiSearchLine } from "@remixicon/react"
import { cities, statuses } from '../../../../data/patientData'

export default function FilterBar({ filters, setFilters }) {
  const update = (key, value) => setFilters((prev) => ({ ...prev, [key]: value }))

  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="relative flex-1 min-w-55">
        <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input
          value={filters.search}
          onChange={(e) => update("search", e.target.value)}
          placeholder="Search by name, email or phone"
          className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-full text-sm"
        />
      </div>

      <select
        value={filters.city}
        onChange={(e) => update("city", e.target.value)}
        className="border border-gray-200 rounded-full px-4 py-2.5 text-sm text-gray-700"
      >
        {cities.map((c) => <option key={c} value={c}>{c}</option>)}
      </select>

      <select
        value={filters.status}
        onChange={(e) => update("status", e.target.value)}
        className="border border-gray-200 rounded-full px-4 py-2.5 text-sm text-gray-700 capitalize"
      >
        {statuses.map((s) => <option key={s} value={s} className="capitalize">{s}</option>)}
      </select>
    </div>
  )
}