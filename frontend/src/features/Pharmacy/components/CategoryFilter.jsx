import React from 'react'
import { categories } from '../../../data/medicineData'

export default function CategoryFilter({ selected, onSelect }) {
  return (
    <div className="flex gap-2 flex-wrap">
      {categories.map((c) => (
        <button
          key={c}
          onClick={() => onSelect(c)}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            selected === c ? "bg-[#316dff] text-white" : "border border-gray-200 text-gray-700"
          }`}
        >
          {c}
        </button>
      ))}
    </div>
  )
}