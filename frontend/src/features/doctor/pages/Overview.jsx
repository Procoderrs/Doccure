import { useState } from 'react'
import { RiUserLine, RiCalendarLine, RiCheckLine, RiCloseLine, RiEyeLine, RiNotification3Fill,RiStarFill ,RiCalendarCheckFill, RiMoneyRupeeCircleLine  } from "@remixicon/react"
import Breadcrumb from '../../../components/ui/Breadcrumb'

const stats = [
  { label: "Total Patient", value: "978", change: "15% From Last Week", icon: RiUserLine },
  { label: "Patients Today", value: "80", change: "15% From Yesterday", icon: RiUserLine },
  { label: "Appointments Today", value: "50", change: "20% From Yesterday", icon: RiCalendarLine },
]
const appointments = [
  { id: "#Apt0001", patient: "Adrian Marshall", img: "/profile-01.jpg", date: "11 Nov 2024 10.45 AM", type: "General", typeColor: "#316dff" },
  { id: "#Apt0002", patient: "Kelly Stevens", img: "/profile-02.jpg", date: "10 Nov 2024 11.00 AM", type: "Clinic Consulting", typeColor: "#6938ef" },
  { id: "#Apt0003", patient: "Samuel Anderson", img: "/profile-03.jpg", date: "03 Nov 2024 02.00 PM", type: "General", typeColor: "#316dff" },
  { id: "#Apt0004", patient: "Catherine Griffin", img: "/profile-04.jpg", date: "01 Nov 2024 04.00 PM", type: "Clinic Consulting", typeColor: "#6938ef" },
  { id: "#Apt0005", patient: "Robert Hutchinson", img: "/profile-05.jpg", date: "28 Oct 2024 05.30 PM", type: "General", typeColor: "#316dff" },
]
const recentPatients = [
  { id: "P0001", name: "Adrian Marshall", img: "/profile-01.jpg", lastAppointment: "15 Mar 2024" },
  { id: "P0002", name: "Kelly Stevens", img: "/profile-02.jpg", lastAppointment: "13 Mar 2024" },
]
const recentInvoices = [
  { name: "Adrian", id: "#Apt0001", img: "/profile-01.jpg", amount: "$450", paidOn: "11 Nov 2024" },
  { name: "Kelly", id: "#Apt0002", img: "/profile-02.jpg", amount: "$500", paidOn: "10 Nov 2024" },
  { name: "Samuel", id: "#Apt0003", img: "/profile-03.jpg", amount: "$320", paidOn: "03 Nov 2024" },
  { name: "Catherine", id: "#Apt0004", img: "/profile-04.jpg", amount: "$240", paidOn: "01 Nov 2024" },
  { name: "Robert", id: "#Apt0005", img: "/profile-05.jpg", amount: "$380", paidOn: "28 Oct 2024" },
]
const notifications = [
  { icon:  RiNotification3Fill, text: "Booking Confirmed on", bold: "21 Mar 2024 10:30 AM", time: "Just Now", color: "#6938ef" },
  { icon: RiStarFill , text: "You have a", bold: "New Review", extra: "for your Appointment", time: "5 Days ago", color: "#316dff" },
  { icon: RiCalendarCheckFill, text: "You have Appointment with Ahmed by", bold: "01:20 PM", time: "12:55 PM", color: "#ffca18", isLink: true },
  { icon: RiMoneyRupeeCircleLine , text: "Sent an amount of", bold: "$200", extra: "for an Appointment", time: "2 Days ago", color: "#316dff" },
   { icon: RiStarFill , text: "You have a", bold: "New Review", extra: "for your Appointment", time: "5 Days ago", color: "#316dff" },
]
const clinics = [
  { name: "Sofi's Clinic", price: "$900", img: "/clinic-01.jpg", schedule: [{ day: "Tue :", time: "07:00 AM - 09:00 PM" }, { day: "Wed :", time: "07:00 AM - 09:00 PM" }] },
  { name: "The Family Dentistr...", price: "$600", img: "/clinic-02.jpg", schedule: [{ day: "Sat :", time: "07:00 AM - 09:00 PM" }, { day: "Tue :", time: "07:00 AM - 09:00 PM" }] },
]
const chartData = [47, 40, 12, 45, 33, 50, 62]
const chartDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S']

