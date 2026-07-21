export const hospitalsData = [
  {
    id: "hosp-1",
    name: "Wellness Path Chiropractic",
    logo: "/hospitals/wellness-path.jpg",
    phone: "+1 418 555 0192",
    email: "contact@wellnesspath.com",
    city: "Austin",
    address: "418 Patton Lane, Garner, NC 27529, FL 33169",
    mapLink: "https://maps.google.com/?q=418+Patton+Lane+Garner",
    departments: ["Psychology", "Chiropractic", "Cardiology"],
    facilities: ["Parking", "Wheelchair Access", "Pharmacy", "Lab"],
    totalDoctors: 12,
    totalAppointments: 340,
    status: "active",
    doctorsLinked: [
      { name: "Dr. Michael Brown", specialty: "Psychologist" },
      { name: "Dr. Alan Reyes", specialty: "Chiropractor" },
    ],
    appointments: [
      { id: "AP1001", patient: "Hendrita Hayes", doctor: "Dr. Michael Brown", date: "21 Jul 2026", status: "Confirmed" },
      { id: "AP1002", patient: "John Carter", doctor: "Dr. Michael Brown", date: "22 Jul 2026", status: "Pending" },
    ],
    reviews: [
      { patient: "Hendrita Hayes", rating: 5, comment: "Clean facility and friendly staff.", date: "20 Jul 2026" },
    ],
  },
  {
    id: "hosp-2",
    name: "AllCare Family Medicine",
    logo: "/hospitals/allcare.jpg",
    phone: "+1 229 555 0143",
    email: "info@allcarefamily.com",
    city: "Valdosta",
    address: "3343 Private Lane, Valdosta",
    mapLink: "https://maps.google.com/?q=3343+Private+Lane+Valdosta",
    departments: ["Cardiology", "General Medicine"],
    facilities: ["Parking", "Emergency Care"],
    totalDoctors: 8,
    totalAppointments: 210,
    status: "active",
    doctorsLinked: [
      { name: "Dr. Edalin Hendry", specialty: "Cardiologist" },
    ],
    appointments: [
      { id: "AP0987", patient: "Hendrita Hayes", doctor: "Dr. Edalin Hendry", date: "10 Jun 2026", status: "Completed" },
    ],
    reviews: [],
  },
  {
    id: "hosp-3",
    name: "Vitalplus Clinic",
    logo: "/hospitals/vitalplus.jpg",
    phone: "+1 305 555 0177",
    email: "support@vitalplus.com",
    city: "Miami",
    address: "4223 Pleasant Hill Road, Miami, FL 33169",
    mapLink: "https://maps.google.com/?q=4223+Pleasant+Hill+Road+Miami",
    departments: ["Oncology", "Radiology"],
    facilities: ["Lab", "Pharmacy"],
    totalDoctors: 5,
    totalAppointments: 95,
    status: "blocked",
    doctorsLinked: [
      { name: "Dr. Shanta Nesmith", specialty: "Oncologist" },
    ],
    appointments: [
      { id: "AP0902", patient: "Laura Stewart", doctor: "Dr. Shanta Nesmith", date: "15 Jul 2026", status: "Cancelled" },
    ],
    reviews: [
      { patient: "Laura Stewart", rating: 3, comment: "Long waiting time.", date: "15 Jul 2026" },
    ],
  },
]

export const cities = ["All Cities", "Austin", "Valdosta", "Miami"]
export const departmentsList = ["All Departments", "Psychology", "Chiropractic", "Cardiology", "General Medicine", "Oncology", "Radiology"]
export const statuses = ["All Status", "active", "blocked"]