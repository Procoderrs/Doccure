import { Routes, Route } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";
import DashboardPage from './Pages/DashboardPage';

export default function Dashboard() {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route index element={<DashboardPage />} />
      </Route>
    </Routes>
  );
}