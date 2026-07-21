import { Routes, Route } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout";

import HomePage from "./features/home/HomePage";
import Signup from "./features/auth/Signup";
import DoctorListing from "./features/doctor/pages/DoctorListing";
import BookingPage from "./features/booking";
import DoctorDashboard from './features/doctor/index'
import PatientDashboard from "./features/patient";
import Booking from './features/patient/pages/Booking'

import Dashboard from './features/admin/Dashboard/index.jsx'
import AdminDoctors from "./features/admin/Doctors/index";
import  Patients from './features/admin/Patients/index.jsx'
import AdminAppointments from "./features/admin/Appointments/index";
import AdminHospitals from "./features/admin/Hospitals/index";
import PatientPharmacy from "./features/Pharmacy/index.jsx";
import AdminPharmacy from "./features/admin/Pharmacy/index";
import AdminRevenue from "./features/admin/Revenue/index";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/doctors" element={<DoctorListing />} />
        <Route path="/doctor/*" element={<DoctorDashboard />} />
        <Route path="/patient/*" element={<PatientDashboard />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/doctor-booking" element={<BookingPage />} />
        <Route path="/pharmacy/*" element={<PatientPharmacy />} />


      </Route>

      <Route path="/admin/*" element={<Dashboard />} />
      <Route path="/admin/doctors/*" element={<AdminDoctors />} />
      <Route path="/admin/patients/*" element={<Patients />} />
      <Route path="/admin/appointments/*" element={<AdminAppointments />} />
      <Route path="/admin/hospitals/*" element={<AdminHospitals />} />
      <Route path="/admin/pharmacy/*" element={<AdminPharmacy />} />
      <Route path="/admin/revenue/*" element={<AdminRevenue />} />

    </Routes>
  );
}

export default App;