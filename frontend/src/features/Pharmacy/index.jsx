import React from 'react'
import { Routes, Route } from "react-router-dom"
import { CartProvider } from '../../context/cartContext'
import MedicineListPage from './pages/MedicineListPage'
import MedicineDetailPage from './pages/MedicineDetailPage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckOutPage'
import MyOrdersPage from './pages/MyOrdersPage'
import OrderDetailPage from './pages/OrderDetailPage'

export default function Pharmacy() {
  return (
    <CartProvider>
      <Routes>
        <Route index element={<MedicineListPage />} />
        <Route path="medicine/:id" element={<MedicineDetailPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="orders" element={<MyOrdersPage />} />
        <Route path="orders/:id" element={<OrderDetailPage />} />
      </Routes>
    </CartProvider>
  )
}