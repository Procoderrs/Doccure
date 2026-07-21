import React from 'react'
import { Routes, Route } from "react-router-dom"
import AdminLayout from "../layout/AdminLayout"
import HospitalListPage from "./Pages/HospitalListPage"
import HospitalDetailPage from "./Pages/HospitalDetailPage"
import HospitalFormPage from "./Pages/HospitalFormPage"

export default function Hospitals() {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route index element={<HospitalListPage />} />
        <Route path="new" element={<HospitalFormPage />} />
        <Route path=":id" element={<HospitalDetailPage />} />
        <Route path=":id/edit" element={<HospitalFormPage />} />
      </Route>
    </Routes>
  )
}