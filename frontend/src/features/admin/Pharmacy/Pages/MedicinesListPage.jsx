import React, { useState, useMemo } from 'react'
import { useNavigate } from "react-router-dom"
import { RiSearchLine } from "@remixicon/react"
import { medicinesData, categories } from '../../../../data/pharmacyData'
import MedicineTable from '../components/MedicineTable'

export default function MedicinesListPage() {
  const navigate = useNavigate()
  const [medicines, setMedicines] = useState(medicinesData)
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All Categories")

  const filtered = useMemo(() => {
    return medicines.filter((m) => {
      const matchesSearch = m.name.toLowerCase().includes(search.toLowerCase())
      const matchesCategory = category === "All Categories" || m.category === category
      return matchesSearch && matchesCategory
    })
  }, [medicines, search, category])

  const onToggleStatus = (id) => {
    setMedicines((prev) => prev.map((m) => m.id === id ? { ...m, status: m.status === "active" ? "inactive" : "active" } : m))
  }

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Medicines</h2>
          <p className="text-sm text-gray-400">Manage products, stock, and prescription rules</p>
        </div>
        <button onClick={() => navigate('/admin/pharmacy/medicines/new')} className="bg-[#316dff] text-white rounded-full px-5 py-2.5 text-sm font-semibold">
          + Add Medicine
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[220px]">
          <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search medicine" className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-full text-sm" />
        </div>
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="border border-gray-200 rounded-full px-4 py-2.5 text-sm text-gray-700">
          <option>All Categories</option>
          {categories.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      <MedicineTable medicines={filtered} onToggleStatus={onToggleStatus} />
    </div>
  )
}