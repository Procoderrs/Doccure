import React, { useState, useMemo } from 'react'
import { useNavigate } from "react-router-dom"
import { RiSearchLine, RiShoppingCartLine } from "@remixicon/react"
import { medicinesData } from '../../../data/medicineData'
import CategoryFilter from '../components/CategoryFilter'
import MedicineCard from '../components/MedicineCard'
import { useCart } from '../../../context/cartContext'

export default function MedicineListPage() {
  const navigate = useNavigate()
  const { items } = useCart()
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")

  const filtered = useMemo(() => {
    return medicinesData.filter((m) => {
      const matchesSearch = m.name.toLowerCase().includes(search.toLowerCase())
      const matchesCategory = category === "All" || m.category === category
      return matchesSearch && matchesCategory && m.status === "active"
    })
  }, [search, category])

  const cartCount = items.reduce((sum, i) => sum + i.qty, 0)

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Pharmacy</h2>
          <p className="text-sm text-gray-400">Order medicines online — prescription items need a doctor's upload</p>
        </div>
        <button onClick={() => navigate('/pharmacy/cart')} className="relative flex items-center gap-2 border border-gray-200 rounded-full px-5 py-2.5 text-sm font-medium">
          <RiShoppingCartLine size={18} /> Cart
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#316dff] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">{cartCount}</span>
          )}
        </button>
      </div>

      <div className="relative">
        <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search medicines"
          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-full text-sm"
        />
      </div>

      <CategoryFilter selected={category} onSelect={setCategory} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {filtered.map((m) => <MedicineCard key={m.id} medicine={m} />)}
        {filtered.length === 0 && (
          <p className="col-span-full text-center py-10 text-gray-400">No medicines found.</p>
        )}
      </div>
    </div>
  )
}