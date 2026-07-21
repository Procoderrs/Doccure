import React from 'react'
import { Routes, Route } from "react-router-dom"
import AdminLayout from "../layout/AdminLayout"
import PatientListPage from "./pages/PatientListPages"
import PatientDetailPage from "./pages/PatientDetailPage"

export default function Patients() {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route index element={<PatientListPage />} />
        <Route path=":id" element={<PatientDetailPage />} />
      </Route>
    </Routes>
  )
}