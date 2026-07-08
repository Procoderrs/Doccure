import React from 'react'
import Breadcrumb from '../../../components/ui/Breadcrumb'

const transactions = [
  { id: "#AC-1234", date: "24 Mar 2024", account: "5396 5250 1908 XXXX", creditedOn: "26 Mar 2024", amount: "$300", status: "Completed" },
  { id: "#AC-1235", date: "28 Mar 2024", account: "8833 8942 9013 XXXX", creditedOn: "30 Mar 2024", amount: "$400", status: "Completed" },
  { id: "#AC-1236", date: "02 Apr 2024", account: "8920 4041 4725 XXXX", creditedOn: "04 Apr 2024", amount: "$350", status: "Cancelled" },
  { id: "#AC-1237", date: "10 Apr 2024", account: "5730 4892 0492 XXXX", creditedOn: "12 Apr 2024", amount: "$220", status: "Pending" },
  { id: "#AC-1238", date: "16 Apr 2024", account: "7922 9024 5824 XXXX", creditedOn: "18 Apr 2024", amount: "$470", status: "Completed" },
]

const statusColors = {
  Completed: { bg: "#0e9384", text: "#fff" },
  Cancelled: { bg: "#ff0000", text: "#fff" },
  Pending:   { bg: "#ffca18", text: "#fff" },
}

export default function Accounts() {
  return (
    <div className="p-6">
     

 <h3 className="font-black text-black text-2xl mb-4 mb-3 pb-3 border-b border-gray-200">Accounts</h3>
      {/* Stats + Bank */}
      <div className="bg-[#0f172a] rounded-2xl p-6 mb-6">
       

        <div className="grid grid-cols-2 gap-12">
          <div>
            <p className="text-white text-xl mb-3">Statistics</p>
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "Total Balance", value: "$900", icon: "💰" },
                { label: "Earned", value: "$906", icon: "📈" },
                { label: "Requested", value: "$50", icon: "🔄" },
              ].map((s, i) => (
                <div key={i} className="bg-white/10 rounded-xl p-3">
                  <p className="text-white text-xs mb-1">{s.icon} {s.label}</p>
                  <p className="text-white font-bold text-xl">{s.value}</p>
                </div>
              ))}
            </div>
            <p className="text-white text-sm mt-3">Last Payment request : 24 Mar 2023</p>
            <button
              className="mt-3 px-5 py-2.5 rounded-full text-white bg-[#316dff]  font-semibold"
              
            >
              Request Payment
            </button>
          </div>

          <div>
            <p className="text-white text-2xl mb-3">Bank Details</p>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {[
                ["Bank Name", "Citi Bank Inc"],
                ["Account Number", "5396 5250 1908 XXXX"],
                ["Branch Name", "London"],
                ["Account Name", "Darren"],
              ].map(([label, value], i) => (
                <div key={i}>
                  <p className="text-white text-base">{label}</p>
                  <p className="text-white font-medium">{value}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-4 mt-3">
              <button className="text-[#316dff] text-sm hover:underline">Edit Details</button>
              <span className="text-white">|</span>
              <button className="text-[#316dff] text-sm hover:underline">Other Accounts</button>
            </div>
          </div>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 flex-1 max-w-xs">
            🔍
            <input type="text" placeholder="Search" className="flex-1 text-sm outline-none text-gray-600" />
          </div>
        </div>

        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              {["ID", "Requested Date", "Account No", "Credited On", "Amount", "Status", "Action"].map(h => (
                <th key={h}className="text-left text-sm font-medium py-3 pr-4 px-3 bg-gray-50 first:rounded-l-lg last:rounded-r-lg">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {transactions.map((t, i) => (
              <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition">
                <td className="py-3 pr-4 text-[#316dff] text-sm font-medium">{t.id}</td>
                <td className="py-3 pr-4 text-gray-600 text-sm">{t.date}</td>
                <td className="py-3 pr-4 text-gray-600 text-sm">{t.account}</td>
                <td className="py-3 pr-4 text-gray-600 text-sm">{t.creditedOn}</td>
                <td className="py-3 pr-4 text-gray-800 font-semibold text-sm">{t.amount}</td>
                <td className="py-3 pr-4">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ background: statusColors[t.status].bg, color: statusColors[t.status].text }}
                  >
                    {t.status}
                  </span>
                </td>
                <td className="py-3">
                  <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 text-sm">
                    🔗
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mt-5">
          {['‹', '1', '2', '3', '4', '...', '›'].map((p, i) => (
            <button
              key={i}
              className="w-8 h-8 rounded-full text-sm font-medium transition"
              style={{
                background: p === '2' ? "#316dff" : "#f3f4f6",
                color: p === '2' ? "white" : "#374151"
              }}
            >
              {p}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}