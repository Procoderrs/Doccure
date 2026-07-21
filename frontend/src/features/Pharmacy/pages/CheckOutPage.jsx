import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { RiShieldCheckFill, RiUploadCloud2Line, RiCheckLine } from "@remixicon/react"
import { useCart } from '../../../context/cartContext'
import { prescriptionsData } from '../../../data/medicineData'

export default function CheckoutPage() {
  const navigate = useNavigate()
  const { items, subtotal, requiresPrescription, canCheckout, attachedPrescription, setAttachedPrescription, clearCart } = useCart()
  const [address, setAddress] = useState({ name: "", phone: "", street: "", city: "", pincode: "" })
  const [paymentMethod, setPaymentMethod] = useState("card")

  const deliveryFee = 5
  const total = subtotal + deliveryFee

  const handlePlaceOrder = () => {
    if (!canCheckout) return
    // Backend order-creation goes here
    clearCart()
    navigate('/pharmacy/orders')
  }

  return (
    <div className="flex flex-col gap-6 p-6">
      <h2 className="text-2xl font-bold text-gray-900">Checkout</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 flex flex-col gap-6">
          {requiresPrescription && (
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2 flex items-center gap-2">
                <RiShieldCheckFill className="text-orange-500" size={20} /> Attach Prescription
              </h3>
              <p className="text-sm text-gray-400 mb-4">Your cart has prescription medicines — checkout is locked until a prescription is attached.</p>

              <div className="flex flex-col gap-2 mb-4">
                {prescriptionsData.map((rx) => (
                  <button
                    key={rx.id}
                    onClick={() => setAttachedPrescription(rx.id)}
                    className={`flex items-center justify-between border rounded-xl px-4 py-3 text-left ${
                      attachedPrescription === rx.id ? "border-[#316dff] bg-blue-50/40" : "border-gray-200"
                    }`}
                  >
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{rx.id} — {rx.doctor}</p>
                      <p className="text-xs text-gray-400">{rx.date}</p>
                    </div>
                    {attachedPrescription === rx.id && (
                      <span className="w-5 h-5 rounded-full bg-[#316dff] flex items-center justify-center">
                        <RiCheckLine size={14} className="text-white" />
                      </span>
                    )}
                  </button>
                ))}
              </div>

              <button className="flex items-center gap-2 border border-dashed border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-500 w-full justify-center">
                <RiUploadCloud2Line size={18} /> Upload a new prescription
              </button>
            </div>
          )}

          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <h3 className="font-bold text-lg text-gray-900 mb-4">Delivery Address</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Full Name" value={address.name} onChange={(v) => setAddress((p) => ({ ...p, name: v }))} />
              <Field label="Phone Number" value={address.phone} onChange={(v) => setAddress((p) => ({ ...p, phone: v }))} />
              <div className="sm:col-span-2">
                <Field label="Street Address" value={address.street} onChange={(v) => setAddress((p) => ({ ...p, street: v }))} />
              </div>
              <Field label="City" value={address.city} onChange={(v) => setAddress((p) => ({ ...p, city: v }))} />
              <Field label="Pincode" value={address.pincode} onChange={(v) => setAddress((p) => ({ ...p, pincode: v }))} />
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6">
            <h3 className="font-bold text-lg text-gray-900 mb-4">Payment Method</h3>
            <div className="grid grid-cols-3 gap-3">
              {["card", "paypal", "cod"].map((m) => (
                <button
                  key={m}
                  onClick={() => setPaymentMethod(m)}
                  className={`py-3 rounded-lg text-sm font-medium capitalize border-2 ${
                    paymentMethod === m ? "border-[#316dff] text-[#316dff]" : "border-gray-200 text-gray-600"
                  }`}
                >
                  {m === "cod" ? "Cash on Delivery" : m}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-6 h-fit">
          <h3 className="font-bold text-lg text-gray-900 mb-4">Order Summary</h3>
          <div className="flex flex-col gap-2 text-sm mb-4">
            {items.map(({ medicine, qty }) => (
              <div key={medicine.id} className="flex justify-between">
                <span className="text-gray-600">{medicine.name} × {qty}</span>
                <span className="text-gray-900 font-medium">${medicine.price * qty}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-100 pt-4 flex flex-col gap-2 text-sm">
            <div className="flex justify-between text-gray-600"><span>Subtotal</span><span>${subtotal}</span></div>
            <div className="flex justify-between text-gray-600"><span>Delivery Fee</span><span>${deliveryFee}</span></div>
            <div className="flex justify-between font-bold text-gray-900 text-base pt-2 border-t border-gray-100">
              <span>Total</span><span>${total}</span>
            </div>
          </div>

          <button
            onClick={handlePlaceOrder}
            disabled={!canCheckout}
            className="w-full bg-[#316dff] text-white rounded-full py-3 font-semibold mt-5 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Place Order
          </button>
          {!canCheckout && (
            <p className="text-xs text-red-500 text-center mt-2">Attach a prescription to place this order.</p>
          )}
        </div>
      </div>
    </div>
  )
}

function Field({ label, value, onChange }) {
  return (
    <div>
      <label className="text-sm font-medium text-gray-700 mb-1 block">{label}</label>
      <input value={value} onChange={(e) => onChange(e.target.value)} className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm" />
    </div>
  )
}