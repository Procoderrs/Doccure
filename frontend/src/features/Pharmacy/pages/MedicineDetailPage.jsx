import React, { useState } from 'react'
import { useParams, useNavigate } from "react-router-dom"
import { RiArrowLeftLine, RiShieldCheckFill, RiSubtractLine, RiAddLine } from "@remixicon/react"
import { medicinesData } from '../../../data/medicineData'
import { useCart } from '../../../context/cartContext'

export default function MedicineDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const [qty, setQty] = useState(1)

  const medicine = medicinesData.find((m) => m.id === id)

  if (!medicine) {
    return (
      <div className="p-6">
        <p className="text-gray-500">Medicine not found.</p>
        <button onClick={() => navigate(-1)} className="text-[#316dff] font-medium mt-2">Go back</button>
      </div>
    )
  }

  const handleAdd = () => {
    addToCart(medicine, qty)
    navigate('/pharmacy/cart')
  }

  return (
    <div className="flex flex-col gap-6 p-6">
      <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-sm text-gray-500 w-fit">
        <RiArrowLeftLine size={16} /> Back to Medicines
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="h-72 bg-gray-100 rounded-2xl overflow-hidden">
          <img src={medicine.img} alt={medicine.name} className="w-full h-full object-cover" />
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-sm text-gray-400">{medicine.brand} &nbsp;•&nbsp; {medicine.category}</p>
          <h2 className="text-2xl font-bold text-gray-900">{medicine.name}</h2>

          {medicine.prescriptionRequired && (
            <span className="flex items-center gap-1 text-sm text-orange-600 bg-orange-50 px-3 py-1.5 rounded-full w-fit">
              <RiShieldCheckFill size={14} /> Prescription Required at Checkout
            </span>
          )}

          <p className="text-gray-600 text-sm">{medicine.description}</p>

          <div className="flex items-center gap-4 pt-2">
            <p className="text-2xl font-bold text-gray-900">${medicine.price}</p>
            <p className="text-sm text-gray-400">{medicine.stock} in stock</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center border border-gray-200 rounded-full">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="w-9 h-9 flex items-center justify-center text-gray-500">
                <RiSubtractLine size={16} />
              </button>
              <span className="w-8 text-center font-semibold">{qty}</span>
              <button onClick={() => setQty((q) => q + 1)} className="w-9 h-9 flex items-center justify-center text-gray-500">
                <RiAddLine size={16} />
              </button>
            </div>
            <button onClick={handleAdd} className="flex-1 bg-[#316dff] text-white rounded-full py-3 font-semibold">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}