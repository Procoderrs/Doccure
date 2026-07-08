import { NavLink } from 'react-router-dom'
import {
  RiLayoutGridLine, RiFileListLine, RiCalendarLine,
   RiStarSmileLine, RiUserSmileLine,RiWallet3Line,
  RiBankCardLine, RiMessage2Line, RiArticleLine,RiFileTextLine,
  RiSettings4Line, RiShareLine, RiLockLine, RiLogoutBoxLine, 
  
} from "@remixicon/react"

const patient = {
  img: "/profile-06.jpg",
  banner: "/patient-sidebar-bg.jpg",
  name: "Hendrita Hayes",
  gender:"Female",
  
  specialty: "Dentist",
}

const navItems = [
 
 { label: "Dashboard",         path: "/patient",                  icon: RiLayoutGridLine },
 { label: "My Appointments",   path: "/patient/appointments",     icon: RiCalendarLine },
 { label: "Favourites",        path: "/patient/favourites",       icon: RiStarSmileLine},
 { label: "Dependents",        path: "/patient/dependents",       icon:  RiUserSmileLine},
 { label: "Medical Records",   path: "/patient/medical-records",  icon:  RiArticleLine},
 { label: "Wallet",            path: "/patient/wallet",           icon: RiWallet3Line},
 { label: "Invoices",          path: "/patient/invoices",         icon: RiFileTextLine },
 { label: "Message",           path: "/patient/messages",         icon: RiMessage2Line,   badge: 7 },
 { label: "Vitals",            path: "/patient/vitals",           icon:  RiArticleLine},
 { label: "Profile Settings",  path: "/patient/profile-settings", icon: RiSettings4Line },
 { label: "Logout",            path: "/patient/logout",           icon: RiSettings4Line },


 ]

export default function PatientDashboard() {
  
  return (

    <>
    
     
    

    
    <div className="w-[250px] ml-26 mt-6 rounded-2xl shrink-0 min-h-screen bg-white border-r border-gray-100 flex flex-col sticky  top-24"  style={{ height: 'calc(100vh - 24px)' }}>

      {/* Doctor Profile Card */}
      <div className="relative">
        {/* Banner */}
        <div
          className="h-28 rounded-lg"
          style={{ background: "linear-gradient(135deg, #1a5cff 0%, #0ea5e9 100%)" }}
        >
          <img src={patient.banner} alt="" className="w-full h-full object-cover rounded-lg" />
        </div>

        {/* Avatar */}
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-10">
          <div className="relative">
            <img
              src={patient.img}
              alt={patient.name}
              className="w-24 h-24 rounded-full border-4 border-white object-cover"
            />
            <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-white" />
          </div>
        </div>
      </div>

      {/* Doctor Info */}
      <div className="pt-12 pb-4 px-4 text-center border-b border-gray-100">
        <h3 className="font-bold text-[#0f172a] hover:text-[##1a5cff] text-xl">{patient.name}</h3>
{/*         <p className="text-[#575569] text-sm mt-1">{patient.degree}</p>
 */}        <span className="inline-flex items-center gap-1 text-xs text-gray-500 mt-2 border px-2 py-0.5 border-[#e2e8f0] rounded">
          <span className="w-2 h-2 rounded-full bg-blue-500 " />
          
          {/* <span className="">{patient.specialty}</span> */}
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
      <nav className="flex-1 overflow-y-auto py-3 px-3 sidebar-scroll">
        {navItems.map((item, i) => (
          <NavLink
            key={i}
            to={item.path}
            end={item.path === '/patient'}
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