import React from 'react'
import { RiSearchLine, RiLinksLine, RiEditLine, RiDownloadLine, RiDeleteBinLine } from "@remixicon/react"
import { medicalRecords } from '../../../data/patient'
//,
export default function MedicalRecords() {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Records</h2>
        <button
          className="px-5 py-2.5 rounded-full text-white text-sm font-semibold"
          style={{ background: "linear-gradient(90.08deg, #316dff 0.09%, #02bfff 70.28%)" }}
        >
          Add Medical Record
        </button>
      </div>

      <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 mb-5 bg-white max-w-sm">
        <RiSearchLine size={16} className="text-gray-400" />
        <input type="text" placeholder="Search" className="text-sm outline-none text-gray-600 flex-1" />
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full">
          <thead>
            <tr>
              {["ID", "Name", "Date", "Record For", "Comments", "Action"].map(h => (
                <th key={h} className="text-left text-sm font-medium py-3 px-4 bg-gray-50 text-gray-500">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {medicalRecords.map((r, i) => (
              <tr key={i} className="border-t border-gray-50 hover:bg-gray-50 transition">
                <td className="py-3 px-4 text-[#316dff] text-sm font-medium">{r.id}</td>
                <td className="py-3 px-4 text-gray-800 text-sm font-medium">{r.name}</td>
                <td className="py-3 px-4 text-gray-500 text-sm">{r.date}</td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <img src={r.recordImg} alt="" className="w-8 h-8 rounded-full object-cover bg-gray-100" />
                    <span className="text-gray-800 text-sm">{r.recordFor}</span>
                  </div>
                </td>
                <td className="py-3 px-4 text-gray-500 text-sm">{r.comments}</td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <button className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
                      <RiLinksLine size={13} className="text-gray-500" />
                    </button>
                    <button className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
                      <RiEditLine size={13} className="text-gray-500" />
                    </button>
                    <button className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
                      <RiDownloadLine size={13} className="text-gray-500" />
                    </button>
                    <button className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center hover:bg-red-50">
                      <RiDeleteBinLine size={13} className="text-red-400" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 py-5 border-t border-gray-50">
          {['‹', '1', '2', '3', '4', '...', '›'].map((p, i) => (
            <button key={i} className="w-8 h-8 rounded-full text-sm font-medium transition"
              style={{
                background: p === '2' ? "linear-gradient(90.08deg, #316dff 0.09%, #02bfff 70.28%)" : "#f3f4f6",
                color: p === '2' ? "white" : "#374151"
              }}
            >{p}</button>
          ))}
        </div>
      </div>
    </div>
  )
}