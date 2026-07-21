import React from 'react'
import { useNavigate } from "react-router-dom"
import { RiShieldCheckFill } from "@remixicon/react"
import { useCart } from '../../../context/cartContext'

export default function MedicineCard({ medicine }) {
  const navigate = useNavigate()
  const { addToCart } = useCart()

  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden flex flex-col">
      <button onClick={() => navigate(`/pharmacy/medicine/${medicine.id}`)} className="h-40 bg-gray-100">
        <img src={medicine.img} alt={medicine.name} className="w-full h-full object-cover" />
      </button>
      <div className="p-4 flex flex-col gap-1 flex-1">
        <p className="text-xs text-gray-400">{medicine.brand}</p>
        <button onClick={() => navigate(`/pharmacy/medicine/${medicine.id}`)} className="text-left">
          <p className="font-semibold text-gray-900">{medicine.name}</p>
        </button>
        {medicine.prescriptionRequired && (
          <span className="flex items-center gap-1 text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded-full w-fit mt-1">
            <RiShieldCheckFill size={12} /> Prescription Required
          </span>
        )}
        <div className="flex items-center justify-between mt-3">
          <p className="font-bold text-gray-900">${medicine.price}</p>
          <button
            onClick={() => addToCart(medicine)}
            className="bg-[#316dff] text-white text-xs font-semibold px-4 py-2 rounded-full"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}