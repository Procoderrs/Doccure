import { Routes, Route, useLocation } from 'react-router-dom'
import DoctorSidebar from './components/DoctorSidebar'
import Overview from './pages/Overview'
import Requests from './pages/Requests'
import Appointments from './pages/Appointments'
import AvailableTimings from './pages/AvailableTimings'
import MyPatients from './pages/MyPatients'
import SpecialtiesServices from './pages/SpecialitiesServices'
import Reviews from './pages/Reviews'
import Accounts from './pages/Accounts'
import Invoices from './pages/Invoices'
import PayoutSettings from './pages/PayoutSettings'
import Messages from './pages/Messages'
import ProfileSettings from './pages/ProfileSettings'
import SocialMedia from './pages/SocialMedia'
import ChangePassword from './pages/ChangePassword'

export default function DoctorDashboard() {
  const location = useLocation()
  const hideSidebar = location.pathname === '/doctor/messages'

  return (
    <div className="min-h-screen bg-gray-50 font-user">
      <div className="flex">

        {/* Left Sidebar — messages page pe hide */}
        {!hideSidebar && <DoctorSidebar />}

        {/* Right Content */}
        <div className="flex-1 min-w-0">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/requests" element={<Requests />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/available-timings" element={<AvailableTimings />} />
            <Route path="/my-patients" element={<MyPatients />} />
            <Route path="/specialties-services" element={<SpecialtiesServices />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/payout-settings" element={<PayoutSettings />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/profile-settings" element={<ProfileSettings />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/social-media" element={<SocialMedia />} />
          </Routes>
        </div>

      </div>
    </div>
  )
}