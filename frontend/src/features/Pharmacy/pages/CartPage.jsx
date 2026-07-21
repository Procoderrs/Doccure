import React from 'react'
import { useNavigate } from "react-router-dom"
import { RiSubtractLine, RiAddLine, RiDeleteBinLine, RiShieldCheckFill } from "@remixicon/react"
import { useCart } from '../../../context/cartContext'

export default function CartPage() {
  const navigate = useNavigate()
  const { items, updateQty, removeFromCart, subtotal, requiresPrescription } = useCart()

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-16 gap-4">
        <p className="text-gray-500">Your cart is empty.</p>
        <button onClick={() => navigate('/pharmacy')} className="bg-[#316dff] text-white rounded-full px-6 py-2.5 font-semibold text-sm">
          Browse Medicines
        </button>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-6 p-6">
      <h2 className="text-2xl font-bold text-gray-900">My Cart</h2>

      {requiresPrescription && (
        <div className="flex items-center gap-2 bg-orange-50 text-orange-700 text-sm px-4 py-3 rounded-xl">
          <RiShieldCheckFill size={16} /> One or more items need a prescription — you'll attach it at checkout.
        </div>
      )}

      <div className="flex flex-col gap-4">
        {items.map(({ medicine, qty }) => (
          <div key={medicine.id} className="bg-white border border-gray-100 rounded-2xl p-4 flex items-center gap-4">
            <img src={medicine.img} alt={medicine.name} className="w-16 h-16 rounded-xl object-cover bg-gray-100" />
            <div className="flex-1">
              <p className="font-semibold text-gray-900">{medicine.name}</p>
              <p className="text-sm text-gray-400">{medicine.brand}</p>
              {medicine.prescriptionRequired && (
                <span className="text-xs text-orange-600">Prescription required</span>
              )}
            </div>
            <div className="flex items-center border border-gray-200 rounded-full">
              <button onClick={() => updateQty(medicine.id, qty - 1)} className="w-8 h-8 flex items-center justify-center text-gray-500">
                <RiSubtractLine size={14} />
              </button>
              <span className="w-6 text-center text-sm font-semibold">{qty}</span>
              <button onClick={() => updateQty(medicine.id, qty + 1)} className="w-8 h-8 flex items-center justify-center text-gray-500">
                <RiAddLine size={14} />
              </button>
            </div>
            <p className="font-bold text-gray-900 w-16 text-right">${medicine.price * qty}</p>
            <button onClick={() => removeFromCart(medicine.id)} className="text-gray-400 hover:text-red-500">
              <RiDeleteBinLine size={18} />
            </button>
          </div>
        ))}
      </div>

      <div className="bg-white border border-gray-100 rounded-2xl p-6 flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">Subtotal</p>
          <p className="text-2xl font-bold text-gray-900">${subtotal}</p>
        </div>
        <button onClick={() => navigate('/pharmacy/checkout')} className="bg-[#316dff] text-white rounded-full px-8 py-3 font-semibold">
          Proceed to Checkout
        </button>
      </div>
    </div>
  )
}