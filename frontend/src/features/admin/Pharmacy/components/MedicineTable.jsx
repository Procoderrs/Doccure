import React from 'react'
import { useNavigate } from "react-router-dom"
import { RiEditLine, RiForbidLine, RiShieldCheckFill } from "@remixicon/react"

export default function MedicineTable({ medicines, onToggleStatus }) {
  const navigate = useNavigate()

  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-gray-500 border-b border-gray-100">
            <th className="py-3 px-4 font-medium">Medicine</th>
            <th className="py-3 px-4 font-medium">Category</th>
            <th className="py-3 px-4 font-medium">Brand</th>
            <th className="py-3 px-4 font-medium">Price</th>
            <th className="py-3 px-4 font-medium">Stock</th>
            <th className="py-3 px-4 font-medium">Prescription</th>
            <th className="py-3 px-4 font-medium">Status</th>
            <th className="py-3 px-4 font-medium">Action</th>
          </tr>
        </thead>
        <tbody>
          {medicines.map((m) => (
            <tr key={m.id} className="border-b border-gray-50 hover:bg-gray-50/50">
              <td className="py-4 px-4">
                <div className="flex items-center gap-3">
                  <img src={m.img} alt={m.name} className="w-10 h-10 rounded-lg object-cover bg-gray-100" />
                  <p className="font-semibold text-gray-900">{m.name}</p>
                </div>
              </td>
              <td className="py-4 px-4 text-gray-600">{m.category}</td>
              <td className="py-4 px-4 text-gray-600">{m.brand}</td>
              <td className="py-4 px-4 text-gray-900 font-semibold">${m.price}</td>
              <td className="py-4 px-4 text-gray-600">{m.stock}</td>
              <td className="py-4 px-4">
                {m.prescriptionRequired ? (
                  <span className="flex items-center gap-1 text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded-full w-fit">
                    <RiShieldCheckFill size={12} /> Required
                  </span>
                ) : (
                  <span className="text-xs text-gray-400">Not required</span>
                )}
              </td>
              <td className="py-4 px-4">
                <span className={`text-xs font-medium px-3 py-1 rounded-full capitalize ${
                  m.status === "active" ? "bg-green-100 text-green-600" : "bg-gray-200 text-gray-600"
                }`}>{m.status}</span>
              </td>
              <td className="py-4 px-4">
                <div className="flex items-center gap-2">
                  <button onClick={() => navigate(`/admin/pharmacy/medicines/${m.id}/edit`)} className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50" title="Edit">
                    <RiEditLine size={16} />
                  </button>
                  <button
                    onClick={() => onToggleStatus(m.id)}
                    className={`w-8 h-8 rounded-full border flex items-center justify-center hover:bg-red-50 ${
                      m.status === "inactive" ? "border-gray-200 text-gray-400" : "border-red-200 text-red-500"
                    }`}
                    title={m.status === "inactive" ? "Activate" : "Deactivate"}
                  >
                    <RiForbidLine size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
          {medicines.length === 0 && (
            <tr><td colSpan={8} className="text-center py-10 text-gray-400">No medicines found.</td></tr>
          )}
        </tbody>
      </table>
    </div>
  )
}