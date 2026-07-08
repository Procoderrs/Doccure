import { Routes, Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import DoctorSidebar from './components/DoctorSidebar'
import Breadcrumb from '../../components/ui/Breadcrumb'

import Overview from './pages/Overview'
import Requests from './pages/Requests'
import Appointments from './pages/Appointments'
import AvailableTimings from './pages/AvailableTimings'
import MyPatients from './pages/MyPatients'
import Reviews from './pages/Reviews'
import Accounts from './pages/Accounts'
import Invoices from './pages/Invoices'
import PayoutSettings from './pages/PayoutSettings'
import ProfileSettings from './pages/ProfileSettings'
import SocialMedia from './pages/SocialMedia'

// Route se title aur parent map karo
const routeMeta = {
  '/doctor':                    { title: 'Dashboard',          parent: 'Doctor' },
  '/doctor/requests':           { title: 'Requests',           parent: 'Doctor' },
  '/doctor/appointments':       { title: 'Appointments',       parent: 'Doctor' },
  '/doctor/available-timings':  { title: 'Available Timings',  parent: 'Doctor' },
  '/doctor/my-patients':        { title: 'My Patients',        parent: 'Doctor' },
  '/doctor/reviews':            { title: 'Reviews',            parent: 'Doctor' },
  '/doctor/accounts':           { title: 'Accounts',           parent: 'Doctor' },
  '/doctor/invoices':           { title: 'Invoices',           parent: 'Doctor' },
  '/doctor/payout-settings':    { title: 'Payout Settings',    parent: 'Doctor' },
  '/doctor/profile-settings':   { title: 'Profile Settings',   parent: 'Doctor' },
  '/doctor/social-media':       { title: 'Social Media',       parent: 'Doctor' },
}

export default function DoctorDashboard() {
  const location = useLocation()
  const meta = routeMeta[location.pathname] || { title: 'Dashboard', parent: 'Doctor' }

  return (
    <div className="min-h-screen bg-gray-50 font-user">

      {/* ✅ Breadcrumb — full width, sidebar se bahar */}
      <Breadcrumb title={meta.title} parent={meta.parent} />

      {/* Sidebar + Content */}
      <div className="flex">
        <DoctorSidebar />
        <div className="flex-1 min-w-0">
          <Routes>
            <Route path="/"                   element={<Overview />} />
            <Route path="/requests"           element={<Requests />} />
            <Route path="/appointments"       element={<Appointments />} />
            <Route path="/available-timings"  element={<AvailableTimings />} />
            <Route path="/my-patients"        element={<MyPatients />} />
            <Route path="/reviews"            element={<Reviews />} />
            <Route path="/accounts"           element={<Accounts />} />
            <Route path="/invoices"           element={<Invoices />} />
            <Route path="/payout-settings"    element={<PayoutSettings />} />
            <Route path="/profile-settings"   element={<ProfileSettings />} />
            <Route path="/social-media"       element={<SocialMedia />} />
          </Routes>
        </div>
      </div>

    </div>
  )
}