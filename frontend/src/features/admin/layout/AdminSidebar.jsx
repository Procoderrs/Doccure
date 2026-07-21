import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Dashboard", path: "/admin", icon: "ri-dashboard-line" },
  { label: "Doctors", path: "/admin/doctors", icon: "ri-stethoscope-line" },
  { label: "Patients", path: "/admin/patients", icon: "ri-user-heart-line" },
  { label: "Appointments", path: "/admin/appointments", icon: "ri-calendar-check-line" },
  { label: "Hospitals", path: "/admin/hospitals", icon: "ri-hospital-line" },
  { label: "Pharmacy", path: "/admin/pharmacy", icon: "ri-capsule-line" },
  { label: "Revenue", path: "/admin/revenue", icon: "ri-money-dollar-circle-line" },
];

export default function AdminSidebar() {
  const { pathname } = useLocation();

  return (
    <aside className="hidden w-60 shrink-0 border-r border-slate-100 bg-white px-4 py-6 lg:block">
      <div className="mb-8 flex items-center gap-2 px-2">
        <span
          className="flex h-8 w-8 items-center justify-center rounded-lg text-white"
          style={{ backgroundColor: "#17A398" }}
        >
          <i className="ri-heart-pulse-line" />
        </span>
        <span className="text-lg font-semibold text-slate-800">Doccure Admin</span>
      </div>

      <nav className="flex flex-col gap-1">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors"
              style={{
                backgroundColor: isActive ? "#E6F6F4" : "transparent",
                color: isActive ? "#17A398" : "#5B6B6A",
              }}
            >
              <i className={item.icon} />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}