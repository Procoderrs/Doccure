import React from 'react'
import { Routes, Route } from "react-router-dom"
import AdminLayout from "../layout/AdminLayout"
import AppointmentListPage from "./Pages/AppointmentListPage"
import AppointmentDetailPage from "./Pages/AppointmentDetailPage"

export default function Appointments() {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route index element={<AppointmentListPage />} />
        <Route path=":id" element={<AppointmentDetailPage />} />
      </Route>
    </Routes>
  )
}