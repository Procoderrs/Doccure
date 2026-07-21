import React, { useState } from 'react'
import { useParams, useNavigate } from "react-router-dom"
import { hospitalsData, departmentsList } from '../../../../data/hospitalData'

export default function HospitalFormPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const isEdit = Boolean(id)
  const existing = isEdit ? hospitalsData.find((h) => h.id === id) : null

  const [form, setForm] = useState({
    name: existing?.name || "",
    phone: existing?.phone || "",
    email: existing?.email || "",
    city: existing?.city || "",
    address: existing?.address || "",
    mapLink: existing?.mapLink || "",
    departments: existing?.departments?.join(", ") || "",
    facilities: existing?.facilities?.join(", ") || "",
    status: existing?.status || "active",
  })

  const update = (key, value) => setForm((prev) => ({ ...prev, [key]: value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // Backend integration goes here
    navigate('/admin/hospitals')
  }

  return (
    <div className="flex flex-col gap-6 p-6">
      <h2 className="text-2xl font-bold text-gray-900">{isEdit ? "Edit Hospital" : "Add Hospital"}</h2>

      <form onSubmit={handleSubmit} className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col gap-5">
        <div>
          <label className="text-sm font-medium text-gray-700 mb-1 block">Hospital Logo / Image</label>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-xl bg-gray-100" />
            <button type="button" className="text-[#316dff] font-medium text-sm">Upload New</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Field label="Hospital Name" value={form.name} onChange={(v) => update("name", v)} required />
          <Field label="Phone" value={form.phone} onChange={(v) => update("phone", v)} required />
          <Field label="Email" value={form.email} onChange={(v) => update("email", v)} required />
          <Field label="City" value={form.city} onChange={(v) => update("city", v)} required />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 mb-1 block">Full Address</label>
          <textarea rows={2} value={form.address} onChange={(e) => update("address", e.target.value)} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm" />
        </div>

        <Field label="Map Location / Google Maps Link" value={form.mapLink} onChange={(v) => update("mapLink", v)} />

        <div>
          <label className="text-sm font-medium text-gray-700 mb-1 block">Departments / Specialties (comma separated)</label>
          <input
            value={form.departments}
            onChange={(e) => update("departments", e.target.value)}
            placeholder="e.g. Cardiology, Oncology, Psychology"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 mb-1 block">Facilities (comma separated)</label>
          <input
            value={form.facilities}
            onChange={(e) => update("facilities", e.target.value)}
            placeholder="e.g. Parking, Pharmacy, Lab"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 mb-1 block">Status</label>
          <select value={form.status} onChange={(e) => update("status", e.target.value)} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm">
            <option value="active">Active</option>
            <option value="blocked">Blocked</option>
          </select>
        </div>

        <div className="flex justify-end gap-3 pt-2">
          <button type="button" onClick={() => navigate('/admin/hospitals')} className="px-6 py-2.5 rounded-full border border-gray-200 text-gray-700 font-semibold text-sm">Cancel</button>
          <button type="submit" className="px-6 py-2.5 rounded-full bg-[#316dff] text-white font-semibold text-sm">
            {isEdit ? "Save Changes" : "Add Hospital"}
          </button>
        </div>
      </form>
    </div>
  )
}

function Field({ label, value, onChange, required }) {
  return (
    <div>
      <label className="text-sm font-medium text-gray-700 mb-1 block">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input value={value} onChange={(e) => onChange(e.target.value)} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm" />
    </div>
  )
}