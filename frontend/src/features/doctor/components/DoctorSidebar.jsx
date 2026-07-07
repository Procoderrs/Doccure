import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import {
  RiLayoutGridLine, RiFileListLine, RiCalendarLine,
  RiTimeLine, RiUserLine, RiHeartPulseLine,
  RiStarLine, RiFileTextLine,
  RiBankCardLine, RiMessage2Line, RiArticleLine,
  RiSettings4Line, RiShareLine, RiLockLine, RiLogoutBoxLine, 
  
} from "@remixicon/react"
import Breadcrumb from '../../../components/ui/Breadcrumb';

const doctor = {
  img: "/doctor-profile-img.jpg",
  banner: "/doctor-sidebar-bg.jpg",
  name: "Dr Edalin Hendry",
  degree: "BDS, MDS - Oral & Maxillofacial Surgery",
  specialty: "Dentist",
}

const navItems = [
  { label: "Dashboard",           path: "/doctor",                    icon: RiLayoutGridLine },
  { label: "Requests",            path: "/doctor/requests",           icon: RiFileListLine,   badge: 8 },
  { label: "Appointments",        path: "/doctor/appointments",       icon: RiCalendarLine },
  { label: "Available Timings",   path: "/doctor/available-timings",  icon: RiTimeLine },
  { label: "My Patients",         path: "/doctor/my-patients",        icon: RiUserLine },
  { label: "Specialties & Services", path: "/doctor/specialties-services", icon: RiHeartPulseLine },
  { label: "Reviews",             path: "/doctor/reviews",            icon: RiStarLine },
  { label: "Accounts",            path: "/doctor/accounts",           icon: RiBankCardLine },
  { label: "Invoices",            path: "/doctor/invoices",           icon: RiFileTextLine },
  { label: "Payout Settings",     path: "/doctor/payout-settings",    icon: RiBankCardLine },
  { label: "Message",             path: "/doctor/messages",           icon: RiMessage2Line,   badge: 7 },
  { label: "Blog",                path: "/doctor/blog",               icon: RiArticleLine },
  { label: "Profile Settings",    path: "/doctor/profile-settings",   icon: RiSettings4Line },
  { label: "Social Media",        path: "/doctor/social-media",       icon: RiShareLine },
  { label: "Change Password",     path: "/doctor/change-password",    icon: RiLockLine },
]

export default function DoctorSidebar() {
  
  return (

    <>
    
     
    

    
    <div className="w-[250px] ml-26 mt-12 rounded-2xl shrink-0 min-h-screen bg-white border-r border-gray-100 flex flex-col sticky top-0">

      {/* Doctor Profile Card */}
      <div className="relative">
        {/* Banner */}
        <div
          className="h-28 rounded-lg"
          style={{ background: "linear-gradient(135deg, #1a5cff 0%, #0ea5e9 100%)" }}
        >
          <img src={doctor.banner} alt="" className="w-full h-full object-cover rounded-lg" />
        </div>

        {/* Avatar */}
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-10">
          <div className="relative">
            <img
              src={doctor.img}
              alt={doctor.name}
              className="w-24 h-24 rounded-full border-4 border-white object-cover"
            />
            <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-white" />
          </div>
        </div>
      </div>

      {/* Doctor Info */}
      <div className="pt-12 pb-4 px-4 text-center border-b border-gray-100">
        <h3 className="font-bold text-[#0f172a] hover:text-[##1a5cff] text-xl">{doctor.name}</h3>
        <p className="text-[#575569] text-sm mt-1">{doctor.degree}</p>
        <span className="inline-flex items-center gap-1 text-xs text-gray-500 mt-2 border px-2 py-0.5 border-[#e2e8f0] rounded">
          <span className="w-2 h-2 rounded-full bg-blue-500 " />
          
          <span className="">{doctor.specialty}</span>
        </span>

        {/* Availability dropdown */}
        <div className="mt-5 text-left">
          <p className="text-xs text-gray-500 mb-1">
            Availability <span className="text-red-500">*</span>
          </p>
          <select className="w-full border border-[#e2e8f0] rounded-lg px-3 py-2 text-sm text-gray-700 outline-none">
            <option>I am Available Now</option>
            <option> Not  Available</option>
          </select>
        </div>
      </div>

      {/* Nav Links */}
      <nav className="flex-1 overflow-y-auto py-3 px-3">
        {navItems.map((item, i) => (
          <NavLink
            key={i}
            to={item.path}
            end={item.path === '/doctor'}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2.5 rounded-xl mb-1 text-[#475569] font-medium transition-colors duration-200 ${
                isActive
                  ? 'bg-[#316dff] text-white'
                  : 'text-[#475569] hover:bg-gray-50 hover:text-[#316dff]'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <item.icon size={18} className={isActive ? 'text-white' : 'text-[#475569]'} />
                <span className="flex-1">{item.label}</span>
                {item.badge && (
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-bold"
                    style={{
                      background: isActive ? 'rgba(255,255,255,0.3)' : '#fbbf24',
                      color: isActive ? 'white' : '#fff'
                    }}
                  >
                    {item.badge}
                  </span>
                )}
              </>
            )}
          </NavLink>
        ))}

        {/* Logout */}
        <button
          onClick={() => navigate('/login')}
          className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:bg-red-50 hover:text-red-500 transition-colors mt-1"
        >
          <RiLogoutBoxLine size={18} className="text-gray-400" />
          Logout
        </button>
      </nav>

    </div>
    </>
  )
}