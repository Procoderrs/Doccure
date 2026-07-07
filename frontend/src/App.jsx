import { Routes, Route } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout";

import HomePage from "./features/home/HomePage";
import Signup from "./features/auth/Signup";
import DoctorListing from "./features/doctor/pages/DoctorListing";
import BookingPage from "./features/booking";
import DoctorDashboard from './features/doctor/index'
function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/doctors" element={<DoctorListing />} />
        <Route path="/doctor/*" element={<DoctorDashboard />} />

        <Route path="/booking" element={<BookingPage />} />
      </Route>
    </Routes>
  );
}

export default App;