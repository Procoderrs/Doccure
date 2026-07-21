import { Outlet, useLocation, Link } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";

// Turns "/admin/pharmacy" into ["Admin", "Pharmacy"] for the breadcrumb.
function useBreadcrumb() {
  const { pathname } = useLocation();
  const segments = pathname.split("/").filter(Boolean);

  return segments.map((segment, index) => ({
    label: segment.charAt(0).toUpperCase() + segment.slice(1),
    path: "/" + segments.slice(0, index + 1).join("/"),
  }));
}

export default function AdminLayout() {
  const crumbs = useBreadcrumb();

  return (
    <div className="flex min-h-screen bg-[#F6F8F7]">
      <AdminSidebar />

      <div className="flex flex-1 flex-col">
        <header className="flex items-center justify-between border-b border-slate-100 bg-white px-6 py-4">
          <nav className="flex items-center gap-1 text-sm text-slate-500" aria-label="Breadcrumb">
            {crumbs.map((crumb, index) => (
              <span key={crumb.path} className="flex items-center gap-1">
                {index > 0 && <i className="ri-arrow-right-s-line text-slate-300" />}
                <Link
                  to={crumb.path}
                  className={index === crumbs.length - 1 ? "font-medium text-slate-700" : "hover:text-slate-700"}
                >
                  {crumb.label}
                </Link>
              </span>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full text-slate-500 hover:bg-slate-50"
              aria-label="Notifications"
            >
              <i className="ri-notification-3-line" />
            </button>
            <div
              className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold text-white"
              style={{ backgroundColor: "#17A398" }}
            >
              A
            </div>
          </div>
        </header>

        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}