export default function Overview() {
  const [chartTab, setChartTab] = useState('Revenue')

  return (
    <>
     
      <div className="px-8 py-6 flex flex-col gap-5">

        {/* ===== ROW 1: Stats (30%) + Appointments (70%) ===== */}
        <div className="grid grid-cols-[30%_1fr] gap-5 items-start">

          {/* Stats — 3 stacked */}
          <div className="flex flex-col gap-4">
            {stats.map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-gray-500 text-sm mb-1">{s.label}</p>
                    <p className="text-3xl font-bold text-gray-900">{s.value}</p>
                    <p className="text-green-500 text-xs mt-2">↑ {s.change}</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <s.icon size={22} className="text-[#316dff]" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Appointments table */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between p-5 border-b border-gray-100">
              <h3 className="font-bold text-gray-900 text-lg">Appointment</h3>
              <select className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm outline-none text-gray-600">
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
              </select>
            </div>
            <div className="flex flex-col px-3">
              {appointments.map((apt, i) => (
                <div key={i} className="flex items-center gap-4 py-3 border-b border-gray-50 last:border-0">
                  <img src={apt.img} alt={apt.patient} className="w-10 h-10 rounded-xl object-cover bg-gray-100 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-[#316dff] text-xs font-medium">{apt.id}</p>
                    <p className="font-semibold text-gray-800 truncate">{apt.patient}</p>
                  </div>
                  <div className="text-center shrink-0">
                    <p className="text-gray-500 text-xs">{apt.date}</p>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full font-medium mt-1 inline-block"
                      style={{ background: `${apt.typeColor}20`, color: apt.typeColor }}
                    >
                      {apt.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button className="w-8 h-8 rounded-full border border-green-200 flex items-center justify-center hover:bg-green-50">
                      <RiCheckLine size={16} className="text-green-500" />
                    </button>
                    <button className="w-8 h-8 rounded-full border border-red-200 flex items-center justify-center hover:bg-red-50">
                      <RiCloseLine size={16} className="text-red-500" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== ROW 2: 4 boxes — 2 cols x 2 rows ===== */}
        <div className="grid grid-cols-2 gap-5">

          {/* Box 1 — Weekly Overview */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Weekly Overview</h3>
                <p className="text-gray-400 text-xs">Mar 14 - Mar 21</p>
              </div>
              <div className="flex gap-3">
                {['Revenue', 'Appointments'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setChartTab(tab)}
                    className="text-sm font-medium pb-1 transition-colors"
                    style={{
                      color: chartTab === tab ? '#316dff' : '#9ca3af',
                      borderBottom: chartTab === tab ? '2px solid #316dff' : '2px solid transparent'
                    }}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-end gap-2 h-36 px-2">
              {chartData.map((val, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className="w-full rounded-t-lg"
                    style={{
                      height: `${(val / 70) * 100}%`,
                      background: i === 4 ? '#fbbf24' : 'linear-gradient(180deg, #316dff 0%, #0ea5e9 100%)',
                      opacity: i === 4 ? 1 : 0.7
                    }}
                  />
                  <span className="text-xs text-gray-400">{chartDays[i]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Box 2 — Upcoming Appointment */}
          <div className="relative rounded-2xl p-5 text-white overflow-hidden bg-[#316dff]">
            <h3 className="font-bold text-lg mb-4">Upcoming Appointment</h3>
            <div className="flex items-center gap-3 mb-3 pb-3 border-b border-white/20">
              <img src="/profile-01.jpg" alt="" className="w-12 h-12 rounded-xl object-cover border-2 border-white/30 shrink-0" />
              <div>
                <p className="text-white/70 text-xs">#Apt0001</p>
                <p className="font-bold">Adrian Marshall</p>
              </div>
              <div className="ml-auto text-right">
                <p className="text-white/80 text-sm">General visit</p>
                <p className="text-sm font-medium">Today, 10:45 AM</p>
              </div>
            </div>
            <p className="text-white/80 text-sm mb-4 flex items-center gap-1">
              📹 Video Appointment
            </p>
            <div className="flex gap-3">
              <button className="flex-1 py-2.5 bg-white/20 rounded-full text-white text-sm font-semibold hover:bg-white/30 transition">
                Chat Now
              </button>
              <button className="flex-1 py-2.5 bg-white rounded-full text-[#316dff] text-sm font-semibold hover:bg-white/90 transition">
                Start Appointment
              </button>
            </div>
            {/* decorative bg image */}
            <img src="/dashboard-circle-bg.png" alt="" className="absolute top-0 right-0 opacity-20 pointer-events-none" />
          </div>

          {/* Box 3 — Recent Patients */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-900 text-lg">Recent Patients</h3>
              <button className="text-[#316dff] text-sm hover:underline">View All</button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {recentPatients.map((p, i) => (
                <div key={i} className="border border-gray-100 rounded-xl p-3 hover:shadow-sm transition">
                  <img src={p.img} alt={p.name} className="w-14 h-14 rounded-full object-cover bg-gray-100 mb-2" />
                  <p className="font-bold text-gray-900 text-sm">{p.name}</p>
                  <p className="text-[#316dff] text-xs">Patient ID : {p.id}</p>
                  <p className="text-gray-400 text-xs mt-1">Last Appointment {p.lastAppointment}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Box 4 — Recent Invoices */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-900 text-lg">Recent Invoices</h3>
              <button className="text-[#316dff] text-sm hover:underline">View All</button>
            </div>
            <div className="flex flex-col gap-4">
              {recentInvoices.map((inv, i) => (
                <div key={i} className="flex items-center gap-3">
                  <img src={inv.img} alt={inv.name} className="w-9 h-9 rounded-full object-cover bg-gray-100 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-800 text-sm">{inv.name}</p>
                    <p className="text-gray-400 text-xs">{inv.id}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-gray-500 text-xs">Amount</p>
                    <p className="font-bold text-gray-800 text-sm">{inv.amount}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-gray-500 text-xs">Paid On</p>
                    <p className="text-gray-600 text-xs">{inv.paidOn}</p>
                  </div>
                  <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 shrink-0">
                    <RiEyeLine size={15} className="text-gray-500" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== ROW 3: Notifications (60%) + Clinics (40%) ===== */}
        <div className="grid grid-cols-[1fr_380px] gap-5 items-start">

          {/* Notifications */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-900 text-lg">Notifications</h3>
              <button className="text-[#316dff] text-sm hover:underline">View All</button>
            </div>
            <div className="flex flex-col gap-4">
              {notifications.map((n, i) => {
  const Icon = n.icon   // <-- yahan component ko variable mein nikalo
  return (
    <div key={i} className="flex items-start gap-3">
      <div
        className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 text-sm"
        style={{ background: `${n.color}20` }}
      >
        <Icon size={18} color={n.color} />
      </div>
      <div className="flex-1">
        <p className="text-gray-600 text-sm">
          {n.text}{" "}
          <span className={`font-bold ${n.isLink ? 'text-[#316dff]' : 'text-gray-900'}`}>
            {n.bold}
          </span>
          {n.extra && ` ${n.extra}`}
        </p>
        <p className="text-gray-400 text-xs mt-1">{n.time}</p>
      </div>
    </div>
  )
})}
            </div>
          </div>

          {/* Clinics & Availability */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <h3 className="font-bold text-gray-900 text-lg mb-4">Clinics & Availability</h3>
            <div className="flex flex-col gap-5">
              {clinics.map((c, i) => (
                <div key={i} className="border border-gray-100 rounded-xl p-3">
                  <div className="flex items-center gap-3 mb-3">
                    <img src={c.img} alt={c.name} className="w-12 h-12 rounded-xl object-cover bg-gray-100 shrink-0" />
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800 text-sm">{c.name}</p>
                    </div>
                    <p className="font-bold text-gray-900">{c.price}</p>
                  </div>
                  {c.schedule.map((s, j) => (
                    <div key={j} className="flex items-center justify-between text-sm text-gray-500 mt-1">
                      <span>{s.day}</span>
                      <span>{s.time}</span>
                      <button className="text-[#316dff] text-xs hover:underline">Change</button>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  )
}