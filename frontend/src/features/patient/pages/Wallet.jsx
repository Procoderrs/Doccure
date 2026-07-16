import React from 'react'
import { wallet } from '../../../data/patient'

const statusColors = {
  Completed: { bg: "#d1fae5", text: "#04bd6c" },
  Pending: { bg: "#edf9f0", text: "#ffca18" },
}

export default function Wallet() {
  return (
    <div className="px-18">
      <h2 className="text-2xl font-bold text-gray-900 mb-5 border-b border-gray-300 pb-3">Wallet</h2>

      {/* Stats + Bank */}
      <div className="bg-black rounded-2xl p-6 mb-6 grid grid-cols-2 gap-6">
        <div>
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-white/10 rounded-xl p-4 border border-white">
              <p className="text-white/60 text-xs mb-1">— Total Balance</p>
              <p className="text-white font-bold text-2xl">$1200</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4 border border-white">
              <p className="text-white/60 text-xs mb-1 flex items-center gap-1">🟢 Total Transaction</p>
              <p className="text-white font-bold text-2xl">$2300</p>
            </div>
          </div>
          <p className="text-white/50 text-xs mb-3">Last Payment request : 24 Mar 2023</p>
          <button
            className="px-5 py-2.5 rounded-full text-white text-sm font-semibold"
            style={{ background: "linear-gradient(90.08deg, #316dff 0.09%, #02bfff 70.28%)" }}
          >
            Add Payment
          </button>
        </div>

        <div>
          <p className="text-white font-bold mb-3">Bank Details</p>
          <div className="grid grid-cols-2 gap-2  mb-3">
            {[
              ["Bank Name", "Citi Bank Inc"],
              ["Account Number", "5396 5250 1908 XXXX"],
              ["Branch Name", "London"],
              ["Account Name", "Darren"],
            ].map(([label, val], i) => (
              <div key={i}>
                <p className="text-white/50 ">{label}</p>
                <p className="text-white font-medium ">{val}</p>
              </div>
            ))}
          </div>
          <div className="flex gap-3 ">
            <button className="text-[#316dff] hover:underline">Edit Details</button>
            <span className="text-white/30">|</span>
            <button className="text-[#316dff] hover:underline">Add Cards</button>
            <span className="text-white/30">|</span>
            <button className="text-[#316dff] hover:underline">Other Accounts</button>
          </div>
        </div>
      </div>

      {/* Transactions */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full">
          <thead>
            <tr>
              {["ID", "Account No", "Reason", "Debited / Credited On", "Amount", "Status"].map(h => (
                <th key={h} className="text-left text-sm font-medium py-3 px-4 bg-gray-100 text-gray-900">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {wallet.map((w, i) => (
              <tr key={i} className="border-t border-gray-50 hover:bg-gray-50 transition">
                <td className="py-3 px-4 text-[#316dff] text-sm font-medium">{w.id}</td>
                <td className="py-3 px-4 text-gray-600 text-sm">{w.account}</td>
                <td className="py-3 px-4 text-gray-600 text-sm">{w.reason}</td>
                <td className="py-3 px-4 text-gray-600 text-sm">{w.date}</td>
                <td className="py-3 px-4 text-gray-800 font-semibold text-sm">{w.amount}</td>
                <td className="py-3 px-4">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 w-fit"
                    style={{ background: statusColors[w.status]?.bg, color: statusColors[w.status]?.text }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: statusColors[w.status]?.text }} />
                    {w.status}
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