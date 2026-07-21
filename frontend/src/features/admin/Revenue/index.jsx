import React from 'react'
import { Routes, Route } from "react-router-dom"
import AdminLayout from "../layout/AdminLayout"
import RevenuePage from "./Pages/RevenuePage"
import InvoiceDetailPage from "./Pages/InvoiceDetailPage"

export default function Revenue() {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route index element={<RevenuePage />} />
        <Route path=":id" element={<InvoiceDetailPage />} />
      </Route>
    </Routes>
  )
}