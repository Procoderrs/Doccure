import React, { useState } from 'react'
import Breadcrumb from '../../../components/ui/Breadcrumb'
import { RiSettings5Fill } from '@remixicon/react'

const payouts = [
  { date: "24 Mar 2024", method: "Paypal", amount: "$300", status: "Completed" },
  { date: "24 Mar 2024", method: "Paypal", amount: "$200", status: "Completed" },
  { date: "25 Mar 2024", method: "Paypal", amount: "$300", status: "Completed" },
  { date: "24 Mar 2024", method: "Paypal", amount: "$300", status: "Completed" },
]

export default function PayoutSettings() {
  const [selected, setSelected] = useState('PayPal')

  return (
    <div className="p-6">

      {/* Settings Card */}
      <div className="bg-[#0f172a] rounded-2xl p-6 mb-6">
        <h3 className="font-bold text-white mb-1">Settings</h3>
        <p className="text-white text-sm mb-5">All the earning will be sent to below selected payout method</p>

        <div className="flex gap-4">
          {['Stripe', 'PayPal'].map(method => (
            <div
              key={method}
              onClick={() => setSelected(method)}
              className="relative border-2 rounded-2xl px-8 py-5 cursor-pointer transition-all"
              style={{
                borderColor: selected === method ? '#316dff' : '#1e293b',
                background: '#fff'
              }}
            >
              {selected === method && (
                <span className="absolute top-2 right-2 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">✓</span>
              )}
              <p className="text-black font-bold text-2xl mb-2">
                {method === 'Stripe' ? 'stripe' : '🅿️ PayPal'}
              </p>
              <button className="text-black text-xs px-3 rounded-2xl py-1 hover:bg-blue-200 hover:text-[#316dff] flex items-center gap-1 bg-blue-50 w-full">
                <RiSettings5Fill size={14} /> Configure
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Payouts heading */}
      <h3 className="font-bold text-gray-900 text-2xl px-2 border-b border-gray-200 mb-4 pb-3">
        Payouts
      </h3>

      {/* Search */}
      <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 mb-4 max-w-xs">
        🔍
        <input type="text" placeholder="Search" className="flex-1 text-sm outline-none" />
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full">
          <thead>
            <tr>
              {["Date", "Payment Method", "Amount", "Status"].map(h => (
                <th
                  key={h}
                  className="text-left text-gray-600 text-sm font-semibold py-4 px-5 bg-gray-50"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {payouts.map((p, i) => (
              <tr key={i} className="border-t border-gray-100 hover:bg-gray-50 transition">
                <td className="py-4 px-5 text-gray-600 text-sm">{p.date}</td>
                <td className="py-4 px-5 text-gray-600 text-sm">{p.method}</td>
                <td className="py-4 px-5 text-gray-800 font-semibold text-sm">{p.amount}</td>
                <td className="py-4 px-5">
                  <span className="bg-[#0e9384] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {p.status} 
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}