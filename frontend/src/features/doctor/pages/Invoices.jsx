import React from 'react'
import Breadcrumb from '../../../components/ui/Breadcrumb'

const invoices = [
  { id: "#Inv-2021", img: "/profile-01.jpg", patient: "Edalin Hendry", appointmentDate: "24 Mar 2024", bookedOn: "21 Mar 2024", amount: "$300" },
  { id: "#Inv-2021", img: "/profile-02.jpg", patient: "John Homes", appointmentDate: "17 Mar 2024", bookedOn: "14 Mar 2024", amount: "$450" },
  { id: "#Inv-2021", img: "/profile-03.jpg", patient: "Shanta Neill", appointmentDate: "11 Mar 2024", bookedOn: "07 Mar 2024", amount: "$250" },
  { id: "#Inv-2021", img: "/profile-04.jpg", patient: "Anthony Tran", appointmentDate: "26 Feb 2024", bookedOn: "23 Feb 2024", amount: "$320" },
  { id: "#Inv-2021", img: "/profile-05.jpg", patient: "Susan Lingo", appointmentDate: "18 Feb 2024", bookedOn: "15 Feb 2024", amount: "$480" },
]

export default function Invoices() {
  return (
    <div className="p-6 bg-white">
 <h3 className="font-black text-black text-2xl mb-4 pb-3 border-b border-gray-200">Invoices</h3>

      <div className="bg-white rounded-2xl   ">

        <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 mb-4 max-w-xs">
          🔍
          <input type="text" placeholder="Search" className="flex-1 text-sm outline-none" />
        </div>
       

         <div className="border border-gray-200 p-5 rounded-lg">

        
        <table className="w-full  ">
          <thead>
    <tr>
      {["ID", "Patient", "Appointment Date", "Booked on", "Amount", "Action"].map(h => (
        <th
          key={h}
          className="text-left text-sm font-medium py-3 pr-4 px-3 bg-gray-50 first:rounded-l-lg last:rounded-r-lg"
        >
          {h}
        </th>
      ))}
    </tr>
  </thead>
          <tbody>
            {invoices.map((inv, i) => (
              <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition">
                <td className="py-3 pr-4 text-[#316dff] text-sm font-medium">{inv.id}</td>
                <td className="py-3 pr-4">
                  <div className="flex items-center gap-2">
                    <img src={inv.img} alt="" className="w-8 h-8 rounded-full object-cover bg-gray-100" />
                    <span className="text-gray-800 text-sm font-medium">{inv.patient}</span>
                  </div>
                </td>
                <td className="py-3 pr-4 text-gray-600 text-sm">{inv.appointmentDate}</td>
                <td className="py-3 pr-4 text-gray-600 text-sm">{inv.bookedOn}</td>
                <td className="py-3 pr-4 text-gray-800 font-semibold text-sm">{inv.amount}</td>
                <td className="py-3">
                  <div className="flex items-center gap-2">
                    <button className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 text-sm">🔗</button>
                    <button className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 text-sm">🖨️</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
 </div>
        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mt-5">
          {['‹', '1', '2', '3', '4', '...', '›'].map((p, i) => (
            <button
              key={i}
              className="w-8 h-8 rounded-full text-sm font-medium transition"
              style={{
                background: p === '2' ? "linear-gradient(90.08deg, #316dff 0.09%, #02bfff 70.28%)" : "#f3f4f6",
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