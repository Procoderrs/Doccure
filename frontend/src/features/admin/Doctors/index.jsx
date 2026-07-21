import React from 'react'
import { Routes, Route } from "react-router-dom"
import AdminLayout from "../layout/AdminLayout"
import DoctorDetailPage from "./Pages/DoctorDetailPage"
import DoctorsListPage from "./Pages/DoctorListPage";
export default function Doctors() {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route index element={<DoctorsListPage />} />
        <Route path=":id" element={<DoctorDetailPage />} />
      </Route>
    </Routes>
  )
}