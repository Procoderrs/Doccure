import React, { useState } from 'react'
import { useParams, useNavigate } from "react-router-dom"
import { medicinesData, categories } from '../../../../data/pharmacyData'

export default function MedicineFormPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const isEdit = Boolean(id)
  const existing = isEdit ? medicinesData.find((m) => m.id === id) : null

  const [form, setForm] = useState({
    name: existing?.name || "",
    category: existing?.category || categories[0],
    brand: existing?.brand || "",
    price: existing?.price || "",
    stock: existing?.stock || "",
    description: existing?.description || "",
    prescriptionRequired: existing?.prescriptionRequired || false,
    status: existing?.status || "active",
  })

  const update = (key, value) => setForm((prev) => ({ ...prev, [key]: value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // Backend integration goes here
    navigate('/admin/pharmacy/medicines')
  }

  return (
    <div className="flex flex-col gap-6 p-6">
      <h2 className="text-2xl font-bold text-gray-900">{isEdit ? "Edit Medicine" : "Add Medicine"}</h2>

      <form onSubmit={handleSubmit} className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col gap-5">
        <div>
          <label className="text-sm font-medium text-gray-700 mb-1 block">Medicine Image</label>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-xl bg-gray-100" />
            <button type="button" className="text-[#316dff] font-medium text-sm">Upload New</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Field label="Medicine Name" value={form.name} onChange={(v) => update("name", v)} required />
          <Field label="Brand" value={form.brand} onChange={(v) => update("brand", v)} required />

          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">Category <span className="text-red-500">*</span></label>
            <select value={form.category} onChange={(e) => update("category", e.target.value)} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm">
              {categories.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          <Field label="Price ($)" value={form.price} onChange={(v) => update("price", v)} type="number" required />
          <Field label="Stock Quantity" value={form.stock} onChange={(v) => update("stock", v)} type="number" required />

          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">Status</label>
            <select value={form.status} onChange={(e) => update("status", e.target.value)} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm">
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 mb-1 block">Description</label>
          <textarea rows={3} value={form.description} onChange={(e) => update("description", e.target.value)} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm" />
        </div>

        <label className="flex items-center gap-3 text-sm text-gray-700">
          <input
            type="checkbox"
            checked={form.prescriptionRequired}
            onChange={(e) => update("prescriptionRequired", e.target.checked)}
            className="w-4 h-4"
          />
          Prescription Required
        </label>

        <div className="flex justify-end gap-3 pt-2">
          <button type="button" onClick={() => navigate('/admin/pharmacy/medicines')} className="px-6 py-2.5 rounded-full border border-gray-200 text-gray-700 font-semibold text-sm">Cancel</button>
          <button type="submit" className="px-6 py-2.5 rounded-full bg-[#316dff] text-white font-semibold text-sm">
            {isEdit ? "Save Changes" : "Add Medicine"}
          </button>
        </div>
      </form>
    </div>
  )
}

function Field({ label, value, onChange, required, type = "text" }) {
  return (
    <div>
      <label className="text-sm font-medium text-gray-700 mb-1 block">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm" />
    </div>
  )
}