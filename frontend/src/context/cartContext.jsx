import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([]) // { medicine, qty }
  const [attachedPrescription, setAttachedPrescription] = useState(null)

  const addToCart = (medicine, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.medicine.id === medicine.id)
      if (existing) {
        return prev.map((i) => i.medicine.id === medicine.id ? { ...i, qty: i.qty + qty } : i)
      }
      return [...prev, { medicine, qty }]
    })
  }

  const updateQty = (medicineId, qty) => {
    if (qty <= 0) {
      removeFromCart(medicineId)
      return
    }
    setItems((prev) => prev.map((i) => i.medicine.id === medicineId ? { ...i, qty } : i))
  }

  const removeFromCart = (medicineId) => {
    setItems((prev) => prev.filter((i) => i.medicine.id !== medicineId))
  }

  const clearCart = () => {
    setItems([])
    setAttachedPrescription(null)
  }

  const requiresPrescription = items.some((i) => i.medicine.prescriptionRequired)
  const subtotal = items.reduce((sum, i) => sum + i.medicine.price * i.qty, 0)
  const canCheckout = !requiresPrescription || Boolean(attachedPrescription)

  return (
    <CartContext.Provider value={{
      items, addToCart, updateQty, removeFromCart, clearCart,
      requiresPrescription, subtotal, canCheckout,
      attachedPrescription, setAttachedPrescription,
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}