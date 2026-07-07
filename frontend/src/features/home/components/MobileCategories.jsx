import React from 'react'

const categories = [
  { img: "/list-icon-01.svg", label: "Book Appointment", bg: "#02bfff" },
  { img: "/list-icon-02.svg", label: "Talk to Doctors", bg: "#316dff" },
  { img: "/list-icon-03.svg", label: "Hospitals & Clinics", bg: "#dd2590" },
  { img: "/list-icon-04.svg", label: "Healthcare", bg: "#06aed4" },
  { img: "/list-icon-05.svg", label: "Medicine & Supplies", bg: "#6938ef" },
  { img: "/list-icon-06.svg", label: "Lab Testing", bg: "#e04f16" },
  { img: "/list-icon-07.svg", label: "Home Care", bg: "#0e3894" },
]

export default function MobileCategories() {
  return (
    // mx-4 — sides pe gap taake full bleed na lage, jaisa screenshot mein hai
    <div className="block md:hidden w-full px-4 py-6 bg-gray-50 font-user">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-300 px-5 py-6">
        <div className="flex flex-col gap-5">
          {categories.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-4 w-full cursor-pointer group"
            >
              {/* Icon — fixed size */}
              <div
                style={{ backgroundColor: item.bg }}
                className="w-12 h-12 shrink-0 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
              >
                <img src={item.img} alt={item.label} className="w-6 h-6 object-contain" />
              </div>

              {/* Label — flex-1 taake sab same x position pe aaye */}
              <p className="flex-1 text-gray-800  font-semibold">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}