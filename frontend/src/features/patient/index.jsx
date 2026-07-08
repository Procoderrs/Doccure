import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Breadcrumb from "../../components/ui/Breadcrumb";
import PatientSideBar from './components/PatientSidebar'
import Overview from "./pages/Overview";
import Appointments from "./pages/Myappointments";
import Favourites from "./pages/Favourites";
import Dependents from "./pages/Dependents";
import Medicalrecords from "./pages/Medicalrecords";
import Wallet from "./pages/Wallet";
import Invoices from "./pages/Invoices";
import Message from "./pages/Message";
import Vitals from "./pages/Vitals";
import ProfileSettings from "./pages/Settings";

// Route se title aur parent map karo
const routeMeta = {
	"/patient": { title: "Dashboard", parent: "Patient" },
	"/patient/My-appointments": { title: "Appointments", parent: "Patient" },
	"/patient/Favourites": { title: "Favourites", parent: "Patient" },
	"/patient/Dependents": { title: "Dependents", parent: "Patient" },
	"/patient/Medical-records": { title: "Medical-Records", parent: "Patient" },
	"/patient/Wallet": { title: "Wallet", parent: "Patient" },
	"/patient/invoices": { title: "Invoices", parent: "Patient" },
	"/patient/Message": { title: "Message", parent: "Patient" },
	"/patient/Vitals": { title: "Vitals", parent: "Patient" },
	"/patient/profile-settings": { title: "Profile Settings", parent: "Patient" },
};

export default function PatientDashboard() {
	const location = useLocation();
	const meta = routeMeta[location.pathname] || {
		title: "Dashboard",
		parent: "Patient",
	};

	return (
		<div className="min-h-screen bg-gray-50 font-user">
			{/* ✅ Breadcrumb — full width, sidebar se bahar */}
			<Breadcrumb title={meta.title} parent={meta.parent} />

			{/* Sidebar + Content */}
			<div className="flex">
				<PatientSideBar />
				<div className="flex-1 min-w-0">
					<Routes>
						<Route path="/" element={<Overview />} />
						<Route path="/appointments" element={<Appointments />} />
						<Route path="/favourites" element={<Favourites />} />
            <Route path="/dependents" element={<Dependents />} />
            <Route path="/Medical-records" element={<Medicalrecords />} />
            <Route path="/Wallet" element={<Wallet />} />
						<Route path="/invoices" element={<Invoices />} />
					  <Route path="/Message" element={<Message/>} />
            <Route path="/Vitals" element={<Vitals />} />
						<Route path="/profile-settings" element={<ProfileSettings />} />
					</Routes>
				</div>
			</div>
		</div>
	);
}
