import React from 'react'
import { Routes, Route } from "react-router-dom"
import AdminLayout from "../layout/AdminLayout"
import MedicinesListPage from "./Pages/MedicinesListPage"
import MedicineFormPage from "./Pages/MEdicineFormPage"
import PharmacyOrdersListPage from "./Pages/PharmacyOrderListPage"
import PharmacyOrderDetailPage from "./Pages/PharmacyOrderDetailPage"

export default function Pharmacy() {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route index element={<MedicinesListPage />} />
        <Route path="medicines" element={<MedicinesListPage />} />
        <Route path="medicines/new" element={<MedicineFormPage />} />
        <Route path="medicines/:id/edit" element={<MedicineFormPage />} />
        <Route path="orders" element={<PharmacyOrdersListPage />} />
        <Route path="orders/:id" element={<PharmacyOrderDetailPage />} />
      </Route>
    </Routes>
  )
}