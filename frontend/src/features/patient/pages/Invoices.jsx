import React from 'react'
import { RiSearchLine,RiLinksLine,  RiDownloadLine } from "@remixicon/react"
import { invoices } from '../../../data/patient'
//RiLinkLine,
export default function Invoices() {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6 border-b border-gray-300 pb-3">
        <h2 className="text-2xl font-bold text-gray-900">Invoices</h2>
        <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 bg-white">
          <RiSearchLine size={16} className="text-gray-400" />
          <input type="text" placeholder="Search" className="text-sm outline-none text-gray-600 w-32" />
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full">
          <thead>
            <tr>
              {["ID", "Doctor", "Appointment Date", "Booked on", "Amount", "Action"].map(h => (
                <th key={h} className="text-left   py-3 px-4 bg-gray-200 text-gray-900">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {invoices.map((inv, i) => (
              <tr key={i} className="border-t border-gray-50 hover:bg-gray-50 transition">
                <td className="py-3 px-4 text-[#316dff] text-sm font-medium">{inv.id}</td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <img src={inv.img} alt="" className="w-12 h-12 rounded-xl object-cover bg-gray-100" />
                    <span className="text-gray-800 text-sm font-medium">{inv.doctor}</span>
                  </div>
                </td>
                <td className="py-3 px-4 text-gray-700 text-sm">{inv.appointmentDate}</td>
                <td className="py-3 px-4 text-gray-700 text-sm">{inv.bookedOn}</td>
                <td className="py-3 px-4 text-gray-800 font-semibold text-sm">{inv.amount}</td>
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <button className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
                      <RiLinksLine size={13} className="text-gray-500" />
                    </button>
                    <button className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
                      <RiDownloadLine size={13} className="text-gray-500" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex items-center justify-center gap-2 py-5 border-t border-gray-50">
          {['Prev', '1', '2', '3', '4', 'Next'].map((p, i) => (
            <button key={i} className="px-3 h-8 rounded-full text-sm font-medium transition"
              style={{
                background: p === '2' ? "#316dff" : "#f3f4f6",
                color: p === '2' ? "white" : "#374151"
              }}
            >{p}</button>
          ))}
        </div>
      </div>
    </div>
  )
}