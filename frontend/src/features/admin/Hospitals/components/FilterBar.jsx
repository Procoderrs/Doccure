import React from 'react'
import { RiSearchLine } from "@remixicon/react"
import { cities, departmentsList, statuses } from '../../../../data/hospitalData'

export default function FilterBar({ filters, setFilters }) {
  const update = (key, value) => setFilters((prev) => ({ ...prev, [key]: value }))

  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="relative flex-1 min-w-[220px]">
        <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input
          value={filters.search}
          onChange={(e) => update("search", e.target.value)}
          placeholder="Search hospital"
          className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-full text-sm"
        />
      </div>

      <select value={filters.city} onChange={(e) => update("city", e.target.value)} className="border border-gray-200 rounded-full px-4 py-2.5 text-sm text-gray-700">
        {cities.map((c) => <option key={c} value={c}>{c}</option>)}
      </select>

      <select value={filters.department} onChange={(e) => update("department", e.target.value)} className="border border-gray-200 rounded-full px-4 py-2.5 text-sm text-gray-700">
        {departmentsList.map((d) => <option key={d} value={d}>{d}</option>)}
      </select>

      <select value={filters.status} onChange={(e) => update("status", e.target.value)} className="border border-gray-200 rounded-full px-4 py-2.5 text-sm text-gray-700 capitalize">
        {statuses.map((s) => <option key={s} value={s} className="capitalize">{s}</option>)}
      </select>
    </div>
  )
}